# 11ty-nunjucks-array-limit

Slicing up an array using Nunjucks filters.

```js
eleventyConfig.addFilter("limit", (arr, limit=Infinity) => {
  if (limit < 0) {
    // Return the last N items.
    return arr.slice(limit);
  }
  // Return the first N items.
  return arr.slice(0, limit);
});
```

## USAGE

```njk
{% set arr = range(0, 10) %}

Example 1: `limit` filter with no value returns all items.
{{ arr | limit }}
{# expected: [0,1,2,3,4,5,6,7,8,9] #}

Example 2: `limit` filter with value returns specified number of items.
{{ arr | limit(3) }}
{# expected: [0,1,2] #}

Example 3: `limit` filter with negative value returns specified number of items from end of array.
{{ arr | limit(-3) }}
{# expected: [7,8,9] #}

Example 4: Reversing an array before calling `limit` filter returns items in expected order.
{{ arr | reverse | limit(3) }}
{# expected: [9,8,7] #}
```

**NOTE:** See [index.njk](index.njk) for more examples using the `batch` and `first` filters.
