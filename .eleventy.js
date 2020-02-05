module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("limit", (arr, limit=Infinity) => {
    if (limit < 0) {
      // Return the last N items.
      return arr.slice(limit);
    }
    // Return the first N items.
    return arr.slice(0, limit);
  });
};
