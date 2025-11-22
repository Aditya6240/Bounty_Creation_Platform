🚀 Bounty Creation Platform – Extended 6-Step Wizard

A production-style bounty creation flow built using React, Tailwind CSS & Context API, fully aligned with assignment goals — plus 3 bonus steps implemented proactively to exceed expectations.

👨‍💻 Developer – Aditya Jojare

📍 India | 📧 adityajojare@gmail.com

🎯 Role: Frontend Developer – Dropchain Assignment

📌 Project Overview

This platform is built for the Impact Miner bounty creation workflow.
It implements the required three steps from the assignment:
1️⃣ Basic Details
2️⃣ Rewards & Timeline
3️⃣ Backer Information

🟦 Along with three additional steps as a bonus:
4️⃣ Config – Submission settings
5️⃣ Criteria – Weighted evaluation rules
6️⃣ Microtasks – Optional task breakdown

This shows my passion to go beyond scope, think like a product engineer, and deliver scalable solutions.

The UI/UX is crafted from the Figma reference, with fully validated forms, persistent data, smooth navigation, and final JSON payload generation.

🧭 Navigation Flow
Step	Module	Status
1	Brief – Basic Bounty Details	✅
2	Rewards – Budget & Timeline	✅
3	Backer – Sponsor Details	✅
4	Config – Submission Policies	⭐ Bonus
5	Criteria – Weighted Scoring	⭐ Bonus
6	Microtasks – Task Breakdown	⭐ Bonus
✨ Key Features

✔ Multi-step wizard with persistent state
✔ Dynamic validation with real-time feedback
✔ Sidebar navigation with step lock/unlock logic
✔ Conditional rendering (Location, Certification, Backer fields)
✔ Dynamic lists with Add/Remove options
✔ Simulated server API with loading UI
✔ Final JSON payload display + confirmation screen
✔ Fully responsive clean UI
✔ Advanced reusable UI architecture

🛠 Tech Stack
Category	Tools
Framework	React 18+
State Management	React Context API + Custom Hooks
Styling	Tailwind CSS
Build Tools	Vite / npm
Language	JavaScript (ES6+)

No heavy UI libraries → lightweight & optimized bundle

🗂 Code Structure
src/
 ├── components/
 │   ├── common/
 │   ├── layout/
 │   └── steps/
 ├── context/
 ├── screens/
 ├── utils/
 ├── App.jsx
 └── index.jsx


✔ Reusable
✔ Modular
✔ Scalable
✔ Assignment-friendly structure

🧪 Validation Rules
Field Type	Validation Rule
Title	Required, max 40 char
Reward	Required, > 0
Timeline	Valid dates required
Conditions	Shown only if toggled
Weight	Total ≤ 100%
SDGs	Multi-select validation

Navigation blocked until inputs are valid 🔒

📊 Final Payload Format

Outputs a fully structured JSON:
(Example shown below)

{
 "title": "Bounty Title",
 "description": "Bounty Description...",
 "type": "Development",
 "dominant_core": "Social",
 "mode": "digital",
 "location": "",
 "reward": {
   "currency": "USD",
   "amount": 500,
   "winners": 1
 },
 "timeline": {
   "expiration_date": "2025-12-31",
   "estimated_completion": {
     "days": 2,
     "hours": 4,
     "minutes": 0
   }
 },
 "hasImpactCertificate": true,
 "impactBriefMessage": "Impact Brief",
 "sdgs": ["Climate Action"],
 "has_backer": true,
 "backer": {
   "name": "Sponsor",
   "logo": "https://example.com/logo.png",
   "message": "Thanks!"
 },
 "config": { ... },
 "criteria": [ ... ],
 "microtasks": [ ... ],
 "terms_accepted": true
}

⚙️ How to Run Locally
npm install
npm run dev


App will run on:
➡ http://localhost:5173

🚢 Deployment

🔗 (Live link will be added after deployment to Vercel)

I can deploy immediately once code is pushed.

🧪 Tested On

✔ Chrome / Edge
✔ Firefox
✔ Safari
✔ Mobile responsiveness

Testing includes validation checks, navigation, state persistence, and payload confirmation.

🔥 Code Quality Standards Followed

DRY Principles

Reusable Components

Clean Naming Conventions

Error Handling

Loading State UX

Component-based separation

Performance Conscious Rendering

❤️ Personal Note to Reviewer

Thank you for reviewing this project and providing this opportunity. 🙌
I first designed and implemented everything independently based on my understanding.
Wherever I got stuck — I used AI tools wisely to debug, speed up development, and write optimal code, as encouraged in assignment instructions.

✨ What I promise:

With my drive + AI-assisted workflow, I can build quality features faster and always deliver within deadlines.
I am ready to contribute, learn, and grow with Dropchain — please consider my application. 🙏

👨‍💻 Created with Love & Ownership by

Aditya Jojare
📧 adityajojare@gmail.com
📱 Phone: +91 8999645026
