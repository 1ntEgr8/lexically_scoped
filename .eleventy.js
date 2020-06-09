const CleanCSS = require("clean-css");
const Terser = require("terser");
const { DateTime } = require("luxon");

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

    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });
    
    // shortcodes
    eleventyConfig.addShortcode("emoji", (emoji, alt="") => {
        return `<span aria-hidden="true" class="emoji">${emoji}</span>` +
			(alt ? `<span class="sr-only">${alt}</span>` : "");        
    });

    // passthrough copy
    eleventyConfig.addPassthroughCopy("assets");
}
