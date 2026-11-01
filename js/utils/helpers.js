/**
 * Shared Utility Functions:
 * - Google Maps URL Builder (for cities, hotels, activities, and Halal restaurants)
 * - SAR Currency Formatter (strictly Saudi Riyals only)
 * - Graceful SVG Image Fallback Generator
 */

window.ChinaTripApp = window.ChinaTripApp || {};

window.ChinaTripApp.Helpers = (function () {
  /**
   * Builds a direct Google Maps link for any place, hotel, city, or restaurant
   * so the user can view exact locations and browse Google Maps photos.
   * @param {string} query
   * @returns {string}
   */
  function buildGoogleMapsUrl(query) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query);
  }

  /**
   * Formats numeric SAR values strictly in Saudi Riyals (ر.س) with thousands separators.
   * @param {number} amount
   * @param {boolean} [showZeroLabel=false]
   * @returns {string}
   */
  function formatSAR(amount, showZeroLabel) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      return '0 ر.س';
    }
    if (amount === 0 && showZeroLabel) {
      return 'مشمول / مجاناً (0 ر.س)';
    }
    return amount.toLocaleString('en-US') + ' ر.س';
  }

  /**
   * Creates an HTML anchor tag linking to Google Maps for more photos & location details.
   * @param {string} query
   * @param {string} [label='خرائط جوجل والصور']
   * @returns {string}
   */
  function renderMapsLink(query, label) {
    const text = label || 'خرائط جوجل والصور';
    const url = buildGoogleMapsUrl(query);
    return (
      '<a href="' +
      url +
      '" target="_blank" rel="noopener noreferrer" class="maps-link" title="اضغط لعرض الموقع والمزيد من الصور على خرائط جوجل">' +
      '<i class="fa-solid fa-map-location-dot"></i>' +
      '<span>' +
      text +
      '</span>' +
      '<i class="fa-solid fa-arrow-up-left-from-square" style="font-size:0.65rem;opacity:0.8;"></i>' +
      '</a>'
    );
  }

  /**
   * Generates a calm, eye-friendly SVG Data URI fallback if a network image cannot load.
   * @param {string} title
   * @returns {string}
   */
  function getFallbackImageDataUri(title) {
    const safeTitle = (title || 'رحلة الصين الكبرى').replace(/[<>&"']/g, '');
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">' +
      '<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">' +
      '<stop offset="0%" stop-color="#1D3532"/><stop offset="100%" stop-color="#0F6E56"/>' +
      '</linearGradient></defs>' +
      '<rect width="800" height="500" fill="url(#g)"/>' +
      '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#F6F4EE" font-family="Tajawal, sans-serif" font-size="26" font-weight="bold">' +
      safeTitle +
      '</text></svg>';
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  return {
    buildGoogleMapsUrl: buildGoogleMapsUrl,
    formatSAR: formatSAR,
    renderMapsLink: renderMapsLink,
    getFallbackImageDataUri: getFallbackImageDataUri
  };
})();
