<p align="center">
  <img src="https://img.shields.io/badge/Next.js-13-blue?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/PostgreSQL-DB-blue?style=flat-square&logo=postgresql" />
  <img src="https://img.shields.io/badge/Drizzle ORM-Efficient-success?style=flat-square&logo=data" />
  <img src="https://img.shields.io/badge/Clerk-Auth-red?style=flat-square&logo=clerk" />
</p>

<h1 align="center">🧑‍💻 Multi-Tenant Blog Platform</h1>

<p align="center">A scalable SaaS-style blogging platform that supports custom domains, multi-tenant architecture, and powerful user authentication. Built with Next.js 13 App Router, Drizzle ORM, and PostgreSQL.</p>

---

## 🚀 Features

- 🔐 **Multi-Tenant Authentication** – Authenticated blog owners via **Clerk**
- 🌐 **Custom Domain Support** – Every blog can be accessed with its own domain or subdomain
- 📄 **Markdown Editor** – Write and edit blog posts with Markdown syntax
- 📁 **Image Uploading** – Upload and manage blog images with ease
- 🔍 **SEO-Friendly** – Blog posts are optimized for SEO and performance
- 🧠 **Database Layer** – Powered by **Drizzle ORM** with PostgreSQL
- 🛠️ **Edge-Ready** – Runs efficiently on Vercel Edge Functions

---

## 📸 Demo



---

## 🏗️ Tech Stack

| Technology   | Description                      |
| ------------ | -------------------------------- |
| **Next.js 13** | App Router, Server Actions, SSR |
| **TypeScript** | Static type checking |
| **Clerk** | Authentication and user management |
| **Drizzle ORM** | Type-safe PostgreSQL access |
| **PostgreSQL** | Relational database |
| **Vercel** | Hosting and edge deployment |

---

## 🧑‍💻 Setup Instructions

> Clone and run locally in just a few steps.

```bash
git clone https://github.com/Aj1-7/multi-tenant-blog
cd multi-tenant-blog

# Install dependencies
npm install

# Set up .env.local (see below)
cp .env.example .env.local

# Push DB schema
npx drizzle-kit push

# Run dev server
npm run dev
