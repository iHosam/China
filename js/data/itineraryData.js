/**
 * Complete 20-Day China Itinerary Data
 * - All content in Arabic
 * - All costs strictly in SAR (ر.س) only
 * - Itemized cost breakdown per activity, transport, hotel, and Halal meals
 * - Multiple verified high-resolution photos per day covering every activity
 * - 100% Halal food & non-alcoholic drinks guaranteed
 * - Direct Google Maps search queries for every city, hotel, activity, and restaurant
 */

window.ChinaTripApp = window.ChinaTripApp || {};

window.ChinaTripApp.ItineraryData = [
  // ==========================================
  // DAY 1: BEIJING
  // ==========================================
  {
    day: 1,
    cityId: 'beijing',
    cityName: 'بكين',
    cityMapsQuery: 'Beijing China',
    daysBadge: 'اليوم 1 • بكين',
    locationTag: 'بكين • وسط المدينة وشارع وانغفوجينغ',
    title: 'الانطلاق من الرياض والوصول إلى العاصمة الإمبراطورية بكين',
    subtitle: 'رحلة طيران دولية مباشرة من الرياض إلى بكين، واستقبال خاص بالسيارة الفاخرة، ثم جولة مسائية هادئة في قلب العاصمة مع عشاء بط بكين الحلال الفاخر.',
    transport: {
      summary: 'طيران دولي مباشر من الرياض (RUH) إلى بكين (PEK) + سيارة خاصة فخمة للاستقبال',
      details: 'استقبال خاص من صالة الوصول بمطار بكين العاصمة الدولي، والتوجه مباشرة عبر سيارة سيدان فاخرة مع سائق إلى الفندق المختار في بكين.',
      costSAR: 2700,
      icon: 'fa-plane-arrival'
    },
    hotels: [
      {
        name: 'فندق نيو ريزورت بكين (NUO Resort Hotel Beijing)',
        category: '5 نجوم فاخر',
        mapsQuery: 'NUO Resort Hotel Beijing'
      },
      {
        name: 'فندق يونيفرسال ستوديوز جراند (The Universal Studios Grand Hotel)',
        category: '5 نجوم فاخر',
        mapsQuery: 'The Universal Studios Grand Hotel Beijing'
      }
    ],
    hotelNightCostSAR: 900,
    activities: [
      {
        id: 'd1-a1',
        time: 'صباحاً / ظهراً',
        name: 'الوصول إلى مطار بكين العاصمة الدولي والاستقبال الخاص',
        description: 'إنهاء إجراءات الدخول والجوازات بسلاسة تامة والاستقبال من قِبل السائق الخاص في صالة كبار الزوار.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة الطيران والاستقبال',
        mapsQuery: 'Beijing Capital International Airport',
        photo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الوصول إلى مطار بكين الدولي'
      },
      {
        id: 'd1-a2',
        time: 'عصراً',
        name: 'تسجيل الدخول في الفندق الفاخر (5 نجوم) والراحة',
        description: 'استلام الغرف الفاخرة وأخذ قسط من الراحة والانتعاش بعد رحلة الطيران الدولية المباشرة.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة الإقامة الفندقية',
        mapsQuery: 'NUO Resort Hotel Beijing',
        photo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الفندق الفاخر (5 نجوم) في بكين'
      },
      {
        id: 'd1-a3',
        time: 'مساءً',
        name: 'جولة مسائية في شارع المشاة الحيوي (وانغفوجينغ Wangfujing)',
        description: 'المشي في أشهر شوارع بكين التجارية المضيئة ليلاً ومشاهدة العمارة التي تمزج بين الأصالة والحداثة.',
        costSAR: 0,
        costNote: 'جولة مفتوحة مجانية',
        mapsQuery: 'Wangfujing Pedestrian Street Beijing',
        photo: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'معالم بكين العريقة وأجواء المساء'
      },
      {
        id: 'd1-a4',
        time: 'ليلاً',
        name: 'استكشاف الأسواق الليلية والتسوق الخفيف في وانغفوجينغ',
        description: 'زيارة المتاجر العصرية والمقاهي الراقية في جادة وانغفوجينغ وشراء المستلزمات التذكارية الأولى.',
        costSAR: 100,
        costNote: 'جولة ومشتريات خفيفة في السوق الليلي',
        mapsQuery: 'Wangfujing Department Store Beijing',
        photo: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'شارع وانغفوجينغ الحيوي ليلاً'
      }
    ],
    meals: [
      {
        type: 'عشاء ترحيبي حلال 100%',
        name: 'بط بكين المشوي الحلال المعتمد على حطب الفواكه',
        restaurant: 'مطعم زيغوانغيوان الحلال العريق (Ziguangyuan Halal Roast Duck Beijing)',
        description: 'بط بكين المشوي التقليدي المذبوح على الطريقة الإسلامية (حلال 100% Qingzhen) يقدم مع رقائق البانكيك والصلصة الحلوة والبصل الأخضر.',
        costSAR: 220,
        mapsQuery: 'Ziguangyuan Halal Restaurant Beijing'
      },
      {
        type: 'المشروبات والضيافة الحلال',
        name: 'شاي الياسمين الصيني الفاخر وحلويات الباستري الحلال',
        restaurant: 'دار الشاي الإمبراطوري الحلال في وانغفوجينغ',
        description: 'إبريق شاي صيني معطر بالياسمين الطبيعي مع تشكيلة معجنات بكين التقليدية المصنوعة بزيوت نباتية صافية (خالية تماماً من الكحول وأي دهون غير حلال).',
        costSAR: 60,
        mapsQuery: 'Wangfujing Halal Bakery Beijing'
      }
    ],
    highlightNote: 'احرص على ضبط الساعة على التوقيت المحلي لبكين (فارق 5 ساعات متقدمة عن توقيت الرياض) والنوم المبكر استعداداً لجولة القصور الإمبراطورية غداً.'
  },

  // ==========================================
  // DAY 2: BEIJING
  // ==========================================
  {
    day: 2,
    cityId: 'beijing',
    cityName: 'بكين',
    cityMapsQuery: 'Beijing China',
    daysBadge: 'اليوم 2 • بكين',
    locationTag: 'بكين • قلب التاريخ الإمبراطوري',
    title: 'استكشاف السحر الإمبراطوري: ميدان تيانانمن والمدينة المحرمة',
    subtitle: 'جولة عميقة في أعظم قصور الأباطرة التاريخية والحدائق الإمبراطورية المطلة على العاصمة، يتبعها ركوب العربات في أزقة هوتونغ التراثية.',
    transport: {
      summary: 'سيارة خاصة فاخرة مع سائق مرشد طوال اليوم + مترو بكين السياحي عند الحاجة',
      details: 'الانطلاق صباحاً بسيارة خاصة مباشرة إلى ميدان تيانانمن، ثم العبور سيراً عبر بوابة السماء إلى القصر الإمبراطوري وحديقة جينغشان.',
      costSAR: 120,
      icon: 'fa-monument'
    },
    hotels: [
      {
        name: 'فندق نيو ريزورت بكين (NUO Resort Hotel Beijing)',
        category: '5 نجوم فاخر',
        mapsQuery: 'NUO Resort Hotel Beijing'
      },
      {
        name: 'فندق يونيفرسال ستوديوز جراند (The Universal Studios Grand Hotel)',
        category: '5 نجوم فاخر',
        mapsQuery: 'The Universal Studios Grand Hotel Beijing'
      }
    ],
    hotelNightCostSAR: 900,
    activities: [
      {
        id: 'd2-a1',
        time: 'صباحاً (8:30 ص)',
        name: 'زيارة ميدان تيانانمن التاريخي (Tiananmen Square)',
        description: 'التجول في أكبر ميدان حضري مفتوح في العالم ومشاهدة قاعة الشعب الكبرى وبوابة السلام السماوي.',
        costSAR: 0,
        costNote: 'دخول مجاني بالحجز المسبق للمجموعة',
        mapsQuery: 'Tiananmen Square Beijing',
        photo: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'بوابة وميدان تيانانمن في بكين'
      },
      {
        id: 'd2-a2',
        time: 'ضحى (10:00 ص)',
        name: 'استكشاف قاعات وأجنحة المدينة المحرمة (Forbidden City)',
        description: 'عبور القصور الإمبراطورية ومتحف القصر الذي يضم أكثر من 900 مبنى أثري وحدائق الأباطرة.',
        costSAR: 110,
        costNote: 'تذكرة دخول VIP شاملة المعارض الخاصة والدليل الصوتي',
        mapsQuery: 'Forbidden City Palace Museum Beijing',
        photo: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'قاعات المدينة المحرمة الإمبراطورية'
      },
      {
        id: 'd2-a3',
        time: 'عصراً (3:30 م)',
        name: 'صعود تلة حديقة جينغشان لبنوراما المدينة المحرمة (Jingshan Park)',
        description: 'الصعود إلى جناح وان تشون على قمة التلة لمشاهدة إطلالة بانورامية ذهبية ساحرة لأسطح المدينة المحرمة بأكملها.',
        costSAR: 25,
        costNote: 'تذكرة دخول الحديقة الإمبراطورية والمنصة العلوية',
        mapsQuery: 'Jingshan Park Beijing',
        photo: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'بانوراما المدينة المحرمة من تلة جينغشان'
      },
      {
        id: 'd2-a4',
        time: 'مساءً (6:00 م)',
        name: 'جولة أزقة هوتونغ التاريخية بالعربات التقليدية (Hutongs & Shichahai)',
        description: 'ركوب العربات التراثية (Rickshaw) عبر أزقة بكين القديمة المطلة على بحيرة شيتشاهاي وزيارة شارع نيو جيه الإسلامي التاريخي.',
        costSAR: 95,
        costNote: 'جولة العربات التراثية الخاصة حول البحيرة والأزقة',
        mapsQuery: 'Shichahai Hutong Beijing',
        photo: 'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أزقة هوتونغ التاريخية وبحيرة شيتشاهاي'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'نودلز العاصمة الشهيرة بلحم البقر الحلال (Halal Zhajiangmian)',
        restaurant: 'مطعم بكين الإسلامي التقليدي في حي هوتونغ',
        description: 'شعيرية يدوية طازجة تقدم مع صلصة فول الصويا المحمصة وقطع لحم البقر الحلال المذبوح إسلامياً والخضروات المقرمشة وعصير الفواكه الطازج.',
        costSAR: 75,
        mapsQuery: 'Niujie Halal Restaurant Beijing'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'شرائح لحم الضأن الحلال في القدر النحاسي التقليدي (هوت بوت بكيني)',
        restaurant: 'مطعم دونغ لاي شون الحلال الشهير (Donglaishun Halal Restaurant)',
        description: 'أشهر مطعم إسلامي تاريخي في بكين منذ عام 1903؛ شرائح لحم ضأن حلال طرية تطهى في مرق نقي مع صلصة السمسم الحلال وشاي الأعشاب.',
        costSAR: 185,
        mapsQuery: 'Donglaishun Halal Restaurant Beijing'
      }
    ],
    highlightNote: 'تذاكر المدينة المحرمة محددة بعدد زوار يومي صارم؛ لذلك يتم حجزها مسبقاً بجواز السفر قبل 7 أيام لضمان الدخول السريع.'
  },

  // ==========================================
  // DAY 3: BEIJING
  // ==========================================
  {
    day: 3,
    cityId: 'beijing',
    cityName: 'بكين',
    cityMapsQuery: 'Beijing China',
    daysBadge: 'اليوم 3 • بكين',
    locationTag: 'بكين • سور الصين العظيم (موتيان يو)',
    title: 'الوقوف على إحدى عجائب الدنيا: سور الصين العظيم (قسم موتيان يو)',
    subtitle: 'رحلة طبيعية خلابة إلى قسم موتيان يو الأكثر جمالاً والأقل ازدحاماً من سور الصين، مع تجربة التلفريك المكشوف والزحلوقة الجبلية الممتعة.',
    transport: {
      summary: 'سيارة خاصة فاخرة لرحلة الذهاب والعودة (حوالي ساعة ونصف لكل اتجاه)',
      details: 'انطلاق صباحي مريح عبر سيارة الفندق الخاصة مباشرة إلى محطة سور موتيان يو مع توفير تذاكر المسار السريع والحافلة الداخلية.',
      costSAR: 320,
      icon: 'fa-mountain'
    },
    hotels: [
      {
        name: 'فندق نيو ريزورت بكين (NUO Resort Hotel Beijing)',
        category: '5 نجوم فاخر',
        mapsQuery: 'NUO Resort Hotel Beijing'
      },
      {
        name: 'فندق يونيفرسال ستوديوز جراند (The Universal Studios Grand Hotel)',
        category: '5 نجوم فاخر',
        mapsQuery: 'The Universal Studios Grand Hotel Beijing'
      }
    ],
    hotelNightCostSAR: 900,
    activities: [
      {
        id: 'd3-a1',
        time: 'صباحاً (9:30 ص)',
        name: 'الصعود بالتلفريك إلى أبراج المراقبة في سور موتيان يو (Mutianyu Cable Car)',
        description: 'ركوب التلفريك البانورامي فوق الغابات الجبلية الكثيفة للوصول مباشرة إلى برج المراقبة رقم 14 على قمة السور.',
        costSAR: 110,
        costNote: 'تذكرة التلفريك الصاعد إلى قمة السور',
        mapsQuery: 'Mutianyu Great Wall Cable Car',
        photo: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'سور الصين العظيم في قسم موتيان يو'
      },
      {
        id: 'd3-a2',
        time: 'ضحى (10:30 ص)',
        name: 'المشي على سور الصين العظيم والتقاط الصور البانورامية',
        description: 'التجول بين أبراج المراقبة الحجرية التاريخية والاستمتاع بالهواء الجبلي النقي والإطلالات الخضراء الممتدة على قمم الجبال.',
        costSAR: 90,
        costNote: 'تذكرة دخول السور وحافلة النقل الداخلية VIP',
        mapsQuery: 'Mutianyu Great Wall Beijing',
        photo: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أبراج المراقبة التاريخية على السور العظيم'
      },
      {
        id: 'd3-a3',
        time: 'ظهراً (1:00 م)',
        name: 'النزول عبر الزحلوقة الجبلية السريعة (Mutianyu Toboggan)',
        description: 'تجربة ممتعة وحماسية للنزول من قمة السور إلى السفح عبر مسار الزحلوقة المعدنية الآمنة وسط الأشجار.',
        costSAR: 80,
        costNote: 'تذكرة الزحلوقة الجبلية (Toboggan)',
        mapsQuery: 'Mutianyu Great Wall Toboggan',
        photo: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الطبيعة الجبلية المحيطة بسور موتيان يو'
      },
      {
        id: 'd3-a4',
        time: 'مساءً (6:30 م)',
        name: 'جولة مسائية عند الحديقة الأولمبية وإستاد عش الطائر (Olympic Green)',
        description: 'توقف مسائي لالتقاط الصور أمام إستاد بكين الوطني (عش الطائر) والمكعب المائي المضاءين ليلاً ثم الاسترخاء في الفندق.',
        costSAR: 0,
        costNote: 'زيارة الساحة الخارجية مجاناً',
        mapsQuery: 'Beijing National Stadium Bird Nest',
        photo: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الأجواء المسائية المضيئة في بكين'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'سمك التراوت الجبلي الطازج المشوي على الحطب',
        restaurant: 'منتزه ومطعم وادي التراوت الجبلي عند سفح سور موتيان يو',
        description: 'سمك تراوت نهري طازج من مياه الينابيع الجبلية يشوى بالتوابل والأعشاب الطبيعية (حلال 100%) مع الأرز الأبيض والخضار الموسمية وعصير الليمون بالنعناع.',
        costSAR: 140,
        mapsQuery: 'Mutianyu Rainbow Trout Restaurant Beijing'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'وليمة الأطباق الشمالية الحلال الفاخرة',
        restaurant: 'مطعم هونغ بين لو الحلال التاريخي (Hongbinlou Halal Restaurant)',
        description: 'أطباق لحم البقر والضأن الحلال المطهية على الطريقة الإمبراطورية الشمالية مع شوربة الذرة الحلوة والدجاج الحلال والخبز الصيني الساخن.',
        costSAR: 170,
        mapsQuery: 'Hongbinlou Halal Restaurant Beijing'
      }
    ],
    highlightNote: 'ينصح بارتداء حذاء مشي رياضي مريح وملابس قطنية مرنة نظراً لتدرج السلالم الحجرية على سور الصين العظيم.'
  },

  // ==========================================
  // DAY 4: BEIJING
  // ==========================================
  {
    day: 4,
    cityId: 'beijing',
    cityName: 'بكين',
    cityMapsQuery: 'Beijing China',
    daysBadge: 'اليوم 4 • بكين',
    locationTag: 'بكين • منتجع يونيفرسال ستوديوز (تونغتشو)',
    title: 'عالم المغامرة والخيال: يونيفرسال ستوديوز بكين (Universal Studios)',
    subtitle: 'يوم كامل مليء بالإثارة والتشويق في أحدث وأكبر منتجع يونيفرسال ترفيهي في العالم، مع ميزة الدخول المبكر وبطاقة المسار السريع.',
    transport: {
      summary: 'ممر المشاة الخاص بنزلاء فندق المنتجع (أو سيارة خاصة لبوابة المنتجع)',
      details: 'الإقامة داخل فندق يونيفرسال جراند أو نيو ريزورت تتيح الوصول المباشر سيراً خلال دقائق عبر بوابة النزلاء الحصرية.',
      costSAR: 120,
      icon: 'fa-wand-magic-sparkles'
    },
    hotels: [
      {
        name: 'فندق يونيفرسال ستوديوز جراند (The Universal Studios Grand Hotel)',
        category: '5 نجوم داخل المنتجع',
        mapsQuery: 'The Universal Studios Grand Hotel Beijing'
      },
      {
        name: 'فندق نيو ريزورت بكين (NUO Resort Hotel Beijing)',
        category: '5 نجوم داخل المنتجع',
        mapsQuery: 'NUO Resort Hotel Beijing'
      }
    ],
    hotelNightCostSAR: 950,
    activities: [
      {
        id: 'd4-a1',
        time: 'صباحاً (8:00 ص)',
        name: 'الدخول المبكر واستكشاف عالم هاري بوتر السحري وقلعة هوغوورتس',
        description: 'الاستفادة من ميزة الدخول المبكر قبل الزوار بساعة كاملة لتجربة لعبة هاري بوتر والرحلة المحرمة داخل القلعة السحرية.',
        costSAR: 520,
        costNote: 'تذكرة دخول المنتجع ليوم كامل شاملة الدخول المبكر',
        mapsQuery: 'The Wizarding World of Harry Potter Universal Beijing',
        photo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'قلعة وعالم المغامرات الخيالية في يونيفرسال'
      },
      {
        id: 'd4-a2',
        time: 'ضحى (11:00 ص)',
        name: 'بطاقة المسار السريع VIP (Universal Express) لمنطقة المتحولون وكونغ فو باندا',
        description: 'تخطي طوابير الانتظار في أفعوانية ديسيبتيكوستر (Transformers) والرحلة النهرية المضيئة في أرض كونغ فو باندا الحصرية ببكين.',
        costSAR: 460,
        costNote: 'بطاقة المسار السريع (Universal Express Pass)',
        mapsQuery: 'Universal Studios Beijing Kung Fu Panda Land',
        photo: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الأجنحة الترفيهية المضيئة في يونيفرسال بكين'
      },
      {
        id: 'd4-a3',
        time: 'عصراً (3:30 م)',
        name: 'جزيرة العالم الجوراسي (Jurassic World Isla Nublar) وعالم المينيونز',
        description: 'خوض مغامرة الطيران فوق أرض الديناصورات وحضور العروض الحية الكوميدية والتفاعلية.',
        costSAR: 0,
        costNote: 'مشمول في تذكرة الدخول والـ Express',
        mapsQuery: 'Universal Studios Beijing Jurassic World',
        photo: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'عروض ومغامرات يونيفرسال ستوديوز'
      },
      {
        id: 'd4-a4',
        time: 'مساءً (7:30 م)',
        name: 'عرض إضاءة القلعة الليلي والتجول في يونيفرسال سيتي ووك (CityWalk)',
        description: 'مشاهدة العرض الضوئي والموسيقي الساحر على القلعة، ثم التسوق وتناول العشاء في ممشى يونيفرسال سيتي ووك.',
        costSAR: 100,
        costNote: 'مشتريات تذكارية وجولة سيتي ووك',
        mapsQuery: 'Universal CityWalk Beijing',
        photo: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'ممشى يونيفرسال سيتي ووك المسائي'
      }
    ],
    meals: [
      {
        type: 'الغداء والمشروبات (حلال 100%)',
        name: 'أطباق الدجاج المشوي والسمك الحلال مع شراب الكراميل الفوار (خالٍ من الكحول 100%)',
        restaurant: 'المطاعم المعتمدة للأطباق الحلال والبحرية داخل منتجع يونيفرسال بكين',
        description: 'وجبة دجاج مشوي بالأعشاب أو فيليه سمك مقرمش مع الذرة المشوية والبطاطس، ومشروب الباتربير الشهير (وهو شراب صودا الكراميل والكريمة الحلو الخالي تماماً من الكحول 100%).',
        costSAR: 140,
        mapsQuery: 'Universal Beijing Resort Restaurants'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'مشاوي حلال وأطباق آسيوية وبحرية طازجة',
        restaurant: 'مطاعم سيتي ووك بكين ومطعم طريق الحرير الحلال القريب',
        description: 'تشكيلة مشاوي لحم البقر والضأن الحلال والروبيان المشوي مع الأرز الآسيوي والسلطات الطازجة والعصائر الطبيعية.',
        costSAR: 180,
        mapsQuery: 'Universal CityWalk Beijing Dining'
      }
    ],
    highlightNote: 'قم بتحميل تطبيق (Universal Beijing Resort) الرسمي على جوالك لمتابعة خريطة المنتجع التفاعلية ومواعيد العروض الحية لحظة بلحظة.'
  },

  // ==========================================
  // DAY 5: SHANGHAI
  // ==========================================
  {
    day: 5,
    cityId: 'shanghai',
    cityName: 'شنغهاي',
    cityMapsQuery: 'Shanghai China',
    daysBadge: 'اليوم 5 • شنغهاي',
    locationTag: 'شنغهاي • واجهة البوند ونهر هوانغبو',
    title: 'قطار الرصاصة إلى العاصمة الاقتصادية: الوصول إلى شنغهاي الساحرة',
    subtitle: 'السفر عبر قطار السرعة الفائق (درجة أولى) من بكين إلى شنغهاي، واستكشاف ممشى البوند التاريخي ورحلة كروز مسائية في نهر هوانغبو.',
    transport: {
      summary: 'قطار الرصاصة فائق السرعة (درجة أولى G-Series) لمدة 4.5 ساعات + سيارات خاصة للمحطة والفندق',
      details: 'انتقال بسيارة خاصة إلى محطة قطار بكين الجنوبية، ركوب قطار الرصاصة بسرعة 350 كم/ساعة حتى محطة شنغهاي هونغتشياو، ثم سيارة خاصة لفندق البوند.',
      costSAR: 620,
      icon: 'fa-train-subway'
    },
    hotels: [
      {
        name: 'فندق فيرمونت بيس شنغهاي (Fairmont Peace Hotel Shanghai)',
        category: '5 نجوم تاريخي على البوند',
        mapsQuery: 'Fairmont Peace Hotel Shanghai'
      },
      {
        name: 'فندق ذا بينينسولا شنغهاي (The Peninsula Shanghai)',
        category: '5 نجوم فاخر على البوند',
        mapsQuery: 'The Peninsula Shanghai'
      }
    ],
    hotelNightCostSAR: 1100,
    activities: [
      {
        id: 'd5-a1',
        time: 'صباحاً (9:00 ص)',
        name: 'تجربة قطار الرصاصة الفائق السرعة من بكين إلى شنغهاي',
        description: 'الاستمتاع برحلة مريحة وهادئة في مقاعد الدرجة الأولى الواسعة ومشاهدة الريف الصيني والمدن الحديثة عبر النوافذ البانورامية.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة تذاكر القطار والتنقل (620 ر.س)',
        mapsQuery: 'Shanghai Hongqiao Railway Station',
        photo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'رحلة قطار الرصاصة السريع بالدرجة الأولى'
      },
      {
        id: 'd5-a2',
        time: 'عصراً (2:30 م)',
        name: 'تسجيل الدخول في فندق واجهة البوند الفاخر (5 نجوم)',
        description: 'الوصول إلى قلب شنغهاي النابض بالحياة واستلام الغرف المطلة على نهر هوانغبو وأفق لوجياتسوي.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة الإقامة الفندقية',
        mapsQuery: 'Fairmont Peace Hotel Shanghai',
        photo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'فندق البوند التاريخي الفاخر في شنغهاي'
      },
      {
        id: 'd5-a3',
        time: 'مساءً (6:00 م)',
        name: 'جولة المشي على واجهة البوند التاريخية (The Bund Promenade)',
        description: 'التجول على الكورنيش الشهير ومشاهدة التناغم المعماري الفريد بين المباني الكلاسيكية وناطحات السحاب المستقبلية في الضفة المقابلة.',
        costSAR: 0,
        costNote: 'جولة مفتوحة مجانية',
        mapsQuery: 'The Bund Shanghai',
        photo: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أفق ناطحات السحاب من واجهة البوند بشنغهاي'
      },
      {
        id: 'd5-a4',
        time: 'ليلاً (8:00 م)',
        name: 'رحلة بحرية مسائية (كروز VIP) في نهر هوانغبو (Huangpu River Cruise)',
        description: 'الإبحار لمدة ساعة على متن يخت سياحي فاخر لمشاهدة إضاءات برج اللؤلؤ الشرقي وبرج شنغهاي وواجهات البوند الذهبية.',
        costSAR: 130,
        costNote: 'تذكرة الكروز النهري المسائي على السطح البانورامي VIP',
        mapsQuery: 'Huangpu River Cruise Pier Sixteen',
        photo: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'إضاءات نهر هوانغبو وبرج اللؤلؤ ليلاً'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'وجبة المسافر الحلال الفاخرة في مقصورة الدرجة الأولى بالقطار',
        restaurant: 'تجهيز خاص من مطبخ بكين الحلال لرحلة القطار',
        description: 'سندويشات لحم البقر المشوي الحلال والدجاج المتبل مع الفواكه الطازجة والمكسرات والقهوة العربية والشاي الأخضر الصيني.',
        costSAR: 70,
        mapsQuery: 'Beijing South Railway Station Halal Food'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'عشاء المأكولات البحرية واللحوم الحلال بالقرب من البوند',
        restaurant: 'مطعم طريق الحرير الحلال أو مطعم البسفور الحلال في شنغهاي (Halal Fine Dining Shanghai)',
        description: 'أطباق الأسماك الطازجة والروبيان المشوي ومشاوي الضأن الحلال المعتمدة مع الأرز بالزعفران والمشروبات الطبيعية الطازجة.',
        costSAR: 210,
        mapsQuery: 'Halal Restaurant near The Bund Shanghai'
      }
    ],
    highlightNote: 'قطارات الرصاصة الصينية فائقة الدقة في المواعيد؛ يرجى التواجد في محطة القطار قبل موعد الانطلاق بـ 45 دقيقة.'
  },

  // ==========================================
  // DAY 6: SHANGHAI
  // ==========================================
  {
    day: 6,
    cityId: 'shanghai',
    cityName: 'شنغهاي',
    cityMapsQuery: 'Shanghai China',
    daysBadge: 'اليوم 6 • شنغهاي',
    locationTag: 'شنغهاي • منتجع ديزني لاند (بودونغ)',
    title: 'سحر الخيال والأساطير: ديزني لاند شنغهاي وأرض زوتوبيا (Shanghai Disneyland)',
    subtitle: 'يوم كامل في أحدث وأضخم حدائق ديزني في آسيا، والتي تضم أول منطقة ترفيهية متكاملة في العالم لمدينة زوتوبيا وأفعوانية ترون المستقبلية.',
    transport: {
      summary: 'سيارة خاصة فاخرة لرحلة الذهاب والعودة من فندق البوند إلى ديزني لاند',
      details: 'انطلاق صباحي مباشر لمدة 35 دقيقة بسيارة خاصة من وسط شنغهاي إلى بوابات منتجع ديزني لاند والعودة مساءً بعد الألعاب النارية.',
      costSAR: 160,
      icon: 'fa-face-smile-beam'
    },
    hotels: [
      {
        name: 'فندق فيرمونت بيس شنغهاي (Fairmont Peace Hotel Shanghai)',
        category: '5 نجوم تاريخي على البوند',
        mapsQuery: 'Fairmont Peace Hotel Shanghai'
      },
      {
        name: 'فندق ذا بينينسولا شنغهاي (The Peninsula Shanghai)',
        category: '5 نجوم فاخر على البوند',
        mapsQuery: 'The Peninsula Shanghai'
      }
    ],
    hotelNightCostSAR: 1100,
    activities: [
      {
        id: 'd6-a1',
        time: 'صباحاً (8:30 ص)',
        name: 'استكشاف مدينة زوتوبيا الجديدة كلياً (Zootopia Land)',
        description: 'دخول أول أرض زوتوبيا في العالم وتجربة المغامرة التفاعلية (Zootopia: Hot Pursuit) والتجول في شوارع المدينة النابضة بالحياة.',
        costSAR: 450,
        costNote: 'تذكرة دخول ديزني لاند شنغهاي ليوم كامل',
        mapsQuery: 'Zootopia Shanghai Disneyland',
        photo: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'عالم الخيال والقصص في ديزني لاند شنغهاي'
      },
      {
        id: 'd6-a2',
        time: 'ظهراً (12:00 م)',
        name: 'باقة الدخول السريع (Premier Access) لأفعوانية ترون وقراصنة الكاريبي',
        description: 'ركوب دراجات الضوء السريعة (TRON Lightcycle Power Run) وخوض معركة الكنز الغارق في قراصنة الكاريبي بتقنيات بصرية مذهلة دون انتظار.',
        costSAR: 390,
        costNote: 'باقة التخطي السريع للألعاب الكبرى (Disney Premier Access)',
        mapsQuery: 'TRON Lightcycle Power Run Shanghai Disneyland',
        photo: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الألعاب المستقبلية المضيئة في شنغهاي ديزني'
      },
      {
        id: 'd6-a3',
        time: 'عصراً (4:30 م)',
        name: 'التجول والتسوق في جادة ديزني تاون وبحيرة النجوم (Disneytown)',
        description: 'استراحة لطيفة وزيارة متجر عالم ديزني الضخم والتجول على ضفاف بحيرة الأماني.',
        costSAR: 100,
        costNote: 'مشتريات تذكارية في ديزني تاون',
        mapsQuery: 'Disneytown Shanghai',
        photo: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أجواء المهرجانات والتسوق في ديزني تاون'
      },
      {
        id: 'd6-a4',
        time: 'ليلاً (8:30 م)',
        name: 'عرض الألعاب النارية الليلي أمام أكبر قلعة ديزني في العالم (Illuminate!)',
        description: 'ختام اليوم بمشاهدة العرض الضوئي والمائي والألعاب النارية الساحرة أمام قلعة القصص الخيالية المسحورة.',
        costSAR: 0,
        costNote: 'مشمول في تذكرة المنتجع',
        mapsQuery: 'Enchanted Storybook Castle Shanghai Disneyland',
        photo: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'عروض المساء الساحرة في ديزني لاند'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'وجبة الدجاج الحلال والأسماك الآسيوية المعتمدة داخل ديزني لاند',
        restaurant: 'مطعم القرية الآسيوية الحلال المعتمد في منتجع ديزني شنغهاي (Halal Certified Meal)',
        description: 'يوفر منتجع ديزني شنغهاي وجبات حلال معتمدة رسمياً (مطهوة في أوانٍ مخصصة حلال) تشمل الدجاج المحمر مع الأرز الآسيوي والخضار وعصير الفواكه.',
        costSAR: 130,
        mapsQuery: 'Shanghai Disneyland Halal Restaurant'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'عشاء المأكولات البحرية والسلطات الطازجة في ديزني تاون',
        restaurant: 'مطاعم المأكولات البحرية والحلال في منطقة ديزني تاون (Disneytown Dining)',
        description: 'سمك السلمون المشوي والروبيان بالثوم والليمون مع المعكرونة الإيطالية بالخضروات والمشروبات الغازية والعصائر الخالية من الكحول.',
        costSAR: 170,
        mapsQuery: 'Disneytown Shanghai Restaurants'
      }
    ],
    highlightNote: 'عرض الألعاب النارية الليلي أمام قلعة القصص الخيالية هو الأضخم عالمياً؛ احرص على التواجد في الساحة الأمامية قبل العرض بـ 40 دقيقة.'
  },

  // ==========================================
  // DAY 7: SHANGHAI
  // ==========================================
  {
    day: 7,
    cityId: 'shanghai',
    cityName: 'شنغهاي',
    cityMapsQuery: 'Shanghai China',
    daysBadge: 'اليوم 7 • شنغهاي',
    locationTag: 'شنغهاي • قمة برج شنغهاي وحدائق يويوان',
    title: 'قمة سماء شنغهاي وحدائق يويوان الكلاسيكية وشارع نانجينغ',
    subtitle: 'الصعود بأسرع مصعد في العالم إلى أعلى منصة مراقبة في الصين، واستكشاف الحدائق الصينية التراثية وأشهر شوارع التسوق.',
    transport: {
      summary: 'سيارة خاصة فاخرة ومترو شنغهاي السياحي للتنقل بين المعالم',
      details: 'انتقال مريح بين حي لوجياتسوي المالي في بودونغ ومنطقة حدائق يويوان التاريخية وشارع نانجينغ التجاري.',
      costSAR: 90,
      icon: 'fa-city'
    },
    hotels: [
      {
        name: 'فندق فيرمونت بيس شنغهاي (Fairmont Peace Hotel Shanghai)',
        category: '5 نجوم تاريخي على البوند',
        mapsQuery: 'Fairmont Peace Hotel Shanghai'
      },
      {
        name: 'فندق ذا بينينسولا شنغهاي (The Peninsula Shanghai)',
        category: '5 نجوم فاخر على البوند',
        mapsQuery: 'The Peninsula Shanghai'
      }
    ],
    hotelNightCostSAR: 1100,
    activities: [
      {
        id: 'd7-a1',
        time: 'صباحاً (10:00 ص)',
        name: 'الصعود إلى قمة برج شنغهاي - الطابق 118 (Shanghai Tower Observatory)',
        description: 'تجربة أسرع مصعد في العالم (18 متراً في الثانية) للوصول إلى منصة قمة شنغهاي على ارتفاع 546 متراً فوق السحاب.',
        costSAR: 115,
        costNote: 'تذكرة صعود منصة المراقبة في الطابق 118',
        mapsQuery: 'Shanghai Tower Observation Deck',
        photo: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'برج شنغهاي الشاهق وأفق بودونغ'
      },
      {
        id: 'd7-a2',
        time: 'ظهراً (1:30 م)',
        name: 'استكشاف حدائق يويوان الكلاسيكية التاريخية (Yu Garden)',
        description: 'التجول في تحفة الحدائق الصينية التي يعود تاريخها لأكثر من 400 عام، بممراتها الصخرية وجسورها المتعرجة وبرك أسماك الكوي.',
        costSAR: 35,
        costNote: 'تذكرة دخول حدائق يويوان الأثرية',
        mapsQuery: 'Yu Garden Shanghai',
        photo: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'العمارة الكلاسيكية والجسور في حدائق يويوان'
      },
      {
        id: 'd7-a3',
        time: 'عصراً (4:00 م)',
        name: 'سوق يويوان القديم وتجربة الشاي الصيني الأصيل (Yuyuan Bazaar & Tea House)',
        description: 'عبور جسر التسع منعطفات الشهير وتذوق الشاي الصيني الفاخر في بيت الشاي العائم بوسط البحيرة.',
        costSAR: 60,
        costNote: 'جلسة تذوق الشاي الصيني الفاخر في بيت الشاي التاريخي',
        mapsQuery: 'Huxinting Teahouse Yu Garden Shanghai',
        photo: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أجواء الأسواق التراثية وبيوت الشاي'
      },
      {
        id: 'd7-a4',
        time: 'مساءً (7:00 م)',
        name: 'جولة تسوق في شارع نانجينغ التجاري للمشاة (Nanjing Road)',
        description: 'التسوق في أشهر شوارع الصين التجارية الممتد حتى واجهة البوند وركوب القطار السياحي الصغير في الشارع.',
        costSAR: 0,
        costNote: 'جولة تسوق حرة ومفتوحة',
        mapsQuery: 'Nanjing Road Pedestrian Street Shanghai',
        photo: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'شارع نانجينغ التجاري المضيء في شنغهاي'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'زلابية شياو لونغ باو الحلال بحشوة لحم البقر والدجاج (Halal Xiao Long Bao)',
        restaurant: 'مطعم هونغ تشانغ شينغ الحلال التاريخي (Hongchangxing Halal Restaurant Shanghai)',
        description: 'فطائر البخار الشنغهايّة الشهيرة المحشوة بلحم البقر الحلال المذبوح إسلامياً والمرق الساخن اللذيذ، تقدم مع شوربة النودلز الحلال.',
        costSAR: 95,
        mapsQuery: 'Hongchangxing Halal Restaurant Nanjing Road Shanghai'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'أطباق المأكولات البحرية والأسماك على الطريقة الشنغهايّة الحلال',
        restaurant: 'مطعم مأكولات بحرية وحلال راقٍ في وسط شنغهاي',
        description: 'سمك القاروص المطهو على البخار بالزنجبيل والصويا، وروبيان مقرمش مع الخضار الصينية الموسمية وعصير الرمان الطازج.',
        costSAR: 185,
        mapsQuery: 'Halal Seafood Restaurant Shanghai'
      }
    ],
    highlightNote: 'الطابق 118 في برج شنغهاي يوفر رؤية مذهلة للمدينة بزاوية 360 درجة؛ يفضل الصعود في الصباح الباكر أو قبيل الغروب مباشرة.'
  },

  // ==========================================
  // DAY 8: ZHANGJIAJIE
  // ==========================================
  {
    day: 8,
    cityId: 'zhangjiajie',
    cityName: 'تشانغجياجيه',
    cityMapsQuery: 'Zhangjiajie Hunan China',
    daysBadge: 'اليوم 8 • تشانغجياجيه',
    locationTag: 'تشانغجياجيه • المدينة ومباني الـ 72 العجيبة',
    title: 'الطيران المباشر إلى تشانغجياجيه: أرض الأساطير ومباني الـ 72 العجيبة',
    subtitle: 'رحلة طيران داخلية مباشرة من شنغهاي إلى تشانغجياجيه، والاستقرار في الفندق الجبلي الفاخر ثم زيارة تحفة المباني الـ 72 المضاءة ليلاً.',
    transport: {
      summary: 'طيران داخلي مباشر من شنغهاي (SHA) إلى تشانغجياجيه (DYG) (~ساعتان) + سيارة خاصة',
      details: 'انتقال بسيارة خاصة لمطار شنغهاي، رحلة طيران مباشرة إلى مطار تشانغجياجيه خه هوا، ثم استقبال بسيارة خاصة إلى الفندق.',
      costSAR: 1150,
      icon: 'fa-plane'
    },
    hotels: [
      {
        name: 'فندق جراند حياة تشانغجياجيه (Grand Hyatt Zhangjiajie)',
        category: '5 نجوم فاخر',
        mapsQuery: 'Zhangjiajie 5 Star Luxury Hotel'
      },
      {
        name: 'فندق بولمان تشانغجياجيه (Pullman Zhangjiajie Hotel)',
        category: '5 نجوم منتجع جبلي',
        mapsQuery: 'Pullman Zhangjiajie Hotel'
      }
    ],
    hotelNightCostSAR: 850,
    activities: [
      {
        id: 'd8-a1',
        time: 'ظهراً (12:30 م)',
        name: 'الوصول إلى مطار تشانغجياجيه والاستقبال الخاص',
        description: 'الوصول إلى بوابة الطبيعة الساحرة في مقاطعة هونان والانتقال عبر الطريق البانورامي المحاط بالقمم الخضراء إلى الفندق.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة الطيران الداخلي والنقل الخاص',
        mapsQuery: 'Zhangjiajie Hehua International Airport',
        photo: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'قمم وجبال تشانغجياجيه الساحرة'
      },
      {
        id: 'd8-a2',
        time: 'عصراً (3:00 م)',
        name: 'تسجيل الدخول في الفندق الفاخر (5 نجوم) والاسترخاء',
        description: 'استلام الغرف الفاخرة والاستمتاع بمرافق الفندق وإطلالاته الجبلية الهادئة.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة الإقامة الفندقية',
        mapsQuery: 'Pullman Zhangjiajie Hotel',
        photo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الإقامة الفندقية الفاخرة في تشانغجياجيه'
      },
      {
        id: 'd8-a3',
        time: 'مساءً (6:30 م)',
        name: 'زيارة مجمع المباني الـ 72 العجيبة المضاءة ليلاً (72 Strange Buildings)',
        description: 'استكشاف أعلى وأضخم مبنى خشبي معلق على طراز قبائل توجيا في العالم (دخل موسوعة غينيس)، والذي يتحول ليلاً إلى مدينة ضوئية ساحرة.',
        costSAR: 95,
        costNote: 'تذكرة الدخول المسائية شاملة العروض الضوئية',
        mapsQuery: '72 Strange Buildings Zhangjiajie',
        photo: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'مجمع المباني الـ 72 العجيبة المضاء ليلاً'
      },
      {
        id: 'd8-a4',
        time: 'ليلاً (8:30 م)',
        name: 'حضور العروض الفولكلورية والتعرف على ثقافة قبائل توجيا',
        description: 'مشاهدة العروض التراثية الحية والتجول في الأسواق الحرفية التقليدية داخل الساحة الثقافية.',
        costSAR: 55,
        costNote: 'حضور العرض الثقافي وتجربة الحرف التراثية',
        mapsQuery: 'Tujia Folk Custom Park Zhangjiajie',
        photo: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الفنون والعمارة التراثية في تشانغجياجيه'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'وجبة المسافر الحلال الخفيفة أثناء رحلة الطيران الداخلي',
        restaurant: 'صالة الضيافة والوجبات الحلال المسبقة الطلب على الطيران',
        description: 'وجبة دجاج أو لحم بقري حلال ساخنة مع سلطة طازجة وفواكه موسمية وعصائر طبيعية.',
        costSAR: 65,
        mapsQuery: 'Shanghai Hongqiao Airport Halal Food'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'وجبة سانشياجاو المعدّة بلحم البقر والضأن الحلال الطازج',
        restaurant: 'مطعم تشينغتشن الإسلامي الحلال في تشانغجياجيه (Zhangjiajie Lanzhou & Hui Halal Restaurant)',
        description: 'طبق هونان الجبلي الشهير محضّراً خصيصاً في مطعم إسلامي حلال 100% من شرائح لحم البقر والضأن المذبوح إسلامياً مع البطاطس والفلفل الحلو والخضروات الجبلية.',
        costSAR: 150,
        mapsQuery: 'Halal Restaurant Zhangjiajie'
      }
    ],
    highlightNote: 'مجمع المباني الـ 72 ليلاً يعتبر تحفة معمارية مبهرة للتصوير الفوتوغرافي؛ تبدأ الإضاءة الكاملة عند الساعة 7:30 مساءً.'
  },

  // ==========================================
  // DAY 9: ZHANGJIAJIE
  // ==========================================
  {
    day: 9,
    cityId: 'zhangjiajie',
    cityName: 'تشانغجياجيه',
    cityMapsQuery: 'Zhangjiajie Hunan China',
    daysBadge: 'اليوم 9 • تشانغجياجيه',
    locationTag: 'تشانغجياجيه • جبل تيانمن (بوابة السماء)',
    title: 'التحدي الأعظم: صعود جبل تيانمن وأعجوبة قوس (بوابة السماء)',
    subtitle: 'زيارة منتزه جبل تيانمن الصخري العظيم، وركوب أطول تلفريك جبلي في العالم، واجتياز الممر الزجاجي المعلق على حافة الهاوية.',
    transport: {
      summary: 'سيارة خاصة لمحطة التلفريك + أطول تلفريك في العالم + السلالم الكهربائية الجبلية',
      details: 'انتقال بسيارة خاصة من الفندق إلى محطة تلفريك وسط مدينة تشانغجياجيه لركوب الخط البانورامي الصاعد مباشرة إلى قمة الجبل.',
      costSAR: 80,
      icon: 'fa-cable-car'
    },
    hotels: [
      {
        name: 'فندق جراند حياة تشانغجياجيه (Grand Hyatt Zhangjiajie)',
        category: '5 نجوم فاخر',
        mapsQuery: 'Zhangjiajie 5 Star Luxury Hotel'
      },
      {
        name: 'فندق بولمان تشانغجياجيه (Pullman Zhangjiajie Hotel)',
        category: '5 نجوم منتجع جبلي',
        mapsQuery: 'Pullman Zhangjiajie Hotel'
      }
    ],
    hotelNightCostSAR: 850,
    activities: [
      {
        id: 'd9-a1',
        time: 'صباحاً (8:30 ص)',
        name: 'ركوب أطول تلفريك للركاب في العالم (Tianmen Mountain Cableway - 7.4 كم)',
        description: 'رحلة جوية مذهلة تستغرق 28 دقيقة ترتفع من قلب المدينة فوق الغابات والمنحدرات الشاهقة حتى قمة جبل تيانمن.',
        costSAR: 210,
        costNote: 'تذكرة منتزه جبل تيانمن شاملة التلفريك الكبير VIP',
        mapsQuery: 'Tianmen Mountain Cableway Zhangjiajie',
        photo: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'القمم الجبلية الشاهقة فوق السحاب في تيانمن'
      },
      {
        id: 'd9-a2',
        time: 'ضحى (10:30 ص)',
        name: 'المشي على الممر الزجاجي المعلق على حافة الهاوية (Glass Skywalk)',
        description: 'تجربة مشوقة للمشي على جسر زجاجي شفاف يلتف حول جرف صخري عمودي على ارتفاع 1,400 متر فوق سطح البحر.',
        costSAR: 45,
        costNote: 'تذكرة الممر الزجاجي شاملة أغطية الأحذية الواقية',
        mapsQuery: 'Tianmen Mountain Glass Skywalk',
        photo: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'المنحدرات الصخرية والممرات المعلقة بين الغيوم'
      },
      {
        id: 'd9-a3',
        time: 'ظهراً (1:00 م)',
        name: 'النزول بالسلالم الكهربائية داخل الجبل إلى قوس بوابة السماء (Heaven’s Gate)',
        description: 'استخدام أطول سلسلة سلالم كهربائية محفورة داخل الصخور للوصول إلى القوس الصخري الطبيعي العملاق (كهف تيانمن)وسلالم الـ 999 درجة.',
        costSAR: 65,
        costNote: 'تذكرة السلالم الكهربائية الجبلية المزدوجة',
        mapsQuery: 'Tianmen Cave Heaven Gate Zhangjiajie',
        photo: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'بوابة السماء والطبيعة الجبلية المهيبة'
      },
      {
        id: 'd9-a4',
        time: 'عصراً (3:30 م)',
        name: 'مشاهدة طريق الـ 99 منعطفاً الشهير والتلفريك السريع للنزول',
        description: 'الاستمتاع بالمنظر الأسطوري لطريق الثعبان الجبلي المتعرج (99 Bends) أثناء النزول عبر التلفريك السريع إلى بوابة المنتزه.',
        costSAR: 50,
        costNote: 'تذكرة خط التلفريك السريع وحافلة المنتزه',
        mapsQuery: 'Tianmen Mountain 99 Bends Road',
        photo: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الطريق الجبلي المتعرج وسط المرتفعات الخضراء'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'أطباق الدجاج البلدي المحمر الحلال مع الخضروات الجبلية والأرز',
        restaurant: 'مطعم القمة الجبلية الحلال / المطعم الإسلامي عند محطة تيانمن',
        description: 'وجبة دافئة من الدجاج الحلال المطهو مع البطاطس الجبلية والفلفل الحلو والأرز المطبوخ على البخار والشاي الصيني الساخن.',
        costSAR: 110,
        mapsQuery: 'Tianmen Mountain Halal Restaurant Zhangjiajie'
      },
      {
        type: 'العشاء (حلال 100% - خالٍ تماماً من أي غير حلال)',
        name: 'شرائح لحم البقر والضأن الحلال المدخن على الحطب مع الفطر البري الجبلي',
        restaurant: 'مطعم مسلمي هوي الحلال المعتمد في تشانغجياجيه (Qingzhen Halal Beef & Lamb Restaurant)',
        description: 'شرائح لحم بقر وضأن حلال 100% مذبوحة على الطريقة الإسلامية ومدخنة بخشب الصنوبر الجبلي مع الفطر البري الطازج وحساء الخضروات (بديل حلال بالكامل ومضمون 100%).',
        costSAR: 160,
        mapsQuery: 'Qingzhen Halal Restaurant Yongding Zhangjiajie'
      }
    ],
    highlightNote: 'الطقس على قمة جبل تيانمن يكون أبرد بـ 6 إلى 8 درجات من المدينة؛ ينصح بإحضار جاكيت خفيف مريح.'
  },

  // ==========================================
  // DAY 10: ZHANGJIAJIE
  // ==========================================
  {
    day: 10,
    cityId: 'zhangjiajie',
    cityName: 'تشانغجياجيه',
    cityMapsQuery: 'Zhangjiajie Hunan China',
    daysBadge: 'اليوم 10 • تشانغجياجيه',
    locationTag: 'تشانغجياجيه • منتزه الغابات وجبال أفاتار (وولينغيوان)',
    title: 'عوالم الفيلم الشهير: جبال أفاتار المعلقة ومصعد بايلونغ الزجاجي',
    subtitle: 'استكشاف منتزه تشانغجياجيه الوطني للغابات (أول منتزه وطني مدرج في اليونسكو بالصين) والصعود عبر أعلى مصعد خارجي زجاجي في العالم.',
    transport: {
      summary: 'سيارة خاصة لبوابة وولينغيوان + الحافلات البيئية + مصعد بايلونغ + التلفريك',
      details: 'رحلة صباحية بسيارة خاصة من الفندق إلى مدخل منتزه وولينغيوان لبدء جولة القمم الصخرية المعلقة.',
      costSAR: 100,
      icon: 'fa-mountain-sun'
    },
    hotels: [
      {
        name: 'فندق بولمان تشانغجياجيه (Pullman Zhangjiajie Hotel)',
        category: '5 نجوم منتجع جبلي في وولينغيوان',
        mapsQuery: 'Pullman Zhangjiajie Hotel'
      },
      {
        name: 'فندق جراند حياة تشانغجياجيه (Grand Hyatt Zhangjiajie)',
        category: '5 نجوم فاخر',
        mapsQuery: 'Zhangjiajie 5 Star Luxury Hotel'
      }
    ],
    hotelNightCostSAR: 850,
    activities: [
      {
        id: 'd10-a1',
        time: 'صباحاً (9:00 ص)',
        name: 'الصعود عبر مصعد بايلونغ الزجاجي الشاهق (Bailong Elevator)',
        description: 'ركوب أعلى وأسرع مصعد خارجي مزدوج الطوابق في العالم، ملتصق بواجهات الصخور العمودية بارتفاع 326 متراً ويصعد القمة في 88 ثانية فقط!',
        costSAR: 85,
        costNote: 'تذكرة مصعد بايلونغ الزجاجي VIP',
        mapsQuery: 'Bailong Elevator Zhangjiajie',
        photo: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'القمم الصخرية العمودية ومصعد بايلونغ الزجاجي'
      },
      {
        id: 'd10-a2',
        time: 'ضحى (10:30 ص)',
        name: 'منطقة يوانجياجيه وجسر السماء الأول (Yuanjiajie Scenic Area)',
        description: 'السير على المنصات البانورامية المطلة على مئات الأعمدة الصخرية الكوارتزية الشاهقة وسط الضباب والغابات.',
        costSAR: 175,
        costNote: 'تذكرة دخول منتزه تشانغجياجيه الوطني للغابات والحافلات البيئية',
        mapsQuery: 'Yuanjiajie Zhangjiajie National Forest Park',
        photo: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'جبال يوانجياجيه المعلقة بين الضباب'
      },
      {
        id: 'd10-a3',
        time: 'ظهراً (1:30 م)',
        name: 'عمود السماء الجنوبي - جبل أفاتار هاليليلويا وتلفريك جبل تيانزي',
        description: 'الوقوف أمام العمود الصخري الشهير البالغ ارتفاعه 1,080 متراً والذي استلهم منه المخرج جيمس كاميرون جبال فيلم أفاتار، ثم النزول بتلفريك جبل تيانزي.',
        costSAR: 90,
        costNote: 'تذكرة تلفريك جبل تيانزي البانورامي (Tianzi Mountain Cableway)',
        mapsQuery: 'Avatar Hallelujah Mountain Zhangjiajie',
        photo: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'شلالات وغابات جبل تيانزي وجبال أفاتار'
      },
      {
        id: 'd10-a4',
        time: 'عصراً (4:00 م)',
        name: 'ركوب القطار الكهربائي الصغير في وادي غاليري العشرة أميال (Ten-Mile Gallery)',
        description: 'جولة استرخائية بالقطار المفتوح عبر وادي خلاب تحيط به تشكيلات صخرية طبيعية تشبه اللوحات الفنية.',
        costSAR: 50,
        costNote: 'تذكرة القطار السياحي ذهاباً وإياباً في الوادي',
        mapsQuery: 'Ten-Mile Gallery Wulingyuan Zhangjiajie',
        photo: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'وادي غاليري العشرة أميال الطبيعي'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'وجبة نزهة حلال ساخنة مع الفواكه الجبلية والعصائر الطازجة',
        restaurant: 'استراحة يوانجياجيه / تجهيز خاص حلال للمنتزه الوطني',
        description: 'أرز مقلي بالخضار والبيض مع قطع الدجاج الحلال المشوي وفواكه جبلية طازجة (كيوي بري وبرتقال هونان) ومياه معدنية وعصائر.',
        costSAR: 95,
        mapsQuery: 'Wulingyuan Halal Restaurant Zhangjiajie'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'حساء الفطر البري الجبلي المشكل مع لحم الضأن الحلال',
        restaurant: 'المطعم الإسلامي الحلال في وولينغيوان (Wulingyuan Muslim Halal Restaurant)',
        description: 'قدر ساخن من أنواع الفطر الجبلي النادر المطهو مع مرق لحم الضأن الحلال والأعشاب الطبيعية والنودلز اليدوية الطازجة.',
        costSAR: 155,
        mapsQuery: 'Muslim Restaurant Wulingyuan Zhangjiajie'
      }
    ],
    highlightNote: 'المشاهد الطبيعية في هذا المنتزه فريدة على مستوى العالم؛ تأكد من شحن بطارية الجوال والكاميرا بالكامل قبل الانطلاق صباحاً.'
  },
  // ==========================================
  // DAY 11: CHONGQING
  // ==========================================
  {
    day: 11,
    cityId: 'chongqing',
    cityName: 'تشونغتشينغ',
    cityMapsQuery: 'Chongqing China',
    daysBadge: 'اليوم 11 • تشونغتشينغ',
    locationTag: 'تشونغتشينغ • هونغ يادونغ ووسط المدينة الجبلية',
    title: 'القطار السريع إلى مدينة السايبربانك: الوصول إلى تشونغتشينغ',
    subtitle: 'ركوب قطار الرصاصة السريع متوجهاً إلى مدينة الجبال العجيبة تشونغتشينغ، واستكشاف مجمع هونغ يادونغ الخيالي وتجربة الهوت بوت الحلال.',
    transport: {
      summary: 'قطار الرصاصة السريع (درجة أولى) من تشانغجياجيه الغربية إلى تشونغتشينغ (~2.5 ساعة)',
      details: 'انتقال بسيارة خاصة لمحطة قطار تشانغجياجيه الغربية، ركوب القطار السريع حتى تشونغتشينغ، ثم سيارة خاصة للفندق الفاخر.',
      costSAR: 370,
      icon: 'fa-train'
    },
    hotels: [
      {
        name: 'فندق نيكولو تشونغتشينغ (Niccolo Chongqing)',
        category: '5 نجوم فاخر فوق السحاب',
        mapsQuery: 'Niccolo Chongqing Hotel'
      },
      {
        name: 'فندق إنتركونتيننتال رافلز سيتي (InterContinental Chongqing Raffles City)',
        category: '5 نجوم أيقوني عند التقاء النهرين',
        mapsQuery: 'InterContinental Chongqing Raffles City'
      }
    ],
    hotelNightCostSAR: 1000,
    activities: [
      {
        id: 'd11-a1',
        time: 'صباحاً (10:00 ص)',
        name: 'رحلة قطار الرصاصة السريع عبر الجسور والأنفاق الجبلية إلى تشونغتشينغ',
        description: 'السفر المريح بالدرجة الأولى عبر التضاريس الجبلية الخضراء وصولاً إلى حاضرة نهر اليانغتسي الكبرى.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة تذاكر القطار والتنقل (370 ر.س)',
        mapsQuery: 'Chongqing North Railway Station',
        photo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'رحلة قطار الرصاصة إلى تشونغتشينغ'
      },
      {
        id: 'd11-a2',
        time: 'ظهراً (2:00 م)',
        name: 'تسجيل الدخول في الفندق الفاخر بإطلالة علوية وجولة ساحة جيفانغبي',
        description: 'استلام الغرف في الطوابق الشاهقة المطلة على النهرين، ثم جولة مشي في ساحة التحرير (Jiefangbei Pedestrian Street) قلب المدينة التجاري.',
        costSAR: 0,
        costNote: 'جولة مفتوحة مجانية',
        mapsQuery: 'Jiefangbei Pedestrian Street Chongqing',
        photo: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الفندق الفاخر المطل على أفق تشونغتشينغ'
      },
      {
        id: 'd11-a3',
        time: 'مساءً (7:00 م)',
        name: 'جولة مسائية في مجمع هونغ يادونغ المضيء (Hongyadong Folk Custom Area)',
        description: 'استكشاف المجمع المعماري المكون من 11 طابقاً محفوراً في الجرف الصخري على ضفة نهر جيالينغ، والمضاء بآلاف الفوانيس الذهبية الساحرة.',
        costSAR: 0,
        costNote: 'دخول مجاني بالحجز الإلكتروني',
        mapsQuery: 'Hongyadong Chongqing',
        photo: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'العمارة المضيئة ليلاً في هونغ يادونغ'
      },
      {
        id: 'd11-a4',
        time: 'ليلاً (8:30 م)',
        name: 'جلسة تصوير ومقهى بانورامي عند جسر تشيانسيمن (Qiansimen Bridge)',
        description: 'عبور جسر تشيانسيمن المطل مباشرة على واجهة هونغ يادونغ الكاملة وأفق ناطحات السحاب المتلألئة على ضفاف النهر.',
        costSAR: 80,
        costNote: 'جلسة مقهى مطل وتصوير بانورامي ليلي',
        mapsQuery: 'Qiansimen Bridge Chongqing',
        photo: 'https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'إضاءات أفق تشونغتشينغ وجسر تشيانسيمن'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'نودلز تشونغتشينغ الشهيرة بلحم البقر الحلال (Halal Chongqing Xiao Mian)',
        restaurant: 'مطعم النودلز الإسلامي الحلال في وسط تشونغتشينغ (Jiefangbei Halal Noodles)',
        description: 'شعيرية تشونغتشينغ الطازجة بمرق لحم البقر الحلال المذبوح إسلامياً مع السمسم المحمص وزيت الفلفل العطري (حسب الرغبة) وعصير البرتقال.',
        costSAR: 65,
        mapsQuery: 'Halal Restaurant Jiefangbei Chongqing'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'هوت بوت تشونغتشينغ الحلال المعتمد (Halal Chongqing Hotpot)',
        restaurant: 'مطعم هوت بوت تشينغتشن الحلال بالقرب من المسجد الكبير في تشونغتشينغ',
        description: 'قدر هوت بوت مقسوم لنصفين (مرق طماطم وفطر غير حار + مرق توابل سيتشوان الحلال الخالي تماماً من أي دهون غير حلال) مع شرائح لحم البقر والضأن الحلال والروبيان الطازج ومشروب البرقوق المثلج.',
        costSAR: 195,
        mapsQuery: 'Chongqing Mosque Halal Hotpot'
      }
    ],
    highlightNote: 'تشونغتشينغ مبنية على جبال شاهقة بطوابق متعددة؛ قد تدخل مبنى من الطابق الأول وتصعد للطابق الـ 22 لتخرج فتجد نفسك في شارع عام آخر!'
  },

  // ==========================================
  // DAY 12: CHONGQING
  // ==========================================
  {
    day: 12,
    cityId: 'chongqing',
    cityName: 'تشونغتشينغ',
    cityMapsQuery: 'Chongqing China',
    daysBadge: 'اليوم 12 • تشونغتشينغ',
    locationTag: 'تشونغتشينغ • محطة ليزيبا وبلدة تشيقيكو القديمة',
    title: 'قطار المونوريل المخترق للمباني وعراقة بلدة تشيقيكو التاريخية',
    subtitle: 'مشاهدة وتجربة قطار المونوريل الشهير وهو يخترق عمارة سكنية من منتصفها، followed by جولة تراثية في بلدة تشيقيكو وحديقة إيلينغ.',
    transport: {
      summary: 'قطار المونوريل المعلق (الخط 2) + سيارة خاصة فاخرة مع سائق طوال اليوم',
      details: 'ركوب قطار المونوريل لتجربة اختراق مبنى ليزيبا، ثم التوجه بالسيارة الخاصة إلى بلدة تشيقيكو التاريخية وحديقة إيلينغ.',
      costSAR: 160,
      icon: 'fa-train-subway'
    },
    hotels: [
      {
        name: 'فندق نيكولو تشونغتشينغ (Niccolo Chongqing)',
        category: '5 نجوم فاخر فوق السحاب',
        mapsQuery: 'Niccolo Chongqing Hotel'
      },
      {
        name: 'فندق إنتركونتيننتال رافلز سيتي (InterContinental Chongqing Raffles City)',
        category: '5 نجوم أيقوني عند التقاء النهرين',
        mapsQuery: 'InterContinental Chongqing Raffles City'
      }
    ],
    hotelNightCostSAR: 1000,
    activities: [
      {
        id: 'd12-a1',
        time: 'صباحاً (9:30 ص)',
        name: 'زيارة منصة مشاهدة قطار ليزيبا المخترق للمبنى (Liziba Monorail Station)',
        description: 'ركوب القطار المعلق ثم النزول لمنصة المشاهدة المخصصة لالتقاط صور وفيديوهات القطار وهو يمر داخل الطابق السادس إلى الثامن من مبنى سكني!',
        costSAR: 15,
        costNote: 'تذكرة تجربة قطار المونوريل البانورامي',
        mapsQuery: 'Liziba Monorail Station Viewing Platform Chongqing',
        photo: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'مشهد قطار المدينة المعلق في تشونغتشينغ'
      },
      {
        id: 'd12-a2',
        time: 'ظهراً (12:00 م)',
        name: 'استكشاف أزقة بلدة تشيقيكو التاريخية القديمة (Ciqikou Ancient Town)',
        description: 'التجول في البلدة الأثرية المبنية على التلال المطلة على نهر جيالينغ منذ عصر أسرة مينغ، بمبانيها الخشبية وفوانيسها الحمراء.',
        costSAR: 0,
        costNote: 'دخول البلدة التاريخية مجاناً',
        mapsQuery: 'Ciqikou Ancient Town Chongqing',
        photo: 'https://images.unsplash.com/photo-1529921879218-f99546d03a9d?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أزقة وفوانيس بلدة تشيقيكو التاريخية'
      },
      {
        id: 'd12-a3',
        time: 'عصراً (3:00 م)',
        name: 'تجربة الحرف اليدوية وتذوق حلوى السمسم والشاي في تشيقيكو',
        description: 'مشاهدة صناعة الخزف التقليدي وتذوق لفائف السمسم المقرمشة النباتية الحلال والشاي الصيني مع عرض تغيير الوجوه السيتشواني.',
        costSAR: 45,
        costNote: 'تذكرة بيت الشاي التراثي والحرف اليدوية',
        mapsQuery: 'Ciqikou Tea House Chongqing',
        photo: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الضيافة التقليدية والحرف في تشيقيكو'
      },
      {
        id: 'd12-a4',
        time: 'مساءً (5:30 م)',
        name: 'صعود جناح لازو في حديقة إيلينغ لبنوراما الغروب (Eling Park)',
        description: 'أعلى نقطة طبيعية في شبه جزيرة يوتشونغ، تمنحك إطلالة 360 درجة على نهري اليانغتسي وجيالينغ وهما يحيطان بالمدينة.',
        costSAR: 30,
        costNote: 'تذكرة صعود برج المراقبة في حديقة إيلينغ',
        mapsQuery: 'Eling Park Chongqing',
        photo: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'إطلالة بانورامية علوية على تشونغتشينغ عند الغروب'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'بط ودجاج متبل بالأعشاب العطرية الحلال ومأكولات سيتشوان خفيفة',
        restaurant: 'مطعم الحلال التراثي بالقرب من تشيقيكو (Halal Sichuan Cuisine Chongqing)',
        description: 'دجاج وبط حلال محمّر بالتوابل العطرية غير الحارة مع الأرز المبخر والخضار المقلية وشوربة التوفو الطازجة.',
        costSAR: 110,
        mapsQuery: 'Halal Restaurant Shapingba Chongqing'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'سمك النهر المشوي الطازج الحلال بصلصة الكزبرة والليمون والتوابل',
        restaurant: 'مطعم الأسماك المشوية الحلال على ضفاف النهر (Chongqing Halal Grilled Fish)',
        description: 'سمك نهري طازج كامل مشوي على الفحم مع الكزبرة الخضراء والثوم والفلفل المعتدل والخضروات المشوية مع عصير المانجو الطازج.',
        costSAR: 165,
        mapsQuery: 'Grilled Fish Restaurant Nanbin Road Chongqing'
      }
    ],
    highlightNote: 'في محطة ليزيبا، احرص على تجربة الأمرين معاً: ركوب القطار نفسه أثناء دخوله المبنى، ثم النزول للمنصة السفلية لتصوير القطار التالي من الخارج.'
  },

  // ==========================================
  // DAY 13: CHONGQING
  // ==========================================
  {
    day: 13,
    cityId: 'chongqing',
    cityName: 'تشونغتشينغ',
    cityMapsQuery: 'Chongqing China',
    daysBadge: 'اليوم 13 • تشونغتشينغ',
    locationTag: 'تشونغتشينغ • رافلز سيتي وكروز نهر اليانغتسي',
    title: 'الجسر السماوي المعلق في رافلز سيتي وكروز نهر اليانغتسي الليلي',
    subtitle: 'زيارة ناطحة السحاب الأفقية الأعلى في آسيا، وركوب تلفريك نهر اليانغتسي، وختام إقامة تشونغتشينغ برحلة كروز ليلية مبهرة.',
    transport: {
      summary: 'سيارة خاصة فاخرة + تلفريك نهر اليانغتسي + يخت الكروز النهري VIP',
      details: 'انتقال قصير من الفندق إلى أبراج رافلز سيتي وساحة تشاوتيانمن وميناء الرحلات النهرية.',
      costSAR: 70,
      icon: 'fa-ship'
    },
    hotels: [
      {
        name: 'فندق إنتركونتيننتال رافلز سيتي (InterContinental Chongqing Raffles City)',
        category: '5 نجوم أيقوني في الجسر السماوي',
        mapsQuery: 'InterContinental Chongqing Raffles City'
      },
      {
        name: 'فندق نيكولو تشونغتشينغ (Niccolo Chongqing)',
        category: '5 نجوم فاخر',
        mapsQuery: 'Niccolo Chongqing Hotel'
      }
    ],
    hotelNightCostSAR: 1000,
    activities: [
      {
        id: 'd13-a1',
        time: 'صباحاً (10:30 ص)',
        name: 'زيارة الجسر السماوي المعلق في رافلز سيتي (The Crystal Skybridge)',
        description: 'الصعود إلى الجسر البلوري الأفقي الممتد فوق 4 ناطحات سحاب على ارتفاع 250 متراً والوقوف على المنصة الزجاجية المكشوفة.',
        costSAR: 140,
        costNote: 'تذكرة دخول منصة الاستكشاف والجسر السماوي (Exploration Deck)',
        mapsQuery: 'Raffles City Chongqing Exploration Deck',
        photo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أبراج رافلز سيتي والجسر السماوي المعلق'
      },
      {
        id: 'd13-a2',
        time: 'ظهراً (1:30 م)',
        name: 'ساحة تشاوتيانمن ومشاهدة التقاء نهري اليانغتسي وجيالينغ',
        description: 'رؤية الظاهرة الطبيعية الفريدة لالتقاء مياه نهر اليانغتسي المائلة للذهبي مع مياه نهر جيالينغ الخضراء الزمردية في نقطة واحدة.',
        costSAR: 0,
        costNote: 'زيارة الساحة البانورامية مجاناً',
        mapsQuery: 'Chaotianmen Square Chongqing',
        photo: 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'التقاء نهري اليانغتسي وجيالينغ عند تشاوتيانمن'
      },
      {
        id: 'd13-a3',
        time: 'عصراً (4:30 م)',
        name: 'ركوب تلفريك نهر اليانغتسي التاريخي المعلق (Yangtze River Cableway)',
        description: 'عبور نهر اليانغتسي العظيم في مقصورة معلقة بالهواء تمتد لمسافة 1,166 متراً بين ضفتي المدينة.',
        costSAR: 45,
        costNote: 'تذكرة ذهاب وعودة في تلفريك نهر اليانغتسي',
        mapsQuery: 'Yangtze River Cableway Chongqing',
        photo: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c2?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'المعابر والجسور فوق نهر اليانغتسي'
      },
      {
        id: 'd13-a4',
        time: 'ليلاً (8:00 م)',
        name: 'رحلة كروز النهرين الليلية الفاخرة (Two Rivers Night Cruise VIP)',
        description: 'جولة بحرية ساحرة تمر تحت الجسور المضيئة وأمام واجهة هونغ يادونغ وأبراج رافلز سيتي المتلألئة ليلاً.',
        costSAR: 145,
        costNote: 'تذكرة كروز النهرين الفاخر شاملة المقاعد العلوية والضيافة',
        mapsQuery: 'Chongqing Two Rivers Night Cruise Pier',
        photo: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'رحلة كروز نهر اليانغتسي ليلاً'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'دجاج تشونغتشينغ المقرمش الحلال بالسمسم والفلفل العطري (Halal Laziji)',
        restaurant: 'مطعم المائدة الإسلامية الحلال في يوتشونغ (Yuzhong Halal Restaurant)',
        description: 'قطع دجاج حلال متبلة ومقلية بقرمشة ذهبية مع السمسم المحمص والبطاطس والأرز بالخضار والشاي المثلج بالليمون.',
        costSAR: 120,
        mapsQuery: 'Halal Restaurant Yuzhong District Chongqing'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'عشاء المأكولات البحرية الفاخر في رافلز سيتي مع إطلالة النهرين',
        restaurant: 'مطعم المأكولات البحرية والشرقية الحلال في مجمع رافلز سيتي تشونغتشينغ',
        description: 'طبق استاكوزا وروبيان مشوي بالزبدة والأعشاب وسمك مشوي حلال مع سلطات موسمية وحلويات الفواكه الاستوائية (خالٍ تماماً من الكحول).',
        costSAR: 230,
        mapsQuery: 'Raffles City Chongqing Restaurants'
      }
    ],
    highlightNote: 'الرحلة النهرية المسائية هي أفضل طريقة لمشاهدة تشونغتشينغ بكامل عظمتها الهندسية وإضاءاتها ثلاثية الأبعاد.'
  },

  // ==========================================
  // DAY 14: DALI (YUNNAN)
  // ==========================================
  {
    day: 14,
    cityId: 'dali',
    cityName: 'منتجع دالي (يونان)',
    cityMapsQuery: 'Dali Yunnan China',
    daysBadge: 'اليوم 14 • منتجع دالي',
    locationTag: 'دالي • ضفاف بحيرة إيرهاي وجبال كانغشان',
    title: 'القطار السريع إلى بحيرة إيرهاي: بداية إقامة الاستجمام في منتجع دالي',
    subtitle: 'الوصول بالقطار السريع إلى مقاطعة يونان ذات الطقس المعتدل طوال العام، والانتقال إلى منتجع فاخر (5 نجوم) يطل مباشرة على بحيرة إيرهاي الصافية.',
    transport: {
      summary: 'قطار الرصاصة السريع (درجة أولى) من تشونغتشينغ إلى دالي + استقبال خاص بسيارة المنتجع',
      details: 'رحلة قطار مريحة عبر مرتفعات وهضاب يونان الخضراء، يليها استقبال خاص بسيارة المنتجع الفاخرة إلى ضفاف بحيرة إيرهاي.',
      costSAR: 780,
      icon: 'fa-water'
    },
    hotels: [
      {
        name: 'منتجع إيرهاي ساندز دالي (Erhai Sands Resort Dali)',
        category: 'منتجع 5 نجوم فاخر على البحيرة',
        mapsQuery: 'Erhai Lake Luxury Resort Dali'
      },
      {
        name: 'منتجع دالي ليانغ شان تشوانغ (Dali Daliangshanzhuang Resort)',
        category: 'منتجع 5 نجوم فاخر',
        mapsQuery: 'Dali Ancient City Luxury Resort'
      }
    ],
    hotelNightCostSAR: 1400,
    activities: [
      {
        id: 'd14-a1',
        time: 'صباحاً',
        name: 'رحلة قطار الدرجة الأولى عبر طبيعة مقاطعة يونان الساحرة',
        description: 'الاستمتاع بمناظر الأودية والجبال الخضراء والبحيرات أثناء الانتقال المريح إلى مدينة دالي الهادئة.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة تذاكر القطار والتنقل (780 ر.س)',
        mapsQuery: 'Dali Railway Station Yunnan',
        photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الطبيعة الساحرة لبحيرة إيرهاي وجبال يونان'
      },
      {
        id: 'd14-a2',
        time: 'عصراً (3:00 م)',
        name: 'تسجيل الوصول في منتجع بحيرة إيرهاي الفاخر (5 نجوم)',
        description: 'استلام الجناح الفاخر المطل مباشرة على المياه الفيروزية لبحيرة إيرهاي وقمم جبال كانغشان التسعة عشر.',
        costSAR: 0,
        costNote: 'مشمول في تكلفة إقامة المنتجع',
        mapsQuery: 'Erhai Lake Dali Yunnan',
        photo: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'المنتجع الفاخر المطل على مياه بحيرة إيرهاي'
      },
      {
        id: 'd14-a3',
        time: 'عصراً (4:30 م)',
        name: 'استرخاء في التراس الخاص بالمنتجع مع جلسة شاي يونان الفاخر',
        description: 'أخذ قسط كامل من الراحة والهدوء أمام إطلالة البحيرة وتذوق شاي يونان الجبلي والزهور الطبيعية.',
        costSAR: 0,
        costNote: 'ضيافة ترحيبية مجانية في المنتجع',
        mapsQuery: 'Cangshan and Erhai Scenic Area Dali',
        photo: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'تراس الاسترخاء المطل على البحيرة والجبال'
      },
      {
        id: 'd14-a4',
        time: 'مساءً (6:00 م)',
        name: 'جولة مسائية هادئة بالدراجات الكهربائية على الممر البيئي للبحيرة',
        description: 'التنزه وقت الغروب على الممر الساحلي المخصص للمشاة والدراجات فقط (Erhai Ecological Corridor) وسط النسيم العليل.',
        costSAR: 70,
        costNote: 'استئجار عربات/دراجات كهربائية خاصة على الكورنيش البيئي',
        mapsQuery: 'Erhai Ecological Corridor Dali',
        photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أجواء الغروب الهادئة على ضفاف بحيرة إيرهاي'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'نودلز عبور الجسر الحلال الشهيرة الخاصة بمسلمي يونان (Halal Crossing-the-Bridge Noodles)',
        restaurant: 'مطعم قومية هوي الحلال التقليدي في دالي (Dali Hui Muslim Restaurant)',
        description: 'طبق مقاطعة يونان الأشهر محضّراً على طريقة مسلمي دالي بمرق الدجاج ولحم البقر الحلال الطازج المغلي مع شرائح السمان والأعشاب والنودلز.',
        costSAR: 85,
        mapsQuery: 'Halal Crossing the Bridge Noodles Dali'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'عشاء الأسماك الطازجة والمأكولات العضوية الحلال على ضفاف البحيرة',
        restaurant: 'مطعم المنتجع البحري والعضوي المطل على بحيرة إيرهاي',
        description: 'سمك بحيرة إيرهاي المشوي بالأعشاب العطرية مع الخضروات العضوية المقطوفة من مزارع دالي وعصير التوت الجبلي الطازج.',
        costSAR: 190,
        mapsQuery: 'Erhai Lake Seafood Restaurant Dali'
      }
    ],
    highlightNote: 'تم اختيار دالي في منتصف الرحلة لتكون واحة استجمام واسترخاء تام لمدة 3 ليالٍ في أجواء طبيعية نقية ومعتدلة.'
  },

  // ==========================================
  // DAY 15: DALI (YUNNAN)
  // ==========================================
  {
    day: 15,
    cityId: 'dali',
    cityName: 'منتجع دالي (يونان)',
    cityMapsQuery: 'Dali Yunnan China',
    daysBadge: 'اليوم 15 • منتجع دالي',
    locationTag: 'دالي • شوانغلانغ وشيتشو وبحيرة إيرهاي',
    title: 'يوم الاسترخاء والبحيرة: جولة الجيب المكشوفة وقرية شوانغلانغ التراثية',
    subtitle: 'جولة خاصة بسيارة جيب مكشوفة حول أجمل منعطفات بحيرة إيرهاي، وزيارة قرية شوانغلانغ وورشة الصباغة التقليدية في بلدة شيتشو.',
    transport: {
      summary: 'سيارة جيب مكشوفة خاصة مع سائق ومصور + دراجات الكورنيش',
      details: 'انطلاق صباحي من باب المنتجع بسيارة جيب مكشوفة للتجول على طول الساحل الشرقي والغربي لبحيرة إيرهاي.',
      costSAR: 220,
      icon: 'fa-car-side'
    },
    hotels: [
      {
        name: 'منتجع إيرهاي ساندز دالي (Erhai Sands Resort Dali)',
        category: 'منتجع 5 نجوم فاخر على البحيرة',
        mapsQuery: 'Erhai Lake Luxury Resort Dali'
      },
      {
        name: 'منتجع دالي ليانغ شان تشوانغ (Dali Daliangshanzhuang Resort)',
        category: 'منتجع 5 نجوم فاخر',
        mapsQuery: 'Dali Ancient City Luxury Resort'
      }
    ],
    hotelNightCostSAR: 1400,
    activities: [
      {
        id: 'd15-a1',
        time: 'صباحاً (9:30 ص)',
        name: 'جولة سيارة الجيب المكشوفة عند منحنى بانشي الشهير (Panxi Village S-Bend)',
        description: 'التجول والتقاط أجمل الصور التذكارية عند المنحنى الساحلي الشهير لبحيرة إيرهاي مع انعكاس السحب البيضاء على المياه.',
        costSAR: 0,
        costNote: 'مشمول في باقة سيارة الجيب المكشوفة الخاصة (220 ر.س)',
        mapsQuery: 'Panxi Village S-Bend Erhai Lake Dali',
        photo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'منحنى بحيرة إيرهاي الساحر وجبال كانغشان'
      },
      {
        id: 'd15-a2',
        time: 'ظهراً (12:00 م)',
        name: 'زيارة قرية شوانغلانغ المطلة على البحيرة وجزيرة نانزاو (Shuanglang Town)',
        description: 'التنزه في أزقة قرية شوانغلانغ الهادئة المطلة على الجزر الصغيرة والمقاهي المعلقة فوق الماء.',
        costSAR: 50,
        costNote: 'تذكرة قارب وجزيرة نانزاو الساحلية (Nanzhao Folk Island)',
        mapsQuery: 'Shuanglang Ancient Town Dali',
        photo: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'إطلالات قرية شوانغلانغ وحقول دالي الخضراء'
      },
      {
        id: 'd15-a3',
        time: 'عصراً (3:00 م)',
        name: 'ورشة الصباغة الطبيعية التقليدية في بلدة شيتشو وحقول القمح (Xizhou Town)',
        description: 'زيارة بلدة شيتشو التاريخية وتجربة فن صباغة الأقمشة القطنية باللون الأزرق النيلي المستخلص من النباتات الطبيعية لشعب باي.',
        costSAR: 80,
        costNote: 'رسوم ورشة الصباغة اليدوية والاحتفاظ بالقطعة الفنية التذكارية',
        mapsQuery: 'Xizhou Ancient Town Dali',
        photo: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'العمارة التراثية في بلدة شيتشو بدالي'
      },
      {
        id: 'd15-a4',
        time: 'مساءً (6:00 م)',
        name: 'العودة للمنتجع والاستمتاع بجلسات الاستجمام والسبا الطبيعي',
        description: 'أمسية هادئة في مرافق المنتجع للاستجمام التام والاستمتاع بهواء البحيرة النقي.',
        costSAR: 0,
        costNote: 'مرافق الاستجمام مشمولة لنزلاء المنتجع',
        mapsQuery: 'Erhai Lake Resort Spa Dali',
        photo: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'مرافق الاستجمام والسبا في منتجع دالي'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'هوت بوت الفطر البري الجبلي الفاخر من جبال يونان مع اللحم الحلال',
        restaurant: 'مطعم الفطر الجبلي الحلال المعتمد في شيتشو/دالي (Yunnan Wild Mushroom Halal Hotpot)',
        description: 'تشتهر يونان بأجود أنواع الفطر الجبلي غير السام في العالم؛ يُطهى في مرق الدجاج ولحم البقر الحلال المذبوح إسلامياً مع الأعشاب المغذية.',
        costSAR: 145,
        mapsQuery: 'Wild Mushroom Hotpot Dali Yunnan'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'أجبان رشان المشوية بالورد مع شرائح اللحم البقري الحلال على طريقة مسلمي دالي',
        restaurant: 'مطعم دار الضيافة الإسلامي العائلي في دالي (Dali Muslim Courtyard Restaurant)',
        description: 'لفائف جبن الحليب الطازج المشوية (Rushan) المحلاة بصلصة الورد الطبيعي، مع أطباق لحم البقر الحلال المطهو بالخضروات العضوية وشاي الورد.',
        costSAR: 165,
        mapsQuery: 'Halal Restaurant Dali Ancient Town'
      }
    ],
    highlightNote: 'تمعّن في جمال حقول الأرز والقمح المحيطة ببلدة شيتشو؛ إنها من أروع الأماكن للراحة النفسية والتصوير الطبيعي.'
  },

  // ==========================================
  // DAY 16: DALI (YUNNAN)
  // ==========================================
  {
    day: 16,
    cityId: 'dali',
    cityName: 'منتجع دالي (يونان)',
    cityMapsQuery: 'Dali Yunnan China',
    daysBadge: 'اليوم 16 • منتجع دالي',
    locationTag: 'دالي • المدينة القديمة ومعابد الباغودات الثلاث',
    title: 'عبق التاريخ والباغودات الثلاث وأسواق الفضة في دالي القديمة',
    subtitle: 'استكشاف أسوار وبوابات مدينة دالي التاريخية، ومجمع الباغودات الثلاث الشهير، والتسوق الحرفي لمشغولات الفضة وتذوق قهوة يونان.',
    transport: {
      summary: 'سيارة خاصة فاخرة للتنقل بين المنتجع ومعالم مدينة دالي القديمة',
      details: 'انتقال مريح خلال 20 دقيقة من المنتجع على البحيرة إلى بوابات مدينة دالي القديمة ومعبد تشونغشنغ.',
      costSAR: 90,
      icon: 'fa-archway'
    },
    hotels: [
      {
        name: 'منتجع إيرهاي ساندز دالي (Erhai Sands Resort Dali)',
        category: 'منتجع 5 نجوم فاخر على البحيرة',
        mapsQuery: 'Erhai Lake Luxury Resort Dali'
      },
      {
        name: 'منتجع دالي ليانغ شان تشوانغ (Dali Daliangshanzhuang Resort)',
        category: 'منتجع 5 نجوم فاخر',
        mapsQuery: 'Dali Ancient City Luxury Resort'
      }
    ],
    hotelNightCostSAR: 1400,
    activities: [
      {
        id: 'd16-a1',
        time: 'صباحاً (9:30 ص)',
        name: 'زيارة الباغودات الثلاث التاريخية في معبد تشونغشنغ (Three Pagodas)',
        description: 'استكشاف المعلم الأثري الأبرز في دالي والذي يعود تاريخه لأكثر من 1,100 عام مع انعكاس الأبراج الثلاثة في بحيرة التأمل الصافية.',
        costSAR: 100,
        costNote: 'تذكرة دخول مجمع الباغودات الثلاث شاملة العربة الكهربائية',
        mapsQuery: 'Three Pagodas of Chongsheng Temple Dali',
        photo: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الأبراج والمعالم التاريخية العريقة في دالي'
      },
      {
        id: 'd16-a2',
        time: 'ظهراً (12:30 م)',
        name: 'التجول داخل أسوار وبوابات مدينة دالي القديمة (Dali Ancient City)',
        description: 'المشي في الشوارع الحجرية التاريخية التي تتدفق على جانبيها جداول المياه الجبلية الصافية وتحيط بها الأشجار المزهرة.',
        costSAR: 0,
        costNote: 'دخول المدينة القديمة وصعود البوابة الجنوبية مجاناً',
        mapsQuery: 'Dali Ancient City South Gate',
        photo: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'شوارع وبوابات مدينة دالي القديمة'
      },
      {
        id: 'd16-a3',
        time: 'عصراً (3:00 م)',
        name: 'سوق الحرفيين ومتاجر الفضة اليدوية الأصيلة لشعب باي (Fuxing Road)',
        description: 'مشاهدة الحرفيين وهم يصنعون الحلي والأواني الفضية النقية يدوياً وشراء الهدايا التذكارية الأصيلة.',
        costSAR: 0,
        costNote: 'جولة تسوق حرة',
        mapsQuery: 'Fuxing Road Dali Ancient City',
        photo: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أسواق الحرف اليدوية والفضة في دالي'
      },
      {
        id: 'd16-a4',
        time: 'مساءً (5:00 م)',
        name: 'تذوق قهوة يونان العربية المختصة في مقهى مطل على جبال كانغشان',
        description: 'تعد مقاطعة يونان موطن زراعة البن العربي (Arabica) في الصين؛ استمتع بفنجان قهوة مختصة طازجة التحميص بإطلالة جبلية.',
        costSAR: 60,
        costNote: 'جلسة قهوة يونان المختصة والحلويات النباتية',
        mapsQuery: 'Foreigner Street Cafe Dali Ancient City',
        photo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'مقاهي دالي المطلة على جبال كانغشان'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'سمك الفخار الطازج من بحيرة إيرهاي على طريقة دالي الحلال',
        restaurant: 'شارع المطاعم الإسلامية الحلال بجوار مسجد دالي القديم (Dali Grand Mosque Halal Street)',
        description: 'سمك بحيرة طازج يطهى في قدر فخاري مع الطماطم والتوفو والأعشاب الجبلية في أحد المطاعم الإسلامية التاريخية بوسط دالي القديمة.',
        costSAR: 125,
        mapsQuery: 'Qingzhen Halal Restaurant Dali Ancient City'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'أطباق يونان الإسلامية التقليدية وكعكات زهور الورد الطازجة المخبوزة',
        restaurant: 'مطعم ومخبز الزهور الحلال في دالي القديمة',
        description: 'وجبة عشاء من لحم البقر الحلال المقلي مع الفلفل الأخضر، تختتم بكعكات بتلات الورد الدمشقي المخبوزة بالعسل الطبيعي (Halal Rose Cakes).',
        costSAR: 140,
        mapsQuery: 'Rose Cake Bakery Dali Ancient City'
      }
    ],
    highlightNote: 'تضم مدينة دالي القديمة مسجداً تاريخياً عريقاً وشارعاً كاملاً من المطاعم والمخابز الحلال (Qingzhen) المميزة جداً.'
  },

  // ==========================================
  // DAY 17: GUANGZHOU
  // ==========================================
  {
    day: 17,
    cityId: 'guangzhou',
    cityName: 'قوانغتشو',
    cityMapsQuery: 'Guangzhou China',
    daysBadge: 'اليوم 17 • قوانغتشو',
    locationTag: 'قوانغتشو • منتجع تشيميلونغ والسيرك العالمي',
    title: 'القطار السريع إلى عاصمة الجنوب: منتجع تشيميلونغ والسيرك الدولي',
    subtitle: 'السفر بقطار الرصاصة السريع إلى قوانغتشو، وبدء الإقامة في منتجع تشيميلونغ العالمي مع حضور عرض السيرك الدولي المبهر مساءً.',
    transport: {
      summary: 'قطار الرصاصة فائق السرعة (درجة أولى) إلى قوانغتشو الجنوبية + سيارة خاصة للمنتجع',
      details: 'انتقال بسيارة خاصة لمحطة القطار، رحلة مريحة بالدرجة الأولى إلى محطة قوانغتشو الجنوبية، ثم 15 دقيقة فقط بالسيارة لمنتجع تشيميلونغ.',
      costSAR: 620,
      icon: 'fa-train'
    },
    hotels: [
      {
        name: 'فندق تشيميلونغ قوانغتشو (Chimelong Hotel Guangzhou)',
        category: 'منتجع 5 نجوم فاخر داخل تشيميلونغ',
        mapsQuery: 'Chimelong Hotel Guangzhou'
      },
      {
        name: 'فندق تشيميلونغ باندا (Chimelong Panda Hotel)',
        category: 'منتجع 5 نجوم عائلي فاخر',
        mapsQuery: 'Chimelong Panda Hotel Guangzhou'
      }
    ],
    hotelNightCostSAR: 1200,
    activities: [
      {
        id: 'd17-a1',
        time: 'صباحاً / ظهراً',
        name: 'رحلة القطار السريع إلى قوانغتشو والانتقال لمنتجع تشيميلونغ',
        description: 'الوصول إلى محطة قوانغتشو الجنوبية والانتقال السريع إلى قلب منتجع تشيميلونغ السياحي الأخضر.',
        costSAR: 0,
        costNote: 'مشمول في تذاكر القطار والنقل الخاص (620 ر.س)',
        mapsQuery: 'Guangzhou South Railway Station',
        photo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الوصول السريع إلى محطة قوانغتشو الجنوبية'
      },
      {
        id: 'd17-a2',
        time: 'عصراً (3:30 م)',
        name: 'تسجيل الدخول في فندق تشيميلونغ ومشاهدة جزيرة النمور البيضاء والفلامنغو',
        description: 'استلام الغرف الفاخرة والتجول في الفناء الاستوائي الداخلي للفندق الذي يضم نموراً بيضاء نادرة وطيور الفلامنغو الوردية.',
        costSAR: 0,
        costNote: 'مشمول لنزلاء فندق تشيميلونغ',
        mapsQuery: 'Chimelong Hotel Guangzhou',
        photo: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أجنحة ومرافق منتجع تشيميلونغ الفاخر'
      },
      {
        id: 'd17-a3',
        time: 'مساءً (5:30 م)',
        name: 'جولة في ممشى وحدائق منتجع تشيميلونغ الترفيهي',
        description: 'استكشاف الساحات الخضراء الواسعة والقطار المعلق الذي يربط بين فنادق المنتجع والمسرح العالمي.',
        costSAR: 0,
        costNote: 'مشمول لنزلاء المنتجع',
        mapsQuery: 'Chimelong Tourist Resort Guangzhou',
        photo: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'حدائق ومسابح منتجع تشيميلونغ في قوانغتشو'
      },
      {
        id: 'd17-a4',
        time: 'ليلاً (7:30 م)',
        name: 'حضور عرض السيرك العالمي في تشيميلونغ (Chimelong International Circus)',
        description: 'مشاهدة أضخم عرض سيرك دائم في العالم بمشاركة أكثر من 300 فنان بهلواني من 20 دولة مع مؤثرات صوتية وضوئية مذهلة.',
        costSAR: 280,
        costNote: 'تذكرة مقاعد الدرجة الأولى المركزية VIP لعرض السيرك العالمي',
        mapsQuery: 'Chimelong International Circus Guangzhou',
        photo: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'العروض الاستعراضية المبهرة في سيرك تشيميلونغ'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'وجبة حلال ساخنة وفواكه استوائية أثناء رحلة القطار السريع',
        restaurant: 'تجهيز حلال خاص لرحلة القطار',
        description: 'أرز برياني بالدجاج الحلال أو اللحم الحلال مع الفواكه الاستوائية الطازجة والشاي الأخضر والعصائر.',
        costSAR: 75,
        mapsQuery: 'Guangzhou South Railway Station Halal Restaurant'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'بوفيه المأكولات البحرية والأطباق الحلال في مطعم النمور البيضاء',
        restaurant: 'مطعم النمور البيضاء في فندق تشيميلونغ (White Tiger Restaurant - Seafood & Halal Section)',
        description: 'تناول العشاء بجوار النوافذ الزجاجية المطلة على النمور البيضاء وطيور الفلامنغو، مع تشكيلة واسعة من السلمون والروبيان المشوي والأسماك والسلطات والحلويات الحلال.',
        costSAR: 220,
        mapsQuery: 'White Tiger Buffet Restaurant Chimelong Hotel Guangzhou'
      }
    ],
    highlightNote: 'عرض السيرك الدولي في تشيميلونغ لا يُفوّت أبداً؛ مقاعد الدرجة الأولى المركزية تمنحك أفضل زاوية رؤية لكامل المسرح.'
  },

  // ==========================================
  // DAY 18: GUANGZHOU
  // ==========================================
  {
    day: 18,
    cityId: 'guangzhou',
    cityName: 'قوانغتشو',
    cityMapsQuery: 'Guangzhou China',
    daysBadge: 'اليوم 18 • قوانغتشو',
    locationTag: 'قوانغتشو • سفاري تشيميلونغ وملاهي باراديس',
    title: 'مملكة الحيوانات البرية: سفاري تشيميلونغ وتوائم الباندا وملاهي باراديس',
    subtitle: 'استكشاف أكبر حديقة سفاري طبيعية في آسيا، ومشاهدة توائم الباندا الثلاثة النادرة وركوب التلفريك الهوائي، وتجربة ملاهي تشيميلونغ باراديس.',
    transport: {
      summary: 'حافلات المنتجع الكهربائية + قطار السفاري المفتوح + التلفريك المعلق فوق السفاري',
      details: 'انتقال مباشر خلال 5 دقائق بحافلة المنتجع المخصصة للنزلاء من الفندق إلى البوابة الشمالية لسفاري تشيميلونغ.',
      costSAR: 50,
      icon: 'fa-hippo'
    },
    hotels: [
      {
        name: 'فندق تشيميلونغ قوانغتشو (Chimelong Hotel Guangzhou)',
        category: 'منتجع 5 نجوم فاخر',
        mapsQuery: 'Chimelong Hotel Guangzhou'
      },
      {
        name: 'فندق تشيميلونغ باندا (Chimelong Panda Hotel)',
        category: 'منتجع 5 نجوم عائلي فاخر',
        mapsQuery: 'Chimelong Panda Hotel Guangzhou'
      }
    ],
    hotelNightCostSAR: 1200,
    activities: [
      {
        id: 'd18-a1',
        time: 'صباحاً (9:30 ص)',
        name: 'جولة قطار السفاري المفتوح في البراري الأفريقية والآسيوية (Chimelong Safari Park)',
        description: 'ركوب القطار المفتوح وسط المراعي الطبيعة المفتوحة لمشاهدة الزرافات والحمير الوحشية والأسود والنمور والفيلة عن قرب.',
        costSAR: 260,
        costNote: 'تذكرة دخول حديقة سفاري تشيميلونغ وقطار السفاري',
        mapsQuery: 'Chimelong Safari Park Guangzhou',
        photo: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الحياة البرية والطبيعة في سفاري تشيميلونغ'
      },
      {
        id: 'd18-a2',
        time: 'ظهراً (12:00 م)',
        name: 'مركز توائم الباندا العملاقة الثلاثة والتلفريك المعلق (Panda Center & Cable Car)',
        description: 'زيارة توائم الباندا الثلاثة الوحيدين في العالم ودببة الكوالا الأسترالية، ثم ركوب التلفريك الهوائي لمشاهدة السفاري من الأعلى.',
        costSAR: 140,
        costNote: 'باقة المسار السريع والتلفريك البانورامي فوق السفاري',
        mapsQuery: 'Chimelong Safari Park Giant Panda Center',
        photo: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'دببة الباندا العملاقة المحبوبة في تشيميلونغ'
      },
      {
        id: 'd18-a3',
        time: 'عصراً (3:30 م)',
        name: 'مغامرات مدينة ملاهي تشيميلونغ باراديس (Chimelong Paradise)',
        description: 'الانتقال إلى مدينة الألعاب المجاورة لتجربة أفعوانية العشر حلقات (10 Inversion Roller Coaster) والعروض السينمائية رباعية الأبعاد.',
        costSAR: 220,
        costNote: 'تذكرة دخول مدينة ملاهي تشيميلونغ باراديس',
        mapsQuery: 'Chimelong Paradise Guangzhou',
        photo: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الأفعوانيات والألعاب الترفيهية في تشيميلونغ باراديس'
      },
      {
        id: 'd18-a4',
        time: 'مساءً (7:00 م)',
        name: 'جولة المتاجر التذكارية والعروض المسائية في المنتجع',
        description: 'شراء هدايا ومجسمات الباندا التذكارية والاستمتاع بالأجواء الاحتفالية المسائية.',
        costSAR: 80,
        costNote: 'مشتريات تذكارية من متجر الباندا الرسمي',
        mapsQuery: 'Chimelong Panda Hotel Gift Shop',
        photo: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الأجواء المسائية الراقية في منتجع قوانغتشو'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'أطباق الأرز الكانتوني الحلال بالروبيان والسمك والدجاج الحلال',
        restaurant: 'مطعم الباندا والأركان الحلال والبحرية داخل سفاري تشيميلونغ',
        description: 'وجبة غداء متكاملة من الأرز الكانتوني المطهو على البخار مع الروبيان والسمك المشوي والخضروات الطازجة وعصائر الفواكه.',
        costSAR: 120,
        mapsQuery: 'Chimelong Panda Restaurant Guangzhou'
      },
      {
        type: 'العشاء (حلال 100%)',
        name: 'وليمة مشاوي ومأكولات حلال في أشهر مطاعم قوانغتشو الإسلامية',
        restaurant: 'مطعم السعادة الإسلامي الحلال أو مطعم البسفور في قوانغتشو (Guangzhou Halal Restaurant)',
        description: 'تعد قوانغتشو وجهة عالمية للمطاعم الحلال؛ استمتع بأطباق لحم الضأن المشوي والكباب والمقبلات الشرقية والآسيوية الحلال 100%.',
        costSAR: 180,
        mapsQuery: 'Bosphorus Halal Restaurant Guangzhou'
      }
    ],
    highlightNote: 'لا تفوّت ركوب التلفريك المثلث فوق سفاري تشيميلونغ؛ حيث تمر المقصورات الزجاجية مباشرة فوق قمم الأشجار وطيور الفلامنغو والزرافات.'
  },

  // ==========================================
  // DAY 19: GUANGZHOU
  // ==========================================
  {
    day: 19,
    cityId: 'guangzhou',
    cityName: 'قوانغتشو',
    cityMapsQuery: 'Guangzhou China',
    daysBadge: 'اليوم 19 • قوانغتشو',
    locationTag: 'قوانغتشو • برج كانتون وجزيرة شاميان وشارع بكين',
    title: 'قمة برج كانتون وعبق التاريخ في جزيرة شاميان ومسجد أبي وقاص والتسوق',
    subtitle: 'الصعود إلى قمة برج كانتون وركوب عربة الفقاعة الزجاجية، وزيارة جزيرة شاميان ومسجد هوايشنغ التاريخي، والتسوق الختامي في شارع بكين.',
    transport: {
      summary: 'سيارة خاصة فاخرة طوال اليوم + ترام لؤلؤة النهر السياحي',
      details: 'انتقال بالسيارة الخاصة إلى وسط قوانغتشو (مدينة تشوجيانغ الجديدة) وجزيرة شاميان وشارع بكين التجاري.',
      costSAR: 110,
      icon: 'fa-tower-observation'
    },
    hotels: [
      {
        name: 'فندق روزوود قوانغتشو (Rosewood Guangzhou - 5 نجوم الترا فاخر)',
        category: '5 نجوم في قلب قوانغتشو المطل على برج كانتون',
        mapsQuery: 'Rosewood Guangzhou'
      },
      {
        name: 'فندق تشيميلونغ قوانغتشو (Chimelong Hotel Guangzhou)',
        category: 'منتجع 5 نجوم فاخر',
        mapsQuery: 'Chimelong Hotel Guangzhou'
      }
    ],
    hotelNightCostSAR: 1200,
    activities: [
      {
        id: 'd19-a1',
        time: 'صباحاً (10:00 ص)',
        name: 'الصعود إلى قمة برج كانتون وعربة الفقاعة المعلقة (Canton Tower Bubble Tram)',
        description: 'ركوب الكبسولات الزجاجية الكروية التي تدور حول حافة قمة برج كانتون على ارتفاع 460 متراً مع إطلالة شاملة على قوانغتشو ونهر اللؤلؤ.',
        costSAR: 180,
        costNote: 'تذكرة برج كانتون الشاملة لعربة الفقاعة المعلقة (Bubble Tram)',
        mapsQuery: 'Canton Tower Guangzhou',
        photo: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'برج كانتون الشامخ وإضاءات نهر اللؤلؤ في قوانغتشو'
      },
      {
        id: 'd19-a2',
        time: 'ظهراً (1:30 م)',
        name: 'التجول في جزيرة شاميان التاريخية الهادئة (Shamian Island)',
        description: 'المشي في الجزيرة التراثية الخضراء المحاطة بأشجار البانيان المعمرة والقصور الكلاسيكية الهادئة على ضفاف نهر اللؤلؤ.',
        costSAR: 0,
        costNote: 'جولة مفتوحة مجانية',
        mapsQuery: 'Shamian Island Guangzhou',
        photo: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الأجواء الكلاسيكية والأشجار الظليلة في جزيرة شاميان'
      },
      {
        id: 'd19-a3',
        time: 'عصراً (3:30 م)',
        name: 'زيارة قاعة عشيرة تشن التاريخية ومسجد أبي وقاص (Huaisheng Mosque)',
        description: 'استكشاف روائع النحت والعمارة الكانتونية في أكاديمية عشيرة تشن، وزيارة مسجد هوايشنغ (أحد أقدم المساجد في العالم بُني منذ أكثر من 1,300 عام).',
        costSAR: 60,
        costNote: 'تذكرة دخول متحف وقاعة عشيرة تشن والمرشد الثقافي',
        mapsQuery: 'Huaisheng Mosque and Chen Clan Ancestral Hall Guangzhou',
        photo: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الفنون المعمارية التراثية في قاعة عشيرة تشن'
      },
      {
        id: 'd19-a4',
        time: 'مساءً (6:30 م)',
        name: 'التسوق النهائي لشراء الهدايا التذكارية من شارع بكين التجاري (Beijing Road)',
        description: 'جولة تسوق ختامية في أشهر شوارع المشاة التجارية في قوانغتشو ومشاهدة طبقات الطريق الأثري الزجاجي المحفوظ تحت أرضية الشارع.',
        costSAR: 0,
        costNote: 'جولة تسوق حرة ومفتوحة',
        mapsQuery: 'Beijing Road Pedestrian Street Guangzhou',
        photo: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'شارع بكين التجاري للمشاة في قوانغتشو ليلاً'
      }
    ],
    meals: [
      {
        type: 'الغداء (حلال 100%)',
        name: 'وجبة ديم سوم كانتونية حلال أصيلة (Halal Cantonese Dim Sum & Yum Cha)',
        restaurant: 'مطعم الديم سوم الكانتوني الحلال بجوار مسجد هوايشنغ بقوانغتشو',
        description: 'طقس اليَم تشا الكانتوني الشهير بنسخته الحلال 100%: فطائر البخار الشفافة بالروبيان (Har Gow)، وفطائر اللحم البقري الحلال مع الشاي الصيني المعتق.',
        costSAR: 135,
        mapsQuery: 'Halal Dim Sum Restaurant Yuexiu Guangzhou'
      },
      {
        type: 'عشاء الوداع الفاخر (حلال 100%)',
        name: 'عشاء الوداع: البط واللحوم الكانتونية المشوية الحلال والأرز بالفخار',
        restaurant: 'مطعم المائدة الحلال الراقي المطل على نهر اللؤلؤ في قوانغتشو',
        description: 'وليمة ختامية فاخرة تضم البط الكانتوني المشوي الحلال ولحم الضأن المحمر والأرز المطهو في الفخار والمشروبات الاستوائية الطازجة.',
        costSAR: 215,
        mapsQuery: 'Halal Fine Dining Restaurant Guangzhou'
      }
    ],
    highlightNote: 'تتمتع قوانغتشو بتاريخ إسلامي عريق يمتد لألف وأربعمائة عام، ولذلك ستجد فيها أروع المطاعم الكانتونية والعربية الحلال.'
  },

  // ==========================================
  // DAY 20: GUANGZHOU -> RIYADH
  // ==========================================
  {
    day: 20,
    cityId: 'guangzhou',
    cityName: 'قوانغتشو ⇄ الرياض',
    cityMapsQuery: 'Guangzhou Baiyun International Airport',
    daysBadge: 'اليوم 20 • العودة للرياض',
    locationTag: 'قوانغتشو ➔ مطار الملك خالد الدولي بالرياض',
    title: 'الختام والعودة بسلام: رحلة الطيران المباشرة من قوانغتشو إلى الرياض',
    subtitle: 'تناول إفطار الوداع وتجهيز الحقائب، ثم التوجه بسيارة خاصة فاخرة إلى مطار قوانغتشو باييون الدولي للعودة المباشرة إلى أرض الوطن.',
    transport: {
      summary: 'سيارة خاصة فاخرة للمطار + طيران دولي مباشر من قوانغتشو (CAN) إلى الرياض (RUH)',
      details: 'سيارة خاصة مريحة تنقلك من الفندق مباشرة إلى صالة المغادرة الدولية في مطار قوانغتشو باييون الدولي (حوالي 40 دقيقة)، تليها رحلة العودة المباشرة للرياض.',
      costSAR: 3100,
      icon: 'fa-plane-departure'
    },
    hotels: [
      {
        name: 'تسجيل المغادرة الميسرة (Late Check-out) • العودة إلى الرياض بسلامة الله',
        category: 'مشمول في ترتيبات الليلة السابقة',
        mapsQuery: 'Rosewood Guangzhou'
      }
    ],
    hotelNightCostSAR: 0,
    activities: [
      {
        id: 'd20-a1',
        time: 'صباحاً (9:30 ص)',
        name: 'تناول الإفطار الصباحي وتجهيز الحقائب وتسجيل المغادرة',
        description: 'الاستمتاع بصباح هادئ في الفندق وترتيب المشتريات والهدايا التذكارية وإنهاء إجراءات المغادرة بكل يسر.',
        costSAR: 0,
        costNote: 'مشمول في الإقامة الفندقية',
        mapsQuery: 'Rosewood Guangzhou',
        photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'صباح هادئ وإفطار الوداع في الفندق الفاخر'
      },
      {
        id: 'd20-a2',
        time: 'ظهراً (12:00 م)',
        name: 'الانتقال بسيارة خاصة فاخرة إلى مطار قوانغتشو باييون الدولي (CAN)',
        description: 'رحلة مريحة بالسيارة الخاصة إلى المطار وإنهاء إجراءات استرداد الضرائب السياحية للمشتريات (Tax Free Refund).',
        costSAR: 0,
        costNote: 'مشمول في تكلفة النقل والطيران الدولي (3,100 ر.س)',
        mapsQuery: 'Guangzhou Baiyun International Airport Terminal 2',
        photo: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'أفق الصين الحديث في يوم الوداع'
      },
      {
        id: 'd20-a3',
        time: 'عصراً',
        name: 'التسوق في السوق الحرة والاستراحة في صالة الضيافة بالمطار',
        description: 'إنهاء إجراءات شحن الأمتعة والجوازات، ثم التجول في المنطقة الحرة بمطار باييون الدولي.',
        costSAR: 0,
        costNote: 'دخول صالة الضيافة والتسوق الحر',
        mapsQuery: 'Guangzhou Baiyun Airport Duty Free',
        photo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'الاستعداد لرحلة الطيران المباشرة إلى الرياض'
      },
      {
        id: 'd20-a4',
        time: 'مساءً',
        name: 'رحلة الطيران المباشرة والوصول إلى مطار الملك خالد الدولي بالرياض (RUH)',
        description: 'الإقلاع برحلة مباشرة مريحة والوصول بحفظ الله وسلامته إلى أرض الوطن في العاصمة الرياض حاملين أجمل الذكريات.',
        costSAR: 0,
        costNote: 'مشمول في تذكرة الطيران المباشر',
        mapsQuery: 'King Khalid International Airport Riyadh',
        photo: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1000&q=80',
        photoLabel: 'ذكريات لا تُنسى لرحلة الصين الكبرى (20 يوماً)'
      }
    ],
    meals: [
      {
        type: 'الإفطار (حلال 100%)',
        name: 'بوفيه إفطار فاخر حلال في مطعم الفندق',
        restaurant: 'مطعم الفندق الرئيسي في قوانغتشو',
        description: 'مخبوزات طازجة وأطباق بيض وأجبان وفواكه استوائية وقهوة مختصة وشاي صيني فاخر (مشمول في الإقامة).',
        costSAR: 0,
        mapsQuery: 'Rosewood Guangzhou Restaurant'
      },
      {
        type: 'وجبات الطيران (حلال 100%)',
        name: 'الوجبات الساخنة الحلال والمشروبات على متن رحلة العودة إلى الرياض',
        restaurant: 'الخطوط الجوية المباشرة (قوانغتشو ➔ الرياض)',
        description: 'وجبات حلال معتمدة بالكامل ومشروبات ساخنة وعصائر طازجة تقدم على متن رحلة العودة الدولية المباشرة.',
        costSAR: 0,
        mapsQuery: 'Guangzhou Baiyun International Airport'
      }
    ],
    highlightNote: 'نتمنى لكم رحلة عودة ميسّرة وعوداً حميداً إلى الرياض، مع أجمل الذكريات من رحلة الصين الكبرى!'
  }
];
