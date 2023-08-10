/**
 * @typedef {{imagePath: string, headline: string, description: string}} Content
 */

/**
 * @type {Content[]}
 */
const availableContent = [
    createContent(
        './images/queen-olive.jpeg',
        'Queen Olive',
        `Hello, I'm Olive. I'm a 13-year-old Beagle born in Puerto Rico, living in Germany.
        This is me on my 13th birthday. I like sleeping, eating, belly rubs and most importantly sleeping
        and eating.
        `
    ),
    createContent(
        './images/olive-pulli.jpeg',
        'SparkPaws Hoodie',
        `I don't like being cold, but also I don't like wearing things. But the SparkPaw Hoodies are cozy,
        warm and simply awesome.`
    )
];

/**
 * @param imagePath {string}
 * @param headline {string}
 * @param description {string}
 * @return {Content}
 */
function createContent(imagePath, headline, description) {
    return {
        imagePath: imagePath,
        headline: headline,
        description: description,
    };
}

function hideSpinnerAndShowContent() {
    const spinnerBlock = document.getElementById("spinner-block");
    const contentBlock = document.getElementById("content-block");
    spinnerBlock.style.display = "none";
    contentBlock.style.display = "block";
}

/**
 * @param content {Content}
 */
function renderContent(content) {
    const headline = document.getElementById("content-headline");
    const text = document.getElementById("content-text");
    const image = document.getElementById("content-image");

    headline.innerHTML = content.headline;
    text.innerHTML = replaceLinebreaks(content.description);
    image.onload = () => hideSpinnerAndShowContent();
    image.src = content.imagePath;
    image.alt = content.headline;
    // Ensure that the browser begins downloading the image, although it may not be visible yet.
    image.loading = "eager";
}

/**
 *
 * @param text {string}
 * @return {string} Text with HTML line breaks.
 */
function replaceLinebreaks(text) {
    return text.replace("\n", "<br>");
}

const startOfToday = new Date();
startOfToday.setUTCHours(0, 0, 0, 0);
const daysSince1970 = Math.floor(startOfToday.getTime() / 1000.0 / 365.25);
const index = daysSince1970 % availableContent.length;

/**
 * @type {Content}
 */
const selectedContent = availableContent[index];

renderContent(selectedContent);
