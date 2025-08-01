# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Budget Buddy 2.0 is a web-based personal budget tracking application built with vanilla JavaScript, Tailwind CSS, and Firebase. It's designed as a static single-page application that can be deployed to any static hosting service.

## Architecture

The codebase follows a modular architecture with clear separation of concerns:

- **State Management**: Centralized in `src/state.js` using a singleton pattern with getters/setters
- **UI Layer**: All rendering logic in `src/ui.js` with functions like `renderExpenses()`, `renderBudgetSummary()`
- **Business Logic**: Utility functions in `src/utils.js` for filtering, calculations, and data transformations
- **Data Visualization**: Chart.js integration in `src/charts.js` for expense trends and category breakdowns
- **Authentication & Database**: Firebase integration in `src/firebase-init.js` and `firebase-config.js`

## Key Design Patterns

1. **Event-Driven Architecture**: UI updates triggered by state changes and Firebase listeners
2. **Modular ES6 Imports**: Each module exports specific functions that other modules import
3. **Firebase Real-time Sync**: Uses Firestore listeners for live data updates across sessions
4. **Responsive First**: Built with Tailwind CSS utility classes for mobile-first design

## Development Commands

This is a static web application with no build process:

```bash
# Development - Open in browser
open index.html

# Deploy to GitHub Pages
git add .
git commit -m "Your commit message"
git push origin main
# GitHub Pages will automatically deploy from docs/ directory

# Run locally with a simple HTTP server (if needed for Firebase)
python -m http.server 8000
# or
npx http-server
```

## Working with the Codebase

### Adding New Features
1. Update state structure in `src/state.js` if new data is needed
2. Add UI rendering functions in `src/ui.js`
3. Add business logic in `src/utils.js`
4. Update Firebase listeners in `src/firebase-init.js` if persistence is needed

### Modifying the UI
- All UI elements are rendered dynamically in `src/ui.js`
- Use Tailwind CSS classes for styling
- Chart configurations are in `src/charts.js`

### Firebase Integration
- Configuration is in `firebase-config.js` (gitignored)
- Security rules are managed in Firebase Console
- Authentication supports Google OAuth and email/password

## Important Files

- `index.html`: Main application file (self-contained version)
- `src/state.js`: Global application state
- `src/ui.js`: All UI rendering logic
- `src/firebase-init.js`: Firebase initialization and auth setup
- `firebase-config.js`: Firebase project configuration (gitignored)

## Testing Approach

Manual testing in browser:
1. Test expense CRUD operations
2. Verify budget calculations across different views
3. Test authentication flows
4. Verify real-time sync between tabs/devices
5. Test responsive design on mobile devices

## Common Tasks

### Update Firebase Security Rules
Security rules are managed in the Firebase Console, not in code. Current rules allow authenticated users to read/write their own data.

### Add a New Expense Category
1. Update the categories array in `src/ui.js`
2. Add corresponding emoji in the `getCategoryEmoji()` function
3. Update any category-specific styling if needed

### Modify Chart Displays
All chart logic is in `src/charts.js`. Charts use Chart.js v3 API.