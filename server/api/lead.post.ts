import { defineEventHandler, readBody, createError } from 'h3'

// Receives a lead from the site forms and forwards it to Telegram.
// Token and chat id live in runtimeConfig (env), never in the client bundle.
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const token = config.telegramBotToken
  const chatId = config.telegramChatId

  const body = await readBody<{
    name?: string
    phone?: string
    source?: string
    notes?: string
    calculatorData?: {
      area?: number
      type?: string
      level?: string
      estimatedCost?: number
    }
  }>(event)

  const name = (body?.name || '').toString().trim()
  const phone = (body?.phone || '').toString().trim()

  if (!name || !phone) {
    throw createError({ statusCode: 400, statusMessage: 'name and phone are required' })
  }

  if (!token || !chatId) {
    // Not configured yet — fail loudly in server logs but return a clear error.
    console.error('[lead] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not set')
    throw createError({ statusCode: 503, statusMessage: 'Lead delivery is not configured' })
  }

  const lines = [
    '🔔 <b>Новая заявка с сайта Vicasa</b>',
    `👤 <b>Имя:</b> ${escapeHtml(name)}`,
    `📞 <b>Телефон:</b> ${escapeHtml(phone)}`,
    body?.source ? `🔗 <b>Источник:</b> ${escapeHtml(body.source)}` : '',
  ]

  if (body?.calculatorData) {
    const c = body.calculatorData
    lines.push('— — —')
    if (c.area != null) lines.push(`📐 <b>Площадь:</b> ${escapeHtml(String(c.area))} м²`)
    if (c.type) lines.push(`🏠 <b>Тип:</b> ${escapeHtml(String(c.type))}`)
    if (c.level) lines.push(`⭐ <b>Уровень:</b> ${escapeHtml(String(c.level))}`)
    if (c.estimatedCost != null) lines.push(`💰 <b>Смета:</b> ${escapeHtml(c.estimatedCost.toLocaleString('ru-RU'))} сум`)
  }

  if (body?.notes) lines.push(`📝 ${escapeHtml(body.notes)}`)

  const text = lines.filter(Boolean).join('\n')

  try {
    await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      body: {
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      },
    })
  } catch (e) {
    console.error('[lead] failed to deliver to Telegram:', e)
    throw createError({ statusCode: 502, statusMessage: 'Failed to deliver lead' })
  }

  return { ok: true }
})

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
