# 🍔 D-Foods (Swiggy Clone)

D-Foods is a Swiggy-inspired food delivery web application built using **React**, **Parcel**, and **React Router**.  
The project focuses on understanding **real-world React workflows**, API handling, routing, and deployment using **GitHub Pages**.

🌐 **Live Demo**:  
https://sureshcod.github.io/foodApp/

---

## 🚀 Features

- 🔍 Search restaurants by name
- 🏬 Fetch real restaurant data from Swiggy API
- 🍽️ View restaurant cards with image, rating & price
- 📄 Dynamic restaurant menu page (route-based)
- 🧭 Navigation with React Router
- 🧱 Reusable components (Header, Footer, Cards)
- 💫 Shimmer loading UI while data loads
- 📱 Responsive UI (basic)

---

## 🧠 Project Workflow (Simple Explanation)

### 1️⃣ Application Start
- The app starts from `index.html`
- React renders everything inside `<div id="root"></div>`

### 2️⃣ Routing Setup
- `BrowserRouter` is used for page navigation
- Routes handled:
  - `/` → Home (Restaurant List)
  - `/restaurants/:id` → Restaurant Menu
  - `/about`, `/contact`, `/careers`, `/cart`

### 3️⃣ Home Page (Restaurant Listing)
- On page load, restaurant data is fetched from Swiggy API
- Data is extracted safely from nested API response
- Restaurants are displayed using reusable `RestaurantCard` components

### 4️⃣ Search Functionality
- User types in the search box
- Restaurants are filtered in real-time using state

### 5️⃣ Restaurant Menu Page
- Clicking a restaurant navigates using its ID
- Menu data is fetched using a custom hook
- If data is loading → shimmer UI is shown
- If menu is unavailable → fallback message is displayed

### 6️⃣ Reusable Layout
- `Header` and `Footer` are always visible
- Page content changes dynamically using routes

### 7️⃣ Styling
- Custom CSS (no UI libraries)
- Flexbox-based layout
- Card-style UI similar to Swiggy

### 8️⃣ Deployment
- App is bundled using **Parcel**
- Built files are deployed using **gh-pages**
- Hosted on **GitHub Pages**

---

## 🛠️ Tech Stack

- **React 18**
- **React Router DOM**
- **Parcel Bundler**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **GitHub Pages**

---

## 📁 Folder Structure
projectReact/
│
├── index.html
├── index.css
├── package.json
│
└── src/
├── index.js
├── App.js
│
├── components/
│ ├── Header.js
│ ├── Footer.js
│ ├── Body.js
│ ├── RestaurantCard.js
│ ├── RestaurantMenu.js
│ ├── Shimmer.js
│ ├── About.js
│ ├── Contact.js
│ ├── Careers.js
│ └── Cart.js
│
└── utils/
├── constants.js
└── useRestaurantMenu.js

🔮 Future Improvements

🛒 Add Cart functionality with Redux

🔐 User authentication (Login / Signup)

💳 Payment gateway integration

🍕 Category-wise menu filtering

⭐ Sort by rating, price, distance

⚡ Performance optimization & lazy loading

🎨 Dark mode

📱 Better mobile responsiveness



Suresh Derangula
Frontend Developer | React Enthusiast

🔗 GitHub: https://github.com/sureshcod

🔗 LinkedIn: https://www.linkedin.com/in/sureshder/
