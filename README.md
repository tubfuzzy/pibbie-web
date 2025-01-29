# Pibbie.com

## About the Website
[Pibbie.com](https://pibbie.com/) is an informational platform that provides reviews and insights on the best carbon plate running shoes for 2024. The website is designed to inspire and guide runners in making informed decisions when selecting the latest high-performance running shoes.

### Key Features
- **Comprehensive Reviews**: Detailed analysis of carbon-plated running shoes.
- **Interactive Content**: User-friendly interface with engaging features.
- **Up-to-date Information**: Focused on the latest models and trends for 2024.

---

## Developer Guide
This section provides guidance for developers working on the Pibbie.com project.

### Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/) (React-based framework)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **API Handling**: Axios
- **Backend**: Node.js (Express or similar framework)
- **Database**: TBD (e.g., MongoDB, PostgreSQL)


### Prerequisites
Before running or developing this project, ensure the following tools are installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Yarn](https://yarnpkg.com/) (preferred package manager)
- Docker (optional for containerized deployment)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tubfuzzy/pibbie-web.git
   cd pibbie-web
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env` file for environment variables:
   ```plaintext
   NEXT_PUBLIC_API_URL=https://api.pibbie.com
   NEXT_PUBLIC_SITE_NAME=Pibbie
   ```

### Development
Run the development server:
```bash
yarn dev
```

Access the application at `http://localhost:3000`.

### Build and Deployment
1. Build the application:
   ```bash
   yarn build
   ```

2. Start the production server:
   ```bash
   yarn start
   ```

3. To deploy using Docker:
   ```bash
   docker build -t pibbie-web .
   docker run -p 3000:3000 pibbie-web
   ```

### Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

### License
This project is licensed under the [MIT License](LICENSE).

---

### Contact
For questions or feedback, please reach out to the Pibbie.com team at [support@pibbie.com](mailto:support@pibbie.com).

