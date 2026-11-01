/**
 * Summary Landing Page Component
 * Renders:
 * 1. Hero Banner with Route & Halal Guarantee
 * 2. SAR-only KPI Budget Cards
 * 3. Interactive Route Stepper with Google Maps links for every city
 * 4. 6 Destination Summary Cards (with activities, Halal specialties, hotels & Maps links)
 * 5. Complete 5-Star Hotels Directory (with SAR prices & Google Maps links)
 * 6. Full 20-Day Cost Summary Table (strictly in SAR)
 */

window.ChinaTripApp = window.ChinaTripApp || {};

window.ChinaTripApp.SummaryPage = (function () {
  const Helpers = window.ChinaTripApp.Helpers;

  /**
   * Computes exact aggregated totals across all 20 days in SAR.
   * @param {Array} itinerary
   */
  function calculateTotals(itinerary) {
    let totalTransport = 0;
    let totalActivities = 0;
    let totalHotels = 0;
    let totalMeals = 0;

    itinerary.forEach(function (day) {
      totalTransport += day.transport.costSAR || 0;
      totalHotels += day.hotelNightCostSAR || 0;
      day.activities.forEach(function (act) {
        totalActivities += act.costSAR || 0;
      });
      day.meals.forEach(function (meal) {
        totalMeals += meal.costSAR || 0;
      });
    });

    return {
      totalTransport: totalTransport,
      totalActivities: totalActivities,
      totalTransportAndActivities: totalTransport + totalActivities,
      totalHotels: totalHotels,
      totalMeals: totalMeals,
      grandTotal: totalTransport + totalActivities + totalHotels + totalMeals
    };
  }

  /**
   * Renders the complete Summary Landing Page HTML.
   */
  function render() {
    const overview = window.ChinaTripApp.CitiesData.tripOverview;
    const cities = window.ChinaTripApp.CitiesData.cities;
    const itinerary = window.ChinaTripApp.ItineraryData;
    const totals = calculateTotals(itinerary);
    const fallbackHero = Helpers.getFallbackImageDataUri(overview.title);

    return (
      '<section id="summary-landing-section" aria-label="ملخص رحلة الصين الكبرى">' +
      // 1. HERO BANNER
      '<div class="hero-banner">' +
      '<img src="' +
      overview.heroImage +
      '" alt="' +
      overview.title +
      '" class="hero-bg-img" onerror="this.onerror=null;this.src=\'' +
      fallbackHero +
      '\';" />' +
      '<div class="hero-overlay"></div>' +
      '<div class="hero-content">' +
      '<div class="hero-badges">' +
      '<span class="hero-badge"><i class="fa-solid fa-calendar-check"></i> 20 يوماً / 19 ليلة فاخرة</span>' +
      '<span class="hero-badge"><i class="fa-solid fa-hotel"></i> فنادق ومنتجعات 5 نجوم</span>' +
      '<span class="hero-badge hero-badge-halal"><i class="fa-solid fa-leaf"></i> طعام ومشروبات حلال 100%</span>' +
      '<span class="hero-badge"><i class="fa-solid fa-coins"></i> التكاليف بالريال السعودي (ر.س) فقط</span>' +
      '</div>' +
      '<h2 class="hero-title">' +
      overview.title +
      '</h2>' +
      '<p class="hero-desc">' +
      overview.subtitle +
      '</p>' +
      '<div class="hero-cta-row">' +
      '<button type="button" class="btn btn-primary" onclick="window.ChinaTripApp.Controller.switchView(\'itinerary\', \'all\')">' +
      '<i class="fa-solid fa-route"></i>' +
      '<span>استعراض الخطة اليومية بالتفصيل (20 يوماً)</span>' +
      '</button>' +
      '<button type="button" class="btn btn-secondary" onclick="window.ChinaTripApp.Controller.scrollToElement(\'summary-hotels-section\')">' +
      '<i class="fa-solid fa-bed"></i>' +
      '<span>الفنادق المقترحة (5 نجوم)</span>' +
      '</button>' +
      '<button type="button" class="btn btn-secondary" onclick="window.ChinaTripApp.Controller.scrollToElement(\'summary-budget-table\')">' +
      '<i class="fa-solid fa-calculator"></i>' +
      '<span>جدول التكاليف التفصيلي (ر.س)</span>' +
      '</button>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // 2. KPI SUMMARY STATS (SAR ONLY)
      '<div class="kpi-grid">' +
      '<div class="kpi-card">' +
      '<div class="kpi-icon jade"><i class="fa-solid fa-plane-up"></i></div>' +
      '<div>' +
      '<p class="kpi-label">إجمالي التنقلات وتذاكر الأنشطة</p>' +
      '<p class="kpi-value">' +
      Helpers.formatSAR(totals.totalTransportAndActivities) +
      '</p>' +
      '<p class="kpi-sub">نقل وطيران وقطارات (' +
      Helpers.formatSAR(totals.totalTransport) +
      ') + أنشطة (' +
      Helpers.formatSAR(totals.totalActivities) +
      ')</p>' +
      '</div>' +
      '</div>' +
      '<div class="kpi-card">' +
      '<div class="kpi-icon amber"><i class="fa-solid fa-hotel"></i></div>' +
      '<div>' +
      '<p class="kpi-label">إجمالي الإقامة الفندقية (19 ليلة)</p>' +
      '<p class="kpi-value">' +
      Helpers.formatSAR(totals.totalHotels) +
      '</p>' +
      '<p class="kpi-sub">فنادق 5 نجوم ومنتجعات فاخرة (أو ~17,200 ر.س بالحجز المبكر)</p>' +
      '</div>' +
      '</div>' +
      '<div class="kpi-card">' +
      '<div class="kpi-icon halal"><i class="fa-solid fa-utensils"></i></div>' +
      '<div>' +
      '<p class="kpi-label">إجمالي الوجبات والمشروبات الحلال</p>' +
      '<p class="kpi-value">' +
      Helpers.formatSAR(totals.totalMeals) +
      '</p>' +
      '<p class="kpi-sub">مطاعم حلال معتمدة 100% طوال الـ 20 يوماً</p>' +
      '</div>' +
      '</div>' +
      '<div class="kpi-card">' +
      '<div class="kpi-icon blue"><i class="fa-solid fa-wallet"></i></div>' +
      '<div>' +
      '<p class="kpi-label">الميزانية الشاملة الكلية التقديرية</p>' +
      '<p class="kpi-value">' +
      Helpers.formatSAR(totals.grandTotal) +
      '</p>' +
      '<p class="kpi-sub">شاملة الطيران، القطارات، الفنادق، الأنشطة، والطعام الحلال</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      // 3. INTERACTIVE ROUTE STEPPER WITH GOOGLE MAPS LINKS
      '<div class="route-box">' +
      '<div class="section-header" style="margin-bottom:0.75rem;">' +
      '<div>' +
      '<h3 class="section-title"><i class="fa-solid fa-map-signs"></i> مسار الرحلة الذكي عبر مدن الصين الست</h3>' +
      '<p class="section-subtitle">' +
      overview.transportOverview +
      '</p>' +
      '</div>' +
      '</div>' +
      '<div class="route-chain">' +
      '<div class="route-stop">' +
      '<span class="route-stop-days">الانطلاق والعودة</span>' +
      '<span class="route-stop-name">الرياض</span>' +
      Helpers.renderMapsLink('King Khalid International Airport Riyadh', 'خرائط جوجل') +
      '</div>' +
      '<i class="fa-solid fa-arrow-left route-arrow"></i>' +
      cities
        .map(function (c) {
          return (
            '<div class="route-stop">' +
            '<span class="route-stop-days">الأيام ' +
            c.dayNumbers[0] +
            '–' +
            c.dayNumbers[c.dayNumbers.length - 1] +
            '</span>' +
            '<span class="route-stop-name">' +
            c.nameAr.split(' (')[0] +
            '</span>' +
            Helpers.renderMapsLink(c.mapsQuery, 'خرائط جوجل') +
            '</div>' +
            '<i class="fa-solid fa-arrow-left route-arrow"></i>'
          );
        })
        .join('') +
      '<div class="route-stop">' +
      '<span class="route-stop-days">اليوم 20</span>' +
      '<span class="route-stop-name">العودة للرياض</span>' +
      Helpers.renderMapsLink('Riyadh Saudi Arabia', 'خرائط جوجل') +
      '</div>' +
      '</div>' +
      '</div>' +
      // 4. SIX DESTINATIONS OVERVIEW CARDS
      '<div class="section-header">' +
      '<div>' +
      '<h3 class="section-title"><i class="fa-solid fa-compass"></i> ملخص المحطات والمدن الست في الرحلة</h3>' +
      '<p class="section-subtitle">اضغط على أي مدينة لاستعراض خطتها اليومية وصور أنشطتها أو افتح موقعها مباشرة في خرائط جوجل لمشاهدة آلاف الصور</p>' +
      '</div>' +
      '</div>' +
      '<div class="cities-grid">' +
      cities
        .map(function (city) {
          const cityFallback = Helpers.getFallbackImageDataUri(city.nameAr);
          const cityTotalSAR =
            city.hotelStayTotalSAR + city.activitiesTransportTotalSAR + city.mealsTotalSAR;

          return (
            '<article class="city-summary-card">' +
            '<div class="city-card-media">' +
            '<img src="' +
            city.coverImage +
            '" alt="' +
            city.nameAr +
            '" loading="lazy" onerror="this.onerror=null;this.src=\'' +
            cityFallback +
            '\';" />' +
            '<span class="city-card-badge">' +
            city.daysRange +
            '</span>' +
            '</div>' +
            '<div class="city-card-body">' +
            '<div class="city-card-header">' +
            '<h4 class="city-card-title">' +
            city.nameAr +
            '</h4>' +
            Helpers.renderMapsLink(city.mapsQuery, 'صور المدينة') +
            '</div>' +
            '<p class="city-card-desc">' +
            city.description +
            '</p>' +
            '<div class="city-card-meta">' +
            '<div><strong><i class="fa-solid fa-plane-departure" style="color:var(--accent-primary);"></i> الوصول:</strong> ' +
            city.arrivalTransport +
            '</div>' +
            '<div><strong><i class="fa-solid fa-utensils" style="color:var(--halal-color);"></i> الطعام الحلال:</strong> ' +
            city.halalSpecialties +
            '</div>' +
            '</div>' +
            '<div>' +
            '<p style="font-size:0.8rem;font-weight:800;margin-bottom:0.4rem;color:var(--text-secondary);">أبرز المعالم (اضغط للصور على خرائط جوجل):</p>' +
            '<div style="display:flex;flex-wrap:wrap;gap:0.35rem;">' +
            city.topHighlights
              .map(function (hl) {
                return Helpers.renderMapsLink(hl.mapsQuery, hl.name);
              })
              .join('') +
            '</div>' +
            '</div>' +
            '<div class="city-card-footer">' +
            '<span class="sar-badge">إجمالي المحطة: ' +
            Helpers.formatSAR(cityTotalSAR) +
            '</span>' +
            '<button type="button" class="btn btn-primary" style="padding:0.4rem 0.85rem;font-size:0.82rem;" onclick="window.ChinaTripApp.Controller.switchView(\'itinerary\', \'' +
            city.id +
            '\')">' +
            '<span>عرض أيام ' +
            city.nameAr.split(' (')[0] +
            '</span>' +
            '<i class="fa-solid fa-arrow-left"></i>' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</article>'
          );
        })
        .join('') +
      '</div>' +
      // 5. SUGGESTED 5-STAR HOTELS DIRECTORY
      '<div id="summary-hotels-section" style="scroll-margin-top:8rem;margin-bottom:2.5rem;">' +
      '<div class="section-header">' +
      '<div>' +
      '<h3 class="section-title"><i class="fa-solid fa-hotel"></i> الفنادق والمنتجعات المقترحة (5 نجوم فاخرة)</h3>' +
      '<p class="section-subtitle">جميع الفنادق المقترحة من فئة 5 نجوم ومنتجعات فاخرة، مع روابط مباشرة لخرائط جوجل لاستعراض الغرف والصور والتقييمات</p>' +
      '</div>' +
      '</div>' +
      '<div class="cities-grid">' +
      cities
        .map(function (city) {
          return (
            '<div class="hotel-panel" style="display:flex;flex-direction:column;gap:0.75rem;">' +
            '<div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">' +
            '<h4 style="font-size:1.05rem;font-weight:800;color:var(--text-primary);"><i class="fa-solid fa-location-dot" style="color:var(--accent-secondary);"></i> ' +
            city.nameAr.split(' (')[0] +
            ' (' +
            city.daysRange +
            ')</h4>' +
            '<span class="sar-badge sar-badge-warm">إجمالي الإقامة: ' +
            Helpers.formatSAR(city.hotelStayTotalSAR) +
            '</span>' +
            '</div>' +
            '<div class="hotel-options-list">' +
            city.hotels
              .map(function (h) {
                return (
                  '<div class="hotel-option-item">' +
                  '<div style="flex:1;min-width:200px;">' +
                  '<div class="hotel-option-name">' +
                  h.nameAr +
                  '</div>' +
                  '<div class="hotel-option-sub">' +
                  h.stars +
                  ' • ' +
                  Helpers.formatSAR(h.pricePerNightSAR) +
                  ' / ليلة — ' +
                  h.features +
                  '</div>' +
                  '</div>' +
                  Helpers.renderMapsLink(h.mapsQuery, 'صور وموقع الفندق') +
                  '</div>'
                );
              })
              .join('') +
            '</div>' +
            '</div>'
          );
        })
        .join('') +
      '</div>' +
      '</div>' +
      // 6. FULL 20-DAY COST BREAKDOWN TABLE IN SAR
      '<div id="summary-budget-table" style="scroll-margin-top:8rem;">' +
      '<div class="section-header">' +
      '<div>' +
      '<h3 class="section-title"><i class="fa-solid fa-table-list"></i> الجدول الشامل لتكاليف الـ 20 يوماً (بالريال السعودي فقط)</h3>' +
      '<p class="section-subtitle">تفصيل دقيق لكل يوم يشمل التنقلات، الأنشطة، الفندق (5 نجوم)، والوجبات الحلال. اضغط على أي يوم للانتقال لتفاصيله الكاملة وصوره.</p>' +
      '</div>' +
      '</div>' +
      '<div class="cost-breakdown-panel" style="overflow-x:auto;">' +
      '<table class="cost-table">' +
      '<thead>' +
      '<tr>' +
      '<th>اليوم</th>' +
      '<th>المدينة والمحطة</th>' +
      '<th>الفندق المقترح (5 نجوم)</th>' +
      '<th>التنقلات (ر.س)</th>' +
      '<th>تذاكر الأنشطة (ر.س)</th>' +
      '<th>إقامة الليلة (ر.س)</th>' +
      '<th>الوجبات الحلال (ر.س)</th>' +
      '<th>إجمالي اليوم (ر.س)</th>' +
      '<th>التفاصيل</th>' +
      '</tr>' +
      '</thead>' +
      '<tbody>' +
      itinerary
        .map(function (day) {
          const actCost = day.activities.reduce(function (acc, a) {
            return acc + (a.costSAR || 0);
          }, 0);
          const mealCost = day.meals.reduce(function (acc, m) {
            return acc + (m.costSAR || 0);
          }, 0);
          const dayTotal =
            (day.transport.costSAR || 0) + actCost + (day.hotelNightCostSAR || 0) + mealCost;

          return (
            '<tr style="cursor:pointer;" onclick="window.ChinaTripApp.Controller.goToDay(' +
            day.day +
            ')">' +
            '<td><strong>اليوم ' +
            day.day +
            '</strong></td>' +
            '<td>' +
            day.cityName +
            ' — <span style="color:var(--text-secondary);font-size:0.8rem;">' +
            day.title +
            '</span></td>' +
            '<td style="font-size:0.8rem;">' +
            day.hotels[0].name.split(' (')[0] +
            '</td>' +
            '<td>' +
            Helpers.formatSAR(day.transport.costSAR) +
            '</td>' +
            '<td>' +
            Helpers.formatSAR(actCost) +
            '</td>' +
            '<td>' +
            Helpers.formatSAR(day.hotelNightCostSAR) +
            '</td>' +
            '<td>' +
            Helpers.formatSAR(mealCost) +
            '</td>' +
            '<td class="cost-val" style="color:var(--accent-primary);">' +
            Helpers.formatSAR(dayTotal) +
            '</td>' +
            '<td><span class="maps-link" style="padding:0.2rem 0.55rem;">عرض اليوم ←</span></td>' +
            '</tr>'
          );
        })
        .join('') +
      '<tr class="cost-total-row">' +
      '<td colspan="3">الإجمالي الكلي لرحلة الـ 20 يوماً (بالريال السعودي)</td>' +
      '<td>' +
      Helpers.formatSAR(totals.totalTransport) +
      '</td>' +
      '<td>' +
      Helpers.formatSAR(totals.totalActivities) +
      '</td>' +
      '<td>' +
      Helpers.formatSAR(totals.totalHotels) +
      '</td>' +
      '<td>' +
      Helpers.formatSAR(totals.totalMeals) +
      '</td>' +
      '<td class="cost-val">' +
      Helpers.formatSAR(totals.grandTotal) +
      '</td>' +
      '<td>100% حلال</td>' +
      '</tr>' +
      '</tbody>' +
      '</table>' +
      '</div>' +
      '</div>' +
      '</section>'
    );
  }

  return {
    calculateTotals: calculateTotals,
    render: render
  };
})();
