const CleanCSS = require("clean-css");
const Terser = require("terser");

module.exports = eleventyConfig => {
    // filters
    eleventyConfig.addFilter("cssmin", (code) => {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter("jsmin", (code) => {
        let minified = Terser.minify(code);
        if (minified.error) {
            console.log("Terser error: ", minified.error);
            return code;
        }
    });
    
    // shortcodes
    eleventyConfig.addShortcode("emoji", (emoji, alt="") => {
        return `<span aria-hidden="true" class="emoji">${emoji}</span>` +
			(alt ? `<span class="sr-only">${alt}</span>` : "");        
    });

    // passthrough copy
    eleventyConfig.addPassthroughCopy("assets");
}
