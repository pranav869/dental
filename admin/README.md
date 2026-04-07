# Care N Cure — Admin Dashboard

Simple admin panel for managing patient bookings.

---

## Setup (Required)

### 1. Create a Firebase Project
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **"Add project"** → name it (e.g. `carecure-dental`)
3. Once created, click **"Web"** icon to add a web app
4. Copy the `firebaseConfig` object shown

### 2. Add Your Firebase Config
Open `firebase-config.js` and replace the placeholder values:

```js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  ...
};
```

### 3. Set Up Firestore
1. In Firebase Console → **Firestore Database** → **Create database**
2. Choose **"Start in test mode"** (for now)
3. The collection name must be: `bookings`

Each booking document should have:
| Field    | Type   | Example              |
|----------|--------|----------------------|
| name     | string | Raju Kumar           |
| phone    | string | +91 98765 43210      |
| date     | string | 2024-04-10 (YYYY-MM-DD) |
| time     | string | 10:30 AM             |
| problem  | string | Toothache            |
| status   | string | pending / completed  |

### 4. Open the App
Just open `index.html` in a browser.

- **Username:** `admin`
- **Password:** `admin123`

---

## File Structure

```
admin/
├── index.html          ← Login page
├── dashboard.html      ← Bookings dashboard
├── style.css           ← All styles
├── firebase-config.js  ← Your Firebase config (fill this in)
├── dashboard.js        ← Firebase logic
└── README.md           ← This file
```

---

## Features

- Real-time bookings (updates instantly via Firestore onSnapshot)
- Stats: Total, Pending, Completed, Today's count
- Filter by Today or pick any date
- Mark booking as Completed
- Delete booking
- Responsive on mobile
