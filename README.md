# Vicasa Landing

Marketing site for Vicasa — премиальный ремонт квартир и домов в Ташкенте.
Built with Nuxt 3 + Tailwind CSS. Bilingual (RU / UZ).

## Setup

```bash
npm install
cp .env.example .env   # then fill in the Telegram credentials
```

### Environment

Lead forms deliver to Telegram. Create a bot via [@BotFather](https://t.me/BotFather)
and set the following in `.env` (see `.env.example`):

| Variable | Description |
|----------|-------------|
| `NUXT_TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `NUXT_TELEGRAM_CHAT_ID`   | Chat/group id that receives leads |
| `NUXT_PUBLIC_API_BASE`    | Optional external CMS base URL. Empty = built-in fallback content |
| `NUXT_PUBLIC_SITE_URL`    | Canonical site origin (default `https://vicasa.uz`) |

## Development

```bash
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview the production build
```
