[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Q5XOsoV3)
# React JS - Lab Day 2

**Goal:** Create a small To Do app with login/logout and add/delete feature using React.

## Instructions 📖

1. Create a new project by running `npm create vite@latest react-lab-2`.
2. Recreate the demo video provided: [https://drive.google.com/file/d/1hGbgoY9d3VthCyLLkcT9bX1UB-4A7-qU/view?usp=sharing](https://drive.google.com/file/d/1hGbgoY9d3VthCyLLkcT9bX1UB-4A7-qU/view?usp=sharing)
3. Commit and push your changes.

## Additional Details ✅

- Install `react-router-dom` and create two routes: one for the login page *(/login)* and one for the To Do List page *(/todos)*.
- Use **context** to store the user's name *(string)* and login status *(boolean)*. Pressing the Login button will update the context and redirect the user to the To Do List page.
- The Logout button will clear the user's name and set the login status to `false`.
- If the user is logged in, they will see the To Do List page. If not, they will be redirected to the Login page.
- Don't store the todos array in the context or in an external database. Just store it in the component locally using `useState`. So the array will just reset every time you log out.
- Install and use **[Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)** to recreate the design as close as possible.
- Feel free to use any number of components and additional packages such as `react-hot-toast` and `uuid` for the exercise.

Good luck! 🎉🎉🎉
