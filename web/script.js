// ======================
// DỮ LIỆU KANA
// ======================

const kanaList = [

    // =========================
    // HIRAGANA
    // =========================

    // A
    {kana: "あ", romaji: "a", type: "hiragana"},
    {kana: "い", romaji: "i", type: "hiragana"},
    {kana: "う", romaji: "u", type: "hiragana"},
    {kana: "え", romaji: "e", type: "hiragana"},
    {kana: "お", romaji: "o", type: "hiragana"},

    // K
    {kana: "か", romaji: "ka", type: "hiragana"},
    {kana: "き", romaji: "ki", type: "hiragana"},
    {kana: "く", romaji: "ku", type: "hiragana"},
    {kana: "け", romaji: "ke", type: "hiragana"},
    {kana: "こ", romaji: "ko", type: "hiragana"},

    // S
    {kana: "さ", romaji: "sa", type: "hiragana"},
    {kana: "し", romaji: "shi", type: "hiragana"},
    {kana: "す", romaji: "su", type: "hiragana"},
    {kana: "せ", romaji: "se", type: "hiragana"},
    {kana: "そ", romaji: "so", type: "hiragana"},

    // T
    {kana: "た", romaji: "ta", type: "hiragana"},
    {kana: "ち", romaji: "chi", type: "hiragana"},
    {kana: "つ", romaji: "tsu", type: "hiragana"},
    {kana: "て", romaji: "te", type: "hiragana"},
    {kana: "と", romaji: "to", type: "hiragana"},

    // N
    {kana: "な", romaji: "na", type: "hiragana"},
    {kana: "に", romaji: "ni", type: "hiragana"},
    {kana: "ぬ", romaji: "nu", type: "hiragana"},
    {kana: "ね", romaji: "ne", type: "hiragana"},
    {kana: "の", romaji: "no", type: "hiragana"},

    // H
    {kana: "は", romaji: "ha", type: "hiragana"},
    {kana: "ひ", romaji: "hi", type: "hiragana"},
    {kana: "ふ", romaji: "fu", type: "hiragana"},
    {kana: "へ", romaji: "he", type: "hiragana"},
    {kana: "ほ", romaji: "ho", type: "hiragana"},

    // M
    {kana: "ま", romaji: "ma", type: "hiragana"},
    {kana: "み", romaji: "mi", type: "hiragana"},
    {kana: "む", romaji: "mu", type: "hiragana"},
    {kana: "め", romaji: "me", type: "hiragana"},
    {kana: "も", romaji: "mo", type: "hiragana"},

    // Y
    {kana: "や", romaji: "ya", type: "hiragana"},
    {kana: "ゆ", romaji: "yu", type: "hiragana"},
    {kana: "よ", romaji: "yo", type: "hiragana"},

    // R
    {kana: "ら", romaji: "ra", type: "hiragana"},
    {kana: "り", romaji: "ri", type: "hiragana"},
    {kana: "る", romaji: "ru", type: "hiragana"},
    {kana: "れ", romaji: "re", type: "hiragana"},
    {kana: "ろ", romaji: "ro", type: "hiragana"},

    // W
    {kana: "わ", romaji: "wa", type: "hiragana"},
    {kana: "を", romaji: "wo", type: "hiragana"},

    // N
    {kana: "ん", romaji: "n", type: "hiragana"},

    // =========================
    // DAKUTEN HIRAGANA
    // =========================

//    // G
//    { kana: "が", romaji: "ga", type: "hiragana" },
//    { kana: "ぎ", romaji: "gi", type: "hiragana" },
//    { kana: "ぐ", romaji: "gu", type: "hiragana" },
//    { kana: "げ", romaji: "ge", type: "hiragana" },
//    { kana: "ご", romaji: "go", type: "hiragana" },
//
//    // Z
//    { kana: "ざ", romaji: "za", type: "hiragana" },
//    { kana: "じ", romaji: "ji", type: "hiragana" },
//    { kana: "ず", romaji: "zu", type: "hiragana" },
//    { kana: "ぜ", romaji: "ze", type: "hiragana" },
//    { kana: "ぞ", romaji: "zo", type: "hiragana" },
//
//    // D
//    { kana: "だ", romaji: "da", type: "hiragana" },
//    { kana: "ぢ", romaji: "ji", type: "hiragana" },
//    { kana: "づ", romaji: "zu", type: "hiragana" },
//    { kana: "で", romaji: "de", type: "hiragana" },
//    { kana: "ど", romaji: "do", type: "hiragana" },
//
//    // B
//    { kana: "ば", romaji: "ba", type: "hiragana" },
//    { kana: "び", romaji: "bi", type: "hiragana" },
//    { kana: "ぶ", romaji: "bu", type: "hiragana" },
//    { kana: "べ", romaji: "be", type: "hiragana" },
//    { kana: "ぼ", romaji: "bo", type: "hiragana" },
//
//    // P
//    { kana: "ぱ", romaji: "pa", type: "hiragana" },
//    { kana: "ぴ", romaji: "pi", type: "hiragana" },
//    { kana: "ぷ", romaji: "pu", type: "hiragana" },
//    { kana: "ぺ", romaji: "pe", type: "hiragana" },
//    { kana: "ぽ", romaji: "po", type: "hiragana" },



    // =========================
    // KATAKANA
    // =========================

    // A
    {kana: "ア", romaji: "a", type: "katakana"},
    {kana: "イ", romaji: "i", type: "katakana"},
    {kana: "ウ", romaji: "u", type: "katakana"},
    {kana: "エ", romaji: "e", type: "katakana"},
    {kana: "オ", romaji: "o", type: "katakana"},

    // K
    {kana: "カ", romaji: "ka", type: "katakana"},
    {kana: "キ", romaji: "ki", type: "katakana"},
    {kana: "ク", romaji: "ku", type: "katakana"},
    {kana: "ケ", romaji: "ke", type: "katakana"},
    {kana: "コ", romaji: "ko", type: "katakana"},

    // S
    {kana: "サ", romaji: "sa", type: "katakana"},
    {kana: "シ", romaji: "shi", type: "katakana"},
    {kana: "ス", romaji: "su", type: "katakana"},
    {kana: "セ", romaji: "se", type: "katakana"},
    {kana: "ソ", romaji: "so", type: "katakana"},

    // T
    {kana: "タ", romaji: "ta", type: "katakana"},
    {kana: "チ", romaji: "chi", type: "katakana"},
    {kana: "ツ", romaji: "tsu", type: "katakana"},
    {kana: "テ", romaji: "te", type: "katakana"},
    {kana: "ト", romaji: "to", type: "katakana"},

    // N
    {kana: "ナ", romaji: "na", type: "katakana"},
    {kana: "ニ", romaji: "ni", type: "katakana"},
    {kana: "ヌ", romaji: "nu", type: "katakana"},
    {kana: "ネ", romaji: "ne", type: "katakana"},
    {kana: "ノ", romaji: "no", type: "katakana"},

    // H
    {kana: "ハ", romaji: "ha", type: "katakana"},
    {kana: "ヒ", romaji: "hi", type: "katakana"},
    {kana: "フ", romaji: "fu", type: "katakana"},
    {kana: "ヘ", romaji: "he", type: "katakana"},
    {kana: "ホ", romaji: "ho", type: "katakana"},

    // M
    {kana: "マ", romaji: "ma", type: "katakana"},
    {kana: "ミ", romaji: "mi", type: "katakana"},
    {kana: "ム", romaji: "mu", type: "katakana"},
    {kana: "メ", romaji: "me", type: "katakana"},
    {kana: "モ", romaji: "mo", type: "katakana"},

    // Y
    {kana: "ヤ", romaji: "ya", type: "katakana"},
    {kana: "ユ", romaji: "yu", type: "katakana"},
    {kana: "ヨ", romaji: "yo", type: "katakana"},

    // R
    {kana: "ラ", romaji: "ra", type: "katakana"},
    {kana: "リ", romaji: "ri", type: "katakana"},
    {kana: "ル", romaji: "ru", type: "katakana"},
    {kana: "レ", romaji: "re", type: "katakana"},
    {kana: "ロ", romaji: "ro", type: "katakana"},

    // W
    {kana: "ワ", romaji: "wa", type: "katakana"},
    {kana: "ヲ", romaji: "wo", type: "katakana"},

    // N
    {kana: "ン", romaji: "n", type: "katakana"},
            // =========================
            // DAKUTEN KATAKANA
            // =========================
//
//    // G
//    { kana: "ガ", romaji: "ga", type: "katakana" },
//    { kana: "ギ", romaji: "gi", type: "katakana" },
//    { kana: "グ", romaji: "gu", type: "katakana" },
//    { kana: "ゲ", romaji: "ge", type: "katakana" },
//    { kana: "ゴ", romaji: "go", type: "katakana" },
//
//    // Z
//    { kana: "ザ", romaji: "za", type: "katakana" },
//    { kana: "ジ", romaji: "ji", type: "katakana" },
//    { kana: "ズ", romaji: "zu", type: "katakana" },
//    { kana: "ゼ", romaji: "ze", type: "katakana" },
//    { kana: "ゾ", romaji: "zo", type: "katakana" },
//
//    // D
//    { kana: "ダ", romaji: "da", type: "katakana" },
//    { kana: "ヂ", romaji: "ji", type: "katakana" },
//    { kana: "ヅ", romaji: "zu", type: "katakana" },
//    { kana: "デ", romaji: "de", type: "katakana" },
//    { kana: "ド", romaji: "do", type: "katakana" },
//
//    // B
//    { kana: "バ", romaji: "ba", type: "katakana" },
//    { kana: "ビ", romaji: "bi", type: "katakana" },
//    { kana: "ブ", romaji: "bu", type: "katakana" },
//    { kana: "ベ", romaji: "be", type: "katakana" },
//    { kana: "ボ", romaji: "bo", type: "katakana" },
//
//    // P
//    { kana: "パ", romaji: "pa", type: "katakana" },
//    { kana: "ピ", romaji: "pi", type: "katakana" },
//    { kana: "プ", romaji: "pu", type: "katakana" },
//    { kana: "ペ", romaji: "pe", type: "katakana" },
//    { kana: "ポ", romaji: "po", type: "katakana" }
];

// ======================
// ELEMENTS
// ======================

const kanaContainer = document.getElementById("kanaContainer");

const hiraganaBtn = document.getElementById("hiraganaBtn");
const katakanaBtn = document.getElementById("katakanaBtn");

const selectAllBtn = document.getElementById("selectAllBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

const startBtn = document.getElementById("startBtn");

const studyPage = document.getElementById("studyPage");

const kanaDisplay = document.getElementById("kanaDisplay");

const answerInput = document.getElementById("answerInput");

const checkBtn = document.getElementById("checkBtn");

const result = document.getElementById("result");

const nextBtn = document.getElementById("nextBtn");

const progress = document.getElementById("progress");

// ======================
// VARIABLES
// ======================

let currentType = "hiragana";

let selectedKana = [];

let shuffledKana = [];

let currentIndex = 0;

let currentKana = null;

// ======================
// HIỂN THỊ KANA
// ======================
function renderKana(type) {

    kanaContainer.innerHTML = "";

    selectedKana = [];

    for (let group in kanaGroups) {

        const rowDiv = document.createElement("div");
        rowDiv.className = "row align-items-center kana-row";

        // label
        const label = document.createElement("div");
        label.className = "col-1 row-label";
        label.innerText = group.toUpperCase();

        rowDiv.appendChild(label);

        // kana
        kanaGroups[group].forEach(romaji => {

            const kanaObj = kanaList.find(
                    k => k.romaji === romaji && k.type === type
            );

            if (kanaObj) {

                const col = document.createElement("div");
                col.className = "col";

                const card = document.createElement("div");

                card.className = "kana-card";

                card.innerHTML = `
    <div class="kana-char">
        ${kanaObj.kana}
    </div>

    <div class="kana-romaji">
        ${kanaObj.romaji}
    </div>
`;

                card.addEventListener("click", () => {

                    card.classList.toggle("selected");

                    if (selectedKana.includes(kanaObj)) {

                        selectedKana =
                                selectedKana.filter(k => k !== kanaObj);

                    } else {

                        selectedKana.push(kanaObj);
                    }
                });

                col.appendChild(card);

                rowDiv.appendChild(col);
            }
        });

        kanaContainer.appendChild(rowDiv);
    }
}
const kanaGroups = {
    a: ["a", "i", "u", "e", "o"],
    k: ["ka", "ki", "ku", "ke", "ko"],
    s: ["sa", "shi", "su", "se", "so"],
    t: ["ta", "chi", "tsu", "te", "to"],
    n: ["na", "ni", "nu", "ne", "no"],
    h: ["ha", "hi", "fu", "he", "ho"],
    m: ["ma", "mi", "mu", "me", "mo"],
    y: ["ya", "yu", "yo"],
    r: ["ra", "ri", "ru", "re", "ro"],
    w: ["wa", "wo"],
};
// ======================
// CHUYỂN BẢNG
// ======================

hiraganaBtn.addEventListener("click", () => {
    renderKana("hiragana");
});

katakanaBtn.addEventListener("click", () => {
    renderKana("katakana");
});

// ======================
// CHỌN HẾT
// ======================

selectAllBtn.addEventListener("click", () => {

    selectedKana = [];

    const cards =
            document.querySelectorAll(".kana-card");

    const filtered =
            kanaList.filter(item => item.type === currentType);

    cards.forEach((card, index) => {

        card.classList.add("selected");

        selectedKana.push(filtered[index]);
    });
});

// ======================
// XÓA HẾT
// ======================

clearAllBtn.addEventListener("click", () => {

    selectedKana = [];

    const cards =
            document.querySelectorAll(".kana-card");

    cards.forEach(card => {
        card.classList.remove("selected");
    });
});

// ======================
// BẮT ĐẦU HỌC
// ======================

startBtn.addEventListener("click", () => {

    if (selectedKana.length === 0) {
        alert("Vui lòng chọn ít nhất 1 chữ cái");
        return;
    }

    shuffledKana = [...selectedKana];

    shuffle(shuffledKana);

    currentIndex = 0;

    studyPage.style.display = "block";

    showNextKana();
});

// ======================
// HIỂN THỊ CÂU HỎI
// ======================

function showNextKana() {

    result.innerText = "";

    answerInput.value = "";

    nextBtn.style.display = "none";

    if (currentIndex >= shuffledKana.length) {

        kanaDisplay.innerText = "🎉";

        progress.innerText = "Hoàn thành!";

        result.innerText =
                "Bạn đã học hết các chữ đã chọn";

        return;
    }

    currentKana = shuffledKana[currentIndex];

    kanaDisplay.innerText = currentKana.kana;

    progress.innerText =
            `Tiến độ: ${currentIndex + 1}/${shuffledKana.length}`;
}

// ======================
// KIỂM TRA
// ======================

checkBtn.addEventListener("click", checkAnswer);

function checkAnswer() {

    const userAnswer =
            answerInput.value.trim().toLowerCase();

    if (userAnswer === currentKana.romaji) {

        result.innerText = "✅ Chính xác";

        currentIndex++;

        nextBtn.style.display = "inline-block";

    } else {

        result.innerText =
                `❌ Sai - Đáp án đúng: ${currentKana.romaji}`;
    }
}

// ======================
// NEXT
// ======================

nextBtn.addEventListener("click", showNextKana);

// ======================
// SPACE / ENTER
// ======================

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        e.preventDefault();

        if (nextBtn.style.display === "inline-block") {

            showNextKana();

        } else {

            checkAnswer();
        }
    }

    if (e.key === "Enter") {

        if (nextBtn.style.display === "inline-block") {

            showNextKana();

        } else {

            checkAnswer();
        }
    }
});

// ======================
// SHUFFLE
// ======================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j =
                Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
                [array[j], array[i]];
    }
}

// ======================
// MẶC ĐỊNH
// ======================

renderKana("hiragana");