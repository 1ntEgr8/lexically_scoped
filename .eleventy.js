module.exports = eleventyConfig => {
    eleventyConfig.addShortcode("emoji", (emoji, alt="") => {
        return `<span aria-hidden="true" class="emoji">${emoji}</span>` +
			(alt ? `<span class="sr-only">${alt}</span>` : "");        
    })
}
