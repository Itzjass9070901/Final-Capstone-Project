# Moth Project – CSS Summary

This stylesheet powers the layout, themes, and responsiveness of the Moth Explorer web app. It uses modern CSS techniques for clean UI and user-friendly interaction.

---

## Sections

1. **Reset & Base** – Normalize styles across browsers and define body defaults.
2. **Theming with CSS Variables** – Enable light/dark mode switching using custom properties.
3. **Layout & Structure** – Organize header and main content using Flexbox and centered layout.
4. **Inputs & Buttons** – Style the search field and buttons to match the current theme.
5. **History Buttons** – Display past search terms as compact, clickable buttons.
6. **Card Grid** – Show moth data in responsive, interactive cards with hover effects.
7. **Session Message** – Style the message box for feedback or alerts.
8. **Footer & Media Queries** – Footer styling and responsive adjustments for small screens.

---

### 1. Reset & Base

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

*Removes default spacing and sets up base font and theme-aware colors.*

---

### 2. Theming with CSS Variables

```css
:root { ... }
body.dark { ... }
```

*Defines color variables for light and dark themes that apply dynamically.*

---

### 3. Layout & Structure

```css
header { ... }
main { ... }
```

*Positions header elements and centers the main content area with padding.*

---

### 4. Inputs & Buttons

```css
#searchInput { ... }
#searchBtn { ... }
#searchBtn:hover { ... }
```

*Styles search input and button with matching theme colors and hover effects.*

---

### 5. History Buttons

```css
.history-box { ... }
.history-box button { ... }
```

*Arranges previous search terms as small, flexible buttons with consistent style.*

---

### 6. Card Grid

```css
.card-container { ... }
.card { ... }
.card:hover { ... }
.card img { ... }
.card-content { ... }
```

*Lays out responsive cards with shadows and hover animation to showcase moth results.*

---

### 7. Session Message

```css
.session-message { ... }
```

*Styles a message box for showing alerts or info in a clean and readable format.*

---

### 8. Footer & Media Queries

```css
footer { ... }
@media (max-width: 600px) { ... }
```

*Adds footer styling and adjusts layout elements for smaller screen sizes.*

---

