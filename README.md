# 🚀 JobTrackr – Real-Time Job Tracking SaaS

A **real-time** job tracking tool for developers actively job hunting. Manage applications, track job stages, upload resumes, and get AI-powered insights—all in a clean, dev-friendly dashboard.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, TailwindCSS, shadcn/ui
- **Backend:** Appwrite (Auth, Database, Storage, Realtime)
- **Database:** Appwrite Database
- **Auth:** Appwrite Auth (OAuth, Email)
- **Storage:** Appwrite Storage (for resume PDFs)
- **Real-Time:** Appwrite Realtime API
- **Optional AI:** OpenAI (for resume insights)
- **Deployment:** Vercel (frontend), Appwrite Cloud/self-hosted (backend)

---

## 📅 MVP Roadmap (4 Weeks)

### ✅ Week 1 – Setup & Authentication

- [x] Initialize Next.js 14 project with TypeScript, TailwindCSS, and shadcn/ui  
- [x] Set up **Appwrite project** auth
- [x] Implement **Appwrite Auth** (Login with google)  
- [ ] Set up **Appwrite project** (Database, Storage)  
- [ ] Create **protected routes** for dashboard access  
- [ ] Design base **dashboard layout**  

---

### ✅ Week 2 – Core Job Tracking Features

- [ ] Design **Job Card UI** (title, company, location, etc.)  
- [ ] Create **jobs** collection in Appwrite DB  
- [ ] Implement **Create Job Form** with validation  
- [ ] Connect form to Appwrite backend (create job)  
- [ ] Fetch and display jobs grouped by **stages**  
- [ ] Implement **drag-and-drop** (DnD Kit) for job stage updates  

---

### ✅ Week 3 – Real-Time Updates & Resume Uploads

- [ ] Enable **Appwrite Realtime** for live job updates  
- [ ] Implement **real-time sync** across multiple tabs/sessions  
- [ ] Add **resume upload (PDF)** using Appwrite Storage  
- [ ] Store and retrieve **resume URLs** in job records  
- [ ] **(Optional)** AI-powered resume parsing via OpenAI  

---

### ✅ Week 4 – Polish & Deployment

- [ ] Implement **search & filters** (by tag, date, job stage)  
- [ ] Optimize **mobile responsiveness**  
- [ ] Deploy **frontend to Vercel**  
- [ ] Deploy **Appwrite backend** (cloud or self-hosted)  
- [ ] Add a **landing page** for marketing  
- [ ] **(Optional)** Stripe integration for premium features  
- [ ] Add **README badges, screenshots, and demo link**  

---

## 🔥 Real-Time Features (Powered by Appwrite)

| Feature                   | Real-Time? | Description                            |
| ------------------------- | ---------- | -------------------------------------- |
| Drag-and-drop job updates | ✅ Yes      | Reflects instantly across all sessions |
| New job entry creation    | ✅ Yes      | Instantly syncs for logged-in users    |
| Resume upload & display   | ✅ Yes      | Auto-refreshes once upload completes   |
| AI-generated job insights | ✅ Yes      | Updates UI when processing is done     |

```ts
// Example: Listen for real-time job updates
client.subscribe("databases.jobs.documents", (response) => {
  console.log("Job updated!", response.payload);
});
```

---

## 💡 Future Add-ons (Post-MVP)

- **Email follow-up reminders** using SendGrid  
- **Chrome Extension** for 1-click job saving  
- **Analytics Dashboard** (applications per week, top companies, etc.)  
- **Export to CSV** for job tracking history  
- **Team collaboration** (invite others to view your job board)  

---

## 📷 Demo

Coming soon...

---

## 🙌 Contributing

Currently a solo project, but open to collaborations. Fork and PRs welcome!

---

## 📜 License

MIT

