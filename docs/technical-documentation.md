# Technical Documentation

## Overview

This project is an interactive portfolio website built using HTML, CSS, and JavaScript.

The goal is to present personal information and projects while improving user interaction through dynamic features.

---

## Technologies Used

- HTML for structure
- CSS for styling and layout
- JavaScript for interactivity
- localStorage for saving user preferences

---

## Project Structure
assignment-3/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md

---

## Main Features Implementation

### 1. Welcome Overlay

- A popup appears when the page loads
- The user enters their name
- The greeting updates dynamically using JavaScript
- An error message appears if the input is empty

Key concepts:
- DOM selection
- Event listeners
- Input validation

### Overlay Improvement

- The user name is stored in localStorage after it is entered
- When the page reloads, the application checks if a name already exists
- If a name is found, the overlay is skipped and the greeting is shown directly

Example:

```javascript
const savedName = localStorage.getItem("username");
```

---

### 2. Mode Switching

- A button switches between:
  - All
  - Professional
  - Creative

- Each project has a class:
  - professional
  - creative

- JavaScript shows or hides projects based on the selected mode

- The page theme changes using body classes:
    body.classList.add(“mode-professional”)

---

### 3. Dynamic Filtering

- Projects are filtered based on user interaction
- If no projects match, a message is displayed

---

### 4. Scroll Animations

- Elements appear when the user scrolls
- Implemented using JavaScript and CSS classes

Example: element.classList.add(“active”)

---

### 5. Favorite Feature

- Users can mark projects as favorites
- The state is saved using localStorage
- The selection remains after refreshing the page

Example:

```javascript
localStorage.setItem("favorites", JSON.stringify(favoriteProjects));
```

---

### 6. Show Favorites Only

- Users can choose to display only their favorite projects
- This is controlled using a button or toggle
- When activated, only projects marked as favorites are shown
- When deactivated, all projects are displayed again

This feature combines:
- filtering logic
- stored data from localStorage
- conditional rendering

It demonstrates more advanced interaction by combining multiple conditions (selected mode + favorite state).

---

### 7. Form Validation

- The contact form validates:
  - name
  - email
  - message

- Error messages appear for invalid input
- A success message appears when submission is valid

---

### 8. API Integration (Pexels)

- The application connects to the Pexels API using a fetch request.
- Users enter a keyword, which is used as a query parameter.
- The API returns image data in JSON format.
- The images are dynamically created and added to the page.

Example:

```javascript
fetch(`https://api.pexels.com/v1/search?query=${query}`)
```

---

## Error Handling

- Empty input fields show clear error messages
- Invalid email format is detected
- If no projects match a filter, a message is shown
- If API fails → user-friendly error message appears
- If no images found → message is displayed

---

## Conclusion

This project extends the previous portfolio by adding more advanced functionality such as API integration, improved filtering, and state management using localStorage.

The addition of the “Find Inspiration” feature allows users to interact with external data, making the website more dynamic and engaging. Features like project filtering, favorites, and persistent user data improve the overall user experience.

Overall, the project demonstrates how JavaScript can be used to combine user interaction, conditional logic, and external data to create a more interactive and functional web application.