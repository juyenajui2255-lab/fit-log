# FITLOG

FitLog is a dark, no-nonsense workout library and planning app. Browse workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and manage your workout list from one place.

## Technologies Used

* Next.js
* React
* JavaScript
* Tailwind CSS
* Font Awesome
* REST API
* LocalStorage
* Git & GitHub

## Features

* **Workout Library** — Browse workouts with images, muscle groups, equipment, duration, calories, and ratings.
* **Workout Details** — View detailed information, specifications, and workout instructions.
* **Today's Plan** — Add workouts to your daily workout plan.
* **Save for Later** — Save workouts to view later from the Saved tab.
* **Sort Workouts** — Sort workouts by duration, calories, or rating.
* **Mark as Done** — Mark planned workouts as completed.
* **Remove Workouts** — Remove workouts from Today's Plan or Saved.
* **Live Counters** — Navbar counters show the number of planned and saved workouts.
* **Loading State** — Shows a loading animation while workout data is being fetched.
* **Toast Notifications** — Shows feedback after important workout actions.
* **Responsive Design** — Works across mobile, tablet, and desktop screens.
* **404 Page** — Handles unknown or invalid routes.

## Pages

* `/` — Workout Library
* `/workouts/[id]` — Workout Details
* `/my-plan` — Today's Plan and Saved Workouts
* `404` — Not Found Page

## API

FitLog uses the FitLog API to fetch workout data.

**All Workouts:**

https://api.abcz.workers.dev/api/fitlog

**Single Workout:**

https://api.abcz.workers.dev/api/fitlog/:id

## Getting Started

First, install the project dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```text
app/
├── components/
├── my-plan/
├── workouts/
│   └── [id]/
├── page.js
└── not-found.js

data/
└── workouts.js

assets/
└── images
```

## Deployment

The project can be deployed using Vercel, Netlify, Cloudflare Pages, or another supported hosting platform.

## GitHub

This project is maintained using Git and GitHub with meaningful commits throughout development.

## Author

Built as a FitLog workout application project.

