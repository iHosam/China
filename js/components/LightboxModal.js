/**
 * Full-Screen Lightbox Gallery Modal Component
 * Allows browsing all activity photos of any travel day and jumping directly to Google Maps for more photos.
 */

window.ChinaTripApp = window.ChinaTripApp || {};

window.ChinaTripApp.Lightbox = (function () {
  const Helpers = window.ChinaTripApp.Helpers;
  let activeDayNumber = 1;
  let activePhotoIndex = 0;

  function getDayObj(dayNum) {
    return (
      window.ChinaTripApp.ItineraryData.find(function (d) {
        return d.day === Number(dayNum);
      }) || window.ChinaTripApp.ItineraryData[0]
    );
  }

  function open(dayNum, photoIdx) {
    activeDayNumber = Number(dayNum) || 1;
    activePhotoIndex = Number(photoIdx) || 0;
    updateModalDOM();
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  function close() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  function next() {
    const dayObj = getDayObj(activeDayNumber);
    activePhotoIndex = (activePhotoIndex + 1) % dayObj.activities.length;
    updateModalDOM();
  }

  function prev() {
    const dayObj = getDayObj(activeDayNumber);
    activePhotoIndex =
      (activePhotoIndex - 1 + dayObj.activities.length) % dayObj.activities.length;
    updateModalDOM();
  }

  function updateModalDOM() {
    const dayObj = getDayObj(activeDayNumber);
    const act = dayObj.activities[activePhotoIndex] || dayObj.activities[0];
    const imgEl = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-desc');
    const mapsContainer = document.getElementById('lightbox-maps-container');
    const counterEl = document.getElementById('lightbox-counter');

    if (imgEl) {
      imgEl.src = act.photo;
      imgEl.alt = act.photoLabel;
      imgEl.onerror = function () {
        this.onerror = null;
        this.src = Helpers.getFallbackImageDataUri(act.photoLabel);
      };
    }
    if (titleEl) {
      titleEl.textContent =
        'اليوم ' + dayObj.day + ' (' + dayObj.cityName + '): ' + act.name;
    }
    if (descEl) {
      descEl.textContent = act.description;
    }
    if (counterEl) {
      counterEl.textContent =
        'صورة ' + (activePhotoIndex + 1) + ' من ' + dayObj.activities.length;
    }
    if (mapsContainer) {
      mapsContainer.innerHTML =
        '<span class="sar-badge" style="margin-left:0.5rem;">' +
        Helpers.formatSAR(act.costSAR, true) +
        '</span>' +
        Helpers.renderMapsLink(act.mapsQuery, 'عرض المزيد من الصور في خرائط جوجل');
    }
  }

  return {
    open: open,
    close: close,
    next: next,
    prev: prev
  };
})();
