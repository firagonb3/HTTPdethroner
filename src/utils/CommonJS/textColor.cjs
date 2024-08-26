const colors = {
    reset: "reset",
    bright: "bright",
    dim: "dim",
    underscore: "underscore",
    blink: "blink",
    reverse: "reverse",
    hidden: "hidden",
    fgBlack: "fgBlack",
    fgRed: "fgRed",
    fgGreen: "fgGreen",
    fgYellow: "fgYellow",
    fgBlue: "fgBlue",
    fgMagenta: "fgMagenta",
    fgCyan: "fgCyan",
    fgWhite: "fgWhite",
    bgBlack: "bgBlack",
    bgRed: "bgRed",
    bgGreen: "bgGreen",
    bgYellow: "bgYellow",
    bgBlue: "bgBlue",
    bgMagenta: "bgMagenta",
    bgCyan: "bgCyan",
    bgWhite: "bgWhite"
};

const colorCodes = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    fgBlack: "\x1b[30m",
    fgRed: "\x1b[31m",
    fgGreen: "\x1b[32m",
    fgYellow: "\x1b[33m",
    fgBlue: "\x1b[34m",
    fgMagenta: "\x1b[35m",
    fgCyan: "\x1b[36m",
    fgWhite: "\x1b[37m",
    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m"
};

/**
 * Format the given text with the specified color.
 * @param {string} color - The color code to apply.
 * @param {string} text - The text to format.
 * @returns {string} - The formatted text.
 */

function textColor(color, text = "") {
    if (typeof color !== 'string' || !colorCodes[color]) {
        return `${colorCodes.fgRed}Invalid color code${colorCodes.reset}`;
    }

    if (text === "") {
        return `${colorCodes.fgRed}No text provided${colorCodes.reset}`;
    }

    return `${colorCodes[color]}${text}${colorCodes.reset}`;
}
module.exports = { textColor, colors };