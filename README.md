# Bobby Singh — Portfolio

> Accessible portfolio website built by a blind developer using the NVDA screen reader.

## About

This repository hosts the portfolio site at [bobbysingh2005.github.io/web](https://bobbysingh2005.github.io/web). It is built with **Vue 3 + Vite 6**, **Bootstrap 5** and **Font Awesome 7**, and deployed to **GitHub Pages** from the committed `docs/` directory.

## Getting Started

```bash
# install dependencies
yarn

# start development server (host 0.0.0.0)
yarn dev

# production build (outputs to docs/ with --base=/web/)
yarn build

# preview the production build locally
yarn preview
```

## Projects

| Project | Description | Status |
|---------|-------------|--------|
| [EduApp](https://github.com/bobbysingh2005/eduApp) | Educational institution management — timetables, attendance, fees, payroll | Active |
| [Shree Chat App](https://github.com/bobbysingh2005/shree-chat-app) | Text, video and audio chat for your local network | Inactive |
| [Shree Eyes](https://github.com/bobbysingh2005/shree-eyes) | AI applications for visually impaired users | In development |
| [Shree Eyes Web](https://github.com/bobbysingh2005/shree-eyes-web) | Web-based companion and activity tracker for Shree Eyes | Early stage |

## Accessible CRM

A comprehensive Customer Relationship Management system built as a professional project:

- **Frontend**: Vue.js + Pinia for state management — fully accessible with NVDA screen reader support
- **Backend**: Node.js + Express — REST API with JSON Web Token (JWT) authentication
- **Database**: MongoDB + Mongoose ORM
- **Additional**: WordPress for the front-end framework

## Accessibility

This site is designed and tested by a blind developer. It uses:

- Semantic HTML, ARIA landmarks, and proper heading hierarchy
- A keyboard-accessible skip link and visible focus states
- Screen-reader-friendly route announcements (focus moves to main content on navigation)
- Hash routing for reliable GitHub Pages deployment

## Tech Stack

Vue 3 (Composition API + `<script setup>`), Vue Router 4, Vite 6, Bootstrap 5, Font Awesome 7

## License

Source files in this repository are provided as-is for portfolio demonstration purposes.