# EasyOrder

## Description
EasyOrder is a SaaS solution for nightclub management, allowing users to scan QR codes on tables to place orders directly from their mobile devices.

## Technologies Used
- NestJS
- React

## Prerequisites
- Node.js
- npm
- Docker (optional)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/jarenas1/EasyOrder-FRONTEND.git
    cd EasyOrder-FRONTEND
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    ```bash
    cp .env.example .env
    ```

4. Start the server:
    ```bash
    npm run start
    ```

## Environment Variables
- `DB_PORT`: 5432
- `DB_HOST`: dpg-crl3i0t6l47c73fqvclg-a
- `DB_USER`: backend_easyorder_user
- `DB_PASS`: y6KwCSHVlyiay25yiKpem4av5XF8GGyO
- `JWT_SECRET`: secret

## API Documentation
https://easyorder-backend-3.onrender.com/api/#/Tables/TableController_updateTableStatus


## Contributions
To contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Project Documentation

For detailed documentation on the EasyOrder project, please refer to [DOCUMENTATION.md](./DOCUMENTATION.md).
