# EasyOrder

## Overview

**EasyOrder** is a SaaS solution designed to digitize and streamline the ordering process and table management in nightclubs, enhancing both customer experience and operational efficiency.

### Why EasyOrder?
Nightclubs often face delays and inefficiencies when processing customer orders and managing tables. EasyOrder digitizes this process, enabling quicker service, reducing errors, and creating a seamless experience for both patrons and staff.

### Key Objectives
- **For customers**: Provide a fast and intuitive way to place orders from their mobile devices.
- **For staff**: Simplify the management of orders and tables, enabling waiters and administrators to track and process requests more efficiently.

### Target Audience
- **Nightclub users**: Customers who want to order conveniently from their phones.
- **Waitstaff**: Waiters who need an easy way to manage table assignments and orders.
- **Nightclub administrators**: Managers responsible for overseeing order flow and table management.

---

## Core Theme
Nightclub management solution through an innovative SaaS platform, offering real-time ordering and table management.

---

## Team Members
- **Juan José Arenas**: [Email](mailto:juanjoarenas1218@gmail.com) | [LinkedIn](www.linkedin.com/in/juan-josé-arenas-gaviria-144b79249) | [GitHub](https://github.com/jarenas1)
- **Diego Jaramillo**: [Email](97jaramillo@gmail.com) | [LinkedIn](https://www.linkedin.com) | [GitHub](https://github.com/diego97jaramillo)
- **Luis Rubio**: [Email](mailto:member3@example.com) | [LinkedIn](https://www.linkedin.com) | [GitHub](https://github.com/luisruro)
- **Juan Tuiran**: [Email](mailto:member4@example.com) | [LinkedIn](https://www.linkedin.com) | [GitHub](https://github.com/PJuanTuiran)

---

## Front-End Architecture

### Overview
The front-end of EasyOrder is designed to provide an intuitive and responsive user interface that enhances the ordering experience for nightclub patrons. The architecture is built using modern web technologies to ensure optimal performance and maintainability.

### Tech Stack
- **Framework**: React
- **State Management**: Redux or Context API
- **Styling**: SCSS for modular and maintainable styles
- **Routing**: React Router for handling navigation
- **API Interaction**: Axios for making HTTP requests to the backend
- **Internationalization**: i18next for supporting multiple languages
- **Build Tool**: Vite for fast development and build processes

### Folder Structure

  ![Structure](blob:https://web.whatsapp.com/3561d635-63ad-4c5e-99ee-a5f717891e7a)

### Component Design
- **Reusable Components**: Design components to be reusable across different parts of the application (e.g., buttons, input fields, cards).
- **Presentational vs. Container Components**: Separate presentational components (UI) from container components (logic and state management) to maintain a clear architecture.

### Routing
- Utilize React Router for navigating between pages:
  - **Public Routes**: Accessible to all users (e.g., login, registration).
  - **Protected Routes**: Accessible only to authenticated users (e.g., order page, admin dashboard).

### State Management
- Context API to manage application state:
  - Centralize state management to avoid prop drilling and improve state handling across components.

### API Communication
- Use Fetch for API calls to the backend:
  - Create a service layer to handle API requests, which will encapsulate all the logic for interacting with the backend.


## Back-End Architecture

### Design and Models
- **Database Model**:  
  ![Database Model](blob:https://web.whatsapp.com/e9ad1c39-dfc2-4f12-96a9-206e1b2b73cd)
  
- **Class Models**:  
  ![Class Model](blob:https://web.whatsapp.com/e29d8acb-8c32-4b2f-9858-c9825dab660d)
---

## Use Cases

1. **Log In**
   - **Actor**: User
   - **Description**: Users authenticate and access the system via mobile devices.
   
2. **Place Order**
   - **Actor**: User
   - **Description**: Users place their orders directly from their smartphones by scanning a QR code.

---

## User Stories

1. **As a nightclub patron**, I want to scan a QR code on the table to start a session and place orders easily from my phone.
   
2. **As a waiter**, I want to view and manage orders for tables assigned to me, so I can serve customers more efficiently.

---

## Functional Requirements

1. **FR1**: The system must allow users to scan a QR code to initiate a session.
2. **FR2**: The system must enable users to place orders from their mobile devices.
3. **FR3**: The system must provide real-time updates on order statuses to the waiters.

---

## Non-Functional Requirements

1. **NFR1**: The platform must be optimized for use on mobile devices, with a responsive interface.
2. **NFR2**: The system must support up to 1,000+ concurrent users without performance degradation.
3. **NFR3**: The system must ensure secure and encrypted user data transmission.

---

## Project Management

You can track the development progress and assigned tasks via our [Project Management Board](link-to-board).
