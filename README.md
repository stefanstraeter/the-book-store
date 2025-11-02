# DEVELOPER AKADEMIE – THE BOOK STORE

## Overview

The Book Store is a modern, interactive online bookstore built with HTML, CSS, and Vanilla JavaScript. The project features a dynamic book gallery where users can like books, add comments, and view essential book details such as price, genre, author, and publication year. Designed with a **mobile-first approach**, the interface adapts seamlessly to all screen sizes.

### The Challenge

- Dynamically render a list of books using JavaScript
- Implement a like feature with real-time UI updates
- Enable users to submit comments for each book
- Persist likes and comments using Local Storage
- Create a visually appealing, responsive layout with modern typography

### Links

- **Solution URL:** [GitHub Repository](https://github.com/stefanstraeter/the-book-store)
- **Live Site URL:** [Live Demo](https://stefanstraeter.github.io/the-book-store/)

### Screenshot

![Book Store Screenshot](assets/images/screenshot_github.png)

---

## My Process

### Built With

- **HTML5** – semantic and accessible markup
- **CSS3** – custom properties, Grid & Flexbox layout
- **JavaScript** (Vanilla) – dynamic rendering, like & comment functionality, Local Storage persistence
- **Mobile-First Workflow** – optimized for small screens first
- **CSS Reset** – ensures consistent styling across browsers

### Key Features & Techniques

#### Dynamic Rendering with JavaScript

- Books are loaded dynamically from a JavaScript array (`books`)
- DOM is updated on page load using a `renderBooks()` function to insert book cards
- Likes and comments update the UI in real-time

#### Like & Comment Functionality

- Users can toggle likes on books
- Comment form allows users to add new comments dynamically
- All likes and comments are saved to Local Storage for persistence

#### Responsive Design & Mobile-First Approach

- Uses CSS Grid for a flexible book gallery layout
- Scalable text using `clamp()` for optimal readability across devices
- Navigation and header components adjust gracefully on smaller screens

#### Semantic HTML & Accessibility

- Uses meaningful HTML elements: `<header>`, `<main>`, `<section>`, `<footer>`
- Book images include `alt` attributes for accessibility
- Forms use `required` attributes to ensure valid input

#### Theming with CSS Variables

- Centralized design tokens with `:root` custom properties
- Easy to maintain and update colors, spacing, and fonts

---

## Author

- GitHub: [@stefanstraeter](https://github.com/stefanstraeter)

# the-book-store
