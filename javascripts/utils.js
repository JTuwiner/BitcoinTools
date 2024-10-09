/**
 * Utility functions for the application.
 *
 * use `import { formatUSD } from './utils.js';` to import the function.
 *
 * Make sure to then add the script that imports this file with a type="module" attribute:
 * Do this by using the YAML front matter in the markdown file:
 *
 *    include_module_javascript:
 *      - ./path/to/file-that-imports-utils.js
 *
 * Add any generic utility functions here and export them. Once this file grows beyond a few (10?)
 * functions, break them out into separate files and import them here. e.g. currency.js, date.js, etc.
 */

// Format a number as USD currency
function formatUSD(value) {
  const isNumber = typeof value === 'number';
  if (!isNumber) {
    throw new Error('Value must be a number');
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export { formatUSD };
