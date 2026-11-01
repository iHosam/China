/**
 * Day-by-Day Itinerary Component
 * Renders individual day cards with:
 * - Multiple pictures per travel day for all activities
 * - Where to go (activities) with Google Maps links & SAR costs
 * - What to eat & drink (100% Halal guaranteed) with Google Maps links & SAR costs
 * - Suggested 5-star hotels with Google Maps links & SAR nightly rates
 * - Itemized daily cost breakdown per activity in SAR
 */

window.ChinaTripApp = window.ChinaTripApp || {};

window.ChinaTripApp.DayView = (function () {
  const Helpers = window.ChinaTripApp.Helpers;

  /**
   * Renders a single Day Card HTML.
   * @param {Object} dayData
   * @returns {string}
   */
  function renderDayCard(dayData) {
    const activitiesCost = dayData.activities.reduce(function (sum, act) {
      return sum + (act.costSAR || 0);
    }, 0);
    const mealsCost = dayData.meals.reduce(function (sum, m) {
      return sum + (m.costSAR || 0);
    }, 0);
    const transportCost = dayData.transport.costSAR || 0;
    const hotelCost = dayData.hotelNightCostSAR || 0;
    const totalDayCostSAR = transportCost + activitiesCost + hotelCost + mealsCost;

    return (
      '<article id="day-card-' +
      dayData.day +
      '" class="day-card" data-city="' +
      dayData.cityId +
      '" data-day="' +
      dayData.day +
      '">' +
      // 1. DAY CARD HEADER
      '<header class="day-card-header">' +
      '<div class="day-header-main">' +
      '<div class="day-badges-row">' +
      '<span class="day-number-pill"><i class="fa-solid fa-calendar-day"></i> اليوم ' +
      dayData.day +
      ' من 20</span>' +
      '<span class="day-city-pill"><i class="fa-solid fa-location-dot" style="color:var(--accent-secondary);"></i> ' +
      dayData.locationTag +
      '</span>' +
      Helpers.renderMapsLink(dayData.cityMapsQuery, 'موقع وصور ' + dayData.cityName + ' على خرائط جوجل') +
      '<span class="halal-badge"><i class="fa-solid fa-check-circle"></i> وجبات ومشروبات حلال 100%</span>' +
      '</div>' +
      '<h3 class="day-title">' +
      dayData.title +
      '</h3>' +
      '<p class="day-subtitle">' +
      dayData.subtitle +
      '</p>' +
      '</div>' +
      '<div class="day-total-cost-box">' +
      '<span class="day-total-label">إجمالي تكلفة اليوم ' +
      dayData.day +
      ' (لشخصين)</span>' +
      '<strong class="day-total-amount">' +
      Helpers.formatSAR(totalDayCostSAR) +
      '</strong>' +
      '<span style="display:block;font-size:0.7rem;color:var(--text-muted);">شامل الفندق والتنقل والأنشطة والوجبات لشخصين</span>' +
      '</div>' +
      '</header>' +
      // 2. MULTI-PICTURE GALLERY FOR ALL ACTIVITIES OF THIS DAY
      '<section class="day-gallery-section" aria-label="معرض صور أنشطة اليوم ' +
      dayData.day +
      '">' +
      '<div class="day-gallery-header">' +
      '<div class="day-gallery-title">' +
      '<i class="fa-solid fa-images"></i>' +
      '<span>معرض صور أنشطة ومعالم اليوم ' +
      dayData.day +
      ' (' +
      dayData.activities.length +
      ' صور لجميع الأنشطة — اضغط على أي صورة للتكبير)</span>' +
      '</div>' +
      '<button type="button" class="maps-link" onclick="window.ChinaTripApp.Lightbox.open(' +
      dayData.day +
      ', 0)">' +
      '<i class="fa-solid fa-expand"></i>' +
      '<span>فتح عارض الصور الكامل</span>' +
      '</button>' +
      '</div>' +
      '<div class="day-photos-grid">' +
      dayData.activities
        .map(function (act, idx) {
          const fallbackImg = Helpers.getFallbackImageDataUri(act.photoLabel);
          return (
            '<div class="day-photo-item" onclick="window.ChinaTripApp.Lightbox.open(' +
            dayData.day +
            ', ' +
            idx +
            ')" role="button" tabindex="0" aria-label="عرض صورة ' +
            act.photoLabel +
            '">' +
            '<img src="' +
            act.photo +
            '" alt="' +
            act.photoLabel +
            '" loading="lazy" onerror="this.onerror=null;this.src=\'' +
            fallbackImg +
            '\';" />' +
            '<span class="day-photo-zoom-badge"><i class="fa-solid fa-magnifying-glass-plus"></i></span>' +
            '<div class="day-photo-overlay">' +
            '<span class="day-photo-caption">' +
            (idx + 1) +
            '. ' +
            act.photoLabel +
            '</span>' +
            '</div>' +
            '</div>'
          );
        })
        .join('') +
      '</div>' +
      '</section>' +
      // 3. DAY BODY: LEFT (ACTIVITIES + HALAL MEALS) & RIGHT (HOTEL + TRANSPORT + COST BREAKDOWN)
      '<div class="day-card-body">' +
      // MAIN COLUMN: ACTIVITIES & HALAL DINING
      '<div class="day-col-main">' +
      // Activities Panel
      '<div class="info-panel">' +
      '<div class="info-panel-title">' +
      '<div class="info-panel-title-label">' +
      '<i class="fa-solid fa-map-location-dot" style="color:var(--accent-primary);"></i>' +
      '<span>أين تذهب؟ الأنشطة والمعالم المقترحة في اليوم ' +
      dayData.day +
      '</span>' +
      '</div>' +
      '<span class="sar-badge">مجموع تذاكر الأنشطة: ' +
      Helpers.formatSAR(activitiesCost) +
      '</span>' +
      '</div>' +
      '<div class="activities-list">' +
      dayData.activities
        .map(function (act, idx) {
          const fallbackThumb = Helpers.getFallbackImageDataUri(act.name);
          return (
            '<div class="activity-item-card">' +
            '<div class="activity-thumb-wrap" onclick="window.ChinaTripApp.Lightbox.open(' +
            dayData.day +
            ', ' +
            idx +
            ')" title="اضغط لتكبير الصورة">' +
            '<img src="' +
            act.photo +
            '" alt="' +
            act.name +
            '" loading="lazy" onerror="this.onerror=null;this.src=\'' +
            fallbackThumb +
            '\';" />' +
            '</div>' +
            '<div class="activity-content">' +
            '<div class="activity-top-row">' +
            '<span class="activity-time-tag"><i class="fa-regular fa-clock"></i> ' +
            act.time +
            '</span>' +
            '<span class="sar-badge">' +
            (act.costSAR > 0 ? Helpers.formatSAR(act.costSAR) : '0 ر.س (' + act.costNote + ')') +
            '</span>' +
            '</div>' +
            '<h4 class="activity-name">' +
            act.name +
            '</h4>' +
            '<p class="activity-desc">' +
            act.description +
            '</p>' +
            '<div class="activity-actions-row">' +
            '<span style="font-size:0.75rem;color:var(--text-muted);"><i class="fa-solid fa-tag"></i> ' +
            act.costNote +
            '</span>' +
            Helpers.renderMapsLink(act.mapsQuery, 'الموقع والمزيد من الصور على خرائط جوجل') +
            '</div>' +
            '</div>' +
            '</div>'
          );
        })
        .join('') +
      '</div>' +
      '</div>' +
      // Halal Meals Panel
      '<div class="halal-panel">' +
      '<div class="info-panel-title">' +
      '<div class="info-panel-title-label">' +
      '<i class="fa-solid fa-utensils" style="color:var(--halal-color);"></i>' +
      '<span>ماذا تأكل وتشرب؟ الوجبات والمطاعم المقترحة (حلال 100%)</span>' +
      '</div>' +
      '<span class="halal-badge"><i class="fa-solid fa-shield-halved"></i> إجمالي الوجبات: ' +
      Helpers.formatSAR(mealsCost) +
      '</span>' +
      '</div>' +
      '<div class="meals-list">' +
      dayData.meals
        .map(function (meal) {
          return (
            '<div class="meal-card">' +
            '<div class="meal-header">' +
            '<span class="meal-type-badge"><i class="fa-solid fa-bowl-rice"></i> ' +
            meal.type +
            '</span>' +
            '<span class="sar-badge">' +
            (meal.costSAR > 0 ? Helpers.formatSAR(meal.costSAR) : 'مشمول (0 ر.س)') +
            '</span>' +
            '</div>' +
            '<h4 class="meal-title">' +
            meal.name +
            '</h4>' +
            '<p style="font-size:0.8rem;font-weight:700;color:var(--accent-primary);"><i class="fa-solid fa-store"></i> ' +
            meal.restaurant +
            '</p>' +
            '<p class="meal-desc">' +
            meal.description +
            '</p>' +
            '<div class="meal-footer">' +
            '<span class="halal-badge" style="font-size:0.72rem;"><i class="fa-solid fa-check"></i> ذبح إسلامي حلال وخالٍ من الكحول</span>' +
            Helpers.renderMapsLink(meal.mapsQuery, 'موقع وصور المطعم على خرائط جوجل') +
            '</div>' +
            '</div>'
          );
        })
        .join('') +
      '</div>' +
      '</div>' +
      '</div>' +
      // SIDE COLUMN: HOTEL, TRANSPORT, & ITEMIZED DAILY COST BREAKDOWN
      '<div class="day-col-side">' +
      // Suggested Hotels Box
      '<div class="hotel-panel">' +
      '<div class="info-panel-title">' +
      '<div class="info-panel-title-label">' +
      '<i class="fa-solid fa-hotel" style="color:var(--hotel-color);"></i>' +
      '<span>الفنادق المقترحة للإقامة (5 نجوم)</span>' +
      '</div>' +
      '<span class="sar-badge sar-badge-warm">' +
      (hotelCost > 0 ? Helpers.formatSAR(hotelCost) + ' / ليلة' : 'يوم المغادرة (0 ر.س)') +
      '</span>' +
      '</div>' +
      '<div class="hotel-options-list">' +
      dayData.hotels
        .map(function (h, hIdx) {
          return (
            '<div class="hotel-option-item">' +
            '<div>' +
            '<div class="hotel-option-name">' +
            (dayData.hotels.length > 1 ? 'الخيار ' + (hIdx + 1) + ': ' : '') +
            h.name +
            '</div>' +
            '<div class="hotel-option-sub">' +
            h.category +
            '</div>' +
            '</div>' +
            Helpers.renderMapsLink(h.mapsQuery, 'صور وموقع الفندق') +
            '</div>'
          );
        })
        .join('') +
      '</div>' +
      '</div>' +
      // Transport & How to Reach Box
      '<div class="transport-panel">' +
      '<div class="info-panel-title" style="margin-bottom:0.5rem;">' +
      '<div class="info-panel-title-label">' +
      '<i class="fa-solid ' +
      dayData.transport.icon +
      '" style="color:var(--transport-color);"></i>' +
      '<span>وسيلة التنقل وكيفية الوصول</span>' +
      '</div>' +
      '<span class="sar-badge">' +
      Helpers.formatSAR(transportCost) +
      '</span>' +
      '</div>' +
      '<p style="font-size:0.88rem;font-weight:800;color:var(--text-primary);margin-bottom:0.3rem;">' +
      dayData.transport.summary +
      '</p>' +
      '<p style="font-size:0.82rem;color:var(--text-secondary);">' +
      dayData.transport.details +
      '</p>' +
      '</div>' +
      // Itemized Cost Breakdown Per Activity in SAR
      '<div class="cost-breakdown-panel">' +
      '<div class="cost-panel-header">' +
      '<span><i class="fa-solid fa-receipt" style="color:var(--accent-primary);margin-left:0.4rem;"></i> تفصيل التكلفة اليومية لكل نشاط وبند لشخصين (ر.س)</span>' +
      '<span class="sar-badge">لشخصين • ر.س</span>' +
      '</div>' +
      '<table class="cost-table">' +
      '<thead>' +
      '<tr>' +
      '<th>البند / النشاط المقترح</th>' +
      '<th>النوع</th>' +
      '<th style="text-align:left;">التكلفة (ر.س)</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      // Each individual activity row
      dayData.activities
        .map(function (act, idx) {
          return (
            '<tr>' +
            '<td>' +
            (idx + 1) +
            '. ' +
            act.name +
            '</td>' +
            '<td><span style="font-size:0.74rem;color:var(--text-muted);">نشاط سياحي</span></td>' +
            '<td class="cost-val">' +
            Helpers.formatSAR(act.costSAR) +
            '</td>' +
            '</tr>'
          );
        })
        .join('') +
      // Transport row
      '<tr>' +
      '<td>' +
      dayData.transport.summary.split('+')[0] +
      ' (التنقلات)</td>' +
      '<td><span style="font-size:0.74rem;color:var(--transport-color);">نقل ومواصلات</span></td>' +
      '<td class="cost-val">' +
      Helpers.formatSAR(transportCost) +
      '</td>' +
      '</tr>' +
      // Hotel row
      '<tr>' +
      '<td>إقامة الليلة (' +
      dayData.hotels[0].name.split(' (')[0] +
      ')</td>' +
      '<td><span style="font-size:0.74rem;color:var(--hotel-color);">سكن 5 نجوم</span></td>' +
      '<td class="cost-val">' +
      Helpers.formatSAR(hotelCost) +
      '</td>' +
      '</tr>' +
      // Each Halal meal row
      dayData.meals
        .map(function (m) {
          return (
            '<tr>' +
            '<td>' +
            m.name +
            '</td>' +
            '<td><span style="font-size:0.74rem;color:var(--halal-color);">طعام حلال</span></td>' +
            '<td class="cost-val">' +
            Helpers.formatSAR(m.costSAR) +
            '</td>' +
            '</tr>'
          );
        })
        .join('') +
      // Subtotal Transport + Activities (matching original HTML reference)
      '<tr style="background-color:var(--bg-surface-Subtle);font-size:0.8rem;">' +
      '<td colspan="2">مجموع التنقلات والأنشطة اليومية</td>' +
      '<td class="cost-val">' +
      Helpers.formatSAR(transportCost + activitiesCost) +
      '</td>' +
      '</tr>' +
      // Grand Daily Total Row
      '<tr class="cost-total-row">' +
      '<td colspan="2">الإجمالي الكلي لليوم ' +
      dayData.day +
      ' (بالريال السعودي)</td>' +
      '<td class="cost-val">' +
      Helpers.formatSAR(totalDayCostSAR) +
      '</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      // Planner Tip Box
      '<div class="planner-tip-box">' +
      '<i class="fa-solid fa-lightbulb"></i>' +
      '<div><strong>نصيحة المخطط لليوم ' +
      dayData.day +
      ':</strong> ' +
      dayData.highlightNote +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</article>'
    );
  }

  /**
   * Renders a list of days based on active city filter or specific day selection.
   * @param {string} cityFilter - 'all' or cityId
   * @param {number|string} dayFilter - 'all' or day number (1-20)
   * @returns {string}
   */
  function renderItineraryList(cityFilter, dayFilter) {
    const allDays = window.ChinaTripApp.ItineraryData;
    const filteredDays = allDays.filter(function (d) {
      if (dayFilter && dayFilter !== 'all' && Number(dayFilter) === d.day) {
        return true;
      }
      if (dayFilter && dayFilter !== 'all' && Number(dayFilter) !== d.day) {
        return false;
      }
      if (!cityFilter || cityFilter === 'all') {
        return true;
      }
      return d.cityId === cityFilter;
    });

    return (
      '<section id="itinerary-days-section" aria-label="الجدول اليومي لرحلة الصين">' +
      '<div class="section-header">' +
      '<div>' +
      '<h2 class="section-title"><i class="fa-solid fa-calendar-days"></i> الخطة اليومية المفصلة (يوم بيوم — ' +
      filteredDays.length +
      ' ' +
      (filteredDays.length === 1 ? 'يوم معروض' : 'يوماً معروضاً') +
      ')</h2>' +
      '<p class="section-subtitle">جميع التكاليف بالريال السعودي (ر.س) فقط • جميع الأطعمة والمشروبات حلال 100% • اضغط على أي رابط لفتح الموقع والصور في خرائط جوجل</p>' +
      '</div>' +
      (cityFilter !== 'all' || (dayFilter && dayFilter !== 'all')
        ? '<button type="button" class="btn btn-secondary" onclick="window.ChinaTripApp.Controller.resetFilters()">' +
          '<i class="fa-solid fa-rotate-right"></i>' +
          '<span>عرض جميع الـ 20 يوماً</span>' +
          '</button>'
        : '') +
      '</div>' +
      '<div class="days-list-container">' +
      filteredDays.map(renderDayCard).join('') +
      '</div>' +
      '</section>'
    );
  }

  return {
    renderDayCard: renderDayCard,
    renderItineraryList: renderItineraryList
  };
})();
