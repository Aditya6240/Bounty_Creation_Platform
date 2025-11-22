
---

```markdown
# 🚀 Bounty Creation Platform – Extended 6-Step Wizard

A production-style bounty creation flow built using **React, Tailwind CSS & Context API**, fully aligned with assignment goals — plus **3 bonus steps** implemented proactively to exceed expectations.

---

### 👨‍💻 Developer – **Aditya Jojare**
📍 India  
📧 **adityajojare@gmail.com**  
📱 **+91 8999645026**  
🎯 Role: Frontend Developer – Dropchain Assignment  

---

## 📌 Project Overview

This platform is built for the **Impact Miner bounty creation workflow**.

It implements the **three required steps from the assignment**:
1. Basic Details  
2. Rewards & Timeline  
3. Backer Information  

🟦 Along with **three additional steps as a bonus**:
4. Config – Submission settings  
5. Criteria – Weighted evaluation rules  
6. Microtasks – Optional task breakdown  

> This reflects my initiative to go beyond expectations, think like a product engineer, and deliver scalable results.

The UI/UX is built strictly based on the provided Figma design — with complete validation, persistent state management, dynamic navigation, and final JSON payload generation.

---

## 🧭 Navigation Flow

| Step | Module | Status |
|------|--------|:-----:|
| 1 | Brief – Basic Bounty Details | ✅ |
| 2 | Rewards – Budget & Timeline | ✅ |
| 3 | Backer – Sponsor Details | ✅ |
| 4 | Config – Submission Policies | ⭐ Bonus |
| 5 | Criteria – Weighted Scoring | ⭐ Bonus |
| 6 | Microtasks – Task Breakdown | ⭐ Bonus |

---

## ✨ Key Features

✔ Multi-step wizard with persistent state  
✔ Dynamic validation with real-time feedback  
✔ Sidebar navigation with step lock/unlock logic  
✔ Conditional rendering:
   - Location (only if **Physical** mode)
   - Impact Certificate section
   - Backer fields  
✔ Add/Remove dynamic lists (Criteria & Microtasks)  
✔ Loading feedback on submit (simulated API call)  
✔ Confirmation + Result screen with JSON preview  
✔ Fully responsive UI  
✔ Reusable & clean UI component architecture  

---

## 🛠 Tech Stack

| Category | Tools |
|---------|------|
| Framework | React 18+ |
| Styling | Tailwind CSS |
| State Management | React Context API + Custom Hooks |
| Build Tool | Vite / npm |
| Language | JavaScript (ES6+) |

**Zero bulky UI libraries → lightweight & optimized 🔥**

---

## 🗂 Code Structure

```

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

````

✔ Reusable  
✔ Modular  
✔ Scalable  
✔ Assignment-friendly structure  

---

## 🧪 Validation Rules

| Field | Rule |
|------|-----|
| Title | Required, max 40 characters |
| Reward Amount | Required, > 0 |
| Timeline | Required & valid |
| Impact Certificate | Extra fields only if toggled |
| Backer Fields | Required only if toggled |
| Location | Required **if** Mode = Physical |
| Weight | Total must ≤ 100% |
| SDGs | Multi-select, validated |

🚫 User cannot proceed until current step is valid

---

## 📊 Final Payload Example

```json
{
  "title": "Demo",
  "description": "DemoDemoDemoDemoDemoDemo",
  "projectTitle": "Demo",
  "type": "Design",
  "dominant_core": "Earth",
  "mode": "physical",
  "location": "Aurangabad",
  "reward": {
    "currency": "INR",
    "amount": 5000,
    "winners": 2
  },
  "timeline": {
    "expiration_date": "2025-12-11T00:00:00.000Z",
    "estimated_completion": {
      "days": 20,
      "hours": 0,
      "minutes": 0
    }
  },
  "hasImpactCertificate": false,
  "sdgs": [
    "Zero Hunger"
  ],
  "has_backer": false,
  "config": {
    "autoApproval": false,
    "multipleSubmissions": true,
    "publicLeaderboard": false,
    "submissionFormat": "URL Link"
  },
  "criteria": [
    {
      "name": "DemoDemoDemo",
      "description": "DemoDemo",
      "weight": 15
    }
  ],
  "hasMicrotasks": false,
  "terms_accepted": true
}
````

---

## ⚙️ Run Locally

```sh
npm install
npm run dev
```

Runs on: → [http://localhost:5173](http://localhost:5173)

---

## 🚢 Deployment

🔗(https://bounty-creation-platform-mna5.vercel.app/)

---

## 🧪 Tested On

✔ Chrome / Edge
✔ Firefox
✔ Safari
✔ Mobile Devices

Test cases include:

* Validation flow
* Step persistence
* Navigation lock logic
* Payload correctness

---

## 🔥 Code Quality

✔ DRY Principle
✔ Reusable components
✔ Clean naming conventions
✔ Responsive UI
✔ Minimal re-renders → better performance
✔ Proper UX feedback (loading, disabled states, errors)

---

## ❤️ Personal Statement

Thank you for reviewing this assignment! 🙏
I first built the logic independently using my knowledge.
When I faced issues, I used AI tools wisely to debug and accelerate —
**Because the assignment itself encourages AI-assisted development.**

### What I bring to the team:

> 🚀 Productivity + Ownership + Problem-Solving + Speed

I am highly motivated to learn, build, and contribute to **Dropchain**.
Please consider my application. I am fully ready for the next steps. 🙌

---

### 👨‍💻 Built with Love & Ownership by

**Aditya Jojare**
📧 **[adityajojare@gmail.com](mailto:adityajojare@gmail.com)**
📱 **+91 8999645026**

