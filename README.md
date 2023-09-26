# Todo List App


<img src="https://github.com/MohitGupta12/todo-list/blob/main/public/Images/home.png" alt="Home" >



## Overview

The Todo List App is a simple task management application built using React.js, Tailwind CSS, and various libraries like `uuidv4`, `toastify`, `react-hook-form`. This app allows users to create, edit, complete, and delete tasks with a user-friendly interface. It also provides real-time feedback through color-coded toasts.

## Features

- **Task Creation**: Users can create tasks by providing a title (limited to 15 characters) and a description (limited to 30 characters). Form validation ensures the input meets these requirements.

- **Task Management**: Each task in the list has three actions:
  - **Edit**: Opens a modal for updating the title and description of the task. Users can choose to update the task or leave it as is.
  - **Complete**: Moves the task to the completed list, visually distinguishing it with a green background.
  - **Delete**: Removes the task from the list.

- **Local Storage**: All tasks are stored in local storage, ensuring that tasks persist even after refreshing the page.

- **Capacity Limit**: Both the task list and the completed list have a maximum capacity. If the capacity is reached, new tasks are added according to the FIFO (First-In-First-Out) principle. The oldest task is removed to make space for the new one.

- **Color-Coded Toasts**: Users receive color-coded toasts at the top right corner for every action performed (e.g., adding, deleting, or updating tasks). These toasts provide real-time feedback on the status of the task.

## Screenshots

Task 

<img src="https://github.com/MohitGupta12/todo-list/blob/main/public/Images/task.png" alt="completed List"  height= "150" width="600">

Completed Task 

<img src="https://github.com/MohitGupta12/todo-list/blob/main/public/Images/completed%20task.png" alt="completed List"  height= "150" width="600">


Editing Modal

![Screenshot 2023-09-26 184423](https://github.com/MohitGupta12/todo-list/assets/70692495/03ae9ce7-c42e-4a68-b9fb-dabcd47da871)

Updated Task

![Screenshot 2023-09-26 184431](https://github.com/MohitGupta12/todo-list/assets/70692495/0f952a1d-3701-4455-bc73-aa929bc02d07)

Deleting Task

![Screenshot 2023-09-26 184453](https://github.com/MohitGupta12/todo-list/assets/70692495/10ed4c62-2f7f-44a7-bbe7-f345f2d86b69)


## Getting Started

Follow these steps to get the Todo List App up and running on your local machine:

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/): These are required to run the project.

### Installation

1. Clone the repository to your local machine using Git:
  
  ```
  git clone https://github.com/MohitGupta12/todo-list-app.git
  ```

2 Navigate to the project directory:

   ```
   cd todo-list-app
   ```
3 Install the project dependencies using npm:
  
  ```
  npm install
  ```
4 Running the Application
 Start the development server with Vite:

  ``` 
    npm run dev
  ```

Open your web browser and access the application at `http://localhost:3000`.

Now you should have the Todo List App running locally on your machine, utilizing Vite as the build tool, and you can start using it to manage your tasks.

## Technologies Used

- React.js
- Tailwind CSS
- `uuidv4` for unique ID generation
- `toastify` for displaying toasts
- `react-hook-form` for form validation


## Contributing

Contributions are welcome! If you'd like to contribute to this project, you can contribute by 
  -Improving Styling
  -Adding Theme (light and dark)
  -Optimizing Code  
  

## Contact

If you have any questions or feedback, feel free to reach out to us at [mohit2412gupta@example.com].

---
