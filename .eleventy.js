const CleanCSS = require("clean-css");

module.exports = eleventyConfig => {
    // filters
    eleventyConfig.addFilter("cssmin", (code) => {
        return new CleanCSS({}).minify(code).styles;
    });
    
    // shortcodes
    eleventyConfig.addShortcode("emoji", (emoji, alt="") => {
        return `<span aria-hidden="true" class="emoji">${emoji}</span>` +
			(alt ? `<span class="sr-only">${alt}</span>` : "");        
    });
}
