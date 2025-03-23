# 💼 Dev Job Tracker SaaS

A smart job tracking tool for developers who are actively job hunting. Manage job applications, upload resumes, track stages (Applied, Interviewing, Offer, Rejected), and get reminders—all in one clean, dev-friendly dashboard.

---

## 🚀 Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, TailwindCSS, shadcn/ui
- **Backend:** Node.js + Express or Fastify (Dockerized)
- **Database:** PostgreSQL + Drizzle ORM
- **Auth:** Clerk or Auth.js (OAuth/email)
- **Storage:** UploadThing or Cloudinary (for resume PDFs)
- **Optional AI:** OpenAI (for resume analysis/suggestions)
- **Deployment:** Vercel (frontend), Railway/Fly.io (backend + db)

---

## 📅 MVP Roadmap (4 Weeks)

### ✅ Week 1 – Setup & Auth

- [ ] Initialize monorepo or folder structure: `/frontend`, `/backend`
- [ ] Set up Next.js 14 with TypeScript + Tailwind + shadcn
- [ ] Dockerize backend (Node.js) and connect to PostgreSQL
- [ ] Add Drizzle ORM config and first `users` table
- [ ] Implement Clerk/Auth.js auth (sign up, login, protected routes)
- [ ] Create base dashboard layout

---

### ✅ Week 2 – Core Job Tracker Features

- [ ] Design Job Card UI with fields (title, company, location, etc.)
- [ ] Add `jobs` table to PostgreSQL
- [ ] Implement Create Job form (with validation)
- [ ] Connect frontend form to backend API (create job)
- [ ] Fetch and display jobs in dashboard grouped by stage
- [ ] Add drag-and-drop support (DnD Kit)

---

### ✅ Week 3 – Resume Upload + Smart Insights

- [ ] Add resume upload (PDFs via UploadThing or Cloudinary)
- [ ] Store resume URL in job record
- [ ] Parse resume (optional: basic AI/NLP tagging with OpenAI)
- [ ] Add "AI Summary" feature using OpenAI (optional)
- [ ] Add notes/reminders to each job card

---

### ✅ Week 4 – Polish & Launch

- [ ] Add filters (e.g., by tag, date, job stage)
- [ ] Add search bar
- [ ] Mobile responsiveness polish
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Railway or Fly.io
- [ ] Connect DB and test full flow end-to-end
- [ ] Add landing page/marketing site (Next.js static page)
- [ ] (Optional) Setup Stripe for premium features
- [ ] Add README badges, screenshots, demo link

---

## 💡 Future Add-ons (Post-MVP Ideas)

- Chrome Extension for 1-click job saving
- Email follow-up reminders with SendGrid
- Resume builder/editor tool
- Analytics dashboard (apps per week, top companies, etc.)
- Export data as CSV
- Team plan for batch uploads

---

## 📷 Demo

Coming soon...

---

## 🙌 Contributing

Solo project for now, but open to collabs later. If you’re interested in contributing, feel free to fork and raise a PR!

---

## 📜 License

MIT
