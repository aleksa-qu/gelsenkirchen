End-to-End Tests for gelsenkirchen-libersave.de

This project contains **end-to-end tests** for a German-language website created by AI, focusing on the town of **Gelsenkirchen**. 
The tests validate core user flows and UI elements across various pages using [Playwright](https://playwright.dev/) and **TypeScript**.

---

Project Purpose

The tested website, `gelsenkirchen-libersave.de`, is an AI-generated local discovery platform showcasing:
- Local merchants
- Categories 
- Business details
- Contact information
- Legal notice (Impressum)

This test suite ensures that all key elements are present, function correctly, and remain consistent across builds or deployments.

---

Getting Started

Prerequisites

- Node.js (v18 or later)
- npm 
- Playwright CLI

Installation

Clone the repository and install dependencies:

npm install 
npm init playwright@latest
npm install dotenv --save

Debug Tests in UI Mode
npx playwright test --ui
