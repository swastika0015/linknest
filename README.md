

# LinkNest

LinkNest is a personalized link-sharing platform, similar to Linktree, built with Vite, React, and DBOS.

## Description

LinkNest allows users to create a customizable page that houses multiple links to their social media profiles, websites, or any other online content. It's designed to be a one-stop hub for all your important links, making it easy to share your online presence with others.

## Features

- Add and delete links
- Customizable user profile - incoming
- Responsive design for mobile and desktop
- Public shareable link page
- Backend powered by DBOS for efficient data management

## Tech Stack

- Frontend: Vite, React, TypeScript
- Backend: DBOS SDK, Knex
- Database: PostgreSQL

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/linknest.git
   cd linknest/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   DBOS_DATABASE_URL=your_database_url
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. To run the backend, run the following command:
   ```
    cd linknest/backend
    npx dbos-cloud login
    ```
6. Choose a database instance name, username and password
    ```
    npx dbos-cloud db provision <database-instance-name> -U <database-username>
    ```
7. Deploy the backend
    ```
    npx dbos-cloud deploy
    ```

## Usage

After starting the development server, navigate to `http://localhost:3000` in your browser. You can create an account, add links, and customize your LinkNest page.


## Acknowledgments

- Inspired by Linktree
- Built with Vite + Reactjs+ Typescript
