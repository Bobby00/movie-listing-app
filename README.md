# React Movie App

A simple React app to search for movies and display trending movies, using [The Movie Database (TMDB)](https://www.themoviedb.org/) API and [Appwrite](https://appwrite.io/) for trending metrics.

## Features

- Search for movies by title
- View trending movies (tracked by search count)
- Responsive UI with loading spinner
- Stores search metrics in Appwrite database

## Technologies

- React + TypeScript
- Vite
- Appwrite (database)
- TMDB API

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Appwrite project & database set up
- TMDB API Key

### Installation

1. **Clone the repo:**

   ```sh
   git clone https://github.com/yourusername/react_movie_app.git
   cd react_movie_app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the project root:

   ```
   VITE_TMBD_API_KEY=your_tmdb_api_key
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_TABLE_ID=your_appwrite_table_id
   ```

4. **Start the development server:**
   ```sh
   npm run dev
   ```

## Project Structure

```
src/
  ├── components/
  │     ├── Search.tsx
  │     ├── Spinner.tsx
  │     └── MovieCard.tsx
  ├── App.tsx
  ├── appwrite.ts
  └── ...
public/
  └── hero_img.png
.env.local
```

## Appwrite Setup

- Create a database and collection (table) for metrics.
- Fields required: `searchTerm` (string), `movie_id` (string), `poster_url` (string), `count` (integer).

## TMDB API

- Get your API key from [TMDB](https://www.themoviedb.org/settings/api).
- Use the Bearer token in your `.env.local`.

## License

MIT

---

**Made with ❤️ using React, Vite, and Appwrite**
