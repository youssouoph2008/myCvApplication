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
