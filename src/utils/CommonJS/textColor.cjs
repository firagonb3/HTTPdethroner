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

function textColor(color = 0, text = "") {
    const colors = {
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

    if (text === "") {
        return colors.fgRed + "arguments invalids" + colors.reset;
    }

    if (colors[color]) {
        return colors[color] + text + colors.reset;
    } else {
        return text;
    }

}

module.exports = { textColor, colors };