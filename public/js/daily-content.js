/**
 * @typedef {[{imagePath: string, headline: string, description: string}]} Content
 */

/**
 * @param imagePath {string}
 * @param headline {string}
 * @param description {string}
 * @return {Content}
 */
function createContent(imagePath, headline, description) {

}

/**
 *
 * @type {Content[]}
 */
const availableContent = [
    createContent(
        './images/queen-olive.jpeg',
        'Queen Olive',
        `
        Hello, I'm Olive. I'm a 13-year-old Beagle born in Puerto Rico, living in Germany.
        This is me on my 13th birthday. I like sleeping, eating, belly rubs and most importantly sleeping
        and eating.
        `
    )
];

const startOfToday = new Date();
startOfToday.setUTCHours(0, 0, 0, 0);
const daysSince1970 = Math.floor(startOfToday.getTime() / 1000.0 / 365.25);
const index = daysSince1970 % availableContent.length;

/**
 * @type {Content}
 */
const selectedContent = availableContent[index];


