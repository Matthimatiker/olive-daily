# Olive Daily

Daily Olive content.
![Alt text](public/images/queen-olive.jpeg "Queen Olive")

## Adding Content

Add a new entry to the `availableContent` array in [daily-content.js](public/js/daily-content.js).

Use the `createContent()` function to create the content.

New content should be added at the end of the array, otherwise it might interfere with already shown images.

Image files must be stored in `public/images`.

## Deployment

The page will be deployed automatically via GitHub Actions when pushing to the `main` branch.

Prerequisites:

- GitHub Pages must be active
- GitHub Pages must be configured to deploy from the branch `gh-pages`

Deploy manually:

    npm install
    npm run deploy