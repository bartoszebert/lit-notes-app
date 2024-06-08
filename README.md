# Notes App using Lit

A simple and modern notes application built with LitElement, demonstrating the use of web components and state management.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Features

- Add, edit, and delete notes
- Real-time search and filtering of notes
- Simple validation for required fields
- Modular components using LitElement
- Event-driven state management

## Installation

To get started with the Notes App, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/bartoszebert/lit-notes-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd lit-notes-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To run the Notes App locally, use the following command:
```sh
npm run start
```
This will start a development server and open the app in your default web browser.

## Components

### `add-edit-note.js`
A component for adding and editing notes, with validation for required fields.

### `delete-modal.js`
A component for confirming note deletions.

### `no-notes.js`
A component for displaying information about not notes yet or not notes found.

### `note-item.js`
A component representing a single note in the list.

### `notes-list.js`
A component for displaying a list of notes and handling events related to notes.

### `ui/input-field.js`
A custom input field component.

### `ui/textarea-field.js`
A custom textarea field component.

### `ui/button-element.js`
A custom button component.

### `ui/error-message.js`
A component for displaying error messages.
