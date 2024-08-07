# React + Vite

This project is a React-based calendar application built using Vite, a fast and efficient build tool for modern web applications. The project provides a minimal setup to get React working with Vite, including Hot Module Replacement (HMR) and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Main Function Points
* Provides a calendar component with the ability to open a pixel modal, allowing users to select colors that represent their overall mood for a given calendar day.
* Users can choose from a palette of colors, each corresponding to different moods (e.g., happy, sad, stressed, relaxed), enabling a personalized reflection of their emotional state.
* The selected colors dynamically update the cell backgrounds in the calendar, creating a visual representation of mood trends over time.
