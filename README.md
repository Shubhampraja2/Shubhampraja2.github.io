
  # Modern Shabari Website Design

  This is a code bundle for Modern Shabari Website Design. The original project is available at https://www.figma.com/design/KDNfU49h1Bf6S4YX8JyR7a/Modern-Shabari-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deployment to GitHub Pages

  This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

  ### Setup Instructions

  1. **Enable GitHub Pages:**
     - Go to your repository Settings → Pages
     - Under "Build and deployment", set Source to "GitHub Actions"

  2. **Deploy:**
     - Push changes to the `main` branch
     - The GitHub Actions workflow will automatically build and deploy your site
     - Your site will be available at `https://{username}.github.io/` (replace {username} with your GitHub username)

  ### Manual Build

  To build the project locally:

  ```bash
  npm run build
  ```

  The built files will be in the `dist/` directory.
  