# 🚀 Next.js Prediction App

A beginner-friendly web application built with **Next.js** using the App Router. Enter any name and the app predicts the person's **age**, **gender**, and **nationality** using public APIs.

---

## 📌 Project Overview

This project demonstrates:

- ✅ Next.js  **App Router** with `src/app` structure
- ✅ **Dynamic routing** via `[name]` segment
- ✅ **Parallel API fetching** with `Promise.all`
- ✅ **Loading & Error** states with `loading.tsx` and `error.tsx`
- ✅ **Tailwind CSS** for styling
- ✅ **TypeScript** for type safety

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| [Next.js ](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Agify API](https://agify.io/) | Predicts age from a name |
| [Genderize API](https://genderize.io/) | Predicts gender from a name |
| [Nationalize API](https://nationalize.io/) | Predicts nationality from a name |

---

## 📁 Folder Structure

```
my-app/
├── src/
│   └── app/
│       ├── prediction/
│       │   └── [name]/
│       │       ├── page.tsx        # Main prediction page (age, gender, nationality)
│       │       ├── loading.tsx     # Loading UI while fetching
│       │       └── error.tsx       # Error UI if API fails
│       ├── layout.tsx              # Root layout
│       ├── page.tsx                # Home page
│       └── globals.css             # Global styles
├── public/
│   └── favicon.ico
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sadaf-saleem/next-beginner-project.git
   cd next-beginner-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🔍 How It Works

Navigate to `/prediction/[name]` — for example `/prediction/Ali` — and the app will:

1. Call **3 APIs in parallel** using `Promise.all`
2. Fetch predicted **age** from `agify.io`
3. Fetch predicted **gender** from `genderize.io`
4. Fetch predicted **nationality** from `nationalize.io`
5. Display all results in a clean card UI

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📚 What I Learned

- Setting up Next.js with `src/app` directory structure
- Using **dynamic routes** with `[name]` segments
- Fetching multiple APIs in parallel with **`Promise.all`**
- Handling **loading** and **error** states with special Next.js files
- Styling with **Tailwind CSS**
- Writing type-safe code with **TypeScript**

---

## 🔗 Resources

- [Next.js Official Documentation](https://nextjs.org/docs) — framework reference
- [My GitHub Profile](https://github.com/sadaf-saleem) — other projects I have built
- [This Repository](https://github.com/sadaf-saleem/next-beginner-project) — source code

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---


