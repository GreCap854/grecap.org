
# GRECAP — Website v3 (Ready for Vercel)

Next.js 14 + Tailwind with fixed `next.config.js`, explicit `vercel.json`, and Node engines.

## Deploy on Vercel (GitHub → Vercel)
1. Create/Use a GitHub repo and upload the **contents** of this folder (root must contain `package.json`, `app/`, `public/`).
2. In Vercel: **Add New → Project → Import Git Repository**, select the repo, click **Deploy**.
   - Framework: Next.js (auto)
   - Build Command: `next build`
   - Output Directory: `.next`
   - Node: 18 or 20 (auto from `engines`)

## Deploy with Vercel CLI (no Git)
```bash
npm i -g vercel
vercel --prod
```
Choose your scope (Personal/Team) when prompted.

## Contact Form
Replace `yourformid` in the Formspree action URL inside `app/page.tsx` with your actual Formspree ID.

## Donations
Replace the GiveButter link with your live campaign URL.

© GRECAP.
