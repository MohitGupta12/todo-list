# Todo List App

![Screenshot 2023-09-26 184015](https://github.com/MohitGupta12/todo-list/assets/70692495/fcc8fc06-bf2c-4b5b-b249-2fa43a376e62)

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

Include screenshots or GIFs of your application to give users a visual representation of how it works. You can use a service like [Imgur](https://imgur.com/) to host your images and provide temporary links in your README.

![Screenshot 1](temp_link_to_screenshot1)
![Screenshot 2](temp_link_to_screenshot2)

## Getting Started

1. Clone the repository to your local machine.
git clone https://github.com/your-username/todo-list-app.git

2. Install the project dependencies.
npm install


3. Start the development server.
npm start


4. Open your web browser and access the application at `http://localhost:3000`.

## Technologies Used

- React.js
- Tailwind CSS
- `uuidv4` for unique ID generation
- `toastify` for displaying toasts
- `react-hook-form` for form validation

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow our [contributing guidelines](CONTRIBUTING.md).

## Acknowledgments

- This project was inspired by [insert inspiration here].
- Special thanks to the open-source community for their invaluable contributions.

## Contact

If you have any questions or feedback, feel free to reach out to us at [your-email@example.com].

---

Feel free to modify this template to match the actual structure and content of your README file. Don't forget to replace the temporary image and screenshot links with the actual URLs once you've hosted them. Additionally, make sure to create the necessary license and contributing files if you plan to open-source your project.
