/**
 * Main Application Controller
 * Coordinates Summary Landing Page, Day-by-Day Itinerary View, City/Day Filters, and Eye-Comfort Theme Toggle.
 */

window.ChinaTripApp = window.ChinaTripApp || {};

window.ChinaTripApp.Controller = (function () {
  let state = {
    activeTab: 'overview', // 'overview' (Summary + Full Itinerary) | 'itinerary' (Focused Itinerary)
    cityFilter: 'all',
    dayFilter: 'all',
    theme: 'light' // 'light' (Soothing Warm Porcelain) | 'dark' (Eye-Comfort Soft Dark)
  };

  function init() {
    // Load saved theme preference if available
    try {
      const savedTheme = localStorage.getItem('china_trip_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        state.theme = savedTheme;
      }
    } catch (e) {
      // Ignore storage errors on restricted file:// contexts
    }

    applyTheme();
    renderNavigationControls();
    renderMainContent();
    bindGlobalEvents();
  }

  function applyTheme() {
    if (state.theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    const themeIcon = document.getElementById('theme-toggle-icon');
    const themeLabel = document.getElementById('theme-toggle-label');
    if (themeIcon) {
      themeIcon.className =
        state.theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
    if (themeLabel) {
      themeLabel.textContent =
        state.theme === 'dark' ? 'الوضع النهاري الدافئ' : 'الوضع الليلي المريح';
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('china_trip_theme', state.theme);
    } catch (e) {}
    applyTheme();
  }

  function renderNavigationControls() {
    // Update main nav tabs
    const tabOverview = document.getElementById('tab-btn-overview');
    const tabItinerary = document.getElementById('tab-btn-itinerary');
    if (tabOverview && tabItinerary) {
      tabOverview.classList.toggle('active', state.activeTab === 'overview');
      tabItinerary.classList.toggle('active', state.activeTab === 'itinerary');
    }

    // Render city filter pills
    const cityPillsContainer = document.getElementById('city-filter-pills');
    if (cityPillsContainer) {
      const cities = window.ChinaTripApp.CitiesData.cities;
      const pills = [
        { id: 'all', label: 'كل المدن (20 يوماً)', icon: 'fa-earth-asia' }
      ].concat(
        cities.map(function (c) {
          return {
            id: c.id,
            label:
              c.nameAr.split(' (')[0] +
              ' (أيام ' +
              c.dayNumbers[0] +
              '–' +
              c.dayNumbers[c.dayNumbers.length - 1] +
              ')',
            icon: 'fa-location-dot'
          };
        })
      );

      cityPillsContainer.innerHTML = pills
        .map(function (p) {
          const isActive = state.cityFilter === p.id && state.dayFilter === 'all';
          return (
            '<button type="button" class="city-filter-pill ' +
            (isActive ? 'active' : '') +
            '" onclick="window.ChinaTripApp.Controller.filterByCity(\'' +
            p.id +
            '\')">' +
            '<i class="fa-solid ' +
            p.icon +
            '"></i>' +
            '<span>' +
            p.label +
            '</span>' +
            '</button>'
          );
        })
        .join('');
    }

    // Populate quick day select dropdown
    const daySelect = document.getElementById('quick-day-select');
    if (daySelect) {
      const allDays = window.ChinaTripApp.ItineraryData;
      daySelect.innerHTML =
        '<option value="all"' +
        (state.dayFilter === 'all' ? ' selected' : '') +
        '>انتقال سريع ليوم محدد (1 – 20)...</option>' +
        allDays
          .map(function (d) {
            const selected = Number(state.dayFilter) === d.day ? ' selected' : '';
            return (
              '<option value="' +
              d.day +
              '"' +
              selected +
              '>اليوم ' +
              d.day +
              ': ' +
              d.cityName +
              ' — ' +
              d.title.slice(0, 38) +
              '...</option>'
            );
          })
          .join('');
    }
  }

  function renderMainContent() {
    const root = document.getElementById('app-main-root');
    if (!root) return;

    if (state.activeTab === 'overview') {
      // Render Summary Landing Page + Full Day-by-Day Itinerary below it
      root.innerHTML =
        window.ChinaTripApp.SummaryPage.render() +
        '<hr style="border:none;border-top:2px solid var(--border-subtle);margin-block:3rem;" />' +
        window.ChinaTripApp.DayView.renderItineraryList(
          state.cityFilter,
          state.dayFilter
        );
    } else {
      // Focused Day-by-Day Itinerary View
      root.innerHTML = window.ChinaTripApp.DayView.renderItineraryList(
        state.cityFilter,
        state.dayFilter
      );
    }
  }

  function switchView(viewName, optionalCityId) {
    state.activeTab = viewName === 'itinerary' ? 'itinerary' : 'overview';
    if (optionalCityId) {
      state.cityFilter = optionalCityId;
      state.dayFilter = 'all';
    }
    renderNavigationControls();
    renderMainContent();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterByCity(cityId) {
    state.cityFilter = cityId || 'all';
    state.dayFilter = 'all';
    renderNavigationControls();
    renderMainContent();

    const itinerarySection = document.getElementById('itinerary-days-section');
    if (itinerarySection && state.activeTab === 'overview' && cityId !== 'all') {
      itinerarySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function filterByDay(dayNumber) {
    if (!dayNumber || dayNumber === 'all') {
      state.dayFilter = 'all';
      renderNavigationControls();
      renderMainContent();
      return;
    }
    state.dayFilter = Number(dayNumber);
    state.cityFilter = 'all';
    renderNavigationControls();
    renderMainContent();

    const itinerarySection = document.getElementById('itinerary-days-section');
    if (itinerarySection) {
      itinerarySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function goToDay(dayNumber) {
    state.cityFilter = 'all';
    state.dayFilter = 'all';
    renderNavigationControls();
    renderMainContent();

    setTimeout(function () {
      const card = document.getElementById('day-card-' + dayNumber);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  }

  function resetFilters() {
    state.cityFilter = 'all';
    state.dayFilter = 'all';
    renderNavigationControls();
    renderMainContent();
  }

  function scrollToElement(elementId) {
    if (state.activeTab !== 'overview') {
      state.activeTab = 'overview';
      renderNavigationControls();
      renderMainContent();
    }
    setTimeout(function () {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  }

  function bindGlobalEvents() {
    document.addEventListener('keydown', function (e) {
      const modal = document.getElementById('lightbox-modal');
      if (!modal || !modal.classList.contains('open')) return;
      if (e.key === 'Escape') {
        window.ChinaTripApp.Lightbox.close();
      } else if (e.key === 'ArrowLeft') {
        window.ChinaTripApp.Lightbox.next();
      } else if (e.key === 'ArrowRight') {
        window.ChinaTripApp.Lightbox.prev();
      }
    });
  }

  return {
    init: init,
    toggleTheme: toggleTheme,
    switchView: switchView,
    filterByCity: filterByCity,
    filterByDay: filterByDay,
    goToDay: goToDay,
    resetFilters: resetFilters,
    scrollToElement: scrollToElement
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  window.ChinaTripApp.Controller.init();
});
