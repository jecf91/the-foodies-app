Here’s a complete and clean `README.md` for your **The Foodies App** project:

---

# 🍽️ The Foodies App

A web application for food lovers to share their favorite recipes. Built with [Next.js](https://nextjs.org/), [React](https://reactjs.org/), and [SQLite](https://www.sqlite.org/). This app allows users to publish and browse curated recipe content with secure handling of HTML using `xss`.

---

## 🚀 Features

- Share and view delicious recipes
- Slugified URLs for better SEO
- Secure rendering of HTML using the `xss` library
- Fast and simple local SQLite database
- Written in TypeScript
- Uses ESLint for code quality

---

## 🛠️ Tech Stack

- **Next.js** 15
- **React** 19
- **SQLite** with `better-sqlite3`
- **TypeScript**
- **ESLint**
- **XSS Sanitization** with `xss`
- **Slugify** for URL formatting

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jecf91/the-foodies-app.git
   cd the-foodies-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Initialize the SQLite database:**

   ```bash
   node initdb.js
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## 🔒 Security

- The app uses `xss` to sanitize any user-generated HTML before rendering with `dangerouslySetInnerHTML`, helping to prevent XSS attacks.

---

## 🧪 Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Lint the codebase        |

---

## 🗃️ Database

The app uses a local SQLite database via `better-sqlite3`. To set it up, make sure to run:

```bash
node initdb.js
```
