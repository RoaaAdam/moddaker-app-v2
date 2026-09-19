// ==========================================
// 1. بيانات القرآن الأساسية
// ==========================================
const quranData = {
    surahInfo: {
        1: { name: "الفاتحة", type: "مكية", parts: [1] },
        2: { name: "البقرة", type: "مدنية", parts: [1, 2, 3] },
        3: { name: "آل عمران", type: "مدنية", parts: [3, 4] },
        4: { name: "النساء", type: "مدنية", parts: [4, 5, 6] },
        5: { name: "المائدة", type: "مدنية", parts: [6, 7] },
        6: { name: "الأنعام", type: "مكية", parts: [7, 8, 9] },
        7: { name: "الأعراف", type: "مكية", parts: [8, 9, 10] },
        8: { name: "الأنفال", type: "مدنية", parts: [9, 10] },
        9: { name: "التوبة", type: "مدنية", parts: [10, 11] },
        10: { name: "يونس", type: "مكية", parts: [11] },
        11: { name: "هود", type: "مكية", parts: [12] },
        12: { name: "يوسف", type: "مكية", parts: [13] },
        13: { name: "الرعد", type: "مدنية", parts: [13] },
        14: { name: "إبراهيم", type: "مكية", parts: [14] },
        15: { name: "الحجر", type: "مكية", parts: [14] },
        16: { name: "النحل", type: "مكية", parts: [14] },
        17: { name: "الإسراء", type: "مكية", parts: [15] },
        18: { name: "الكهف", type: "مكية", parts: [15, 16] },
        19: { name: "مريم", type: "مكية", parts: [16] },
        20: { name: "طه", type: "مكية", parts: [16] },
        21: { name: "الأنبياء", type: "مكية", parts: [17] },
        22: { name: "الحج", type: "مدنية", parts: [17] },
        23: { name: "المؤمنون", type: "مكية", parts: [18] },
        24: { name: "النور", type: "مدنية", parts: [18] },
        25: { name: "الفرقان", type: "مكية", parts: [18, 19] },
        26: { name: "الشعراء", type: "مكية", parts: [19] },
        27: { name: "النمل", type: "مكية", parts: [19, 20] },
        28: { name: "القصص", type: "مكية", parts: [20] },
        29: { name: "العنكبوت", type: "مكية", parts: [20, 21] },
        30: { name: "الروم", type: "مكية", parts: [21] },
        31: { name: "لقمان", type: "مكية", parts: [21] },
        32: { name: "السجدة", type: "مكية", parts: [21] },
        33: { name: "الأحزاب", type: "مدنية", parts: [21, 22] },
        34: { name: "سبأ", type: "مكية", parts: [22] },
        35: { name: "فاطر", type: "مكية", parts: [22] },
        36: { name: "يس", type: "مكية", parts: [22, 23] },
        37: { name: "الصافات", type: "مكية", parts: [23] },
        38: { name: "ص", type: "مكية", parts: [23] },
        39: { name: "الزمر", type: "مكية", parts: [23, 24] },
        40: { name: "غافر", type: "مكية", parts: [24] },
        41: { name: "فصلت", type: "مكية", parts: [24, 25] },
        42: { name: "الشورى", type: "مكية", parts: [25] },
        43: { name: "الزخرف", type: "مكية", parts: [25] },
        44: { name: "الدخان", type: "مكية", parts: [25] },
        45: { name: "الجاثية", type: "مكية", parts: [25] },
        46: { name: "الأحقاف", type: "مكية", parts: [26] },
        47: { name: "محمد", type: "مدنية", parts: [26] },
        48: { name: "الفتح", type: "مدنية", parts: [26] },
        49: { name: "الحجرات", type: "مدنية", parts: [26] },
        50: { name: "ق", type: "مكية", parts: [26] },
        51: { name: "الذاريات", type: "مكية", parts: [26, 27] },
        52: { name: "الطور", type: "مكية", parts: [27] },
        53: { name: "النجم", type: "مكية", parts: [27] },
        54: { name: "القمر", type: "مكية", parts: [27] },
        55: { name: "الرحمن", type: "مدنية", parts: [27] },
        56: { name: "الواقعة", type: "مكية", parts: [27] },
        57: { name: "الحديد", type: "مدنية", parts: [27] },
        58: { name: "المجادلة", type: "مدنية", parts: [28] },
        59: { name: "الحشر", type: "مدنية", parts: [28] },
        60: { name: "الممتحنة", type: "مدنية", parts: [28] },
        61: { name: "الصف", type: "مدنية", parts: [28] },
        62: { name: "الجمعة", type: "مدنية", parts: [28] },
        63: { name: "المنافقون", type: "مدنية", parts: [28] },
        64: { name: "التغابن", type: "مدنية", parts: [28] },
        65: { name: "الطلاق", type: "مدنية", parts: [28] },
        66: { name: "التحريم", type: "مدنية", parts: [28] },
        67: { name: "الملك", type: "مكية", parts: [29] },
        68: { name: "القلم", type: "مكية", parts: [29] },
        69: { name: "الحاقة", type: "مكية", parts: [29] },
        70: { name: "المعارج", type: "مكية", parts: [29] },
        71: { name: "نوح", type: "مكية", parts: [29] },
        72: { name: "الجن", type: "مكية", parts: [29] },
        73: { name: "المزمل", type: "مكية", parts: [29] },
        74: { name: "المدثر", type: "مكية", parts: [29] },
        75: { name: "القيامة", type: "مكية", parts: [29] },
        76: { name: "الإنسان", type: "مدنية", parts: [29] },
        77: { name: "المرسلات", type: "مكية", parts: [29] },
        78: { name: "النبأ", type: "مكية", parts: [30] },
        79: { name: "النازعات", type: "مكية", parts: [30] },
        80: { name: "عبس", type: "مكية", parts: [30] },
        81: { name: "التكوير", type: "مكية", parts: [30] },
        82: { name: "الانفطار", type: "مكية", parts: [30] },
        83: { name: "المطففين", type: "مكية", parts: [30] },
        84: { name: "الانشقاق", type: "مكية", parts: [30] },
        85: { name: "البروج", type: "مكية", parts: [30] },
        86: { name: "الطارق", type: "مكية", parts: [30] },
        87: { name: "الأعلى", type: "مكية", parts: [30] },
        88: { name: "الغاشية", type: "مكية", parts: [30] },
        89: { name: "الفجر", type: "مكية", parts: [30] },
        90: { name: "البلد", type: "مكية", parts: [30] },
        91: { name: "الشمس", type: "مكية", parts: [30] },
        92: { name: "الليل", type: "مكية", parts: [30] },
        93: { name: "الضحى", type: "مكية", parts: [30] },
        94: { name: "الشرح", type: "مكية", parts: [30] },
        95: { name: "التين", type: "مكية", parts: [30] },
        96: { name: "العلق", type: "مكية", parts: [30] },
        97: { name: "القدر", type: "مكية", parts: [30] },
        98: { name: "البينة", type: "مدنية", parts: [30] },
        99: { name: "الزلزلة", type: "مدنية", parts: [30] },
        100: { name: "العاديات", type: "مكية", parts: [30] },
        101: { name: "القارعة", type: "مكية", parts: [30] },
        102: { name: "التكاثر", type: "مكية", parts: [30] },
        103: { name: "العصر", type: "مكية", parts: [30] },
        104: { name: "الهمزة", type: "مكية", parts: [30] },
        105: { name: "الفيل", type: "مكية", parts: [30] },
        106: { name: "قريش", type: "مكية", parts: [30] },
        107: { name: "الماعون", type: "مكية", parts: [30] },
        108: { name: "الكوثر", type: "مكية", parts: [30] },
        109: { name: "الكافرون", type: "مكية", parts: [30] },
        110: { name: "النصر", type: "مدنية", parts: [30] },
        111: { name: "المسد", type: "مكية", parts: [30] },
        112: { name: "الإخلاص", type: "مكية", parts: [30] },
        113: { name: "الفلق", type: "مكية", parts: [30] },
        114: { name: "الناس", type: "مكية", parts: [30] }
    },

    surahThemes: {
        "الفاتحة": "التوحيد والاستعانة بالله",
        "البقرة": "الهداية والتشريع والأحكام",
        "آل عمران": "التوحيد والجهاد وأهل الكتاب",
        "النساء": "الأحكام الاجتماعية والأسرة",
        "المائدة": "الأحكام التشريعية والطعام",
        "الأنعام": "التوحيد وإبطال الشرك",
        "الأعراف": "قصص الأنبياء والغيب",
        "الأنفال": "الجهاد والغنائم",
        "التوبة": "البراءة من المشركين والجهاد",
        "يونس": "التوحيد وقصص الأنبياء",
        "هود": "قصص الأنبياء والعذاب",
        "يوسف": "قصة يوسف والعبر",
        "الرعد": "التوحيد والآيات الكونية",
        "إبراهيم": "الدعوة إلى التوحيد",
        "الحجر": "التوحيد وقصص السابقين",
        "النحل": "النعم والتوحيد",
        "الإسراء": "التوحيد والإسراء",
        "الكهف": "الفتن والعبر",
        "مريم": "قصص الأنبياء والزكريا",
        "طه": "قصة موسى والتوحيد",
        "الأنبياء": "قصص الأنبياء",
        "الحج": "أحكام الحج والتوحيد",
        "المؤمنون": "صفات المؤمنين",
        "النور": "الأحكام الاجتماعية والآداب",
        "الفرقان": "التوحيد والرد على المشركين",
        "الشعراء": "قصص الأنبياء",
        "النمل": "قصص الأنبياء وسليمان",
        "القصص": "قصة موسى",
        "العنكبوت": "الفتن والجهاد",
        "الروم": "الآيات الكونية والنصر",
        "لقمان": "الحكمة والموعظة",
        "السجدة": "التوحيد والسجود",
        "الأحزاب": "الأحكام والجهاد",
        "سبأ": "التوحيد وقصص السابقين",
        "فاطر": "التوحيد والخلق",
        "يس": "التوحيد والبعث",
        "الصافات": "التوحيد والملائكة",
        "ص": "قصص الأنبياء",
        "الزمر": "التوحيد والبعث",
        "غافر": "التوحيد والاستغفار",
        "فصلت": "التوحيد والرد على المشركين",
        "الشورى": "التوحيد والشورى",
        "الزخرف": "التوحيد والزخرف الدنيوي",
        "الدخان": "التوحيد والعذاب",
        "الجاثية": "التوحيد والبعث",
        "الأحقاف": "التوحيد وقصص السابقين",
        "محمد": "الجهاد والأحكام",
        "الفتح": "الفتح والنصر",
        "الحجرات": "الآداب والأخلاق",
        "ق": "التوحيد والبعث",
        "الذاريات": "التوحيد والذاريات",
        "الطور": "التوحيد والطور",
        "النجم": "التوحيد والنجم",
        "القمر": "التوحيد والقمر",
        "الرحمن": "آلاء الله ونعمه",
        "الواقعة": "الواقعة والبعث",
        "الحديد": "التوحيد والحديد",
        "المجادلة": "الأحكام والمجادلة",
        "الحشر": "الحشر والجهاد",
        "الممتحنة": "الولاء والبراء",
        "الصف": "الجهاد والتوحيد",
        "الجمعة": "الجمعة والتوحيد",
        "المنافقون": "صفات المنافقين",
        "التغابن": "التغابن والبعث",
        "الطلاق": "أحكام الطلاق",
        "التحريم": "الأحكام والتحريم",
        "الملك": "الملك والتوحيد",
        "القلم": "القلم والتوحيد",
        "الحاقة": "الحاقة والبعث",
        "المعارج": "المعارج والبعث",
        "نوح": "قصة نوح",
        "الجن": "الجن والتوحيد",
        "المزمل": "القيام والتهجد",
        "المدثر": "الإنذار والتبشير",
        "القيامة": "القيامة والبعث",
        "الإنسان": "الإنسان والخلق",
        "المرسلات": "المرسلات والبعث",
        "النبأ": "النبأ العظيم",
        "النازعات": "النازعات والبعث",
        "عبس": "عبس والتوحيد",
        "التكوير": "التكوير والبعث",
        "الانفطار": "الانفطار والبعث",
        "المطففين": "المطففين والبعث",
        "الانشقاق": "الانشقاق والبعث",
        "البروج": "البروج والتوحيد",
        "الطارق": "الطارق والتوحيد",
        "الأعلى": "الأعلى والتوحيد",
        "الغاشية": "الغاشية والبعث",
        "الفجر": "الفجر والبعث",
        "البلد": "البلد والتوحيد",
        "الشمس": "الشمس والتوحيد",
        "الليل": "الليل والتوحيد",
        "الضحى": "الضحى والتوحيد",
        "الشرح": "الشرح والتوحيد",
        "التين": "التين والبعث",
        "العلق": "العلق والتوحيد",
        "القدر": "القدر والتوحيد",
        "البينة": "البينة والتوحيد",
        "الزلزلة": "الزلزلة والبعث",
        "العاديات": "العاديات والبعث",
        "القارعة": "القارعة والبعث",
        "التكاثر": "التكاثر والبعث",
        "العصر": "العصر والتوحيد",
        "الهمزة": "الهمزة والتوحيد",
        "الفيل": "الفيل والتوحيد",
        "قريش": "قريش والتوحيد",
        "الماعون": "الماعون والتوحيد",
        "الكوثر": "الكوثر والتوحيد",
        "الكافرون": "الكافرون والتوحيد",
        "النصر": "النصر والتوحيد",
        "المسد": "المسد والتوحيد",
        "الإخلاص": "التوحيد والإخلاص",
        "الفلق": "الفلق والتوحيد",
        "الناس": "الناس والتوحيد"
    },

    wordMeanings: {
        "الْحَمْدُ": "الثناء والمدح",
        "رَبِّ": "المالك والمربي",
        "الْعَالَمِينَ": "جميع الخلائق",
        "الرَّحْمَٰنِ": "ذو الرحمة الواسعة",
        "الرَّحِيمِ": "شديد الرحمة",
        "مَالِكِ": "المالك المتصرف",
        "يَوْمِ": "الوقت والزمان",
        "الدِّينِ": "الجزاء والحساب",
        "إِيَّاكَ": "إياك (للاختصاص)",
        "نَعْبُدُ": "نعبد ونتذلل",
        "نَسْتَعِينُ": "نطلب العون",
        "اهْدِنَا": "أرشدنا ودلنا",
        "الصِّرَاطَ": "الطريق",
        "الْمُسْتَقِيمَ": "المستقيم الموصل إلى الله",
        "أَنْعَمْتَ": "أنعمت وأعطيت",
        "عَلَيْهِمْ": "عليهم",
        "الْمَغْضُوبِ": "المغضوب عليهم",
        "الضَّالِّينَ": "الضالين عن الحق",
        "رَبَّنَا": "ربنا (نداء)",
        "آمَنَّا": "آمنا وصدقنا",
        "أَنزَلْتَ": "أنزلت وأرسلت",
        "وَاتَّبَعْنَا": "واتبعنا واقتدينا",
        "الرَّسُولَ": "الرسول والمرسل",
        "فَاكْتُبْنَا": "فاكتبنا وأثبتنا",
        "مَعَ": "مع (بمعنى صحبة)",
        "الشَّاهِدِينَ": "الشاهدين والحاضرين",
        "الرَّحْمَٰنُ": "ذو الرحمة الواسعة",
        "عَلَّمَ": "علم وأرشد",
        "الْقُرْآنَ": "القرآن الكريم",
        "خَلَقَ": "خلق وأوجد",
        "الْإِنسَانَ": "الإنسان"
    },

    similarAyahs: {
        "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ": "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
        "وَإِذَا السَّمَاءُ انشَقَّتْ": "وَإِذَا السَّمَاءُ انشَقَّتْ",
        "إِذَا السَّمَاءُ انفَطَرَتْ": "إِذَا السَّمَاءُ انفَطَرَتْ",
        "أَلْهَاكُمُ التَّكَاثُرُ": "أَلْهَاكُمُ التَّكَاثُرُ",
        "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ": "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ",
        "كَلَّا سَوْفَ تَعْلَمُونَ": "كَلَّا سَوْفَ تَعْلَمُونَ",
        "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ": "ثُمَّ كَلَّا سَوْفَ تَعْلَمُونَ",
        "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ": "كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ",
        "لَتَرَوُنَّ الْجَحِيمَ": "لَتَرَوُنَّ الْجَحِيمَ",
        "ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ": "ثُمَّ لَتَرَوُنَّهَا عَيْنَ الْيَقِينِ"
    }
};

// ==========================================
// 2. دوال جلب بيانات المصحف (خارج DOMContentLoaded)
// ==========================================
async function fetchSurahsList() {
    const cachedSurahs = localStorage.getItem("mudakkir_cached_surahs");
    if (cachedSurahs) {
        return JSON.parse(cachedSurahs);
    }

    try {
        const res = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await res.json();
        if (data.code === 200) {
            localStorage.setItem("mudakkir_cached_surahs", JSON.stringify(data.data));
            return data.data;
        }
    } catch (err) {
        console.error("خطأ في جلب السور:", err);
    }
    return [];
}

async function fetchSurahDetail(surahNum) {
    const cacheKey = `mudakkir_surah_detail_${surahNum}`;
    const cachedDetail = localStorage.getItem(cacheKey);
    if (cachedDetail) return JSON.parse(cachedDetail);

    try {
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}`);
        const data = await res.json();
        if (data.code === 200) {
            localStorage.setItem(cacheKey, JSON.stringify(data.data));
            return data.data;
        }
    } catch (e) {
        console.error(`خطأ في جلب السورة ${surahNum}:`, e);
    }
    return null;
}

// ==========================================
// 3. دوال مساعدة
// ==========================================
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getSimilarAyahEndings(correctEnding, poolOfAyahs) {
    const endings = [];
    const used = new Set([correctEnding]);
    const shuffled = shuffleArray([...poolOfAyahs]);
    for (const ayah of shuffled) {
        const words = ayah.text.split(" ");
        if (words.length > 3) {
            const ending = words.slice(-3).join(" ");
            if (!used.has(ending) && endings.length < 3) {
                endings.push(ending);
                used.add(ending);
            }
        }
        if (endings.length >= 3) break;
    }
    while (endings.length < 3) {
        const randomAyah = poolOfAyahs[Math.floor(Math.random() * poolOfAyahs.length)];
        if (randomAyah) {
            const words = randomAyah.text.split(" ");
            if (words.length > 3) {
                const ending = words.slice(-3).join(" ");
                if (!used.has(ending)) {
                    endings.push(ending);
                    used.add(ending);
                }
            }
        }
    }
    return endings;
}

function getSimilarWords(correctWord, poolOfAyahs) {
    const words = [];
    const used = new Set([correctWord]);
    const cleanCorrect = correctWord.replace(/[ًٌٍَُِّْ]/g, "");
    const shuffled = shuffleArray([...poolOfAyahs]);
    for (const ayah of shuffled) {
        const ayahWords = ayah.text.split(" ");
        for (const w of ayahWords) {
            const clean = w.replace(/[ًٌٍَُِّْ]/g, "");
            if (clean.length > 2 && clean !== cleanCorrect && !used.has(clean) && words.length < 3) {
                words.push(clean);
                used.add(clean);
            }
        }
        if (words.length >= 3) break;
    }
    const fallbackWords = ["اللَّهُ", "رَبِّ", "الْعَالَمِينَ", "الرَّحْمَٰنِ", "الرَّحِيمِ"];
    while (words.length < 3) {
        const randomWord = fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
        if (!used.has(randomWord) && randomWord !== cleanCorrect) {
            words.push(randomWord);
            used.add(randomWord);
        }
    }
    return words;
}

function getRandomSurahs(excludeNumber, count) {
    const allNumbers = Object.keys(quranData.surahInfo).map(Number);
    const available = allNumbers.filter(n => n !== excludeNumber);
    const selected = shuffleArray(available).slice(0, count);
    return selected.map(n => quranData.surahInfo[n].name);
}

function getRandomParts(correctPart, count) {
    const parts = [];
    const used = new Set([correctPart]);
    for (let i = 1; i <= 30; i++) {
        if (i !== correctPart && parts.length < count) {
            parts.push(i);
            used.add(i);
        }
    }
    return shuffleArray(parts).slice(0, count);
}

function getWrongMeanings(correctMeaning) {
    const allMeanings = Object.values(quranData.wordMeanings);
    const wrong = [];
    const used = new Set([correctMeaning]);
    for (const m of shuffleArray(allMeanings)) {
        if (m !== correctMeaning && !used.has(m) && wrong.length < 3) {
            wrong.push(m);
            used.add(m);
        }
    }
    const fallback = ["معنى غير محدد", "معنى آخر", "معنى مختلف"];
    while (wrong.length < 3) {
        const f = fallback[wrong.length];
        if (!used.has(f)) {
            wrong.push(f);
            used.add(f);
        }
    }
    return wrong;
}

function getWrongThemes(correctTheme) {
    const allThemes = Object.values(quranData.surahThemes);
    const wrong = [];
    const used = new Set([correctTheme]);
    for (const t of shuffleArray(allThemes)) {
        if (t !== correctTheme && !used.has(t) && wrong.length < 3) {
            wrong.push(t);
            used.add(t);
        }
    }
    return wrong;
}

function extractSurahNumbers(scopes) {
    const surahSet = new Set();
    scopes.forEach(sc => {
        if (sc.startsWith("surah_")) surahSet.add(parseInt(sc.replace("surah_", "")));
        else if (sc.startsWith("juz_")) {
            const j = parseInt(sc.replace("juz_", ""));
            for (let s = (j - 1) * 4 + 1; s <= j * 4 && s <= 114; s++) surahSet.add(s);
        } else if (sc.startsWith("hizb_") || sc.startsWith("quarter_")) {
            surahSet.add(Math.floor(Math.random() * 114) + 1);
        }
    });
    if (surahSet.size === 0) surahSet.add(1);
    return Array.from(surahSet);
}

// ==========================================
// 4. توليد الأسئلة الذكي
// ==========================================
async function buildSmartQuestions(surahNumbers, totalCount, allowedTypes) {
    const questions = [];
    const usedKeysSet = new Set();
    const fetchedSurahs = await Promise.all(surahNumbers.map(num => fetchSurahDetail(num)));

    const poolOfAyahs = [];
    fetchedSurahs.forEach(s => {
        if (s && s.ayahs) {
            s.ayahs.forEach(a => {
                poolOfAyahs.push({
                    text: a.text,
                    surahName: s.name,
                    surahNumber: s.number,
                    numberInSurah: a.numberInSurah
                });
            });
        }
    });

    if (poolOfAyahs.length === 0) return [];

    let attempts = 0;
    let typeIndex = 0;

    const availableTypes = allowedTypes.filter(t =>
        ["completion", "missing_word", "surah_name", "start_end", "word_order",
        "next_prev_surah", "identify_part", "meccan_medinan", "word_meaning",
        "ayah_theme", "similar_ayah"].includes(t)
    );

    if (availableTypes.length === 0) return [];

    while (questions.length < totalCount && attempts < 500) {
        attempts++;
        const chosenType = availableTypes[typeIndex % availableTypes.length];
        typeIndex++;

        const ayah = poolOfAyahs[Math.floor(Math.random() * poolOfAyahs.length)];
        if (!ayah) continue;

        const words = ayah.text.split(" ");
        if (words.length < 3) continue;

        const uniqueKey = `${ayah.surahNumber}_${ayah.numberInSurah}_${chosenType}`;
        if (usedKeysSet.has(uniqueKey)) continue;

        let question = null;

        // النوع 1: إكمال الآية
        if (chosenType === "completion") {
            if (words.length < 3 || words.length > 15) continue;
            const splitIndex = Math.floor(words.length * (0.5 + Math.random() * 0.3));
            const startPart = words.slice(0, splitIndex).join(" ");
            const endPart = words.slice(splitIndex).join(" ");
            const wrongEndings = getSimilarAyahEndings(endPart, poolOfAyahs);
            question = {
                badge: "1. إكمال الآية",
                title: "أكمل الآية التالية:",
                promptHtml: `"${startPart} ..."`,
                correctAnswer: endPart,
                options: shuffleArray([endPart, ...wrongEndings]),
                surahName: ayah.surahName,
                uniqueKey: uniqueKey
            };
        }

        // النوع 2: الكلمة الناقصة
        else if (chosenType === "missing_word") {
            if (words.length < 4) continue;
            const targetIndex = Math.floor(Math.random() * (words.length - 2)) + 1;
            const missingWord = words[targetIndex].replace(/[ًٌٍَُِّْ]/g, "");
            const displayWords = [...words];
            displayWords[targetIndex] = `<span style="color:var(--primary-color); font-weight:bold;">[ ... ]</span>`;
            const wrongWords = getSimilarWords(missingWord, poolOfAyahs);
            question = {
                badge: "2. الكلمة الناقصة",
                title: "اختر الكلمة الصحيحة لملء الفراغ:",
                promptHtml: `"${displayWords.join(" ")}"`,
                correctAnswer: missingWord,
                options: shuffleArray([missingWord, ...wrongWords]),
                surahName: ayah.surahName,
                uniqueKey: uniqueKey
            };
        }

        // النوع 3: اسم السورة
        else if (chosenType === "surah_name") {
            const otherSurahs = poolOfAyahs
                .map(a => a.surahName)
                .filter(n => n !== ayah.surahName)
                .filter((v, i, a) => a.indexOf(v) === i);
            const wrongSurahs = shuffleArray(otherSurahs).slice(0, 3);
            question = {
                badge: "3. اسم السورة",
                title: "في أي سورة وردت هذه الآية؟",
                promptHtml: `"${ayah.text}"`,
                correctAnswer: ayah.surahName,
                options: shuffleArray([ayah.surahName, ...wrongSurahs]),
                surahName: ayah.surahName,
                uniqueKey: uniqueKey
            };
        }

        // النوع 4: بداية أو نهاية الآية
        else if (chosenType === "start_end") {
            if (words.length < 3) continue;
            const askForStart = Math.random() > 0.5;
            let correctWord, promptText, displayText;
            if (askForStart) {
                correctWord = words[0];
                const remaining = words.slice(1).join(" ");
                promptText = "ما هي الكلمة الأولى في هذه الآية؟";
                displayText = `"... ${remaining}"`;
            } else {
                correctWord = words[words.length - 1];
                const remaining = words.slice(0, -1).join(" ");
                promptText = "ما هي الكلمة الأخيرة في هذه الآية؟";
                displayText = `"${remaining} ..."`;
            }
            const wrongWords = getSimilarWords(correctWord, poolOfAyahs);
            question = {
                badge: "4. بداية/نهاية الآية",
                title: promptText,
                promptHtml: displayText,
                correctAnswer: correctWord,
                options: shuffleArray([correctWord, ...wrongWords]),
                surahName: ayah.surahName,
                uniqueKey: uniqueKey
            };
        }

        // النوع 5: ترتيب السور
        else if (chosenType === "next_prev_surah") {
            const isNext = Math.random() > 0.5;
            const surahNumber = ayah.surahNumber;
            if (isNext && surahNumber < 114) {
                const nextSurah = quranData.surahInfo[surahNumber + 1];
                if (nextSurah) {
                    const wrongSurahs = getRandomSurahs(surahNumber + 1, 3);
                    question = {
                        badge: "5. ترتيب السور",
                        title: `ما هي السورة التي تأتي بعد سورة ${ayah.surahName}؟`,
                        promptHtml: `سورة ${ayah.surahName}`,
                        correctAnswer: nextSurah.name,
                        options: shuffleArray([nextSurah.name, ...wrongSurahs]),
                        surahName: ayah.surahName,
                        uniqueKey: uniqueKey
                    };
                }
            } else if (!isNext && surahNumber > 1) {
                const prevSurah = quranData.surahInfo[surahNumber - 1];
                if (prevSurah) {
                    const wrongSurahs = getRandomSurahs(surahNumber - 1, 3);
                    question = {
                        badge: "5. ترتيب السور",
                        title: `ما هي السورة التي تأتي قبل سورة ${ayah.surahName}؟`,
                        promptHtml: `سورة ${ayah.surahName}`,
                        correctAnswer: prevSurah.name,
                        options: shuffleArray([prevSurah.name, ...wrongSurahs]),
                        surahName: ayah.surahName,
                        uniqueKey: uniqueKey
                    };
                }
            }
        }

        // النوع 6: تحديد الجزء
        else if (chosenType === "identify_part") {
            const surahInfo = quranData.surahInfo[ayah.surahNumber];
            if (surahInfo && surahInfo.parts) {
                const correctPart = surahInfo.parts[0];
                const wrongParts = getRandomParts(correctPart, 3);
                question = {
                    badge: "6. تحديد الجزء",
                    title: "في أي جزء من القرآن وردت هذه الآية؟",
                    promptHtml: `"${ayah.text}"`,
                    correctAnswer: `الجزء ${correctPart}`,
                    options: shuffleArray([
                        `الجزء ${correctPart}`,
                        ...wrongParts.map(p => `الجزء ${p}`)
                    ]),
                    surahName: ayah.surahName,
                    uniqueKey: uniqueKey
                };
            }
        }

        // النوع 7: مكي/مدني
        else if (chosenType === "meccan_medinan") {
            const surahInfo = quranData.surahInfo[ayah.surahNumber];
            if (surahInfo) {
                const correctType = surahInfo.type;
                const wrongTypes = correctType === "مكية" ? ["مدنية"] : ["مكية"];
                question = {
                    badge: "7. مكي/مدني",
                    title: `هل سورة ${ayah.surahName} مكية أم مدنية؟`,
                    promptHtml: `سورة ${ayah.surahName}`,
                    correctAnswer: correctType,
                    options: shuffleArray([correctType, ...wrongTypes]),
                    surahName: ayah.surahName,
                    uniqueKey: uniqueKey
                };
            }
        }

        // النوع 8: معنى الكلمة
        else if (chosenType === "word_meaning") {
            const validWords = words.filter(w => w.replace(/[ًٌٍَُِّْ]/g, "").length > 3);
            if (validWords.length === 0) continue;
            const targetWord = validWords[Math.floor(Math.random() * validWords.length)];
            const cleanWord = targetWord.replace(/[ًٌٍَُِّْ]/g, "");
            const correctMeaning = quranData.wordMeanings[cleanWord];
            if (correctMeaning) {
                const wrongMeanings = getWrongMeanings(correctMeaning);
                const highlightedText = ayah.text.replace(
                    targetWord,
                    `<span style="color:var(--primary-color); font-weight:bold; text-decoration:underline;">${targetWord}</span>`
                );
                question = {
                    badge: "8. معنى الكلمة",
                    title: `ما معنى كلمة "${targetWord}" في هذه الآية؟`,
                    promptHtml: `"${highlightedText}"`,
                    correctAnswer: correctMeaning,
                    options: shuffleArray([correctMeaning, ...wrongMeanings]),
                    surahName: ayah.surahName,
                    uniqueKey: uniqueKey
                };
            }
        }

        // النوع 9: موضوع الآية
        else if (chosenType === "ayah_theme") {
            const theme = quranData.surahThemes[ayah.surahName];
            if (theme) {
                const wrongThemes = getWrongThemes(theme);
                question = {
                    badge: "9. موضوع الآية",
                    title: "ما هو الموضوع الرئيسي لهذه الآية؟",
                    promptHtml: `"${ayah.text}"`,
                    correctAnswer: theme,
                    options: shuffleArray([theme, ...wrongThemes]),
                    surahName: ayah.surahName,
                    uniqueKey: uniqueKey
                };
            }
        }

        // النوع 10: المتشابهات
        else if (chosenType === "similar_ayah") {
            const similarTexts = Object.keys(quranData.similarAyahs);
            const correctText = ayah.text;
            const similar = similarTexts.filter(t =>
                t !== correctText &&
                t.length > 10 &&
                Math.abs(t.length - correctText.length) < 20
            );
            if (similar.length >= 3) {
                const wrongSimilar = shuffleArray(similar).slice(0, 3);
                question = {
                    badge: "10. المتشابهات",
                    title: "اختر الآية الصحيحة:",
                    promptHtml: `"${correctText.substring(0, 30)}..."`,
                    correctAnswer: correctText,
                    options: shuffleArray([correctText, ...wrongSimilar]),
                    surahName: ayah.surahName,
                    uniqueKey: uniqueKey
                };
            }
        }

        if (question) {
            usedKeysSet.add(uniqueKey);
            questions.push(question);
        }
    }

    return questions;
}

// ==========================================
// 5. التطبيق الرئيسي
// ==========================================
const isFirstVisit = localStorage.getItem("mudakkir_onboarding_shown") === null;

document.addEventListener("DOMContentLoaded", () => {

    // --- الصوتيات ---
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    let audioCtx = null;

    function initAudio() {
        if (!audioCtx) audioCtx = new AudioContext();
    }

    function playBeep(freq = 440, duration = 0.15, type = "sine") {
        try {
            initAudio();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {}
    }

    function playSuccessSound() { playBeep(587.33, 0.1); setTimeout(() => playBeep(880, 0.25), 100); }
    function playErrorSound() { playBeep(220, 0.3, "sawtooth"); }

    // --- عناصر الواجهة ---
    const quranHolderBtn = document.getElementById("quran-holder-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");

    const userDisplayName = document.getElementById("user-display-name");
    const userPointsSpan = document.getElementById("user-points-count");
    const loginFormBox = document.getElementById("login-form-box");
    const showLoginBtn = document.getElementById("show-login-btn");
    const loginMenuItem = document.getElementById("login-menu-item");
    const loginModal = document.getElementById("login-modal");
    const closeLoginModalBtn = document.getElementById("close-login-modal-btn");
    const loginModalForm = document.getElementById("login-modal-form");
    const loginModalName = document.getElementById("login-modal-name");
    const loginModalEmail = document.getElementById("login-modal-email");

    const slides = document.querySelectorAll(".onboarding-slide");
    const dots = document.querySelectorAll(".dot");
    const nextSlideBtn = document.getElementById("next-slide-btn");
    const skipBtn = document.getElementById("skip-onboarding-btn");

    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const step3 = document.getElementById("step-3");
    const step4 = document.getElementById("step-4");

    const scopeTabs = document.querySelectorAll(".scope-tab");
    const scopeContainer = document.getElementById("scope-selection-container");

    const qCountInput = document.getElementById("questions-count");
    const btnMinusQ = document.getElementById("btn-minus-q");
    const btnPlusQ = document.getElementById("btn-plus-q");

    const sCountInput = document.getElementById("seconds-per-question");
    const btnMinusS = document.getElementById("btn-minus-s");
    const btnPlusS = document.getElementById("btn-plus-s");

    const difficultySlider = document.getElementById("difficulty-slider");
    const difficultyBadge = document.getElementById("difficulty-badge");
    const timerToggle = document.getElementById("timer-toggle");
    const timerInputContainer = document.getElementById("timer-input-container");

    const startBtn = document.getElementById("start-btn");

    const historyModal = document.getElementById("history-modal");
    const openHistoryBtn = document.getElementById("open-history-btn");
    const closeHistoryModalBtn = document.getElementById("close-history-modal-btn");
    const historyListContainer = document.getElementById("history-list-container");
    const clearHistoryBtn = document.getElementById("clear-history-btn");
    const clearHistoryWrapper = document.getElementById("clear-history-wrapper");

    const detailsModal = document.getElementById("details-modal");
    const closeDetailsModalBtn = document.getElementById("close-details-modal-btn");
    const detailsModalBody = document.getElementById("details-modal-body");

    const feedbackModal = document.getElementById("feedback-modal");
    const triggerFeedbackBtn = document.getElementById("trigger-feedback-modal-btn");
    const openFeedbackMenuBtn = document.getElementById("open-feedback-menu-btn");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const cancelFeedbackBtn = document.getElementById("cancel-feedback-btn");
    const feedbackForm = document.getElementById("feedback-form");

    // --- عناصر الاختبار ---
    const questionBadge = document.getElementById("question-badge");
    const progressText = document.getElementById("progress-text");
    const questionTitle = document.getElementById("question-title");
    const verseText = document.getElementById("verse-text");
    const optionsContainer = document.getElementById("options-container");
    const nextBtn = document.getElementById("next-btn");
    const scoreText = document.getElementById("score-text");
    const scoreMessage = document.getElementById("score-message");
    const earnedPointsSpan = document.getElementById("earned-points");
    const totalTimeSpentSpan = document.getElementById("total-time-spent");
    const toggleErrorsBtn = document.getElementById("toggle-errors-btn");
    const errorsContainer = document.getElementById("errors-container");
    const restartBtn = document.getElementById("restart-btn");

    // --- حالة البيانات ---
    let currentSlide = 0;
    let allSurahs = [];
    let currentScope = "surahs";
    let generatedQuestions = [];
    let currentQuestionIndex = 0;
    let userScore = 0;
    let userAnswersLog = [];
    let quizStartTime = null;
    let timerIntervalId = null;
    let timeLeft = 0;

    let currentUser = localStorage.getItem("mudakkir_user") || "زائر";
    let currentUserEmail = localStorage.getItem("mudakkir_email") || "";
    let userPoints = parseInt(localStorage.getItem(`mudakkir_points_${currentUser}`)) || 0;
    let quizHistory = JSON.parse(localStorage.getItem(`mudakkir_history_${currentUser}`)) || [];

    // --- دوال المستخدم ---
    function updateUserDataUI() {
        if (userDisplayName) userDisplayName.textContent = currentUser;
        if (userPointsSpan) userPointsSpan.textContent = userPoints;
        if (loginMenuItem) {
            loginMenuItem.classList.toggle("hidden", currentUser !== "زائر");
        }
    }
    updateUserDataUI();

    function updateClearHistoryButton() {
        if (clearHistoryWrapper) {
            clearHistoryWrapper.style.display = quizHistory.length === 0 ? "none" : "block";
        }
    }
    updateClearHistoryButton();

    function saveUserData() {
        localStorage.setItem("mudakkir_user", currentUser);
        localStorage.setItem("mudakkir_email", currentUserEmail);
        localStorage.setItem(`mudakkir_points_${currentUser}`, userPoints);
        localStorage.setItem(`mudakkir_history_${currentUser}`, JSON.stringify(quizHistory));
        updateUserDataUI();
        updateClearHistoryButton();
    }

    function handleLogin(nameVal, emailVal) {
        if (!nameVal) return;
        currentUser = nameVal;
        currentUserEmail = emailVal || "";
        saveUserData();

        if (loginFormBox) {
            loginFormBox.classList.add("hidden");
            loginFormBox.style.display = "none";
        }
        if (loginModal) loginModal.classList.add("hidden");
        const guestBox = document.getElementById("guest-mode-box");
        if (guestBox) guestBox.classList.remove("hidden");

        if (step1) step1.classList.add("hidden");
        if (step2) step2.classList.remove("hidden");
        if (allSurahs.length === 0) loadSurahsAndRender();
    }

    // --- تسجيل الدخول ---
    if (loginMenuItem) {
        loginMenuItem.addEventListener("click", () => {
            if (currentUser === "زائر" && loginModal) {
                loginModal.classList.remove("hidden");
                if (loginModalName) loginModalName.value = "";
                if (loginModalEmail) loginModalEmail.value = "";
            }
        });
    }

    if (closeLoginModalBtn) {
        closeLoginModalBtn.addEventListener("click", () => {
            if (loginModal) loginModal.classList.add("hidden");
        });
    }

    if (loginModalForm) {
        loginModalForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameVal = loginModalName ? loginModalName.value.trim() : "";
            const emailVal = loginModalEmail ? loginModalEmail.value.trim() : "";
            handleLogin(nameVal, emailVal);
        });
    }

    if (showLoginBtn) {
        showLoginBtn.addEventListener("click", () => {
            const guestBox = document.getElementById("guest-mode-box");
            if (guestBox) guestBox.classList.add("hidden");
            if (loginFormBox) {
                loginFormBox.classList.remove("hidden");
                loginFormBox.style.display = "flex";
            }
        });
    }

    if (loginFormBox) {
        loginFormBox.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameInput = document.getElementById("user-name-input");
            const emailInput = document.getElementById("user-email-input");
            handleLogin(nameInput ? nameInput.value.trim() : "", emailInput ? emailInput.value.trim() : "");
        });
    }

    // --- إرسال الاقتراحات للتيليجرام ---
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const type = document.getElementById("feedback-type").value;
            const details = document.getElementById("feedback-details").value;
            const name = userDisplayName ? userDisplayName.textContent : "زائر";

            if (!details.trim()) {
                alert("⚠️ الرجاء كتابة تفاصيل الملاحظة.");
                return;
            }

            const typeLabels = {
                "typo": "📝 خطأ مطبعي",
                "wrong_answer": "❌ خطأ في الإجابة",
                "suggestion": "💡 اقتراح جديد",
                "other": "📋 ملاحظة عامة"
            };

            const message = `📨 اقتراح جديد من تطبيق مُدَّكِر

👤 الاسم: ${name}
📂 النوع: ${typeLabels[type] || type}
📄 التفاصيل: 
${details}

🕐 التاريخ: ${new Date().toLocaleString("ar-EG")}`;

            const BOT_TOKEN = "8814135082:AAHGVK5HFmmCmN8iHzW1QK-Ws1_8v9QaovU";
            const CHAT_ID = "7090635960";

            const submitBtn = feedbackForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = "⏳ جاري الإرسال...";

            try {
                const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: message,
                        parse_mode: "Markdown"
                    })
                });

                if (response.ok) {
                    playSuccessSound();
                    alert("✅ تم إرسال اقتراحك بنجاح! شكراً لك 😊");
                    feedbackForm.reset();
                    closeModal(feedbackModal);
                } else {
                    throw new Error("فشل الإرسال");
                }
            } catch (error) {
                playErrorSound();
                alert("❌ عذراً، حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
                console.error("Error:", error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    // --- جلب السور وعرضها ---
    async function loadSurahsAndRender() {
        if (scopeContainer) scopeContainer.innerHTML = "<p class='loading-text'>⏳ جاري تحميل بيانات المصحف الشريف...</p>";
        allSurahs = await fetchSurahsList();
        renderScopeItems();
    }

    // --- التنقل ---
    function resetStartButton() {
        if (startBtn) {
            startBtn.disabled = false;
            startBtn.innerHTML = "ابدأ الاختبار الآن <i class=\"fa-solid fa-play icon-margin\"></i>";
        }
    }

    // --- عرض السؤال ---
    function showQuestion(index) {
        const q = generatedQuestions[index];
        if (!q) return;

        if (questionBadge) questionBadge.textContent = q.badge;
        if (questionTitle) questionTitle.textContent = q.title;
        if (verseText) verseText.innerHTML = q.promptHtml;
        if (progressText) progressText.textContent = `السؤال ${index + 1} من ${generatedQuestions.length}`;

        if (optionsContainer) {
            optionsContainer.innerHTML = "";
            q.options.forEach(opt => {
                const btn = document.createElement("button");
                btn.className = "option-btn";
                btn.textContent = opt;
                btn.addEventListener("click", () => handleAnswer(opt, q, btn));
                optionsContainer.appendChild(btn);
            });
        }

        if (timerToggle && timerToggle.checked) {
            const seconds = parseInt(sCountInput ? sCountInput.value : 30) || 30;
            startTimer(seconds);
        }
    }

    // --- المؤقت ---
    function startTimer(seconds) {
        if (timerIntervalId) clearInterval(timerIntervalId);
        timeLeft = seconds;
        const timerDisplay = document.getElementById("quiz-timer-display");
        const timerSeconds = document.getElementById("timer-seconds");
        if (timerDisplay) timerDisplay.classList.remove("hidden");
        if (timerSeconds) timerSeconds.textContent = timeLeft;

        timerIntervalId = setInterval(() => {
            timeLeft--;
            if (timerSeconds) timerSeconds.textContent = timeLeft;
            if (timeLeft <= 5 && timerDisplay) timerDisplay.classList.add("timer-warning");
            if (timeLeft <= 0) {
                clearInterval(timerIntervalId);
                const allBtns = document.querySelectorAll(".option-btn");
                if (allBtns.length > 0 && !allBtns[0].disabled) {
                    const currentQ = generatedQuestions[currentQuestionIndex];
                    const randomBtn = allBtns[Math.floor(Math.random() * allBtns.length)];
                    handleAnswer(randomBtn.textContent, currentQ, randomBtn);
                }
            }
        }, 1000);
    }

    // --- معالجة الإجابة ---
    function handleAnswer(selected, questionObj, btnElement) {
        if (timerIntervalId) {
            clearInterval(timerIntervalId);
            timerIntervalId = null;
        }

        const allBtns = document.querySelectorAll(".option-btn");
        allBtns.forEach(b => b.disabled = true);

        const isCorrect = selected === questionObj.correctAnswer;

        userAnswersLog.push({
            question: questionObj,
            userAnswer: selected,
            isCorrect: isCorrect
        });

        if (isCorrect) {
            btnElement.style.background = "#16a34a";
            btnElement.style.color = "#fff";
            userScore++;
            playSuccessSound();
        } else {
            btnElement.style.background = "#dc2626";
            btnElement.style.color = "#fff";
            playErrorSound();
            allBtns.forEach(b => {
                if (b.textContent === questionObj.correctAnswer) {
                    b.style.background = "#16a34a";
                    b.style.color = "#fff";
                }
            });
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < generatedQuestions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                finishQuiz();
            }
        }, 1200);
    }

    // --- نهاية الاختبار ---
    function finishQuiz() {
        if (timerIntervalId) {
            clearInterval(timerIntervalId);
            timerIntervalId = null;
        }

        userPoints += userScore;
        const newHistoryItem = {
            date: new Date().toLocaleDateString("ar-EG"),
            surahsCount: generatedQuestions.length,
            score: `${userScore}/${generatedQuestions.length}`,
            pts: userScore,
            logs: userAnswersLog
        };
        quizHistory.push(newHistoryItem);
        saveUserData();

        if (step3) step3.classList.add("hidden");
        if (step4) step4.classList.remove("hidden");

        if (scoreText) scoreText.textContent = `${userScore} / ${generatedQuestions.length}`;
        if (earnedPointsSpan) earnedPointsSpan.textContent = userScore;

        if (quizStartTime && totalTimeSpentSpan) {
            const endTime = new Date();
            const diff = Math.floor((endTime - quizStartTime) / 1000);
            const minutes = Math.floor(diff / 60);
            const seconds = diff % 60;
            totalTimeSpentSpan.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        }

        if (scoreMessage) {
            const percentage = (userScore / generatedQuestions.length) * 100;
            if (percentage >= 80) scoreMessage.textContent = "🌟 ممتاز! حفظك الله وأتقنك!";
            else if (percentage >= 60) scoreMessage.textContent = "👍 جيد جداً، استمر في التدرب!";
            else if (percentage >= 40) scoreMessage.textContent = "📖 حاول مرة أخرى، ستحقق الأفضل بإذن الله!";
            else scoreMessage.textContent = "💪 لا تيأس! التدريب المستمر هو مفتاح الإتقان!";
        }

        if (restartBtn) restartBtn.style.display = "flex";
        if (toggleErrorsBtn) toggleErrorsBtn.style.display = "flex";
    }

    // --- أحداث الأزرار ---
    if (restartBtn) {
        restartBtn.addEventListener("click", () => {
            if (step4) step4.classList.add("hidden");
            if (step2) step2.classList.remove("hidden");
            generatedQuestions = [];
            currentQuestionIndex = 0;
            userScore = 0;
            userAnswersLog = [];
            if (timerIntervalId) {
                clearInterval(timerIntervalId);
                timerIntervalId = null;
            }
            playBeep(500, 0.05);
        });
    }

    if (toggleErrorsBtn) {
        toggleErrorsBtn.addEventListener("click", () => {
            if (errorsContainer) {
                errorsContainer.classList.toggle("hidden");
                if (!errorsContainer.classList.contains("hidden")) {
                    renderErrors();
                }
            }
        });
    }

    function renderErrors() {
        if (!errorsContainer) return;
        errorsContainer.innerHTML = "";
        if (userAnswersLog.length === 0) {
            errorsContainer.innerHTML = "<p>لا توجد تفاصيل.</p>";
            return;
        }
        userAnswersLog.forEach((log, index) => {
            const div = document.createElement("div");
            div.style.marginBottom = "0.6rem";
            div.style.padding = "0.6rem";
            div.style.borderRadius = "6px";
            div.style.border = "1px solid var(--border-color)";
            div.style.background = log.isCorrect ? "rgba(22, 163, 74, 0.05)" : "rgba(220, 38, 38, 0.05)";
            div.innerHTML = `
                <strong>س${index + 1}:</strong> ${log.question.title}<br>
                <span style="font-size:0.85rem;">${log.question.promptHtml}</span><br>
                <span style="color:${log.isCorrect ? "green" : "red"};">إجابتك: ${log.userAnswer}</span>
                ${!log.isCorrect ? `<span style="color:green; margin-right:8px;">✔ الصحيح: ${log.question.correctAnswer}</span>` : ""}
            `;
            errorsContainer.appendChild(div);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentQuestionIndex < generatedQuestions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            } else {
                finishQuiz();
            }
        });
    }

    // --- زر البدء ---
    if (startBtn) {
        startBtn.addEventListener("click", async () => {
            initAudio();
            const selectedScopeBoxes = document.querySelectorAll(".scope-checkbox:checked");
            const selectedScopes = Array.from(selectedScopeBoxes).map(cb => cb.value);

            if (selectedScopes.length === 0) {
                alert("يرجى اختيار عنصر واحد على الأقل من النطاق.");
                return;
            }

            const selectedTypes = Array.from(document.querySelectorAll(".quiz-type:checked")).map(cb => cb.value);
            if (selectedTypes.length === 0) {
                alert("يرجى اختيار نوع أسئلة واحد على الأقل.");
                return;
            }

            const finalCount = parseInt(qCountInput ? qCountInput.value : 5) || 5;

            startBtn.disabled = true;
            startBtn.innerHTML = "جاري إعداد الأسئلة... <i class=\"fa-solid fa-spinner fa-spin icon-margin\"></i>";

            try {
                const targetSurahNumbers = extractSurahNumbers(selectedScopes);
                generatedQuestions = await buildSmartQuestions(targetSurahNumbers, finalCount, selectedTypes);

                if (generatedQuestions.length === 0) {
                    alert("تعذر توليد أسئلة. حاول مرة أخرى.");
                    resetStartButton();
                    return;
                }

                currentQuestionIndex = 0;
                userScore = 0;
                userAnswersLog = [];
                quizStartTime = new Date();

                resetStartButton();
                if (step2) step2.classList.add("hidden");
                if (step3) step3.classList.remove("hidden");

                showQuestion(currentQuestionIndex);
            } catch (err) {
                console.error("❌ تفاصيل الخطأ:", err);
                alert("حدث خطأ أثناء تحميل الأسئلة: " + err.message);
                resetStartButton();
            }
        });
    }

    // --- النوافذ والقوائم ---
    function openModal(modal) { if (modal) modal.classList.remove("hidden"); if (dropdownMenu) dropdownMenu.classList.add("hidden"); }
    function closeModal(modal) { if (modal) modal.classList.add("hidden"); }

    if (quranHolderBtn) {
        quranHolderBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (dropdownMenu) dropdownMenu.classList.toggle("hidden");
        });
    }
    document.addEventListener("click", () => { if (dropdownMenu) dropdownMenu.classList.add("hidden"); });

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            if (themeIcon) themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
            if (themeText) themeText.textContent = isDark ? "الوضع النهار" : "الوضع الليلي";
        });
    }

    if (triggerFeedbackBtn) triggerFeedbackBtn.addEventListener("click", () => openModal(feedbackModal));
    if (openFeedbackMenuBtn) openFeedbackMenuBtn.addEventListener("click", () => openModal(feedbackModal));
    if (closeModalBtn) closeModalBtn.addEventListener("click", () => closeModal(feedbackModal));
    if (cancelFeedbackBtn) cancelFeedbackBtn.addEventListener("click", () => closeModal(feedbackModal));

    if (openHistoryBtn) {
        openHistoryBtn.addEventListener("click", () => {
            renderHistoryList();
            openModal(historyModal);
        });
    }
    if (closeHistoryModalBtn) closeHistoryModalBtn.addEventListener("click", () => closeModal(historyModal));
    if (closeDetailsModalBtn) closeDetailsModalBtn.addEventListener("click", () => closeModal(detailsModal));

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener("click", () => {
            if (quizHistory.length === 0) return;
            if (confirm("هل أنت تأكد من رغبتك في مسح سجل الاختبارات السابقة بالكامل؟")) {
                quizHistory = [];
                saveUserData();
                renderHistoryList();
                updateClearHistoryButton();
                playSuccessSound();
            }
        });
    }

    // --- عرض السجل ---
    function renderHistoryList() {
        if (!historyListContainer) return;
        historyListContainer.innerHTML = "";
        if (quizHistory.length === 0) {
            historyListContainer.innerHTML = "<p style='text-align:center; padding: 1.5rem;'>لا يوجد سجل اختبارات سابق حتى الآن.</p>";
            updateClearHistoryButton();
            return;
        }
        quizHistory.slice().reverse().forEach((item, index) => {
            const realIndex = quizHistory.length - 1 - index;
            const div = document.createElement("div");
            div.className = "history-item";
            div.innerHTML = `
                <div>
                    <strong>${item.date}</strong> - ${item.surahsCount} أسئلة
                </div>
                <div class="history-actions-row">
                    <span>النتيجة: <strong class="en-number" style="color:var(--primary-color);">${item.score}</strong></span>
                    <button class="btn-details-info" title="عرض التفاصيل والأخطاء" data-index="${realIndex}">؟</button>
                </div>
            `;
            historyListContainer.appendChild(div);
        });

        document.querySelectorAll(".btn-details-info").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = parseInt(e.target.dataset.index);
                showHistoryDetails(idx);
            });
        });
        updateClearHistoryButton();
    }

    function showHistoryDetails(historyIndex) {
        const historyItem = quizHistory[historyIndex];
        if (!historyItem || !detailsModalBody) return;

        detailsModalBody.innerHTML = `
            <div style="margin-bottom: 1rem; text-align: center;">
                <p><strong>التاريخ:</strong> ${historyItem.date}</p>
                <p><strong>النتيجة الحالية:</strong> <span id="modal-history-score">${historyItem.score}</span> (+${historyItem.pts} نقطة)</p>
            </div>
            <hr style="border:none; border-top:1px solid var(--border-color); margin-bottom:1rem;">
            <div id="modal-questions-list"></div>
        `;

        const qListContainer = document.getElementById("modal-questions-list");
        if (!historyItem.logs || historyItem.logs.length === 0) {
            qListContainer.innerHTML = "<p style='text-align:center;'>تم حذف جميع الأسئلة لهذا الاختبار.</p>";
        } else {
            renderModalQuestionsList(historyIndex, qListContainer);
        }
        openModal(detailsModal);
    }

    function renderModalQuestionsList(historyIndex, container) {
        const historyItem = quizHistory[historyIndex];
        container.innerHTML = "";

        if (!historyItem.logs || historyItem.logs.length === 0) {
            container.innerHTML = "<p style='text-align:center;'>لا تتوفر أسئلة في هذا الاختبار حالياً.</p>";
            return;
        }

        historyItem.logs.forEach((log, qIndex) => {
            const div = document.createElement("div");
            div.style.marginBottom = "0.8rem";
            div.style.padding = "0.8rem";
            div.style.borderRadius = "8px";
            div.style.border = "1px solid var(--border-color)";
            div.style.background = log.isCorrect ? "rgba(22, 163, 74, 0.05)" : "rgba(220, 38, 38, 0.05)";

            div.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <strong>س<span class="en-number">${qIndex + 1}</span>: ${log.question.title}</strong>
                    <button class="btn-delete-question" data-h-idx="${historyIndex}" data-q-idx="${qIndex}" title="حذف هذا السؤال" style="background:transparent; border:none; color:var(--error-color); cursor:pointer; font-size:0.85rem;">
                        <i class="fa-solid fa-trash-can"></i> حذف
                    </button>
                </div>
                <p class="quran-text" style="font-size:1rem; margin: 4px 0;">${log.question.promptHtml}</p>
                <p>إجابتك: <span style="color:${log.isCorrect ? "green" : "red"}; font-weight:bold;">${log.userAnswer}</span></p>
                ${!log.isCorrect ? `<p style="color:green; font-weight:bold;">الإجابة الصحيحة: ${log.question.correctAnswer}</p>` : `<p style="color:green; font-size:0.85rem;">✔ إجابة صحيحة</p>`}
            `;
            container.appendChild(div);
        });

        container.querySelectorAll(".btn-delete-question").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const hIdx = parseInt(btn.dataset.hIdx);
                const qIdx = parseInt(btn.dataset.qIdx);
                deleteSingleQuestionFromHistory(hIdx, qIdx);
            });
        });
    }

    function deleteSingleQuestionFromHistory(hIdx, qIdx) {
        const item = quizHistory[hIdx];
        if (!item || !item.logs) return;

        item.logs.splice(qIdx, 1);
        let correctCount = 0;
        item.logs.forEach(l => { if (l.isCorrect) correctCount++; });

        item.surahsCount = item.logs.length;
        item.score = `${correctCount}/${item.logs.length}`;
        item.pts = correctCount;

        saveUserData();
        playSuccessSound();

        const qListContainer = document.getElementById("modal-questions-list");
        const scoreSpan = document.getElementById("modal-history-score");
        if (scoreSpan) scoreSpan.textContent = item.score;

        renderModalQuestionsList(hIdx, qListContainer);
        renderHistoryList();
        updateClearHistoryButton();
    }

    // --- إعدادات ---
    function setupCustomNumberInput(btnMinus, btnPlus, input, min, max, step = 1) {
        if (!btnMinus || !btnPlus || !input) return;
        btnMinus.addEventListener("click", () => {
            playBeep(300, 0.05);
            let val = parseInt(input.value) - step;
            if (val >= min) input.value = val;
        });
        btnPlus.addEventListener("click", () => {
            playBeep(400, 0.05);
            let val = parseInt(input.value) + step;
            if (val <= max) input.value = val;
        });
    }

    setupCustomNumberInput(btnMinusQ, btnPlusQ, qCountInput, 1, 50, 1);
    setupCustomNumberInput(btnMinusS, btnPlusS, sCountInput, 5, 120, 5);

    function updateDifficultyUI(val) {
        const root = document.documentElement;
        const percent = (val - 1) / (3 - 1);
        let color;
        if (percent <= 0.5) {
            color = interpolateColor([220, 38, 38], [217, 119, 6], percent * 2);
        } else {
            color = interpolateColor([217, 119, 6], [22, 163, 74], (percent - 0.5) * 2);
        }
        root.style.setProperty("--diff-color", color);
        const slider = document.getElementById("difficulty-slider");
        if (slider) slider.style.setProperty("--thumb-color", color);
        if (difficultyBadge) {
            difficultyBadge.textContent = val < 1.6 ? "سهل" : val < 2.4 ? "متوسط" : "صعب";
            difficultyBadge.style.backgroundColor = color;
        }
    }

    function interpolateColor(color1, color2, factor) {
        return `rgb(${Math.round(color1[0] + factor * (color2[0] - color1[0]))}, ${Math.round(color1[1] + factor * (color2[1] - color1[1]))}, ${Math.round(color1[2] + factor * (color2[2] - color1[2]))})`;
    }

    if (difficultySlider) {
        difficultySlider.addEventListener("input", (e) => updateDifficultyUI(parseFloat(e.target.value)));
        setTimeout(() => updateDifficultyUI(parseFloat(difficultySlider.value)), 100);
    }

    if (timerToggle) {
        timerToggle.addEventListener("change", (e) => {
            if (e.target.checked && timerInputContainer) timerInputContainer.classList.remove("hidden");
            else if (timerInputContainer) timerInputContainer.classList.add("hidden");
        });
    }

    // --- التنقل بين الشاشات ---
    if (!isFirstVisit) {
        if (step1) step1.classList.add("hidden");
        if (step2) step2.classList.remove("hidden");
    } else {
        localStorage.setItem("mudakkir_onboarding_shown", "true");
    }

    function updateSlide(index) {
        slides.forEach((s, i) => s.classList.toggle("active", i === index));
        dots.forEach((d, i) => d.classList.toggle("active", i === index));
        if (nextSlideBtn) {
            nextSlideBtn.innerHTML = (index === slides.length - 1) ?
                "الانتقال للاختبار <i class=\"fa-solid fa-arrow-left arrow-icon\"></i>" :
                "التالي <i class=\"fa-solid fa-arrow-left arrow-icon\"></i>";
        }
    }

    if (nextSlideBtn) {
        nextSlideBtn.addEventListener("click", () => {
            playBeep(500, 0.05);
            if (currentSlide < slides.length - 1) { currentSlide++; updateSlide(currentSlide); } else goToStep2();
        });
    }

    if (skipBtn) skipBtn.addEventListener("click", goToStep2);

    function goToStep2() {
        if (step1) step1.classList.add("hidden");
        if (step2) step2.classList.remove("hidden");
        if (allSurahs.length === 0) loadSurahsAndRender();
    }

    if (!isFirstVisit) {
        setTimeout(() => {
            if (allSurahs.length === 0) loadSurahsAndRender();
        }, 100);
    }

    scopeTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            playBeep(450, 0.05);
            scopeTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentScope = tab.dataset.scope;
            renderScopeItems();
        });
    });

    function renderScopeItems() {
        if (!scopeContainer) return;
        scopeContainer.innerHTML = "";
        if (currentScope === "surahs") {
            allSurahs.forEach(s => scopeContainer.appendChild(createCheckboxItem(`surah_${s.number}`, `${s.number}. ${s.name}`)));
        } else if (currentScope === "juzs") {
            for (let i = 1; i <= 30; i++) scopeContainer.appendChild(createCheckboxItem(`juz_${i}`, `الجزء ${i}`));
        } else if (currentScope === "ahzab") {
            for (let i = 1; i <= 60; i++) scopeContainer.appendChild(createCheckboxItem(`hizb_${i}`, `الحزب ${i}`));
        } else if (currentScope === "quarters") {
            for (let i = 1; i <= 240; i++) {
                scopeContainer.appendChild(createCheckboxItem(`quarter_${i}`, `ربع ${i}`));
            }
        }
    }

    function createCheckboxItem(value, text) {
        const label = document.createElement("label");
        label.className = "checkbox-card";
        const span = document.createElement("span");
        span.textContent = text;
        span.style.wordBreak = "break-word";
        span.style.whiteSpace = "normal";
        label.innerHTML = `<input type="checkbox" value="${value}" class="scope-checkbox custom-checkbox">`;
        label.appendChild(span);
        return label;
    }

    // --- إخفاء شعار Netlify ---
    setTimeout(() => {
        const elements = document.querySelectorAll("div, footer, iframe, img, aside, section");
        elements.forEach(el => {
            const html = el.outerHTML || "";
            const text = el.textContent || "";
            if (html.includes("netlify") || html.includes("Netlify") || text.includes("Netlify")) {
                el.style.display = "none";
                el.style.visibility = "hidden";
                el.style.opacity = "0";
                el.style.height = "0";
                el.style.width = "0";
                el.style.position = "absolute";
                el.style.zIndex = "-9999";
            }
        });
    }, 500);

});