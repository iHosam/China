/**
 * Summary & Destination Directory Data
 * - All costs calculated for 2 People (شخصين) in SAR (ر.س) only
 * - All content in Arabic
 */

window.ChinaTripApp = window.ChinaTripApp || {};

window.ChinaTripApp.CitiesData = {
  tripOverview: {
    title: 'رحلة الصين الكبرى الفاخرة لشخصين (20 يوماً / 19 ليلة)',
    routeSummary: 'الرياض ⇄ بكين ⇄ شنغهاي ⇄ تشانغجياجيه ⇄ تشونغتشينغ ⇄ دالي ⇄ قوانغتشو ⇄ الرياض',
    subtitle: 'خطة سفر متكاملة ومريحة للعين مصممة ومفصلة التكاليف لشخصين (2 مسافرين)، تغطي 6 وجهات صينية ساحرة، بإقامة فندقية فاخرة (5 نجوم ومنتجعات - غرفة لشخصين)، ومطاعم ومشروبات حلال 100%، وتفصيل يومي دقيق للتكاليف بالريال السعودي فقط.',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=80',
    transportOverview: 'تذكرتا طيران دولي مباشر لشخصين من الرياض إلى بكين وعودة من قوانغتشو + تذاكر قطارات الرصاصة الفائقة السرعة لشخصين (الدرجة الأولى G-Series) + طيران داخلي مباشر لشخصين + سيارات خاصة فاخرة مع سائق.',
    halalGuarantee: 'جميع الوجبات والمطاعم والمشروبات المقترحة طوال الـ 20 يوماً حلال 100% ومقدرة لشخصين (معتمدة إسلامياً Qingzhen أو مأكولات بحرية ونباتية خالية تماماً من الكحول وأي مشتقات غير حلال).'
  },

  cities: [
    {
      id: 'beijing',
      nameAr: 'بكين (العاصمة الإمبراطورية)',
      daysRange: 'الأيام 1 – 4 (4 أيام / 4 ليالٍ)',
      dayNumbers: [1, 2, 3, 4],
      mapsQuery: 'Beijing China landmarks',
      coverImage: 'https://images.unsplash.com/photo-1584646098378-0874589d76b1?auto=format&fit=crop&w=1000&q=80',
      description: 'عاصمة التاريخ الإمبراطوري العريق، تجمع بين المدينة المحرمة وميدان تيانانمن، أعجوبة سور الصين العظيم في قسم موتيان يو الخلاب، ومدينة يونيفرسال ستوديوز الترفيهية الكبرى.',
      arrivalTransport: 'طيران دولي مباشر لشخصين من الرياض (RUH) إلى مطار بكين العاصمة الدولي (PEK)',
      hotelStayTotalSAR: 3650,
      activitiesTransportTotalSAR: 9250,
      mealsTotalSAR: 2340,
      hotels: [
        {
          nameAr: 'فندق نيو ريزورت بكين (NUO Resort Hotel Beijing)',
          stars: '5 نجوم فاخر (غرفة لشخصين)',
          pricePerNightSAR: 900,
          mapsQuery: 'NUO Resort Hotel Beijing',
          features: 'تصميم إمبراطوري عصري داخل منتجع يونيفرسال مع ممر دخول مبكر حصري'
        },
        {
          nameAr: 'فندق يونيفرسال ستوديوز جراند (The Universal Studios Grand Hotel)',
          stars: '5 نجوم فاخر (غرفة لشخصين)',
          pricePerNightSAR: 950,
          mapsQuery: 'The Universal Studios Grand Hotel Beijing',
          features: 'يقع مباشرة عند بوابة يونيفرسال ستوديوز بكين ويوفر دخولاً VIP مبكراً'
        }
      ],
      topHighlights: [
        { name: 'شارع وانغفوجينغ الحيوي', mapsQuery: 'Wangfujing Pedestrian Street Beijing' },
        { name: 'المدينة المحرمة وميدان تيانانمن', mapsQuery: 'Forbidden City Beijing' },
        { name: 'سور الصين العظيم (موتيان يو)', mapsQuery: 'Mutianyu Great Wall Beijing' },
        { name: 'منتجع يونيفرسال ستوديوز بكين', mapsQuery: 'Universal Beijing Resort' }
      ],
      halalSpecialties: 'بط بكين المشوي الحلال المعتمد (مطعم زيغوانغيوان الحلال)، هوت بوت لحم الضأن الحلال بالقدر النحاسي (مطعم دونغ لاي شون الحلال)، ونودلز بكين بلحم البقر الحلال.'
    },
    {
      id: 'shanghai',
      nameAr: 'شنغهاي (لؤلؤة الشرق الحديثة)',
      daysRange: 'الأيام 5 – 7 (3 أيام / 3 ليالٍ)',
      dayNumbers: [5, 6, 7],
      mapsQuery: 'Shanghai The Bund Lujiazui China',
      coverImage: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=1000&q=80',
      description: 'العاصمة الاقتصادية المتألقة بناطحات السحاب، وممشى واجهة البوند الساحر، وحدائق يويوان الكلاسيكية، ومنتجع ديزني لاند شنغهاي الذي يضم أول مدينة زوتوبيا في العالم.',
      arrivalTransport: 'قطار الرصاصة فائق السرعة (درجة أولى لشخصين) من بكين إلى شنغهاي (~4.5 ساعات)',
      hotelStayTotalSAR: 3300,
      activitiesTransportTotalSAR: 4060,
      mealsTotalSAR: 1720,
      hotels: [
        {
          nameAr: 'فندق فيرمونت بيس شنغهاي (Fairmont Peace Hotel Shanghai)',
          stars: '5 نجوم تاريخي فاخر (غرفة لشخصين)',
          pricePerNightSAR: 1100,
          mapsQuery: 'Fairmont Peace Hotel Shanghai The Bund',
          features: 'إطلالة مباشرة على واجهة البوند ونهر هوانغبو وأفق أبراج بودونغ'
        },
        {
          nameAr: 'فندق ذا بينينسولا شنغهاي (The Peninsula Shanghai)',
          stars: '5 نجوم الترا فاخر (غرفة لشخصين)',
          pricePerNightSAR: 1100,
          mapsQuery: 'The Peninsula Shanghai The Bund',
          features: 'أفخم فنادق واجهة البوند مع أجنحة واسعة وإطلالة بانورامية على النهر'
        }
      ],
      topHighlights: [
        { name: 'واجهة البوند وكروز نهر هوانغبو', mapsQuery: 'The Bund Shanghai' },
        { name: 'ديزني لاند شنغهاي (أرض زوتوبيا)', mapsQuery: 'Shanghai Disneyland Resort' },
        { name: 'قمة برج شنغهاي (الطابق 118)', mapsQuery: 'Shanghai Tower Observation Deck' },
        { name: 'حدائق يويوان وشارع نانجينغ', mapsQuery: 'Yu Garden Shanghai' }
      ],
      halalSpecialties: 'زلابية شياو لونغ باو الحلال بحشوة لحم البقر والدجاج، أطباق المأكولات البحرية والأسماك على الطريقة الشنغهايّة الحلال، والمطاعم الحلال المعتمدة في ديزني تاون.'
    },
    {
      id: 'zhangjiajie',
      nameAr: 'تشانغجياجيه (جبال أفاتار وبوابة السماء)',
      daysRange: 'الأيام 8 – 10 (3 أيام / 3 ليالٍ)',
      dayNumbers: [8, 9, 10],
      mapsQuery: 'Zhangjiajie National Forest Park China',
      coverImage: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1000&q=80',
      description: 'أعجوبة الطبيعة الصينية ذات القمم الصخرية المعلقة بين السحب التي ألهمت فيلم أفاتار، مع أطول تلفريك جبلي في العالم إلى قوس بوابة السماء ومصعد بايلونغ الزجاجي الشاهق.',
      arrivalTransport: 'طيران داخلي مباشر لشخصين من شنغهاي (SHA) إلى تشانغجياجيه (DYG) (~ساعتان)',
      hotelStayTotalSAR: 2550,
      activitiesTransportTotalSAR: 4200,
      mealsTotalSAR: 1470,
      hotels: [
        {
          nameAr: 'فندق جراند حياة تشانغجياجيه (Grand Hyatt Zhangjiajie)',
          stars: '5 نجوم فاخر (غرفة لشخصين)',
          pricePerNightSAR: 850,
          mapsQuery: 'Zhangjiajie 5 star hotel Wulingyuan',
          features: 'إقامة فاخرة وسط الطبيعة الجبلية الخلابة بالقرب من المنتزه الوطني'
        },
        {
          nameAr: 'فندق بولمان تشانغجياجيه (Pullman Zhangjiajie Hotel)',
          stars: '5 نجوم منتجع جبلي (غرفة لشخصين)',
          pricePerNightSAR: 850,
          mapsQuery: 'Pullman Zhangjiajie Hotel',
          features: 'يقع في منطقة وولينغيوان بالقرب من بوابات جبال أفاتار مع حدائق ومسابح'
        }
      ],
      topHighlights: [
        { name: 'مجمع المباني الـ 72 العجيبة ليلاً', mapsQuery: '72 Strange Buildings Zhangjiajie' },
        { name: 'جبل تيانمن وقوس بوابة السماء', mapsQuery: 'Tianmen Mountain National Forest Park' },
        { name: 'الممر الزجاجي المعلق وتلفريك تيانمن', mapsQuery: 'Tianmen Mountain Glass Skywalk' },
        { name: 'جبال أفاتار ومصعد بايلونغ الزجاجي', mapsQuery: 'Bailong Elevator Zhangjiajie' }
      ],
      halalSpecialties: 'وجبة سانشياجاو المعدّة بلحم البقر والضأن الحلال، شرائح اللحم البقري الحلال المدخن على الحطب مع الفطر البري الجبلي، وحساء الفطر الجبلي الطازج.'
    },
    {
      id: 'chongqing',
      nameAr: 'تشونغتشينغ (مدينة الجبال والسايبربانك)',
      daysRange: 'الأيام 11 – 13 (3 أيام / 3 ليالٍ)',
      dayNumbers: [11, 12, 13],
      mapsQuery: 'Chongqing Hongyadong Raffles City China',
      coverImage: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1000&q=80',
      description: 'المدينة الجبلية متعددة الطوابق المبهرة بإضاءاتها الليلية، ومجمع هونغ يادونغ الخيالي، وقطار ليزيبا المونوريل المخترق للمباني السكنية، وجسر رافلز سيتي المعلق فوق التقاء النهرين.',
      arrivalTransport: 'قطار الرصاصة السريع (درجة أولى لشخصين) من تشانغجياجيه إلى تشونغتشينغ (~2.5 ساعة)',
      hotelStayTotalSAR: 3000,
      activitiesTransportTotalSAR: 1960,
      mealsTotalSAR: 1770,
      hotels: [
        {
          nameAr: 'فندق نيكولو تشونغتشينغ (Niccolo Chongqing)',
          stars: '5 نجوم فوق السحاب (غرفة لشخصين)',
          pricePerNightSAR: 1000,
          mapsQuery: 'Niccolo Chongqing Hotel',
          features: 'يحتل الطوابق العليا من برج IFS مع إطلالة بانورامية مذهلة على المدينة والنهرين'
        },
        {
          nameAr: 'فندق إنتركونتيننتال رافلز سيتي (InterContinental Chongqing Raffles City)',
          stars: '5 نجوم أيقوني (غرفة لشخصين)',
          pricePerNightSAR: 1000,
          mapsQuery: 'InterContinental Chongqing Raffles City',
          features: 'يقع داخل الجسر السماوي المعلق في أبراج رافلز سيتي عند التقاء النهرين'
        }
      ],
      topHighlights: [
        { name: 'مجمع هونغ يادونغ المضيء ليلاً', mapsQuery: 'Hongyadong Chongqing' },
        { name: 'محطة قطار ليزيبا المخترق للمبنى', mapsQuery: 'Liziba Monorail Station Chongqing' },
        { name: 'بلدة تشيقيكو التاريخية القديمة', mapsQuery: 'Ciqikou Ancient Town Chongqing' },
        { name: 'جسر رافلز سيتي وكروز نهر اليانغتسي', mapsQuery: 'Raffles City Chongqing Skybridge' }
      ],
      halalSpecialties: 'هوت بوت تشونغتشينغ الحلال المعتمد (بمرق التوابل السيتشوانية النباتية أو شحم البقر الحلال)، سمك النهر المشوي الحلال، ودجاج تشونغتشينغ المقرمش الحلال.'
    },
    {
      id: 'dali',
      nameAr: 'منتجع دالي - يونان (بحيرة إيرهاي والاستجمام)',
      daysRange: 'الأيام 14 – 16 (3 أيام / 3 ليالٍ)',
      dayNumbers: [14, 15, 16],
      mapsQuery: 'Dali Erhai Lake Yunnan China',
      coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      description: 'محطة الاسترخاء والطبيعة الحالمة على ضفاف بحيرة إيرهاي الفيروزية وجبال كانغشان في مقاطعة يونان، مع جولات الجيب المكشوفة وبلدة دالي القديمة ومعابد الباغودات الثلاث.',
      arrivalTransport: 'قطار الرصاصة السريع (درجة أولى لشخصين) من تشونغتشينغ إلى دالي (~6 ساعات)',
      hotelStayTotalSAR: 4200,
      activitiesTransportTotalSAR: 2510,
      mealsTotalSAR: 1700,
      hotels: [
        {
          nameAr: 'منتجع إيرهاي ساندز دالي (Erhai Sands Resort Dali)',
          stars: 'منتجع 5 نجوم على البحيرة (جناح لشخصين)',
          pricePerNightSAR: 1400,
          mapsQuery: 'Erhai Lake Luxury Resort Dali Yunnan',
          features: 'تراس خاص مطل مباشرة على مياه بحيرة إيرهاي الصافية وجبال كانغشان'
        },
        {
          nameAr: 'منتجع دالي ليانغ شان تشوانغ (Dali Daliangshanzhuang Resort)',
          stars: 'منتجع 5 نجوم فاخر (جناح لشخصين)',
          pricePerNightSAR: 1400,
          mapsQuery: 'Dali Ancient City Luxury Resort Hotel',
          features: 'تصميم تراثي فخم بحدائق هادئة ومرافق سبا طبيعية متكاملة'
        }
      ],
      topHighlights: [
        { name: 'الممر البيئي لبحيرة إيرهاي وجبال كانغشان', mapsQuery: 'Erhai Ecological Corridor Dali' },
        { name: 'قرية شوانغلانغ وبلدة شيتشو التراثية', mapsQuery: 'Shuanglang Ancient Town Dali' },
        { name: 'الباغودات الثلاث في معبد تشونغشنغ', mapsQuery: 'Three Pagodas Dali' },
        { name: 'مدينة دالي القديمة وأسواق الفضة', mapsQuery: 'Dali Ancient City Yunnan' }
      ],
      halalSpecialties: 'تشتهر دالي بمجتمع مسلمي هوي العريق؛ تشمل الوجبات نودلز عبور الجسر الحلال، هوت بوت الفطر البري الجبلي مع اللحم الحلال، وسمك بحيرة إيرهاي بالفخار.'
    },
    {
      id: 'guangzhou',
      nameAr: 'قوانغتشو والعودة للرياض (تشيميلونغ وبرج كانتون)',
      daysRange: 'الأيام 17 – 20 (4 أيام / 3 ليالٍ)',
      dayNumbers: [17, 18, 19, 20],
      mapsQuery: 'Guangzhou Canton Tower Chimelong China',
      coverImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
      description: 'ختام الرحلة في عاصمة الجنوب النابضة بالحياة؛ إقامة في منتجع تشيميلونغ العالمي لحضور السيرك الدولي وحديقة السفاري وتوائم الباندا، ثم برج كانتون والتسوق والعودة المباشرة للرياض.',
      arrivalTransport: 'قطار الرصاصة السريع لشخصين من دالي إلى قوانغتشو + طيران عودة مباشر لشخصين للرياض (RUH)',
      hotelStayTotalSAR: 3600,
      activitiesTransportTotalSAR: 9760,
      mealsTotalSAR: 1890,
      hotels: [
        {
          nameAr: 'فندق تشيميلونغ قوانغتشو (Chimelong Hotel Guangzhou)',
          stars: 'منتجع 5 نجوم ترفيهي (غرفة لشخصين)',
          pricePerNightSAR: 1200,
          mapsQuery: 'Chimelong Hotel Guangzhou',
          features: 'يقع في قلب منتجع تشيميلونغ مع ساحة للنمور البيضاء وطيور الفلامنغو'
        },
        {
          nameAr: 'فندق تشيميلونغ باندا (Chimelong Panda Hotel)',
          stars: 'منتجع 5 نجوم عائلي (غرفة لشخصين)',
          pricePerNightSAR: 1200,
          mapsQuery: 'Chimelong Panda Hotel Guangzhou',
          features: 'تصميم مبهج مستوحى من ثلاثي الباندا مع قطار داخلي للسيرك والسفاري'
        },
        {
          nameAr: 'فندق روزوود قوانغتشو (Rosewood Guangzhou)',
          stars: '5 نجوم الترا فاخر (غرفة لشخصين)',
          pricePerNightSAR: 1200,
          mapsQuery: 'Rosewood Guangzhou CTF Finance Centre',
          features: 'أعلى فندق 5 نجوم في العالم بإطلالة مباشرة على برج كانتون ونهر اللؤلؤ'
        }
      ],
      topHighlights: [
        { name: 'عرض السيرك العالمي في تشيميلونغ', mapsQuery: 'Chimelong International Circus Guangzhou' },
        { name: 'سفاري تشيميلونغ وملاهي باراديس', mapsQuery: 'Chimelong Safari Park Guangzhou' },
        { name: 'برج كانتون وعربة الفقاعة المعلقة', mapsQuery: 'Canton Tower Guangzhou' },
        { name: 'جزيرة شاميان وشارع بكين ومسجد أبي وقاص', mapsQuery: 'Shamian Island Guangzhou' }
      ],
      halalSpecialties: 'ديم سوم كانتوني حلال معتمد بالروبيان واللحم الحلال، مأكولات بحرية ومشاوي حلال في مطعم النمور البيضاء ومطاعم قوانغتشو الإسلامية العريقة.'
    }
  ]
};
