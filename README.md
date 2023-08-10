# Olive Daily

Daily Olive content.
![Alt text](public/images/queen-olive.jpeg "Queen Olive")

## Adding Content

Add a new entry to the `availableContent` array in [daily-content.js](public/js/daily-content.js).

Use the `createContent()` function to create the content.

New content should be added at the end of the array, otherwise it might interfere with already shown images.

Image files must be stored in `public/images`.

## Debugging Content

Usually, new content is shown each day (UTC).

When adding new content, it is desirable to review it before deploying.
To do so, add the `content` query parameter with the numeric index of the content to the URL.

Example for the IntelliJ webserver (address may change on each local system):

    http://localhost:63342/olive-daily/public/index.html?_ijt=9g6fqea0cscnch2r8c1i4pfo1i&_ij_reload=RELOAD_ON_SAVE&content=2

## Favicon

The favicon has been generated with https://realfavicongenerator.net/.

## Deployment

The page will be deployed automatically via GitHub Actions when pushing to the `main` branch.

Prerequisites:

- GitHub Pages must be active
- GitHub Pages must be configured to deploy from the branch `gh-pages`

Deploy manually:

    npm install
    npm run deploy