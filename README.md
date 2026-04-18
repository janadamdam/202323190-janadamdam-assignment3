# Portfolio Website – Assignment 3

## Project Description

This project is an interactive personal portfolio website developed as part of Assignment 3.

It builds on previous assignments by adding advanced functionality such as API integration, improved user interaction, and better state management.

The website presents my background, projects, and contact information in a structured and user-friendly way. It reflects both my professional interests (computer science and web development) and creative interests (art and sewing).

---

## Features

- Personalized welcome overlay where the user enters their name
- Mode switching (All / Professional / Creative)
- Dynamic project filtering based on selected mode
- Scroll-based animations (fade-in effects)
- Interactive project cards with a favorite feature using localStorage
- Show favorites only option
- Form validation with error messages and success feedback
- Responsive layout for different screen sizes

### New Features (Assignment 3)

- Pexels API integration to fetch and display images dynamically
- “Find Inspiration” search feature based on user input
- Error handling for API requests and empty input
- Improved state management using localStorage (user name and favorites persist after refresh)

---

## API Integration

This project integrates the Pexels API to dynamically fetch and display images based on user input.

Users can enter a keyword (for example: sewing, fashion, pastel), and the application sends a request to the API and displays related images dynamically on the page.

If the API request fails or returns no results, a user-friendly message is shown.

---

## How to Use the Website

1. Enter your name in the welcome screen.
2. Browse projects using the mode switch (All / Professional / Creative).
3. Use the “Find Inspiration” feature:
   - Enter a keyword
   - Click search or press Enter
   - View images related to your search
4. Mark projects as favorites and optionally filter to show only favorites.
5. Use the contact form to send a message.

---

## Technologies Used

- HTML for structure  
- CSS for styling and layout  
- JavaScript for interactivity  
- Pexels API for dynamic content  
- localStorage for saving user data  

---

## AI Usage Summary

AI tools were used to assist with debugging, improving code structure, and implementing features such as API integration and dynamic behavior. More details are provided in the AI usage report.

---

## Setup Instructions

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/janadamdam/202323190-janadamdam-assignment3.git
2. Open the project folder.
3. Open index.html in a browser.
4. Ensure you have an internet connection (required for API functionality).

---

## Conclusion

This project extends the previous portfolio by adding more advanced functionality such as API integration, filtering, and state management using localStorage.
The addition of the “Find Inspiration” feature makes the website more dynamic and interactive, while features like favorites and persistent user data improve the overall user experience.
Overall, the project demonstrates how JavaScript can be used to combine user interaction, conditional logic, and external data to create a more functional web application.