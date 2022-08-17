# The Fitting Room take home task

## Setup

To run the project, you must have `Node.js` installed. Clone the project and run:

```
npm install
```

After the dependencies have been installed, copy the `.env.local` file to `.env` and fill the `VITE_PEXELS_API_KEY` with a valid Pexels API KEY.

Run the following command

```
npm run dev
```

The project should be available at `http://localhost:5173/`

## Technology Choices

**React + Vite**: Strong frontend framework with a fast tool for compiling seemed to be the right choice for this kind of application

**TailwindCSS**: Utility first CSS framework provided fast styling without worrying too much about configuration. TailwindCSS was the right choice here for me because it had the perfect balance between showing my CSS knowledge, a fast development experience and provided enough tools to create beautiful styling for the final result.

**React Spring**: Modern React animation library that handles the loading animation for the photo gallery on page load. It's simplicity and flexible hook support was enough for this choice for this project.
