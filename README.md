# My CV App

A dynamic and interactive CV (Curriculum Vitae) application built with **React** and **Vite**.  
This app allows you to input your personal information, education, work experience, and language skills, and displays them in a clean, portfolio-style layout.

---

## 🚀 Features

- Editable sections for **General Info**, **Education**, **Experience**, and **Languages**.
- Real-time form updates using **React state (`useState`)**.
- Modern, responsive UI with **CSS styling**.
- Easy to extend for additional sections or export functionality.

---

## 📁 Project Structure

```plaintext
myCvApplication/
├─ public/
│  └─ index.html          # Main HTML file
├─ src/
│  ├─ components/
│  │  ├─ GeneralInfo.jsx
│  │  ├─ Education.jsx
│  │  ├─ Experience.jsx
│  │  ├─ Languages.jsx
│  │  └─ styles/          # CSS files for each component
│  │      ├─ GeneralInfo.css
│  │      ├─ Education.css
│  │      ├─ Experience.css
│  │      └─ Languages.css
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css           # Global CSS
├─ package.json
├─ vite.config.js
└─ README.md
```
## 💻 Getting Started
Prerequisites
Node.js >= 18
npm
## Installation
Clone the repository:
git clone <your-repo-url>
cd myCvApplication
### Install dependencies:
npm install
Start the development server:
npm run dev
Open your browser and navigate to:
http://localhost:5173/
## 🛠 Technologies Used
React – Front-end library for building UI
Vite – Fast build tool and dev server
CSS – Styling and layout
JavaScript (ES6+) – Dynamic interactions
## ⚡ Usage
Fill in your personal information, education, experience, and languages.
Click Save to store each section.
Click Edit to modify any section.
Preview your CV in real time.
## ✨ Future Improvements
Export CV as PDF
Add more sections (Projects, Skills, Certifications)
Enhance styling for print-friendly layout
Add dark mode toggle
