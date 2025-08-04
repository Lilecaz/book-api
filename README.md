<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="readmeai/assets/logos/purple.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# BOOK-API

<em></em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/Lilecaz/book-api?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/Lilecaz/book-api?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Lilecaz/book-api?style=default&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Lilecaz/book-api?style=default&color=0080ff" alt="repo-language-count">

<!-- default option, no dependency badges. -->


<!-- default option, no dependency badges. -->

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)

---

## Overview

Book-API is a RESTful API built with NestJS for managing a collection of books and users. It features JWT authentication, user management, and full CRUD operations for books. Data is stored in JSON files, making the API easy to deploy and ideal for demos, testing, or prototyping. Integrated Swagger documentation simplifies API exploration and integration.

---

## Features

<code>-</code>

---

## Project Structure

```sh
└── book-api/
    ├── README.md
    ├── db
    │   ├── books.json
    │   └── users.json
    ├── eslint.config.mjs
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.controller.spec.ts
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── auth
    │   ├── book
    │   ├── main.ts
    │   └── users
    ├── test
    │   ├── app.e2e-spec.ts
    │   └── jest-e2e.json
    ├── tsconfig.build.json
    └── tsconfig.json
```

### Project Index

<details open>
  <summary><b><code>BOOK-API/</code></b></summary>
  <!-- src Submodule -->
  <details>
    <summary><b>src</b></summary>
    <blockquote>
      <div class='directory-path' style='padding: 8px 0; color: #666;'>
        <code><b>⦿ src</b></code>
      <table style='width: 100%; border-collapse: collapse;'>
      <thead>
        <tr style='background-color: #f8f9fa;'>
          <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
          <th style='text-align: left; padding: 8px;'>Summary</th>
        </tr>
      </thead>
        <tr style='border-bottom: 1px solid #eee;'>
          <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/main.ts'>main.ts</a></b></td>
          <td style='padding: 8px;'>- The <code>src/main.ts</code> file bootstraps the NestJS application<br>- It initializes the application module, configures Swagger for API documentation, enables global data validation, and starts the server on port 3000<br>- The applications base URL is then logged to the console, indicating successful startup.</td>
        </tr>
        <tr style='border-bottom: 1px solid #eee;'>
          <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/app.service.ts'>app.service.ts</a></b></td>
          <td style='padding: 8px;'>- AppService provides a simple greeting message<br>- Within the NestJS application architecture, it serves as a foundational service, demonstrating a basic service interaction<br>- Its primary function is to return a string, illustrating the structure and functionality of a typical service within the larger application<br>- This facilitates the creation and testing of more complex services.</td>
        </tr>
        <tr style='border-bottom: 1px solid #eee;'>
          <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/app.module.ts'>app.module.ts</a></b></td>
          <td style='padding: 8px;'>- BookModule, AuthModule, and UsersModule<br>- It acts as the central hub, connecting controllers and services to manage application-wide dependencies and facilitate communication between different feature sets<br>- The modules structure ensures a modular and maintainable architecture.</td>
        </tr>
        <tr style='border-bottom: 1px solid #eee;'>
          <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/app.controller.spec.ts'>app.controller.spec.ts</a></b></td>
          <td style='padding: 8px;'>- Unit tests verify the functionality of the AppController within the NestJS application<br>- The tests confirm the controllers <code>getHello</code> method returns the expected Hello World!" string, ensuring the core application logic operates correctly<br>- This contributes to the overall project's reliability and maintainability by providing automated validation of the application's primary function.</td>
        </tr>
        <tr style='border-bottom: 1px solid #eee;'>
          <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/app.controller.ts'>app.controller.ts</a></b></td>
          <td style='padding: 8px;'>- The <code>AppController</code> serves as the main entry point for the NestJS application<br>- It handles incoming requests to the root URL, delegating the response generation to the <code>AppService</code><br>- Essentially, it acts as a controller for the applications primary endpoint, providing a simple greeting message<br>- This facilitates a clean separation of concerns within the overall application architecture.</td>
        </tr>
      </table>
      <!-- auth Submodule -->
      <details>
        <summary><b>auth</b></summary>
        <blockquote>
          <div class='directory-path' style='padding: 8px 0; color: #666;'>
            <code><b>⦿ src.auth</b></code>
          <table style='width: 100%; border-collapse: collapse;'>
          <thead>
            <tr style='background-color: #f8f9fa;'>
              <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
              <th style='text-align: left; padding: 8px;'>Summary</th>
            </tr>
          </thead>
            <tr style='border-bottom: 1px solid #eee;'>
              <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/auth/auth.controller.ts'>auth.controller.ts</a></b></td>
              <td style='padding: 8px;'>- The <code>auth.controller.ts</code> file manages user authentication within the NestJS application<br>- It exposes a login endpoint that receives user credentials, validates them against the authentication service, and upon successful validation, issues a login token<br>- Failure results in an unauthorized exceptæ©©©©on<br>- This controller acts as the entry point for user authentication within the broader application architecture.</td>
            </tr>
            <tr style='border-bottom: 1px solid #eee;'>
              <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/auth/auth.service.ts'>auth.service.ts</a></b></td>
              <td style='padding: 8px;'>- Handles authentication logic, including validating user credentials and generating JWT tokens<br>- Interacts with the UsersService to verify user existence and password correctness<br>- Provides methods for login and token creation, supporting secure authentication flows.</td>
            </tr>
            <tr style='border-bottom: 1px solid #eee;'>
              <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/auth/jwt-auth.guard.ts'>jwt-auth.guard.ts</a></b></td>
              <td style='padding: 8px;'>- Implements a NestJS guard that protects routes using JWT authentication<br>- Validates the presence and validity of JWT tokens in incoming requests<br>- Ensures only authenticated users can access protected endpoints.</td>
            </tr>
            <tr style='border-bottom: 1px solid #eee;'>
              <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/auth/jwt.stategy.ts'>jwt.stategy.ts</a></b></td>
              <td style='padding: 8px;'>- Defines the JWT strategy for Passport in the NestJS application<br>- Extracts and validates JWT tokens from requests<br>- Decodes token payloads and attaches user information to the request context for downstream use.</td>
            </tr>
            <tr style='border-bottom: 1px solid #eee;'>
              <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/auth/auth.module.ts'>auth.module.ts</a></b></td>
              <td style='padding: 8px;'>- Declares and configures authentication-related providers, controllers, and services<br>- Imports required modules such as UsersModule and PassportModule<br>- Sets up JWT module configuration and exports authentication services for use in other modules.</td>
            </tr>
          <!-- dto Submodule -->
          <details>
            <summary><b>dto</b></summary>
            <blockquote>
              <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ src.auth.dto</b></code>
              <table style='width: 100%; border-collapse: collapse;'>
              <thead>
                <tr style='background-color: #f8f9fa;'>
                  <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                  <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
              </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                  <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/auth/dto/login.dto.ts'>login.dto.ts</a></b></td>
                  <td style='padding: 8px;'>Defines the data transfer object for user login requests. Specifies the required fields (such as <code>username</code> and <code>password</code>) and applies validation decorators to ensure correct input structure for authentication endpoints.</td>
                </tr>
              </table>
            </blockquote>
          </details>
        </blockquote>
      </details>
      <!-- users Submodule -->
      <details>
        <summary><b>users</b></summary>
        <blockquote>
          <div class='directory-path' style='padding: 8px 0; color: #666;'>
            <code><b>⦿ src.users</b></code>
          <table style='width: 100%; border-collapse: collapse;'>
          <thead>
            <tr style='background-color: #f8f9fa;'>
              <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
              <th style='text-align: left; padding: 8px;'>Summary</th>
            </tr>
          </thead>
            <tr style='border-bottom: 1px solid #eee;'>
              <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/users/users.service.ts'>users.service.ts</a></b></td>
              <td style='padding: 8px;'>- Handles user-related business logic, including user creation, retrieval, updating, and deletion<br>- Interacts with the JSON data store to manage user records<br>- Provides methods for finding users by username or ID, supporting authentication and user management features.</td>
            </tr>
            <tr style='border-bottom: 1px solid #eee;'>
              <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/users/users.controller.ts'>users.controller.ts</a></b></td>
              <td style='padding: 8px;'>- Exposes RESTful endpoints for user operations such as registration, fetching user profiles, updating, and deleting users<br>- Delegates business logic to the UsersService<br>- Secures endpoints as needed, supporting authenticated and authorized access to user data.</td>
            </tr>
            <tr style='border-bottom: 1px solid #eee;'>
              <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/users/users.module.ts'>users.module.ts</a></b></td>
              <td style='padding: 8px;'>- Declares and configures the users feature module<br>- Registers controllers and providers related to user management<br>- Exports the UsersService for use in other modules, enabling dependency injection and modular architecture.</td>
            </tr>
            </tr>
          </table>
        </blockquote>
      </details>
      <!-- book Submodule -->
      <details>
        <summary><b>book</b></summary>
        <blockquote>
             <div class='directory-path' style='padding: 8px 0; color: #666;'>
              <code><b>⦿ src.book</b></code>
             <table style='width: 100%; border-collapse: collapse;'>
             <thead>
              <tr style='background-color: #f8f9fa;'>
                <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                <th style='text-align: left; padding: 8px;'>Summary</th>
              </tr>
             </thead>
              <tr style='border-bottom: 1px solid #eee;'>
                <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/book/book.service.spec.ts'>book.service.spec.ts</a></b></td>
                <td style='padding: 8px;'>- Contains unit tests for the <code>BookService</code><br>- Verifies the correctness of book-related business logic, such as creating, retrieving, updating, and deleting books<br>- Ensures the service behaves as expected under various scenarios.</td>
              </tr>
              <tr style='border-bottom: 1px solid #eee;'>
                <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/book/book.controller.ts'>book.controller.ts</a></b></td>
                <td style='padding: 8px;'>- Defines RESTful endpoints for managing books<br>- Handles HTTP requests for creating, reading, updating, and deleting book records<br>- Delegates business logic to the <code>BookService</code> and applies validation and authentication as needed.</td>
              </tr>
              <tr style='border-bottom: 1px solid #eee;'>
                <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/book/book.controller.spec.ts'>book.controller.spec.ts</a></b></td>
                <td style='padding: 8px;'>- Contains unit tests for the <code>BookController</code><br>- Validates the controller's endpoints and their integration with the <code>BookService</code><br>- Ensures correct HTTP responses and error handling for book operations.</td>
              </tr>
              <tr style='border-bottom: 1px solid #eee;'>
                <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/book/book.service.ts'>book.service.ts</a></b></td>
                <td style='padding: 8px;'>- Implements the core business logic for book management<br>- Provides methods for creating, retrieving, updating, and deleting books<br>- Interacts with the JSON data store to persist and fetch book data.</td>
              </tr>
              <tr style='border-bottom: 1px solid #eee;'>
                <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/book/book.module.ts'>book.module.ts</a></b></td>
                <td style='padding: 8px;'>- Declares and configures the book feature module<br>- Registers the <code>BookController</code> and <code>BookService</code><br>- Integrates book-related providers and exports services for use in other modules.</td>
              </tr>
             </table>
          <!-- dto Submodule -->
          <details>
            <summary><b>dto</b></summary>
            <blockquote>
              <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ src.book.dto</b></code>
              <table style='width: 100%; border-collapse: collapse;'>
              <thead>
                <tr style='background-color: #f8f9fa;'>
                  <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                  <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
              </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                  <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/book/dto/create-book.dto.ts'>create-book.dto.ts</a></b></td>
                  <td style='padding: 8px;'>Defines the data transfer object for creating a new book. Specifies required fields such as <code>title</code>, <code>author</code>, <code>publishedDate</code>, and applies validation decorators to ensure correct input when adding a book.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                  <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/book/dto/update-book.dto.ts'>update-book.dto.ts</a></b></td>
                  <td style='padding: 8px;'>Defines the data transfer object for updating an existing book. Allows partial updates by making all fields optional, and applies validation decorators to ensure valid data during book updates.</td>
                </tr>
              </table>
            </blockquote>
          </details>
          <!-- entities Submodule -->
          <details>
            <summary><b>entities</b></summary>
            <blockquote>
              <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ src.book.entities</b></code>
                <table style='width: 100%; border-collapse: collapse;'>
                  <thead>
                    <tr style='background-color: #f8f9fa;'>
                      <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                      <th style='text-align: left; padding: 8px;'>Summary</th>
                    </tr>
                  </thead>
                  <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-api/blob/master/src/book/entities/book.entity.ts'>book.entity.ts</a></b></td>
                    <td style='padding: 8px;'>Defines the <code>Book</code> entity structure used throughout the application. Specifies properties such as <code>id</code>, <code>title</code>, <code>author</code>, <code>publishedDate</code>, and any additional metadata required to represent a book record in the system.</td>
                  </tr>
                </table>
            </blockquote>
          </details>
        </blockquote>
      </details>
    </blockquote>
  </details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build book-api from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/Lilecaz/book-api
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd book-api
    ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->
  <!-- [![npm][npm-shield]][npm-link] -->
  <!-- REFERENCE LINKS -->
  <!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
  <!-- [npm-link]: https://www.npmjs.com/ -->

  **Using [npm](https://www.npmjs.com/):**

  ```sh
  ❯ npm install
  ```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm start
```

### Testing

Book-api uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm test
```

---


<div align="right">

[![][back-to-top]](#top)

</div>


[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square


---
