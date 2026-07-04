const hiraganaData = [
  // Seion (Basic)
  { kana: 'あ', romaji: 'a' }, { kana: 'い', romaji: 'i' }, { kana: 'う', romaji: 'u' }, { kana: 'え', romaji: 'e' }, { kana: 'お', romaji: 'o' },
  { kana: 'か', romaji: 'ka' }, { kana: 'き', romaji: 'ki' }, { kana: 'く', romaji: 'ku' }, { kana: 'け', romaji: 'ke' }, { kana: 'こ', romaji: 'ko' },
  { kana: 'さ', romaji: 'sa' }, { kana: 'し', romaji: 'shi' }, { kana: 'す', romaji: 'su' }, { kana: 'せ', romaji: 'se' }, { kana: 'そ', romaji: 'so' },
  { kana: 'た', romaji: 'ta' }, { kana: 'ち', romaji: 'chi' }, { kana: 'つ', romaji: 'tsu' }, { kana: 'て', romaji: 'te' }, { kana: 'と', romaji: 'to' },
  { kana: 'な', romaji: 'na' }, { kana: 'に', romaji: 'ni' }, { kana: 'ぬ', romaji: 'nu' }, { kana: 'ね', romaji: 'ne' }, { kana: 'の', romaji: 'no' },
  { kana: 'は', romaji: 'ha' }, { kana: 'ひ', romaji: 'hi' }, { kana: 'ふ', romaji: 'fu' }, { kana: 'へ', romaji: 'he' }, { kana: 'ほ', romaji: 'ho' },
  { kana: 'ま', romaji: 'ma' }, { kana: 'み', romaji: 'mi' }, { kana: 'む', romaji: 'mu' }, { kana: 'め', romaji: 'me' }, { kana: 'も', romaji: 'mo' },
  { kana: 'や', romaji: 'ya' }, { kana: '', romaji: '' }, { kana: 'ゆ', romaji: 'yu' }, { kana: '', romaji: '' }, { kana: 'よ', romaji: 'yo' },
  { kana: 'ら', romaji: 'ra' }, { kana: 'り', romaji: 'ri' }, { kana: 'る', romaji: 'ru' }, { kana: 'れ', romaji: 're' }, { kana: 'ろ', romaji: 'ro' },
  { kana: 'わ', romaji: 'wa' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: 'を', romaji: 'wo' },
  { kana: 'ん', romaji: 'n' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' },
  
  // Dakuten & Handakuten (浊音 & 半浊音)
  { kana: 'が', romaji: 'ga' }, { kana: 'ぎ', romaji: 'gi' }, { kana: 'ぐ', romaji: 'gu' }, { kana: 'げ', romaji: 'ge' }, { kana: 'ご', romaji: 'go' },
  { kana: 'ざ', romaji: 'za' }, { kana: 'じ', romaji: 'ji' }, { kana: 'ず', romaji: 'zu' }, { kana: 'ぜ', romaji: 'ze' }, { kana: 'ぞ', romaji: 'zo' },
  { kana: 'だ', romaji: 'da' }, { kana: 'ぢ', romaji: 'ji' }, { kana: 'づ', romaji: 'zu' }, { kana: 'で', romaji: 'de' }, { kana: 'ど', romaji: 'do' },
  { kana: 'ば', romaji: 'ba' }, { kana: 'び', romaji: 'bi' }, { kana: 'ぶ', romaji: 'bu' }, { kana: 'べ', romaji: 'be' }, { kana: 'ぼ', romaji: 'bo' },
  { kana: 'ぱ', romaji: 'pa' }, { kana: 'ぴ', romaji: 'pi' }, { kana: 'ぷ', romaji: 'pu' }, { kana: 'ぺ', romaji: 'pe' }, { kana: 'ぽ', romaji: 'po' },

  // Yoon (拗音) - padded to match 5 columns
  { kana: 'きゃ', romaji: 'kya' }, { kana: '', romaji: '' }, { kana: 'きゅ', romaji: 'kyu' }, { kana: '', romaji: '' }, { kana: 'きょ', romaji: 'kyo' },
  { kana: 'しゃ', romaji: 'sha' }, { kana: '', romaji: '' }, { kana: 'しゅ', romaji: 'shu' }, { kana: '', romaji: '' }, { kana: 'しょ', romaji: 'sho' },
  { kana: 'ちゃ', romaji: 'cha' }, { kana: '', romaji: '' }, { kana: 'ちゅ', romaji: 'chu' }, { kana: '', romaji: '' }, { kana: 'ちょ', romaji: 'cho' },
  { kana: 'にゃ', romaji: 'nya' }, { kana: '', romaji: '' }, { kana: 'にゅ', romaji: 'nyu' }, { kana: '', romaji: '' }, { kana: 'にょ', romaji: 'nyo' },
  { kana: 'ひゃ', romaji: 'hya' }, { kana: '', romaji: '' }, { kana: 'ひゅ', romaji: 'hyu' }, { kana: '', romaji: '' }, { kana: 'ひょ', romaji: 'hyo' },
  { kana: 'みゃ', romaji: 'mya' }, { kana: '', romaji: '' }, { kana: 'みゅ', romaji: 'myu' }, { kana: '', romaji: '' }, { kana: 'みょ', romaji: 'myo' },
  { kana: 'りゃ', romaji: 'rya' }, { kana: '', romaji: '' }, { kana: 'りゅ', romaji: 'ryu' }, { kana: '', romaji: '' }, { kana: 'りょ', romaji: 'ryo' },
  { kana: 'ぎゃ', romaji: 'gya' }, { kana: '', romaji: '' }, { kana: 'ぎゅ', romaji: 'gyu' }, { kana: '', romaji: '' }, { kana: 'ぎょ', romaji: 'gyo' },
  { kana: 'じゃ', romaji: 'ja' }, { kana: '', romaji: '' }, { kana: 'じゅ', romaji: 'ju' }, { kana: '', romaji: '' }, { kana: 'じょ', romaji: 'jo' },
  { kana: 'びゃ', romaji: 'bya' }, { kana: '', romaji: '' }, { kana: 'びゅ', romaji: 'byu' }, { kana: '', romaji: '' }, { kana: 'びょ', romaji: 'byo' },
  { kana: 'ぴゃ', romaji: 'pya' }, { kana: '', romaji: '' }, { kana: 'ぴゅ', romaji: 'pyu' }, { kana: '', romaji: '' }, { kana: 'ぴょ', romaji: 'pyo' }
];

const katakanaData = [
  // Seion (Basic)
  { kana: 'ア', romaji: 'a' }, { kana: 'イ', romaji: 'i' }, { kana: 'ウ', romaji: 'u' }, { kana: 'エ', romaji: 'e' }, { kana: 'オ', romaji: 'o' },
  { kana: 'カ', romaji: 'ka' }, { kana: 'キ', romaji: 'ki' }, { kana: 'ク', romaji: 'ku' }, { kana: 'ケ', romaji: 'ke' }, { kana: 'コ', romaji: 'ko' },
  { kana: 'サ', romaji: 'sa' }, { kana: 'シ', romaji: 'shi' }, { kana: 'ス', romaji: 'su' }, { kana: 'セ', romaji: 'se' }, { kana: 'ソ', romaji: 'so' },
  { kana: 'タ', romaji: 'ta' }, { kana: 'チ', romaji: 'chi' }, { kana: 'ツ', romaji: 'tsu' }, { kana: 'テ', romaji: 'te' }, { kana: 'ト', romaji: 'to' },
  { kana: 'ナ', romaji: 'na' }, { kana: 'ニ', romaji: 'ni' }, { kana: 'ヌ', romaji: 'nu' }, { kana: 'ネ', romaji: 'ne' }, { kana: 'ノ', romaji: 'no' },
  { kana: 'ハ', romaji: 'ha' }, { kana: 'ヒ', romaji: 'hi' }, { kana: 'フ', romaji: 'fu' }, { kana: 'ヘ', romaji: 'he' }, { kana: 'ホ', romaji: 'ho' },
  { kana: 'マ', romaji: 'ma' }, { kana: 'ミ', romaji: 'mi' }, { kana: 'ム', romaji: 'mu' }, { kana: 'メ', romaji: 'me' }, { kana: 'モ', romaji: 'mo' },
  { kana: 'ヤ', romaji: 'ya' }, { kana: '', romaji: '' }, { kana: 'ユ', romaji: 'yu' }, { kana: '', romaji: '' }, { kana: 'ヨ', romaji: 'yo' },
  { kana: 'ラ', romaji: 'ra' }, { kana: 'リ', romaji: 'ri' }, { kana: 'ル', romaji: 'ru' }, { kana: 'レ', romaji: 're' }, { kana: 'ロ', romaji: 'ro' },
  { kana: 'ワ', romaji: 'wa' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: 'ヲ', romaji: 'wo' },
  { kana: 'ン', romaji: 'n' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' }, { kana: '', romaji: '' },
  
  // Dakuten & Handakuten (浊音 & 半浊音)
  { kana: 'ガ', romaji: 'ga' }, { kana: 'ギ', romaji: 'gi' }, { kana: 'グ', romaji: 'gu' }, { kana: 'ゲ', romaji: 'ge' }, { kana: 'ゴ', romaji: 'go' },
  { kana: 'ザ', romaji: 'za' }, { kana: 'ジ', romaji: 'ji' }, { kana: 'ズ', romaji: 'zu' }, { kana: 'ゼ', romaji: 'ze' }, { kana: 'ゾ', romaji: 'zo' },
  { kana: 'ダ', romaji: 'da' }, { kana: 'ヂ', romaji: 'ji' }, { kana: 'ヅ', romaji: 'zu' }, { kana: 'デ', romaji: 'de' }, { kana: 'ド', romaji: 'do' },
  { kana: 'バ', romaji: 'ba' }, { kana: 'ビ', romaji: 'bi' }, { kana: 'ブ', romaji: 'bu' }, { kana: 'ベ', romaji: 'be' }, { kana: 'ボ', romaji: 'bo' },
  { kana: 'パ', romaji: 'pa' }, { kana: 'ピ', romaji: 'pi' }, { kana: 'プ', romaji: 'pu' }, { kana: 'ペ', romaji: 'pe' }, { kana: 'ポ', romaji: 'po' },

  // Yoon (拗音) - padded to match 5 columns
  { kana: 'キャ', romaji: 'kya' }, { kana: '', romaji: '' }, { kana: 'キュ', romaji: 'kyu' }, { kana: '', romaji: '' }, { kana: 'キョ', romaji: 'kyo' },
  { kana: 'シャ', romaji: 'sha' }, { kana: '', romaji: '' }, { kana: 'シュ', romaji: 'shu' }, { kana: '', romaji: '' }, { kana: 'ショ', romaji: 'sho' },
  { kana: 'チャ', romaji: 'cha' }, { kana: '', romaji: '' }, { kana: 'チュ', romaji: 'chu' }, { kana: '', romaji: '' }, { kana: 'チョ', romaji: 'cho' },
  { kana: 'ニャ', romaji: 'nya' }, { kana: '', romaji: '' }, { kana: 'ニュ', romaji: 'nyu' }, { kana: '', romaji: '' }, { kana: 'ニョ', romaji: 'nyo' },
  { kana: 'ヒャ', romaji: 'hya' }, { kana: '', romaji: '' }, { kana: 'ヒュ', romaji: 'hyu' }, { kana: '', romaji: '' }, { kana: 'ヒョ', romaji: 'hyo' },
  { kana: 'ミャ', romaji: 'mya' }, { kana: '', romaji: '' }, { kana: 'ミュ', romaji: 'myu' }, { kana: '', romaji: '' }, { kana: 'ミョ', romaji: 'myo' },
  { kana: 'リャ', romaji: 'rya' }, { kana: '', romaji: '' }, { kana: 'リュ', romaji: 'ryu' }, { kana: '', romaji: '' }, { kana: 'リョ', romaji: 'ryo' },
  { kana: 'ギャ', romaji: 'gya' }, { kana: '', romaji: '' }, { kana: 'ギュ', romaji: 'gyu' }, { kana: '', romaji: '' }, { kana: 'ギョ', romaji: 'gyo' },
  { kana: 'ジャ', romaji: 'ja' }, { kana: '', romaji: '' }, { kana: 'ジュ', romaji: 'ju' }, { kana: '', romaji: '' }, { kana: 'ジョ', romaji: 'jo' },
  { kana: 'ビャ', romaji: 'bya' }, { kana: '', romaji: '' }, { kana: 'ビュ', romaji: 'byu' }, { kana: '', romaji: '' }, { kana: 'ビョ', romaji: 'byo' },
  { kana: 'ピャ', romaji: 'pya' }, { kana: '', romaji: '' }, { kana: 'ピュ', romaji: 'pyu' }, { kana: '', romaji: '' }, { kana: 'ピョ', romaji: 'pyo' }
];

const vocabData = [
  {
    "japanese": "毎朝",
    "romaji": "maiasa",
    "english": "every morning"
  },
  {
    "japanese": "問題",
    "romaji": "mondai",
    "english": "problem"
  },
  {
    "japanese": "お茶",
    "romaji": "ocha",
    "english": "green tea"
  },
  {
    "japanese": "黒",
    "romaji": "kuro",
    "english": "black"
  },
  {
    "japanese": "台所",
    "romaji": "daidokoro",
    "english": "kitchen"
  },
  {
    "japanese": "葉書",
    "romaji": "hagaki",
    "english": "postcard"
  },
  {
    "japanese": "ペン",
    "romaji": "pen",
    "english": "pen"
  },
  {
    "japanese": "ニュース",
    "romaji": "nyūsu",
    "english": "news"
  },
  {
    "japanese": "花瓶",
    "romaji": "kabin",
    "english": "a vase"
  },
  {
    "japanese": "フォーク",
    "romaji": "fōku",
    "english": "fork"
  },
  {
    "japanese": "引く",
    "romaji": "hiku",
    "english": "to pull"
  },
  {
    "japanese": "フィルム",
    "romaji": "firumu",
    "english": "roll of film"
  },
  {
    "japanese": "磨く",
    "romaji": "migaku",
    "english": "to brush teeth, to polish"
  },
  {
    "japanese": "押す",
    "romaji": "osu",
    "english": "to push, to stamp something"
  },
  {
    "japanese": "売る",
    "romaji": "uru",
    "english": "to sell"
  },
  {
    "japanese": "電気",
    "romaji": "denki",
    "english": "electricity, electric light"
  },
  {
    "japanese": "並ぶ",
    "romaji": "narabu",
    "english": "to line up, to stand in a line"
  },
  {
    "japanese": "病気",
    "romaji": "byōki",
    "english": "illness"
  },
  {
    "japanese": "ポケット",
    "romaji": "poketto",
    "english": "pocket"
  },
  {
    "japanese": "頭",
    "romaji": "atama",
    "english": "head"
  },
  {
    "japanese": "はし",
    "romaji": "hashi",
    "english": "chopsticks"
  },
  {
    "japanese": "英語",
    "romaji": "eigo",
    "english": "English language"
  },
  {
    "japanese": "家",
    "romaji": "ie",
    "english": "house"
  },
  {
    "japanese": "一月",
    "romaji": "hitotsuki",
    "english": "one month"
  },
  {
    "japanese": "暑い",
    "romaji": "atsui",
    "english": "hot"
  },
  {
    "japanese": "遊ぶ",
    "romaji": "asobu",
    "english": "to play, to make a visit"
  },
  {
    "japanese": "取る",
    "romaji": "toru",
    "english": "to take something"
  },
  {
    "japanese": "九",
    "romaji": "kyū / ku",
    "english": "nine"
  },
  {
    "japanese": "閉める",
    "romaji": "shimeru",
    "english": "to close something"
  },
  {
    "japanese": "たいへん",
    "romaji": "taihen",
    "english": "very"
  },
  {
    "japanese": "奥さん",
    "romaji": "okusan",
    "english": "(honorable) wife"
  },
  {
    "japanese": "作文",
    "romaji": "sakubun",
    "english": "composition, writing"
  },
  {
    "japanese": "便利",
    "romaji": "benri",
    "english": "useful, convenient"
  },
  {
    "japanese": "右",
    "romaji": "migi",
    "english": "right side"
  },
  {
    "japanese": "寒い",
    "romaji": "samui",
    "english": "cold"
  },
  {
    "japanese": "あびる",
    "romaji": "abiru",
    "english": "to bathe, to shower"
  },
  {
    "japanese": "十",
    "romaji": "jū  tō",
    "english": "ten"
  },
  {
    "japanese": "中",
    "romaji": "naka",
    "english": "middle"
  },
  {
    "japanese": "消す",
    "romaji": "kesu",
    "english": "to erase, to turn off power"
  },
  {
    "japanese": "近く",
    "romaji": "chikaku",
    "english": "near"
  },
  {
    "japanese": "七つ",
    "romaji": "nanatsu",
    "english": "seven"
  },
  {
    "japanese": "テープレコーダー",
    "romaji": "tēpurekōdā",
    "english": "tape recorder"
  },
  {
    "japanese": "目",
    "romaji": "me",
    "english": "eye"
  },
  {
    "japanese": "空",
    "romaji": "sora",
    "english": "sky"
  },
  {
    "japanese": "六日",
    "romaji": "muika",
    "english": "six days, sixth day of the month"
  },
  {
    "japanese": "座る",
    "romaji": "suwaru",
    "english": "to sit"
  },
  {
    "japanese": "年",
    "romaji": "toshi",
    "english": "year"
  },
  {
    "japanese": "男の子",
    "romaji": "otokonoko",
    "english": "boy"
  },
  {
    "japanese": "狭い",
    "romaji": "semai",
    "english": "narrow"
  },
  {
    "japanese": "冷蔵庫",
    "romaji": "reizōko",
    "english": "refrigerator"
  },
  {
    "japanese": "カメラ",
    "romaji": "kamera",
    "english": "camera"
  },
  {
    "japanese": "玄関",
    "romaji": "genkan",
    "english": "entry hall"
  },
  {
    "japanese": "違う",
    "romaji": "chigau",
    "english": "to differ"
  },
  {
    "japanese": "危ない",
    "romaji": "abunai",
    "english": "dangerous"
  },
  {
    "japanese": "分かる",
    "romaji": "wakaru",
    "english": "to be understood"
  },
  {
    "japanese": "言う",
    "romaji": "iu",
    "english": "to say"
  },
  {
    "japanese": "飲む",
    "romaji": "nomu",
    "english": "to drink"
  },
  {
    "japanese": "練習",
    "romaji": "renshūsuru",
    "english": "to practice"
  },
  {
    "japanese": "何",
    "romaji": "nan / nani",
    "english": "what"
  },
  {
    "japanese": "厚い",
    "romaji": "atsui",
    "english": "kind, deep, thick"
  },
  {
    "japanese": "毎月",
    "romaji": "maigetsu / maitsuki",
    "english": "every month"
  },
  {
    "japanese": "閉まる",
    "romaji": "shimaru",
    "english": "to close, to be closed"
  },
  {
    "japanese": "脱ぐ",
    "romaji": "nugu",
    "english": "to take off clothes"
  },
  {
    "japanese": "黒い",
    "romaji": "kuroi",
    "english": "black"
  },
  {
    "japanese": "登る",
    "romaji": "noboru",
    "english": "to climb"
  },
  {
    "japanese": "汚い",
    "romaji": "kitanai",
    "english": "dirty"
  },
  {
    "japanese": "雨",
    "romaji": "ame",
    "english": "rain"
  },
  {
    "japanese": "お皿",
    "romaji": "osara",
    "english": "plate, dish"
  },
  {
    "japanese": "速い",
    "romaji": "hayai",
    "english": "quick"
  },
  {
    "japanese": "お風呂",
    "romaji": "ofuro",
    "english": "bath"
  },
  {
    "japanese": "新しい",
    "romaji": "atarashii",
    "english": "new"
  },
  {
    "japanese": "廊下",
    "romaji": "rōka",
    "english": "corridor"
  },
  {
    "japanese": "茶色",
    "romaji": "chairo",
    "english": "brown"
  },
  {
    "japanese": "コート",
    "romaji": "kōto",
    "english": "coat, tennis court"
  },
  {
    "japanese": "手紙",
    "romaji": "tegami",
    "english": "letter"
  },
  {
    "japanese": "要る",
    "romaji": "iru",
    "english": "to need"
  },
  {
    "japanese": "こっち",
    "romaji": "kotchi",
    "english": "this person or way"
  },
  {
    "japanese": "スプーン",
    "romaji": "supūn",
    "english": "spoon"
  },
  {
    "japanese": "時々",
    "romaji": "tokidoki",
    "english": "sometimes"
  },
  {
    "japanese": "傘",
    "romaji": "kasa",
    "english": "umbrella"
  },
  {
    "japanese": "いい / よい",
    "romaji": "ii / yoi",
    "english": "good"
  },
  {
    "japanese": "電話",
    "romaji": "denwa",
    "english": "telephone"
  },
  {
    "japanese": "勤める",
    "romaji": "tsutomeru",
    "english": "to work for someone"
  },
  {
    "japanese": "安い",
    "romaji": "yasui",
    "english": "cheap"
  },
  {
    "japanese": "どう",
    "romaji": "dō",
    "english": "how, in what way"
  },
  {
    "japanese": "道",
    "romaji": "michi",
    "english": "street"
  },
  {
    "japanese": "バス",
    "romaji": "basu",
    "english": "bus"
  },
  {
    "japanese": "クラス",
    "romaji": "kurasu",
    "english": "class"
  },
  {
    "japanese": "差す",
    "romaji": "sasu",
    "english": "to stretch out hands, to raise an umbrella"
  },
  {
    "japanese": "スポーツ",
    "romaji": "supōtsu",
    "english": "sport"
  },
  {
    "japanese": "ど��ち",
    "romaji": "dotchi",
    "english": "which"
  },
  {
    "japanese": "そば",
    "romaji": "soba",
    "english": "near, beside"
  },
  {
    "japanese": "新聞",
    "romaji": "shinbun",
    "english": "newspaper"
  },
  {
    "japanese": "どうして",
    "romaji": "dōshite",
    "english": "for what reason"
  },
  {
    "japanese": "庭",
    "romaji": "niwa",
    "english": "garden"
  },
  {
    "japanese": "大きな",
    "romaji": "ōkina",
    "english": "big"
  },
  {
    "japanese": "辺",
    "romaji": "hen",
    "english": "area"
  },
  {
    "japanese": "番号",
    "romaji": "bangō",
    "english": "number"
  },
  {
    "japanese": "家族",
    "romaji": "kazoku",
    "english": "family"
  },
  {
    "japanese": "下手",
    "romaji": "heta",
    "english": "unskillful"
  },
  {
    "japanese": "料理",
    "romaji": "ryōri",
    "english": "cuisine"
  },
  {
    "japanese": "カレー",
    "romaji": "karē",
    "english": "curry"
  },
  {
    "japanese": "六",
    "romaji": "roku",
    "english": "six"
  },
  {
    "japanese": "今年",
    "romaji": "kotoshi",
    "english": "this year"
  },
  {
    "japanese": "初めて",
    "romaji": "hajimete",
    "english": "for the first time"
  },
  {
    "japanese": "風邪",
    "romaji": "kaze",
    "english": "a cold"
  },
  {
    "japanese": "赤い",
    "romaji": "akai",
    "english": "red"
  },
  {
    "japanese": "甘い",
    "romaji": "amai",
    "english": "sweet"
  },
  {
    "japanese": "西",
    "romaji": "nishi",
    "english": "west"
  },
  {
    "japanese": "毎週",
    "romaji": "maishū",
    "english": "every week"
  },
  {
    "japanese": "いつも",
    "romaji": "itsumo",
    "english": "always"
  },
  {
    "japanese": "五つ",
    "romaji": "itsutsu",
    "english": "five"
  },
  {
    "japanese": "建物",
    "romaji": "tatemono",
    "english": "building"
  },
  {
    "japanese": "なる",
    "romaji": "naru",
    "english": "to become"
  },
  {
    "japanese": "まっすぐ",
    "romaji": "massugu",
    "english": "straight ahead, direct"
  },
  {
    "japanese": "作る",
    "romaji": "tsukuru",
    "english": "to make"
  },
  {
    "japanese": "風",
    "romaji": "kaze",
    "english": "wind"
  },
  {
    "japanese": "少し",
    "romaji": "sukoshi",
    "english": "few"
  },
  {
    "japanese": "大学",
    "romaji": "daigaku",
    "english": "university"
  },
  {
    "japanese": "シャツ",
    "romaji": "shatsu",
    "english": "shirt"
  },
  {
    "japanese": "病院",
    "romaji": "byōin",
    "english": "hospital"
  },
  {
    "japanese": "会社",
    "romaji": "kaisha",
    "english": "company"
  },
  {
    "japanese": "無くす",
    "romaji": "nakusu",
    "english": "to lose something"
  },
  {
    "japanese": "スリッパ",
    "romaji": "surippa",
    "english": "slippers"
  },
  {
    "japanese": "地下鉄",
    "romaji": "chikatetsu",
    "english": "underground train"
  },
  {
    "japanese": "ページ",
    "romaji": "pēji",
    "english": "page"
  },
  {
    "japanese": "曇る",
    "romaji": "kumoru",
    "english": "to become cloudy, to become dim"
  },
  {
    "japanese": "辞書",
    "romaji": "jisho",
    "english": "dictionary"
  },
  {
    "japanese": "万年筆",
    "romaji": "mannenhitsu",
    "english": "fountain pen"
  },
  {
    "japanese": "海",
    "romaji": "umi",
    "english": "sea"
  },
  {
    "japanese": "エレベーター",
    "romaji": "erebētā",
    "english": "elevator"
  },
  {
    "japanese": "たぶん",
    "romaji": "tabun",
    "english": "probably"
  },
  {
    "japanese": "夕方",
    "romaji": "yūgata",
    "english": "evening"
  },
  {
    "japanese": "東",
    "romaji": "higashi",
    "english": "east"
  },
  {
    "japanese": "声",
    "romaji": "koe",
    "english": "voice"
  },
  {
    "japanese": "撮る",
    "romaji": "toru",
    "english": "to take a photo or record a film"
  },
  {
    "japanese": "私",
    "romaji": "watakushi",
    "english": "(humble) I, myself"
  },
  {
    "japanese": "両親",
    "romaji": "ryōshin",
    "english": "both parents"
  },
  {
    "japanese": "きれい",
    "romaji": "kirei",
    "english": "pretty, clean"
  },
  {
    "japanese": "どうぞ",
    "romaji": "dōzo",
    "english": "please"
  },
  {
    "japanese": "好き",
    "romaji": "suki",
    "english": "likeable"
  },
  {
    "japanese": "静か",
    "romaji": "shizuka",
    "english": "quiet"
  },
  {
    "japanese": "お父さん",
    "romaji": "otōsan",
    "english": "(honorable) father"
  },
  {
    "japanese": "人",
    "romaji": "hito",
    "english": "person"
  },
  {
    "japanese": "覚える",
    "romaji": "oboeru",
    "english": "to remember"
  },
  {
    "japanese": "休み",
    "romaji": "yasumi",
    "english": "rest, holiday"
  },
  {
    "japanese": "池",
    "romaji": "ike",
    "english": "pond"
  },
  {
    "japanese": "始まる",
    "romaji": "hajimaru",
    "english": "to begin"
  },
  {
    "japanese": "困る",
    "romaji": "komaru",
    "english": "to be worried"
  },
  {
    "japanese": "ほか",
    "romaji": "hoka",
    "english": "other, the rest"
  },
  {
    "japanese": "ちゃわん",
    "romaji": "chawan",
    "english": "rice bowl"
  },
  {
    "japanese": "疲れる",
    "romaji": "tsukareru",
    "english": "to get tired"
  },
  {
    "japanese": "掃除",
    "romaji": "sōjisuru",
    "english": "to clean, to sweep"
  },
  {
    "japanese": "賑やか",
    "romaji": "nigiyaka",
    "english": "bustling, busy"
  },
  {
    "japanese": "一つ",
    "romaji": "hitotsu",
    "english": "one"
  },
  {
    "japanese": "来週",
    "romaji": "raishū",
    "english": "next week"
  },
  {
    "japanese": "財布",
    "romaji": "saifu",
    "english": "wallet"
  },
  {
    "japanese": "知る",
    "romaji": "shiru",
    "english": "to know"
  },
  {
    "japanese": "教える",
    "romaji": "oshieru",
    "english": "to teach, to tell"
  },
  {
    "japanese": "朝御飯",
    "romaji": "asagohan",
    "english": "breakfast"
  },
  {
    "japanese": "飛ぶ",
    "romaji": "tobu",
    "english": "to fly, to hop"
  },
  {
    "japanese": "言葉",
    "romaji": "kotoba",
    "english": "word, language"
  },
  {
    "japanese": "キロ / キログラム",
    "romaji": "kiro / kiroguramu",
    "english": "kilogram"
  },
  {
    "japanese": "赤",
    "romaji": "aka",
    "english": "red"
  },
  {
    "japanese": "自分",
    "romaji": "jibun",
    "english": "oneself"
  },
  {
    "japanese": "デパート",
    "romaji": "depāto",
    "english": "department store"
  },
  {
    "japanese": "薄い",
    "romaji": "usui",
    "english": "thin, weak"
  },
  {
    "japanese": "高い",
    "romaji": "takai",
    "english": "tall, expensive"
  },
  {
    "japanese": "帰る",
    "romaji": "kaeru",
    "english": "to go back"
  },
  {
    "japanese": "はい",
    "romaji": "hai",
    "english": "yes"
  },
  {
    "japanese": "卵",
    "romaji": "tamago",
    "english": "egg"
  },
  {
    "japanese": "低い",
    "romaji": "hikui",
    "english": "short, low"
  },
  {
    "japanese": "なぜ",
    "romaji": "naze",
    "english": "why"
  },
  {
    "japanese": "一日",
    "romaji": "ichinichi",
    "english": "(1) one day, (2) first of month"
  },
  {
    "japanese": "いいえ",
    "romaji": "iie",
    "english": "no"
  },
  {
    "japanese": "小さな",
    "romaji": "chiisana",
    "english": "little"
  },
  {
    "japanese": "時間",
    "romaji": "jikan",
    "english": "time"
  },
  {
    "japanese": "上げる",
    "romaji": "ageru",
    "english": "to give"
  },
  {
    "japanese": "ふろ",
    "romaji": "furo",
    "english": "bath"
  },
  {
    "japanese": "生徒",
    "romaji": "seito",
    "english": "pupil"
  },
  {
    "japanese": "レストラン",
    "romaji": "resutoran",
    "english": "restaurant"
  },
  {
    "japanese": "出す",
    "romaji": "dasu",
    "english": "to put out"
  },
  {
    "japanese": "かわいい",
    "romaji": "kawaii",
    "english": "cute"
  },
  {
    "japanese": "音楽",
    "romaji": "ongaku",
    "english": "music"
  },
  {
    "japanese": "歌",
    "romaji": "uta",
    "english": "song"
  },
  {
    "japanese": "いちばん",
    "romaji": "ichiban",
    "english": "best, first"
  },
  {
    "japanese": "咲く",
    "romaji": "saku",
    "english": "to bloom"
  },
  {
    "japanese": "山",
    "romaji": "yama",
    "english": "mountain"
  },
  {
    "japanese": "テレビ",
    "romaji": "terebi",
    "english": "television"
  },
  {
    "japanese": "授業",
    "romaji": "jugyō",
    "english": "lesson, class work"
  },
  {
    "japanese": "暖かい",
    "romaji": "atatakai",
    "english": "warm"
  },
  {
    "japanese": "セーター",
    "romaji": "sētā",
    "english": "sweater, jumper"
  },
  {
    "japanese": "自転車",
    "romaji": "jitensha",
    "english": "bicycle"
  },
  {
    "japanese": "ラジカセ / ラジオカセット",
    "romaji": "rajikase / rajiokasetto",
    "english": "radio cassette player"
  },
  {
    "japanese": "つける",
    "romaji": "tsukeru",
    "english": "to turn on"
  },
  {
    "japanese": "さ来年",
    "romaji": "sarainen",
    "english": "year after next"
  },
  {
    "japanese": "学校",
    "romaji": "gakkō",
    "english": "school"
  },
  {
    "japanese": "いくら",
    "romaji": "ikura",
    "english": "how much?"
  },
  {
    "japanese": "四",
    "romaji": "shi / yon",
    "english": "four"
  },
  {
    "japanese": "入る",
    "romaji": "hairu",
    "english": "to enter, to contain"
  },
  {
    "japanese": "曇り",
    "romaji": "kumori",
    "english": "cloudy weather"
  },
  {
    "japanese": "外国",
    "romaji": "gaikoku",
    "english": "foreign country"
  },
  {
    "japanese": "温い",
    "romaji": "nurui",
    "english": "luke warm"
  },
  {
    "japanese": "そうして / そして",
    "romaji": "sōshite / soshite",
    "english": "and"
  },
  {
    "japanese": "どうも",
    "romaji": "dōmo",
    "english": "thanks"
  },
  {
    "japanese": "仕事",
    "romaji": "shigoto",
    "english": "job"
  },
  {
    "japanese": "窓",
    "romaji": "mado",
    "english": "window"
  },
  {
    "japanese": "晩",
    "romaji": "ban",
    "english": "evening"
  },
  {
    "japanese": "難しい",
    "romaji": "muzukashii",
    "english": "difficult"
  },
  {
    "japanese": "村",
    "romaji": "mura",
    "english": "village"
  },
  {
    "japanese": "鉛筆",
    "romaji": "enpitsu",
    "english": "pencil"
  },
  {
    "japanese": "長い",
    "romaji": "nagai",
    "english": "long"
  },
  {
    "japanese": "生まれる",
    "romaji": "umareru",
    "english": "to be born"
  },
  {
    "japanese": "雑誌",
    "romaji": "zasshi",
    "english": "magazine"
  },
  {
    "japanese": "国",
    "romaji": "kuni",
    "english": "country"
  },
  {
    "japanese": "おまわりさん",
    "romaji": "omawarisan",
    "english": "friendly term for policeman"
  },
  {
    "japanese": "今朝",
    "romaji": "kesa",
    "english": "this morning"
  },
  {
    "japanese": "晴れる",
    "romaji": "hareru",
    "english": "to be sunny"
  },
  {
    "japanese": "夕飯",
    "romaji": "yūhan",
    "english": "dinner"
  },
  {
    "japanese": "一緒",
    "romaji": "issho",
    "english": "together"
  },
  {
    "japanese": "どれ",
    "romaji": "dore",
    "english": "which (of three or more)"
  },
  {
    "japanese": "立つ",
    "romaji": "tatsu",
    "english": "to stand"
  },
  {
    "japanese": "元気",
    "romaji": "genki",
    "english": "health, vitality"
  },
  {
    "japanese": "天気",
    "romaji": "tenki",
    "english": "weather"
  },
  {
    "japanese": "医者",
    "romaji": "isha",
    "english": "medical doctor"
  },
  {
    "japanese": "七",
    "romaji": "shichi / nana",
    "english": "seven"
  },
  {
    "japanese": "はく",
    "romaji": "haku",
    "english": "to wear, to put on trousers"
  },
  {
    "japanese": "だんだん",
    "romaji": "dandan",
    "english": "gradually"
  },
  {
    "japanese": "戸",
    "romaji": "to",
    "english": "Japanese style door"
  },
  {
    "japanese": "ノ���ト",
    "romaji": "nōto",
    "english": "notebook, exercise book"
  },
  {
    "japanese": "また",
    "romaji": "mata",
    "english": "again, and"
  },
  {
    "japanese": "今日",
    "romaji": "kyō",
    "english": "today"
  },
  {
    "japanese": "とても",
    "romaji": "totemo",
    "english": "very"
  },
  {
    "japanese": "一昨年",
    "romaji": "ototoshi",
    "english": "year before last"
  },
  {
    "japanese": "文章",
    "romaji": "bunshō",
    "english": "sentence, text"
  },
  {
    "japanese": "公園",
    "romaji": "kōen",
    "english": "park"
  },
  {
    "japanese": "借りる",
    "romaji": "kariru",
    "english": "to borrow"
  },
  {
    "japanese": "口",
    "romaji": "kuchi",
    "english": "mouth, opening"
  },
  {
    "japanese": "持つ",
    "romaji": "motsu",
    "english": "to hold"
  },
  {
    "japanese": "上着",
    "romaji": "uwagi",
    "english": "jacket"
  },
  {
    "japanese": "秋",
    "romaji": "aki",
    "english": "autumn"
  },
  {
    "japanese": "悪い",
    "romaji": "warui",
    "english": "bad"
  },
  {
    "japanese": "青い",
    "romaji": "aoi",
    "english": "blue"
  },
  {
    "japanese": "住む",
    "romaji": "sumu",
    "english": "to live in"
  },
  {
    "japanese": "かける",
    "romaji": "kakeru",
    "english": "to call by phone"
  },
  {
    "japanese": "木曜日",
    "romaji": "mokuyōbi",
    "english": "Thursday"
  },
  {
    "japanese": "忘れる",
    "romaji": "wasureru",
    "english": "to forget"
  },
  {
    "japanese": "お手洗い",
    "romaji": "otearai",
    "english": "bathroom"
  },
  {
    "japanese": "写真",
    "romaji": "shashin",
    "english": "photograph"
  },
  {
    "japanese": "ゼロ",
    "romaji": "zero",
    "english": "zero"
  },
  {
    "japanese": "いろいろ",
    "romaji": "iroiro",
    "english": "various"
  },
  {
    "japanese": "もう",
    "romaji": "mō",
    "english": "already"
  },
  {
    "japanese": "会う",
    "romaji": "au",
    "english": "to meet"
  },
  {
    "japanese": "南",
    "romaji": "minami",
    "english": "south"
  },
  {
    "japanese": "五日",
    "romaji": "itsuka",
    "english": "five days, fifth day"
  },
  {
    "japanese": "着る",
    "romaji": "kiru",
    "english": "to put on from the shoulders down"
  },
  {
    "japanese": "そこ",
    "romaji": "soko",
    "english": "that place"
  },
  {
    "japanese": "終る",
    "romaji": "owaru",
    "english": "to finish"
  },
  {
    "japanese": "どの",
    "romaji": "dono",
    "english": "which"
  },
  {
    "japanese": "読む",
    "romaji": "yomu",
    "english": "to read"
  },
  {
    "japanese": "それでは",
    "romaji": "soredeha",
    "english": "in that situation"
  },
  {
    "japanese": "来月",
    "romaji": "raigetsu",
    "english": "next month"
  },
  {
    "japanese": "果物",
    "romaji": "kudamono",
    "english": "fruit"
  },
  {
    "japanese": "止まる",
    "romaji": "tomaru",
    "english": "to come to a halt"
  },
  {
    "japanese": "着く",
    "romaji": "tsuku",
    "english": "to arrive at"
  },
  {
    "japanese": "大好き",
    "romaji": "daisuki",
    "english": "to be very likeable"
  },
  {
    "japanese": "妹",
    "romaji": "imōto",
    "english": "(humble) younger sister"
  },
  {
    "japanese": "夏",
    "romaji": "natsu",
    "english": "summer"
  },
  {
    "japanese": "今晩",
    "romaji": "konban",
    "english": "this evening"
  },
  {
    "japanese": "塩",
    "romaji": "shio",
    "english": "salt"
  },
  {
    "japanese": "先週",
    "romaji": "senshū",
    "english": "last week"
  },
  {
    "japanese": "欲しい",
    "romaji": "hoshii",
    "english": "want"
  },
  {
    "japanese": "木",
    "romaji": "ki",
    "english": "tree, wood"
  },
  {
    "japanese": "ほんとう",
    "romaji": "hontō",
    "english": "truth"
  },
  {
    "japanese": "薬",
    "romaji": "kusuri",
    "english": "medicine"
  },
  {
    "japanese": "お菓子",
    "romaji": "okashi",
    "english": "sweets, candy"
  },
  {
    "japanese": "金曜日",
    "romaji": "kin'yōbi",
    "english": "Friday"
  },
  {
    "japanese": "まずい",
    "romaji": "mazui",
    "english": "unpleasant"
  },
  {
    "japanese": "お酒",
    "romaji": "osake",
    "english": "alcohol, rice wine"
  },
  {
    "japanese": "多い",
    "romaji": "ōi",
    "english": "many"
  },
  {
    "japanese": "動物",
    "romaji": "dōbutsu",
    "english": "animal"
  },
  {
    "japanese": "切符",
    "romaji": "kippu",
    "english": "ticket"
  },
  {
    "japanese": "キロ / キロメートル",
    "romaji": "kiro / kiromētoru",
    "english": "kilometre"
  },
  {
    "japanese": "呼ぶ",
    "romaji": "yobu",
    "english": "to call out, to invite"
  },
  {
    "japanese": "体",
    "romaji": "karada",
    "english": "body"
  },
  {
    "japanese": "ゆっくりと",
    "romaji": "yukkurito",
    "english": "slowly"
  },
  {
    "japanese": "二日",
    "romaji": "futsuka",
    "english": "two days, second day of the month"
  },
  {
    "japanese": "大人",
    "romaji": "otona",
    "english": "adult"
  },
  {
    "japanese": "歯",
    "romaji": "ha",
    "english": "tooth"
  },
  {
    "japanese": "冬",
    "romaji": "fuyu",
    "english": "winter"
  },
  {
    "japanese": "所",
    "romaji": "tokoro",
    "english": "place"
  },
  {
    "japanese": "吹く",
    "romaji": "fuku",
    "english": "to blow"
  },
  {
    "japanese": "足",
    "romaji": "ashi",
    "english": "foot, leg"
  },
  {
    "japanese": "箱",
    "romaji": "hako",
    "english": "box"
  },
  {
    "japanese": "八",
    "romaji": "hachi",
    "english": "eight"
  },
  {
    "japanese": "朝",
    "romaji": "asa",
    "english": "morning"
  },
  {
    "japanese": "一昨日",
    "romaji": "ototoi",
    "english": "day before yesterday"
  },
  {
    "japanese": "有名",
    "romaji": "yūmei",
    "english": "famous"
  },
  {
    "japanese": "二十日",
    "romaji": "hatsuka",
    "english": "twenty days, twentieth"
  },
  {
    "japanese": "近い",
    "romaji": "chikai",
    "english": "near"
  },
  {
    "japanese": "ください",
    "romaji": "kudasai",
    "english": "please"
  },
  {
    "japanese": "時計",
    "romaji": "tokei",
    "english": "watch, clock"
  },
  {
    "japanese": "午後",
    "romaji": "gogo",
    "english": "afternoon"
  },
  {
    "japanese": "食べ物",
    "romaji": "tabemono",
    "english": "food"
  },
  {
    "japanese": "降る",
    "romaji": "furu",
    "english": "to fall, e.g. rain or snow"
  },
  {
    "japanese": "易しい",
    "romaji": "yasashii",
    "english": "easy, simple"
  },
  {
    "japanese": "大使館",
    "romaji": "taishikan",
    "english": "embassy"
  },
  {
    "japanese": "誰",
    "romaji": "dare",
    "english": "who"
  },
  {
    "japanese": "上",
    "romaji": "ue",
    "english": "on top of"
  },
  {
    "japanese": "五",
    "romaji": "go",
    "english": "five"
  },
  {
    "japanese": "十日",
    "romaji": "tōka",
    "english": "ten days, the tenth day"
  },
  {
    "japanese": "どちら",
    "romaji": "dochira",
    "english": "which of two"
  },
  {
    "japanese": "プール",
    "romaji": "pūru",
    "english": "swimming pool"
  },
  {
    "japanese": "小さい",
    "romaji": "chiisai",
    "english": "little"
  },
  {
    "japanese": "今週",
    "romaji": "konshū",
    "english": "this week"
  },
  {
    "japanese": "肉",
    "romaji": "niku",
    "english": "meat"
  },
  {
    "japanese": "零",
    "romaji": "rei",
    "english": "zero"
  },
  {
    "japanese": "豚肉",
    "romaji": "butaniku",
    "english": "pork"
  },
  {
    "japanese": "広い",
    "romaji": "hiroi",
    "english": "spacious, wide"
  },
  {
    "japanese": "靴下",
    "romaji": "kutsushita",
    "english": "socks"
  },
  {
    "japanese": "一人",
    "romaji": "hitori",
    "english": "one person"
  },
  {
    "japanese": "かぎ",
    "romaji": "kagi",
    "english": "key"
  },
  {
    "japanese": "向こう",
    "romaji": "mukō",
    "english": "over there"
  },
  {
    "japanese": "上手",
    "romaji": "jōzu",
    "english": "skillful"
  },
  {
    "japanese": "牛肉",
    "romaji": "gyūniku",
    "english": "beef"
  },
  {
    "japanese": "話",
    "romaji": "hanashi",
    "english": "talk, story"
  },
  {
    "japanese": "毎晩",
    "romaji": "maiban",
    "english": "every night"
  },
  {
    "japanese": "三つ",
    "romaji": "mittsu",
    "english": "three"
  },
  {
    "japanese": "吸う",
    "romaji": "sū",
    "english": "to smoke, to suck"
  },
  {
    "japanese": "銀行",
    "romaji": "ginkō",
    "english": "bank"
  },
  {
    "japanese": "大切",
    "romaji": "taisetsu",
    "english": "important"
  },
  {
    "japanese": "学生",
    "romaji": "gakusei",
    "english": "student"
  },
  {
    "japanese": "部屋",
    "romaji": "heya",
    "english": "room"
  },
  {
    "japanese": "昼御飯",
    "romaji": "hirugohan",
    "english": "midday meal"
  },
  {
    "japanese": "下",
    "romaji": "shita",
    "english": "below"
  },
  {
    "japanese": "二つ",
    "romaji": "futatsu",
    "english": "two"
  },
  {
    "japanese": "百",
    "romaji": "hyaku",
    "english": "hundred"
  },
  {
    "japanese": "地図",
    "romaji": "chizu",
    "english": "map"
  },
  {
    "japanese": "八百屋",
    "romaji": "yaoya",
    "english": "greengrocer"
  },
  {
    "japanese": "ネクタイ",
    "romaji": "nekutai",
    "english": "tie, necktie"
  },
  {
    "japanese": "去年",
    "romaji": "kyonen",
    "english": "last year"
  },
  {
    "japanese": "火曜日",
    "romaji": "kayōbi",
    "english": "Tuesday"
  },
  {
    "japanese": "乗る",
    "romaji": "noru",
    "english": "to get on, to ride"
  },
  {
    "japanese": "弟",
    "romaji": "otōto",
    "english": "younger brother"
  },
  {
    "japanese": "あなた",
    "romaji": "anata",
    "english": "you"
  },
  {
    "japanese": "千",
    "romaji": "sen",
    "english": "thousand"
  },
  {
    "japanese": "緑",
    "romaji": "midori",
    "english": "green"
  },
  {
    "japanese": "とり肉",
    "romaji": "toriniku",
    "english": "chicken meat"
  },
  {
    "japanese": "軽い",
    "romaji": "karui",
    "english": "light"
  },
  {
    "japanese": "あまり",
    "romaji": "amari",
    "english": "not very"
  },
  {
    "japanese": "帽子",
    "romaji": "bōshi",
    "english": "hat"
  },
  {
    "japanese": "丈夫",
    "romaji": "jōbu",
    "english": "strong, durable"
  },
  {
    "japanese": "入れる",
    "romaji": "ireru",
    "english": "to put in"
  },
  {
    "japanese": "二十歳",
    "romaji": "hatachi",
    "english": "20 years old, 20th year"
  },
  {
    "japanese": "三日",
    "romaji": "mikka",
    "english": "three days, third day of the month"
  },
  {
    "japanese": "遠い",
    "romaji": "tōi",
    "english": "far"
  },
  {
    "japanese": "夏休み",
    "romaji": "natsuyasumi",
    "english": "summer holiday"
  },
  {
    "japanese": "友達",
    "romaji": "tomodachi",
    "english": "friend"
  },
  {
    "japanese": "横",
    "romaji": "yoko",
    "english": "beside, side, width"
  },
  {
    "japanese": "冷たい",
    "romaji": "tsumetai",
    "english": "cold to the touch"
  },
  {
    "japanese": "夜",
    "romaji": "yoru",
    "english": "evening, night"
  },
  {
    "japanese": "トイレ",
    "romaji": "toire",
    "english": "toilet"
  },
  {
    "japanese": "おなか",
    "romaji": "onaka",
    "english": "stomach"
  },
  {
    "japanese": "どこ",
    "romaji": "doko",
    "english": "where"
  },
  {
    "japanese": "暇",
    "romaji": "hima",
    "english": "free time"
  },
  {
    "japanese": "鳴く",
    "romaji": "naku",
    "english": "animal noise. to chirp, roar or croak etc."
  },
  {
    "japanese": "隣",
    "romaji": "tonari",
    "english": "next door to"
  },
  {
    "japanese": "先生",
    "romaji": "sensei",
    "english": "teacher, doctor"
  },
  {
    "japanese": "出口",
    "romaji": "deguchi",
    "english": "exit"
  },
  {
    "japanese": "後ろ",
    "romaji": "ushiro",
    "english": "behind"
  },
  {
    "japanese": "先月",
    "romaji": "sengetsu",
    "english": "last month"
  },
  {
    "japanese": "テープ",
    "romaji": "tēpu",
    "english": "tape"
  },
  {
    "japanese": "お姉さん",
    "romaji": "oneesan",
    "english": "(honorable) older sister"
  },
  {
    "japanese": "じゃ / じゃあ",
    "romaji": "ja / jaa",
    "english": "well then…"
  },
  {
    "japanese": "本",
    "romaji": "hon",
    "english": "book"
  },
  {
    "japanese": "泳ぐ",
    "romaji": "oyogu",
    "english": "to swim"
  },
  {
    "japanese": "灰皿",
    "romaji": "haizara",
    "english": "ashtray"
  },
  {
    "japanese": "門",
    "romaji": "mon",
    "english": "gate"
  },
  {
    "japanese": "荷物",
    "romaji": "nimotsu",
    "english": "luggage"
  },
  {
    "japanese": "この",
    "romaji": "kono",
    "english": "this"
  },
  {
    "japanese": "書く",
    "romaji": "kaku",
    "english": "to write"
  },
  {
    "japanese": "��年",
    "romaji": "mainen / maitoshi",
    "english": "every year"
  },
  {
    "japanese": "明日",
    "romaji": "ashita",
    "english": "tomorrow"
  },
  {
    "japanese": "ホテル",
    "romaji": "hoteru",
    "english": "hotel"
  },
  {
    "japanese": "降りる",
    "romaji": "oriru",
    "english": "to get off, to descend"
  },
  {
    "japanese": "重い",
    "romaji": "omoi",
    "english": "heavy"
  },
  {
    "japanese": "電車",
    "romaji": "densha",
    "english": "electric train"
  },
  {
    "japanese": "痛い",
    "romaji": "itai",
    "english": "painful"
  },
  {
    "japanese": "話す",
    "romaji": "hanasu",
    "english": "to speak"
  },
  {
    "japanese": "りっぱ",
    "romaji": "rippa",
    "english": "splendid"
  },
  {
    "japanese": "つまらない",
    "romaji": "tsumaranai",
    "english": "boring"
  },
  {
    "japanese": "よく",
    "romaji": "yoku",
    "english": "often, well"
  },
  {
    "japanese": "嫌",
    "romaji": "iya",
    "english": "unpleasant"
  },
  {
    "japanese": "宿題",
    "romaji": "shukudai",
    "english": "homework"
  },
  {
    "japanese": "死ぬ",
    "romaji": "shinu",
    "english": "to die"
  },
  {
    "japanese": "みんな",
    "romaji": "minna",
    "english": "everyone"
  },
  {
    "japanese": "万",
    "romaji": "man",
    "english": "ten thousand"
  },
  {
    "japanese": "映画",
    "romaji": "eiga",
    "english": "movie"
  },
  {
    "japanese": "遅い",
    "romaji": "osoi",
    "english": "late, slow"
  },
  {
    "japanese": "耳",
    "romaji": "mimi",
    "english": "ear"
  },
  {
    "japanese": "かかる",
    "romaji": "kakaru",
    "english": "to take time or money"
  },
  {
    "japanese": "でも",
    "romaji": "demo",
    "english": "but"
  },
  {
    "japanese": "四つ",
    "romaji": "yottsu",
    "english": "four"
  },
  {
    "japanese": "机",
    "romaji": "tsukue",
    "english": "desk"
  },
  {
    "japanese": "あっち",
    "romaji": "atchi",
    "english": "over there"
  },
  {
    "japanese": "買う",
    "romaji": "kau",
    "english": "to buy"
  },
  {
    "japanese": "開く",
    "romaji": "aku",
    "english": "to open, to become open"
  },
  {
    "japanese": "教室",
    "romaji": "kyōshitsu",
    "english": "classroom"
  },
  {
    "japanese": "かばん",
    "romaji": "kaban",
    "english": "bag, basket"
  },
  {
    "japanese": "マッチ",
    "romaji": "matchi",
    "english": "match"
  },
  {
    "japanese": "短い",
    "romaji": "mijikai",
    "english": "short"
  },
  {
    "japanese": "姉",
    "romaji": "ane",
    "english": "(humble) older sister"
  },
  {
    "japanese": "大勢",
    "romaji": "ōzei",
    "english": "great number of people"
  },
  {
    "japanese": "開ける",
    "romaji": "akeru",
    "english": "to open"
  },
  {
    "japanese": "忙しい",
    "romaji": "isogashii",
    "english": "busy, irritated"
  },
  {
    "japanese": "おばあさん",
    "romaji": "obaasan",
    "english": "grandmother, female senior-citizen"
  },
  {
    "japanese": "店",
    "romaji": "mise",
    "english": "shop"
  },
  {
    "japanese": "ワイシャツ",
    "romaji": "waishatsu",
    "english": "business shirt"
  },
  {
    "japanese": "北",
    "romaji": "kita",
    "english": "north"
  },
  {
    "japanese": "ラジオ",
    "romaji": "rajio",
    "english": "radio"
  },
  {
    "japanese": "すぐに",
    "romaji": "suguni",
    "english": "instantly"
  },
  {
    "japanese": "ハンカチ",
    "romaji": "hankachi",
    "english": "handkerchief"
  },
  {
    "japanese": "いつ",
    "romaji": "itsu",
    "english": "when"
  },
  {
    "japanese": "全部",
    "romaji": "zenbu",
    "english": "all"
  },
  {
    "japanese": "橋",
    "romaji": "hashi",
    "english": "bridge"
  },
  {
    "japanese": "川 / 河",
    "romaji": "kawa",
    "english": "river"
  },
  {
    "japanese": "バター",
    "romaji": "batā",
    "english": "butter"
  },
  {
    "japanese": "もっと",
    "romaji": "motto",
    "english": "more"
  },
  {
    "japanese": "入口",
    "romaji": "iriguchi",
    "english": "entrance"
  },
  {
    "japanese": "など",
    "romaji": "nado",
    "english": "et cetera"
  },
  {
    "japanese": "太い",
    "romaji": "futoi",
    "english": "fat"
  },
  {
    "japanese": "やる",
    "romaji": "yaru",
    "english": "to do"
  },
  {
    "japanese": "自動車",
    "romaji": "jidōsha",
    "english": "automobile"
  },
  {
    "japanese": "昼",
    "romaji": "hiru",
    "english": "noon, daytime"
  },
  {
    "japanese": "色",
    "romaji": "iro",
    "english": "colour"
  },
  {
    "japanese": "黄色",
    "romaji": "kiiro",
    "english": "yellow"
  },
  {
    "japanese": "左",
    "romaji": "hidari",
    "english": "left hand side"
  },
  {
    "japanese": "野菜",
    "romaji": "yasai",
    "english": "vegetable"
  },
  {
    "japanese": "シャワー",
    "romaji": "shawā",
    "english": "shower"
  },
  {
    "japanese": "散歩",
    "romaji": "sanposuru",
    "english": "to stroll"
  },
  {
    "japanese": "三",
    "romaji": "san",
    "english": "three"
  },
  {
    "japanese": "消える",
    "romaji": "kieru",
    "english": "to disappear"
  },
  {
    "japanese": "映画館",
    "romaji": "eigakan",
    "english": "cinema"
  },
  {
    "japanese": "���す",
    "romaji": "isu",
    "english": "chair"
  },
  {
    "japanese": "誕生日",
    "romaji": "tanjōbi",
    "english": "birthday"
  },
  {
    "japanese": "切る",
    "romaji": "kiru",
    "english": "to cut"
  },
  {
    "japanese": "七日",
    "romaji": "nanoka",
    "english": "seven days, the seventh day"
  },
  {
    "japanese": "洗う",
    "romaji": "arau",
    "english": "to wash"
  },
  {
    "japanese": "あれ",
    "romaji": "are",
    "english": "that"
  },
  {
    "japanese": "グラム",
    "romaji": "guramu",
    "english": "gram"
  },
  {
    "japanese": "習う",
    "romaji": "narau",
    "english": "to learn"
  },
  {
    "japanese": "後",
    "romaji": "ato",
    "english": "afterwards"
  },
  {
    "japanese": "猫",
    "romaji": "neko",
    "english": "cat"
  },
  {
    "japanese": "図書館",
    "romaji": "toshokan",
    "english": "library"
  },
  {
    "japanese": "並べる",
    "romaji": "naraberu",
    "english": "to line up, to set up"
  },
  {
    "japanese": "しかし",
    "romaji": "shikashi",
    "english": "however"
  },
  {
    "japanese": "大きい",
    "romaji": "ōkii",
    "english": "big"
  },
  {
    "japanese": "八日",
    "romaji": "yōka",
    "english": "eight days, eighth day of the month"
  },
  {
    "japanese": "歩く",
    "romaji": "aruku",
    "english": "to walk"
  },
  {
    "japanese": "ズボン",
    "romaji": "zubon",
    "english": "trousers"
  },
  {
    "japanese": "九日",
    "romaji": "kokonoka",
    "english": "nine days, ninth day"
  },
  {
    "japanese": "そっち",
    "romaji": "sotchi",
    "english": "over there"
  },
  {
    "japanese": "たて",
    "romaji": "tate",
    "english": "length, height"
  },
  {
    "japanese": "カップ",
    "romaji": "kappu",
    "english": "cup"
  },
  {
    "japanese": "あの",
    "romaji": "ano",
    "english": "that over there"
  },
  {
    "japanese": "頼む",
    "romaji": "tanomu",
    "english": "to ask"
  },
  {
    "japanese": "お兄さん",
    "romaji": "oniisan",
    "english": "(honorable) older brother"
  },
  {
    "japanese": "手",
    "romaji": "te",
    "english": "hand"
  },
  {
    "japanese": "ええ",
    "romaji": "ee",
    "english": "yes"
  },
  {
    "japanese": "毎日",
    "romaji": "mainichi",
    "english": "every day"
  },
  {
    "japanese": "花",
    "romaji": "hana",
    "english": "flower"
  },
  {
    "japanese": "一",
    "romaji": "ichi",
    "english": "one"
  },
  {
    "japanese": "居る",
    "romaji": "iru",
    "english": "to be, to have (used for people and animals)"
  },
  {
    "japanese": "砂糖",
    "romaji": "satō",
    "english": "sugar"
  },
  {
    "japanese": "カレンダー",
    "romaji": "karendā",
    "english": "calendar"
  },
  {
    "japanese": "今",
    "romaji": "ima",
    "english": "now"
  },
  {
    "japanese": "旅行",
    "romaji": "ryokō",
    "english": "travel"
  },
  {
    "japanese": "できる",
    "romaji": "dekiru",
    "english": "to be able to"
  },
  {
    "japanese": "春",
    "romaji": "haru",
    "english": "spring"
  },
  {
    "japanese": "する",
    "romaji": "suru",
    "english": "to do"
  },
  {
    "japanese": "八つ",
    "romaji": "yattsu",
    "english": "eight"
  },
  {
    "japanese": "町",
    "romaji": "machi",
    "english": "town, city"
  },
  {
    "japanese": "渡す",
    "romaji": "watasu",
    "english": "to hand over"
  },
  {
    "japanese": "青",
    "romaji": "ao",
    "english": "blue"
  },
  {
    "japanese": "白",
    "romaji": "shiro",
    "english": "white"
  },
  {
    "japanese": "ある",
    "romaji": "aru",
    "english": "to be, to have (used for inanimate objects)"
  },
  {
    "japanese": "ベッド",
    "romaji": "beddo",
    "english": "bed"
  },
  {
    "japanese": "水",
    "romaji": "mizu",
    "english": "water"
  },
  {
    "japanese": "いくつ",
    "romaji": "ikutsu",
    "english": "how many?, how old?"
  },
  {
    "japanese": "楽しい",
    "romaji": "tanoshii",
    "english": "enjoyable"
  },
  {
    "japanese": "御飯",
    "romaji": "gohan",
    "english": "cooked rice, meal"
  },
  {
    "japanese": "皆さん",
    "romaji": "minasan",
    "english": "everyone"
  },
  {
    "japanese": "おいしい",
    "romaji": "oishii",
    "english": "delicious"
  },
  {
    "japanese": "ペット",
    "romaji": "petto",
    "english": "pet"
  },
  {
    "japanese": "外",
    "romaji": "soto",
    "english": "outside"
  },
  {
    "japanese": "前",
    "romaji": "mae",
    "english": "before"
  },
  {
    "japanese": "来る",
    "romaji": "kuru",
    "english": "to come"
  },
  {
    "japanese": "おもしろい",
    "romaji": "omoshiroi",
    "english": "interesting"
  },
  {
    "japanese": "貸す",
    "romaji": "kasu",
    "english": "to lend"
  },
  {
    "japanese": "早い",
    "romaji": "hayai",
    "english": "early"
  },
  {
    "japanese": "弱い",
    "romaji": "yowai",
    "english": "weak"
  },
  {
    "japanese": "洗濯",
    "romaji": "sentaku",
    "english": "washing"
  },
  {
    "japanese": "九つ",
    "romaji": "kokonotsu",
    "english": "nine"
  },
  {
    "japanese": "来年",
    "romaji": "rainen",
    "english": "next year"
  },
  {
    "japanese": "眼鏡",
    "romaji": "megane",
    "english": "glasses"
  },
  {
    "japanese": "背",
    "romaji": "se",
    "english": "height, stature"
  },
  {
    "japanese": "水曜日",
    "romaji": "suiyōbi",
    "english": "Wednesday"
  },
  {
    "japanese": "お金",
    "romaji": "okane",
    "english": "money"
  },
  {
    "japanese": "同じ",
    "romaji": "onaji",
    "english": "same"
  },
  {
    "japanese": "弾く",
    "romaji": "hiku",
    "english": "to play an instrument with strings, including piano"
  },
  {
    "japanese": "土曜日",
    "romaji": "doyōbi",
    "english": "Saturday"
  },
  {
    "japanese": "階段",
    "romaji": "kaidan",
    "english": "stairs"
  },
  {
    "japanese": "煩い",
    "romaji": "urusai",
    "english": "noisy, annoying"
  },
  {
    "japanese": "半分",
    "romaji": "hanbun",
    "english": "half minute"
  },
  {
    "japanese": "背広",
    "romaji": "sebiro",
    "english": "business suit"
  },
  {
    "japanese": "晴れ",
    "romaji": "hare",
    "english": "clear weather"
  },
  {
    "japanese": "見せる",
    "romaji": "miseru",
    "english": "to show"
  },
  {
    "japanese": "飲み物",
    "romaji": "nomimono",
    "english": "a drink"
  },
  {
    "japanese": "雪",
    "romaji": "yuki",
    "english": "snow"
  },
  {
    "japanese": "買い物",
    "romaji": "kaimono",
    "english": "shopping"
  },
  {
    "japanese": "交差点",
    "romaji": "kōsaten",
    "english": "intersection"
  },
  {
    "japanese": "駅",
    "romaji": "eki",
    "english": "station"
  },
  {
    "japanese": "大丈夫",
    "romaji": "daijōbu",
    "english": "all right"
  },
  {
    "japanese": "ボールペン",
    "romaji": "bōrupen",
    "english": "ball-point pen"
  },
  {
    "japanese": "勉強",
    "romaji": "benkyōsuru",
    "english": "to study"
  },
  {
    "japanese": "兄弟",
    "romaji": "kyōdai",
    "english": "(humble) siblings"
  },
  {
    "japanese": "封筒",
    "romaji": "fūtō",
    "english": "envelope"
  },
  {
    "japanese": "レコード",
    "romaji": "rekōdo",
    "english": "record"
  },
  {
    "japanese": "コーヒー",
    "romaji": "kōhī",
    "english": "coffee"
  },
  {
    "japanese": "漢字",
    "romaji": "kanji",
    "english": "Chinese character"
  },
  {
    "japanese": "喫茶店",
    "romaji": "kissaten",
    "english": "coffee lounge"
  },
  {
    "japanese": "その",
    "romaji": "sono",
    "english": "that"
  },
  {
    "japanese": "子供",
    "romaji": "kodomo",
    "english": "child"
  },
  {
    "japanese": "ちょっと",
    "romaji": "chotto",
    "english": "somewhat"
  },
  {
    "japanese": "女の子",
    "romaji": "onnanoko",
    "english": "girl"
  },
  {
    "japanese": "紙",
    "romaji": "kami",
    "english": "paper"
  },
  {
    "japanese": "字引",
    "romaji": "jibiki",
    "english": "dictionary"
  },
  {
    "japanese": "あさって",
    "romaji": "asatte",
    "english": "day after tomorrow"
  },
  {
    "japanese": "嫌い",
    "romaji": "kirai",
    "english": "hate"
  },
  {
    "japanese": "先",
    "romaji": "saki",
    "english": "the future, previous"
  },
  {
    "japanese": "答える",
    "romaji": "kotaeru",
    "english": "to answer"
  },
  {
    "japanese": "食堂",
    "romaji": "shokudō",
    "english": "dining hall"
  },
  {
    "japanese": "テーブル",
    "romaji": "tēburu",
    "english": "table"
  },
  {
    "japanese": "コピーする",
    "romaji": "kopīsuru",
    "english": "to copy"
  },
  {
    "japanese": "働く",
    "romaji": "hataraku",
    "english": "to work"
  },
  {
    "japanese": "こんな",
    "romaji": "konna",
    "english": "such"
  },
  {
    "japanese": "たくさん",
    "romaji": "takusan",
    "english": "many"
  },
  {
    "japanese": "ドア",
    "romaji": "doa",
    "english": "Western style door"
  },
  {
    "japanese": "見る  観る",
    "romaji": "miru",
    "english": "to see, to watch"
  },
  {
    "japanese": "交番",
    "romaji": "kōban",
    "english": "police box"
  },
  {
    "japanese": "ナイフ",
    "romaji": "naifu",
    "english": "knife"
  },
  {
    "japanese": "辛い",
    "romaji": "karai",
    "english": "spicy"
  },
  {
    "japanese": "洋服",
    "romaji": "yōfuku",
    "english": "western-style clothes"
  },
  {
    "japanese": "晩御飯",
    "romaji": "bangohan",
    "english": "evening meal"
  },
  {
    "japanese": "車",
    "romaji": "kuruma",
    "english": "car, vehicle"
  },
  {
    "japanese": "ちょうど",
    "romaji": "chōdo",
    "english": "exactly"
  },
  {
    "japanese": "もう一度",
    "romaji": "mōichido",
    "english": "again"
  },
  {
    "japanese": "ポスト",
    "romaji": "posuto",
    "english": "post"
  },
  {
    "japanese": "服",
    "romaji": "fuku",
    "english": "clothes"
  },
  {
    "japanese": "メートル",
    "romaji": "mētoru",
    "english": "metre"
  },
  {
    "japanese": "パン",
    "romaji": "pan",
    "english": "bread"
  },
  {
    "japanese": "半",
    "romaji": "han",
    "english": "half"
  },
  {
    "japanese": "若い",
    "romaji": "wakai",
    "english": "young"
  },
  {
    "japanese": "食べる",
    "romaji": "taberu",
    "english": "to eat"
  },
  {
    "japanese": "四日",
    "romaji": "yokka",
    "english": "four days, fouth day of the month"
  },
  {
    "japanese": "警官",
    "romaji": "keikan",
    "english": "policeman"
  },
  {
    "japanese": "伯父 / 叔父",
    "romaji": "ojiisan",
    "english": "grandfather, male senior citizen"
  },
  {
    "japanese": "これ",
    "romaji": "kore",
    "english": "this"
  },
  {
    "japanese": "アパート",
    "romaji": "apāto",
    "english": "apartment"
  },
  {
    "japanese": "鳥",
    "romaji": "tori",
    "english": "bird"
  },
  {
    "japanese": "ここ",
    "romaji": "koko",
    "english": "here"
  },
  {
    "japanese": "方",
    "romaji": "kata",
    "english": "person, way of doing"
  },
  {
    "japanese": "タクシー",
    "romaji": "takushī",
    "english": "taxi"
  },
  {
    "japanese": "では",
    "romaji": "deha",
    "english": "with that..."
  },
  {
    "japanese": "しょうゆ",
    "romaji": "shōyu",
    "english": "soy sauce"
  },
  {
    "japanese": "少ない",
    "romaji": "sukunai",
    "english": "a few"
  },
  {
    "japanese": "白い",
    "romaji": "shiroi",
    "english": "white"
  },
  {
    "japanese": "待つ",
    "romaji": "matsu",
    "english": "to wait"
  },
  {
    "japanese": "次",
    "romaji": "tsugi",
    "english": "next"
  },
  {
    "japanese": "行く",
    "romaji": "iku",
    "english": "to go"
  },
  {
    "japanese": "角",
    "romaji": "kado",
    "english": "a corner"
  },
  {
    "japanese": "男",
    "romaji": "otoko",
    "english": "man"
  },
  {
    "japanese": "ギター",
    "romaji": "gitā",
    "english": "guitar"
  },
  {
    "japanese": "聞く",
    "romaji": "kiku",
    "english": "to hear, to listen to, to ask"
  },
  {
    "japanese": "走る",
    "romaji": "hashiru",
    "english": "to run"
  },
  {
    "japanese": "お母さん",
    "romaji": "okaasan",
    "english": "(honorable) mother"
  },
  {
    "japanese": "意味",
    "romaji": "imi",
    "english": "meaning"
  },
  {
    "japanese": "物",
    "romaji": "mono",
    "english": "thing"
  },
  {
    "japanese": "強い",
    "romaji": "tsuyoi",
    "english": "powerful"
  },
  {
    "japanese": "魚",
    "romaji": "sakana",
    "english": "fish"
  },
  {
    "japanese": "切手",
    "romaji": "kitte",
    "english": "postage stamp"
  },
  {
    "japanese": "暗い",
    "romaji": "kurai",
    "english": "gloomy"
  },
  {
    "japanese": "出る",
    "romaji": "deru",
    "english": "to appear, to leave"
  },
  {
    "japanese": "犬",
    "romaji": "inu",
    "english": "dog"
  },
  {
    "japanese": "女",
    "romaji": "onna",
    "english": "woman"
  },
  {
    "japanese": "飛行機",
    "romaji": "hikōki",
    "english": "aeroplane"
  },
  {
    "japanese": "���曜日",
    "romaji": "nichiyōbi",
    "english": "Sunday"
  },
  {
    "japanese": "より、ほう",
    "romaji": "yori,hō",
    "english": "Used for comparison."
  },
  {
    "japanese": "午前",
    "romaji": "gozen",
    "english": "morning"
  },
  {
    "japanese": "名前",
    "romaji": "namae",
    "english": "name"
  },
  {
    "japanese": "丸い / 円い",
    "romaji": "marui",
    "english": "round, circular"
  },
  {
    "japanese": "曲る",
    "romaji": "magaru",
    "english": "to turn, to bend"
  },
  {
    "japanese": "鼻",
    "romaji": "hana",
    "english": "nose"
  },
  {
    "japanese": "お弁当",
    "romaji": "obentō",
    "english": "boxed lunch"
  },
  {
    "japanese": "コップ",
    "romaji": "koppu",
    "english": "a glass"
  },
  {
    "japanese": "結婚",
    "romaji": "kekkon",
    "english": "marriage"
  },
  {
    "japanese": "置く",
    "romaji": "oku",
    "english": "to put"
  },
  {
    "japanese": "渡る",
    "romaji": "wataru",
    "english": "to go across"
  },
  {
    "japanese": "伯母さん / 叔母さん",
    "romaji": "obasan",
    "english": "aunt"
  },
  {
    "japanese": "それから",
    "romaji": "sorekara",
    "english": "after that"
  },
  {
    "japanese": "明い",
    "romaji": "akarui",
    "english": "bright"
  },
  {
    "japanese": "家庭",
    "romaji": "katei",
    "english": "household"
  },
  {
    "japanese": "パーティー",
    "romaji": "pātī",
    "english": "party"
  },
  {
    "japanese": "あちら",
    "romaji": "achira",
    "english": "there"
  },
  {
    "japanese": "スカート",
    "romaji": "sukāto",
    "english": "skirt"
  },
  {
    "japanese": "靴",
    "romaji": "kutsu",
    "english": "shoes"
  },
  {
    "japanese": "ボタン",
    "romaji": "botan",
    "english": "button"
  },
  {
    "japanese": "今月",
    "romaji": "kongetsu",
    "english": "this month"
  },
  {
    "japanese": "返す",
    "romaji": "kaesu",
    "english": "to return something"
  },
  {
    "japanese": "いかが",
    "romaji": "ikaga",
    "english": "how"
  },
  {
    "japanese": "ストーブ",
    "romaji": "sutōbu",
    "english": "heater"
  },
  {
    "japanese": "二人",
    "romaji": "futari",
    "english": "two people"
  },
  {
    "japanese": "起きる",
    "romaji": "okiru",
    "english": "to get up"
  },
  {
    "japanese": "さあ",
    "romaji": "saa",
    "english": "well…"
  },
  {
    "japanese": "あそこ",
    "romaji": "asoko",
    "english": "over there"
  },
  {
    "japanese": "古い",
    "romaji": "furui",
    "english": "old (not used for people)"
  },
  {
    "japanese": "黄色い",
    "romaji": "kiiroi",
    "english": "yellow"
  },
  {
    "japanese": "まだ",
    "romaji": "mada",
    "english": "yet, still"
  },
  {
    "japanese": "歌う",
    "romaji": "utau",
    "english": "to sing"
  },
  {
    "japanese": "飴",
    "romaji": "ame",
    "english": "candy"
  },
  {
    "japanese": "寝る",
    "romaji": "neru",
    "english": "to go to bed, to sleep"
  },
  {
    "japanese": "それ",
    "romaji": "sore",
    "english": "that"
  },
  {
    "japanese": "質問",
    "romaji": "shitsumon",
    "english": "question"
  },
  {
    "japanese": "どなた",
    "romaji": "donata",
    "english": "who"
  },
  {
    "japanese": "牛乳",
    "romaji": "gyūnyū",
    "english": "milk"
  },
  {
    "japanese": "二",
    "romaji": "ni",
    "english": "two"
  },
  {
    "japanese": "紅茶",
    "romaji": "kōcha",
    "english": "black tea"
  },
  {
    "japanese": "そちら",
    "romaji": "sochira",
    "english": "over there"
  },
  {
    "japanese": "出かける",
    "romaji": "dekakeru",
    "english": "to go out"
  },
  {
    "japanese": "兄",
    "romaji": "ani",
    "english": "(humble) older brother"
  },
  {
    "japanese": "留学生",
    "romaji": "ryūgakusei",
    "english": "overseas student"
  },
  {
    "japanese": "月曜日",
    "romaji": "getsuyōbi",
    "english": "Monday"
  },
  {
    "japanese": "締める",
    "romaji": "shimeru",
    "english": "to tie"
  },
  {
    "japanese": "熱い",
    "romaji": "atsui",
    "english": "hot to the touch"
  },
  {
    "japanese": "郵便局",
    "romaji": "yūbinkyoku",
    "english": "post office"
  },
  {
    "japanese": "細い",
    "romaji": "hosoi",
    "english": "thin"
  },
  {
    "japanese": "六つ",
    "romaji": "muttsu",
    "english": "six"
  },
  {
    "japanese": "本棚",
    "romaji": "hondana",
    "english": "bookshelves"
  },
  {
    "japanese": "結構",
    "romaji": "kekkō",
    "english": "splendid, enough"
  },
  {
    "japanese": "こちら",
    "romaji": "kochira",
    "english": "this person or way"
  },
  {
    "japanese": "昨夜",
    "romaji": "yūbe",
    "english": "last night"
  },
  {
    "japanese": "外国人",
    "romaji": "gaikokujin",
    "english": "foreigner"
  },
  {
    "japanese": "絵",
    "romaji": "e",
    "english": "picture"
  },
  {
    "japanese": "使う",
    "romaji": "tsukau",
    "english": "to use"
  },
  {
    "japanese": "休む",
    "romaji": "yasumu",
    "english": "to rest"
  },
  {
    "japanese": "テスト",
    "romaji": "tesuto",
    "english": "test"
  },
  {
    "japanese": "貼る",
    "romaji": "haru",
    "english": "to stick"
  },
  {
    "japanese": "たばこ",
    "romaji": "tabako",
    "english": "tobacco, cigarettes"
  },
  {
    "japanese": "涼しい",
    "romaji": "suzushii",
    "english": "refreshing"
  },
  {
    "japanese": "昨日",
    "romaji": "kinō",
    "english": "yesterday"
  },
  {
    "japanese": "せっけん",
    "romaji": "sekken",
    "english": "economy"
  },
  {
    "japanese": "初め / 始め",
    "romaji": "hajime",
    "english": "beginning"
  },
  {
    "japanese": "雲",
    "romaji": "kumo",
    "english": "cloud"
  },
  {
    "japanese": "サンドイッチ",
    "romaji": "sandoitchi",
    "english": "sandwich"
  },
  {
    "japanese": "故障",
    "romaji": "koshō-suru",
    "english": "to break-down"
  },
  {
    "japanese": "怖い",
    "romaji": "kowai",
    "english": "frightening"
  },
  {
    "japanese": "エスカレーター",
    "romaji": "esukarētā",
    "english": "escalator"
  },
  {
    "japanese": "運ぶ",
    "romaji": "hakobu",
    "english": "to transport"
  },
  {
    "japanese": "受ける",
    "romaji": "ukeru",
    "english": "to take a lesson or test"
  },
  {
    "japanese": "お嬢さん",
    "romaji": "ojōsan",
    "english": "young lady"
  },
  {
    "japanese": "首",
    "romaji": "kubi",
    "english": "neck"
  },
  {
    "japanese": "市民",
    "romaji": "shimin",
    "english": "citizen"
  },
  {
    "japanese": "付く",
    "romaji": "tsuku",
    "english": "to be attached"
  },
  {
    "japanese": "すく",
    "romaji": "suku",
    "english": "to become empty"
  },
  {
    "japanese": "こと",
    "romaji": "koto",
    "english": "thing, matter"
  },
  {
    "japanese": "訪ねる",
    "romaji": "tazuneru",
    "english": "to visit"
  },
  {
    "japanese": "お祝い",
    "romaji": "oiwai",
    "english": "congratulation"
  },
  {
    "japanese": "一生懸命",
    "romaji": "isshōkenmei",
    "english": "with utmost effort"
  },
  {
    "japanese": "済む",
    "romaji": "sumu",
    "english": "to finish"
  },
  {
    "japanese": "アメリカ",
    "romaji": "amerika",
    "english": "America"
  },
  {
    "japanese": "復習",
    "romaji": "fukushū",
    "english": "revision"
  },
  {
    "japanese": "急",
    "romaji": "kyū",
    "english": "urgent, steep"
  },
  {
    "japanese": "これから",
    "romaji": "korekara",
    "english": "after this"
  },
  {
    "japanese": "指輪",
    "romaji": "yubiwa",
    "english": "finger ring"
  },
  {
    "japanese": "美しい",
    "romaji": "utsukushii",
    "english": "beautiful"
  },
  {
    "japanese": "直る",
    "romaji": "naoru",
    "english": "to be fixed, to be repaired"
  },
  {
    "japanese": "水泳",
    "romaji": "suiei",
    "english": "swimming"
  },
  {
    "japanese": "真中",
    "romaji": "mannaka",
    "english": "middle"
  },
  {
    "japanese": "発音",
    "romaji": "hatsuon",
    "english": "pronunciation"
  },
  {
    "japanese": "手伝う",
    "romaji": "tetsudau",
    "english": "to assist"
  },
  {
    "japanese": "折れる",
    "romaji": "oreru",
    "english": "to break or be folded"
  },
  {
    "japanese": "一度",
    "romaji": "ichido",
    "english": "once"
  },
  {
    "japanese": "高等学校",
    "romaji": "kōtōgakkō",
    "english": "high school"
  },
  {
    "japanese": "アルコール",
    "romaji": "arukōru",
    "english": "alcohol"
  },
  {
    "japanese": "アナウンサー",
    "romaji": "anaunsā",
    "english": "announcer"
  },
  {
    "japanese": "最初",
    "romaji": "saisho",
    "english": "beginning, first"
  },
  {
    "japanese": "投げる",
    "romaji": "nageru",
    "english": "to throw or cast away"
  },
  {
    "japanese": "変える",
    "romaji": "kaeru",
    "english": "to change"
  },
  {
    "japanese": "昼間",
    "romaji": "hiruma",
    "english": "daytime, during the day"
  },
  {
    "japanese": "神社",
    "romaji": "jinja",
    "english": "Shinto shrine"
  },
  {
    "japanese": "食料品",
    "romaji": "shokuryōhin",
    "english": "groceries"
  },
  {
    "japanese": "丁寧",
    "romaji": "teinei",
    "english": "polite"
  },
  {
    "japanese": "規則",
    "romaji": "kisoku",
    "english": "regulations"
  },
  {
    "japanese": "もうすぐ",
    "romaji": "mōsugu",
    "english": "soon"
  },
  {
    "japanese": "絹",
    "romaji": "kinu",
    "english": "silk"
  },
  {
    "japanese": "怒る",
    "romaji": "okoru",
    "english": "to get angry, to be angry"
  },
  {
    "japanese": "用",
    "romaji": "yō",
    "english": "use"
  },
  {
    "japanese": "致す",
    "romaji": "itasu",
    "english": "(humble) to do"
  },
  {
    "japanese": "海岸",
    "romaji": "kaigan",
    "english": "coast"
  },
  {
    "japanese": "経済",
    "romaji": "keizai",
    "english": "finance, economy"
  },
  {
    "japanese": "以上",
    "romaji": "ijō",
    "english": "more than, this is all"
  },
  {
    "japanese": "掛ける",
    "romaji": "kakeru",
    "english": "to hang something"
  },
  {
    "japanese": "届ける",
    "romaji": "todokeru",
    "english": "to reach"
  },
  {
    "japanese": "適当",
    "romaji": "tekitō",
    "english": "suitability"
  },
  {
    "japanese": "祖父",
    "romaji": "sofu",
    "english": "grandfather"
  },
  {
    "japanese": "研究室",
    "romaji": "kenkyūshitsu",
    "english": "study room, laboratory"
  },
  {
    "japanese": "文学",
    "romaji": "bungaku",
    "english": "literature"
  },
  {
    "japanese": "生きる",
    "romaji": "ikiru",
    "english": "to live"
  },
  {
    "japanese": "それほど",
    "romaji": "sorehodo",
    "english": "to that extent"
  },
  {
    "japanese": "うまい",
    "romaji": "umai",
    "english": "delicious"
  },
  {
    "japanese": "ずいぶん",
    "romaji": "zuibun",
    "english": "extremely"
  },
  {
    "japanese": "お・金持ち",
    "romaji": "kanemochi / okanemochi",
    "english": "rich man"
  },
  {
    "japanese": "続く",
    "romaji": "tsuzuku",
    "english": "to be continued"
  },
  {
    "japanese": "受付",
    "romaji": "uketsuke",
    "english": "receipt"
  },
  {
    "japanese": "代わり",
    "romaji": "kawari",
    "english": "substitute, alternate"
  },
  {
    "japanese": "残る",
    "romaji": "nokoru",
    "english": "to remain"
  },
  {
    "japanese": "世話",
    "romaji": "sewa-suru",
    "english": "to look after"
  },
  {
    "japanese": "スーツケース",
    "romaji": "sūtsukēsu",
    "english": "suitcase"
  },
  {
    "japanese": "くれる",
    "romaji": "kureru",
    "english": "to give"
  },
  {
    "japanese": "会話",
    "romaji": "kaiwa",
    "english": "conversation"
  },
  {
    "japanese": "向かう",
    "romaji": "mukau",
    "english": "to face"
  },
  {
    "japanese": "増える",
    "romaji": "fueru",
    "english": "to increase"
  },
  {
    "japanese": "紹介",
    "romaji": "shōkai",
    "english": "introduction"
  },
  {
    "japanese": "だから",
    "romaji": "dakara",
    "english": "so, therefore"
  },
  {
    "japanese": "季節",
    "romaji": "kisetsu",
    "english": "season"
  },
  {
    "japanese": "そんなに",
    "romaji": "sonnani",
    "english": "so much, like that"
  },
  {
    "japanese": "このあいだ",
    "romaji": "konoaida",
    "english": "the other day, recently"
  },
  {
    "japanese": "虫",
    "romaji": "mushi",
    "english": "insect"
  },
  {
    "japanese": "祖母",
    "romaji": "sobo",
    "english": "grandmother"
  },
  {
    "japanese": "いらっしゃる",
    "romaji": "irassharu",
    "english": "(respectful) to be, to come or to go"
  },
  {
    "japanese": "変",
    "romaji": "hen",
    "english": "strange"
  },
  {
    "japanese": "ぶどう",
    "romaji": "budō",
    "english": "grapes"
  },
  {
    "japanese": "直す",
    "romaji": "naosu",
    "english": "to fix, to repair"
  },
  {
    "japanese": "世界",
    "romaji": "sekai",
    "english": "the world"
  },
  {
    "japanese": "食事",
    "romaji": "shokuji-suru",
    "english": "to have a meal"
  },
  {
    "japanese": "うそ",
    "romaji": "uso",
    "english": "a lie"
  },
  {
    "japanese": "合う",
    "romaji": "au",
    "english": "to match"
  },
  {
    "japanese": "小鳥",
    "romaji": "kotori",
    "english": "small bird"
  },
  {
    "japanese": "電報",
    "romaji": "denpō",
    "english": "telegram"
  },
  {
    "japanese": "星",
    "romaji": "hoshi",
    "english": "star"
  },
  {
    "japanese": "申す",
    "romaji": "mōsu",
    "english": "(humble) to be called, to say"
  },
  {
    "japanese": "失敗",
    "romaji": "shippai",
    "english": "failure, mistake"
  },
  {
    "japanese": "汽車",
    "romaji": "kisha",
    "english": "steam train"
  },
  {
    "japanese": "下宿",
    "romaji": "geshuku",
    "english": "lodging"
  },
  {
    "japanese": "思う",
    "romaji": "omō",
    "english": "to think, to feel"
  },
  {
    "japanese": "機会",
    "romaji": "kikai",
    "english": "opportunity"
  },
  {
    "japanese": "皆",
    "romaji": "mina",
    "english": "everybody"
  },
  {
    "japanese": "苦い",
    "romaji": "nigai",
    "english": "bitter"
  },
  {
    "japanese": "特に",
    "romaji": "tokuni",
    "english": "particularly, especially"
  },
  {
    "japanese": "乾く",
    "romaji": "kawaku",
    "english": "to get dry"
  },
  {
    "japanese": "葉",
    "romaji": "ha",
    "english": "leaf"
  },
  {
    "japanese": "かっこう",
    "romaji": "kakkō",
    "english": "appearance"
  },
  {
    "japanese": "昼休み",
    "romaji": "hiruyasumi",
    "english": "noon break"
  },
  {
    "japanese": "以下",
    "romaji": "ika",
    "english": "less than"
  },
  {
    "japanese": "彼ら",
    "romaji": "karera",
    "english": "they"
  },
  {
    "japanese": "寄る",
    "romaji": "yoru",
    "english": "to visit"
  },
  {
    "japanese": "字",
    "romaji": "ji",
    "english": "character"
  },
  {
    "japanese": "厳しい",
    "romaji": "kibishii",
    "english": "strict"
  },
  {
    "japanese": "優しい",
    "romaji": "yasashii",
    "english": "kind"
  },
  {
    "japanese": "たいてい",
    "romaji": "taitei",
    "english": "usually"
  },
  {
    "japanese": "花見",
    "romaji": "hanami",
    "english": "cherry-blossom viewing"
  },
  {
    "japanese": "注射",
    "romaji": "chūsha",
    "english": "injection"
  },
  {
    "japanese": "大分",
    "romaji": "daibu",
    "english": "greatly"
  },
  {
    "japanese": "ベル",
    "romaji": "beru",
    "english": "bell"
  },
  {
    "japanese": "景色",
    "romaji": "keshiki",
    "english": "scene, landscape"
  },
  {
    "japanese": "しかる",
    "romaji": "shikaru",
    "english": "a particular"
  },
  {
    "japanese": "日記",
    "romaji": "nikki",
    "english": "journal"
  },
  {
    "japanese": "お礼",
    "romaji": "orei",
    "english": "expression of gratitude"
  },
  {
    "japanese": "集る",
    "romaji": "atsumaru",
    "english": "to gather"
  },
  {
    "japanese": "大体",
    "romaji": "daitai",
    "english": "generally"
  },
  {
    "japanese": "なるほど",
    "romaji": "naruhodo",
    "english": "now I understand"
  },
  {
    "japanese": "公務員",
    "romaji": "kōmuin",
    "english": "government worker"
  },
  {
    "japanese": "警察",
    "romaji": "keisatsu",
    "english": "police"
  },
  {
    "japanese": "空気",
    "romaji": "kūki",
    "english": "air, atmosphere"
  },
  {
    "japanese": "周り",
    "romaji": "mawari",
    "english": "surroundings"
  },
  {
    "japanese": "汚れる",
    "romaji": "yogoreru",
    "english": "to get dirty"
  },
  {
    "japanese": "約束",
    "romaji": "yakusoku",
    "english": "promise"
  },
  {
    "japanese": "砂",
    "romaji": "suna",
    "english": "sand"
  },
  {
    "japanese": "笑う",
    "romaji": "warau",
    "english": "to laugh, to smile"
  },
  {
    "japanese": "しっかり",
    "romaji": "shikkari",
    "english": "firmly, steadily"
  },
  {
    "japanese": "住所",
    "romaji": "jūsho",
    "english": "an address, a residence"
  },
  {
    "japanese": "すり",
    "romaji": "suri",
    "english": "pickpocket"
  },
  {
    "japanese": "注意",
    "romaji": "chūi",
    "english": "caution"
  },
  {
    "japanese": "仕方",
    "romaji": "shikata",
    "english": "method"
  },
  {
    "japanese": "無理",
    "romaji": "muri",
    "english": "impossible"
  },
  {
    "japanese": "触る",
    "romaji": "sawaru",
    "english": "to touch"
  },
  {
    "japanese": "押し入れ",
    "romaji": "oshiire",
    "english": "closet"
  },
  {
    "japanese": "さ来月",
    "romaji": "saraigetsu",
    "english": "the month after next"
  },
  {
    "japanese": "ビル",
    "romaji": "biru",
    "english": "building or bill"
  },
  {
    "japanese": "歯医者",
    "romaji": "haisha",
    "english": "dentist"
  },
  {
    "japanese": "知らせる",
    "romaji": "shiraseru",
    "english": "to notify"
  },
  {
    "japanese": "点",
    "romaji": "ten",
    "english": "point, dot"
  },
  {
    "japanese": "予定",
    "romaji": "yotei",
    "english": "arrangement"
  },
  {
    "japanese": "火事",
    "romaji": "kaji",
    "english": "fire"
  },
  {
    "japanese": "出席",
    "romaji": "shusseki-suru",
    "english": "to attend"
  },
  {
    "japanese": "壁",
    "romaji": "kabe",
    "english": "wall"
  },
  {
    "japanese": "植える",
    "romaji": "ueru",
    "english": "to plant, to grow"
  },
  {
    "japanese": "生産",
    "romaji": "seisan-suru",
    "english": "to produce"
  },
  {
    "japanese": "法律",
    "romaji": "hōritsu",
    "english": "law"
  },
  {
    "japanese": "見つかる",
    "romaji": "mitsukaru",
    "english": "to be discovered"
  },
  {
    "japanese": "港",
    "romaji": "minato",
    "english": "harbour"
  },
  {
    "japanese": "連れる",
    "romaji": "tsureru",
    "english": "to lead"
  },
  {
    "japanese": "見つける",
    "romaji": "mitsukeru",
    "english": "to discover"
  },
  {
    "japanese": "辞典",
    "romaji": "jiten",
    "english": "dictionary"
  },
  {
    "japanese": "乗り換える",
    "romaji": "norikaeru",
    "english": "to change between buses or trains"
  },
  {
    "japanese": "役に立つ",
    "romaji": "yakunitatsu",
    "english": "to be helpful"
  },
  {
    "japanese": "写す",
    "romaji": "utsusu",
    "english": "to copy or photograph"
  },
  {
    "japanese": "理由",
    "romaji": "riyū",
    "english": "reason"
  },
  {
    "japanese": "たまに",
    "romaji": "tamani",
    "english": "occasionally"
  },
  {
    "japanese": "プレゼント",
    "romaji": "purezento",
    "english": "present"
  },
  {
    "japanese": "いっぱい",
    "romaji": "ippai",
    "english": "full"
  },
  {
    "japanese": "運動",
    "romaji": "undō-suru",
    "english": "to exercise"
  },
  {
    "japanese": "見える",
    "romaji": "mieru",
    "english": "to be in sight"
  },
  {
    "japanese": "申し上げる",
    "romaji": "mōshiageru",
    "english": "(humble) to say, to tell"
  },
  {
    "japanese": "冷える",
    "romaji": "hieru",
    "english": "to grow cold"
  },
  {
    "japanese": "痩せる",
    "romaji": "yaseru",
    "english": "to become thin"
  },
  {
    "japanese": "屋上",
    "romaji": "okujō",
    "english": "rooftop"
  },
  {
    "japanese": "ステレオ",
    "romaji": "sutereo",
    "english": "stereo"
  },
  {
    "japanese": "そう",
    "romaji": "sō",
    "english": "really"
  },
  {
    "japanese": "お土産",
    "romaji": "omiyage",
    "english": "souvenir"
  },
  {
    "japanese": "泥棒",
    "romaji": "dorobō",
    "english": "thief"
  },
  {
    "japanese": "お祭り",
    "romaji": "omatsuri",
    "english": "festival"
  },
  {
    "japanese": "浅い",
    "romaji": "asai",
    "english": "shallow, superficial"
  },
  {
    "japanese": "お見舞い",
    "romaji": "omimai",
    "english": "calling on someone who is ill, enquiry"
  },
  {
    "japanese": "アルバイト",
    "romaji": "arubaito",
    "english": "part-time job"
  },
  {
    "japanese": "おつり",
    "romaji": "otsuri",
    "english": "change from purchase, balance"
  },
  {
    "japanese": "輸入",
    "romaji": "yunyū-suru",
    "english": "to import"
  },
  {
    "japanese": "人口",
    "romaji": "jinkō",
    "english": "population"
  },
  {
    "japanese": "興味",
    "romaji": "kyōmi",
    "english": "an interest"
  },
  {
    "japanese": "時代",
    "romaji": "jidai",
    "english": "era"
  },
  {
    "japanese": "特急",
    "romaji": "tokkyū",
    "english": "limited express train (faster than an express train)"
  },
  {
    "japanese": "腕",
    "romaji": "ude",
    "english": "arm"
  },
  {
    "japanese": "気分",
    "romaji": "kibun",
    "english": "mood"
  },
  {
    "japanese": "上る",
    "romaji": "agaru",
    "english": "to rise"
  },
  {
    "japanese": "いただく",
    "romaji": "itadaku",
    "english": "(humble) to receive"
  },
  {
    "japanese": "泊まる",
    "romaji": "tomaru",
    "english": "to lodge at"
  },
  {
    "japanese": "盗む",
    "romaji": "nusumu",
    "english": "to steal"
  },
  {
    "japanese": "ひげ",
    "romaji": "hige",
    "english": "beard"
  },
  {
    "japanese": "坂",
    "romaji": "saka",
    "english": "slope, hill"
  },
  {
    "japanese": "よろしい",
    "romaji": "yoroshii",
    "english": "(respectful) OK, all right"
  },
  {
    "japanese": "技術",
    "romaji": "gijutsu",
    "english": "art, technology, skill"
  },
  {
    "japanese": "為",
    "romaji": "tame",
    "english": "in order to"
  },
  {
    "japanese": "小説",
    "romaji": "shōsetsu",
    "english": "novel"
  },
  {
    "japanese": "調べる",
    "romaji": "shiraberu",
    "english": "to investigate"
  },
  {
    "japanese": "趣味",
    "romaji": "shumi",
    "english": "hobby"
  },
  {
    "japanese": "運転手",
    "romaji": "untenshu",
    "english": "driver"
  },
  {
    "japanese": "深い",
    "romaji": "fukai",
    "english": "deep"
  },
  {
    "japanese": "林",
    "romaji": "hayashi",
    "english": "woods, forester"
  },
  {
    "japanese": "小学校",
    "romaji": "shōgakkō",
    "english": "elementary school"
  },
  {
    "japanese": "まず",
    "romaji": "mazu",
    "english": "first of all"
  },
  {
    "japanese": "気持ち",
    "romaji": "kimochi",
    "english": "feeling, mood"
  },
  {
    "japanese": "思い出す",
    "romaji": "omoidasu",
    "english": "to remember"
  },
  {
    "japanese": "留守",
    "romaji": "rusu",
    "english": "absence"
  },
  {
    "japanese": "続ける",
    "romaji": "tsuzukeru",
    "english": "to continue"
  },
  {
    "japanese": "草",
    "romaji": "kusa",
    "english": "grass"
  },
  {
    "japanese": "途中",
    "romaji": "tochū",
    "english": "on the way"
  },
  {
    "japanese": "できるだけ",
    "romaji": "dekirudake",
    "english": "as much as possible"
  },
  {
    "japanese": "お宅",
    "romaji": "otaku",
    "english": "(polite) your house"
  },
  {
    "japanese": "召し上がる",
    "romaji": "meshiagaru",
    "english": "(polite) to eat"
  },
  {
    "japanese": "悲しい",
    "romaji": "kanashii",
    "english": "sad"
  },
  {
    "japanese": "子",
    "romaji": "ko",
    "english": "child"
  },
  {
    "japanese": "運転",
    "romaji": "unten-suru",
    "english": "to drive"
  },
  {
    "japanese": "はっきり",
    "romaji": "hakkiri",
    "english": "clearly"
  },
  {
    "japanese": "折る",
    "romaji": "oru",
    "english": "to break or to fold"
  },
  {
    "japanese": "今度",
    "romaji": "kondo",
    "english": "now, next time"
  },
  {
    "japanese": "アフリカ",
    "romaji": "afurika",
    "english": "Africa"
  },
  {
    "japanese": "壊れる",
    "romaji": "kowareru",
    "english": "to be broken"
  },
  {
    "japanese": "番組",
    "romaji": "bangumi",
    "english": "television or radio program"
  },
  {
    "japanese": "捕まえる",
    "romaji": "tsukamaeru",
    "english": "to seize"
  },
  {
    "japanese": "タイプ",
    "romaji": "taipu",
    "english": "type, style"
  },
  {
    "japanese": "毛",
    "romaji": "ke",
    "english": "hair or fur"
  },
  {
    "japanese": "落る",
    "romaji": "ochiru",
    "english": "to fall or drop"
  },
  {
    "japanese": "場合",
    "romaji": "baai",
    "english": "situation"
  },
  {
    "japanese": "意見",
    "romaji": "iken",
    "english": "opinion"
  },
  {
    "japanese": "通る",
    "romaji": "tōru",
    "english": "to go through"
  },
  {
    "japanese": "着物",
    "romaji": "kimono",
    "english": "kimono"
  },
  {
    "japanese": "森",
    "romaji": "mori",
    "english": "forest"
  },
  {
    "japanese": "市",
    "romaji": "shi",
    "english": "city"
  },
  {
    "japanese": "ほど",
    "romaji": "hodo",
    "english": "extent"
  },
  {
    "japanese": "入院",
    "romaji": "nyūin-suru",
    "english": "to hospitalise"
  },
  {
    "japanese": "カーテン",
    "romaji": "kāten",
    "english": "curtain"
  },
  {
    "japanese": "動く",
    "romaji": "ugoku",
    "english": "to move"
  },
  {
    "japanese": "ぜひ",
    "romaji": "zehi",
    "english": "without fail"
  },
  {
    "japanese": "すばらしい",
    "romaji": "subarashii",
    "english": "wonderful"
  },
  {
    "japanese": "参る",
    "romaji": "mairu",
    "english": "(humble) to go, to come"
  },
  {
    "japanese": "ねっしん",
    "romaji": "nesshin",
    "english": "enthusiasm"
  },
  {
    "japanese": "講堂",
    "romaji": "kōdō",
    "english": "auditorium"
  },
  {
    "japanese": "もし",
    "romaji": "moshi",
    "english": "if"
  },
  {
    "japanese": "ぬれる",
    "romaji": "nureru",
    "english": "to get wet"
  },
  {
    "japanese": "非常に",
    "romaji": "hijōni",
    "english": "extremely"
  },
  {
    "japanese": "文法",
    "romaji": "bunpō",
    "english": "grammar"
  },
  {
    "japanese": "表",
    "romaji": "omote",
    "english": "the front"
  },
  {
    "japanese": "おっしゃる",
    "romaji": "ossharu",
    "english": "(respectful) to say"
  },
  {
    "japanese": "西洋",
    "romaji": "seiyō",
    "english": "western countries"
  },
  {
    "japanese": "両方",
    "romaji": "ryōhō",
    "english": "both sides"
  },
  {
    "japanese": "払う",
    "romaji": "harau",
    "english": "to pay"
  },
  {
    "japanese": "地理",
    "romaji": "chiri",
    "english": "geography"
  },
  {
    "japanese": "あかちゃん",
    "romaji": "akachan",
    "english": "infant"
  },
  {
    "japanese": "似る",
    "romaji": "niru",
    "english": "to be similar"
  },
  {
    "japanese": "踊る",
    "romaji": "odoru",
    "english": "to dance"
  },
  {
    "japanese": "うれしい",
    "romaji": "ureshii",
    "english": "glad"
  },
  {
    "japanese": "事故",
    "romaji": "jiko",
    "english": "accident"
  },
  {
    "japanese": "さっき",
    "romaji": "sakki",
    "english": "some time ago"
  },
  {
    "japanese": "赤ん坊",
    "romaji": "akanbō",
    "english": "baby"
  },
  {
    "japanese": "寂しい",
    "romaji": "sabishii",
    "english": "lonely"
  },
  {
    "japanese": "複雑",
    "romaji": "fukuzatsu",
    "english": "complexity, complication"
  },
  {
    "japanese": "眠る",
    "romaji": "nemuru",
    "english": "to sleep"
  },
  {
    "japanese": "近所",
    "romaji": "kinjo",
    "english": "neighbourhood"
  },
  {
    "japanese": "ごみ",
    "romaji": "gomi",
    "english": "rubbish"
  },
  {
    "japanese": "例えば",
    "romaji": "tatoeba",
    "english": "for example"
  },
  {
    "japanese": "チェック・する",
    "romaji": "chekku-suru",
    "english": "to check"
  },
  {
    "japanese": "御主人",
    "romaji": "goshujin",
    "english": "(honorable) your husband"
  },
  {
    "japanese": "テキスト",
    "romaji": "tekisuto",
    "english": "text, text book"
  },
  {
    "japanese": "ごちそう",
    "romaji": "gochisō",
    "english": "a feast"
  },
  {
    "japanese": "起す",
    "romaji": "okosu",
    "english": "to wake"
  },
  {
    "japanese": "テニス",
    "romaji": "tenisu",
    "english": "tennis"
  },
  {
    "japanese": "パソコン",
    "romaji": "pasokon",
    "english": "personal computer"
  },
  {
    "japanese": "研究",
    "romaji": "kenkyū",
    "english": "research"
  },
  {
    "japanese": "聞こえる",
    "romaji": "kikoeru",
    "english": "to be heard"
  },
  {
    "japanese": "間違える",
    "romaji": "machigaeru",
    "english": "to make a mistake"
  },
  {
    "japanese": "看護婦",
    "romaji": "kangofu",
    "english": "female nurse"
  },
  {
    "japanese": "会議室",
    "romaji": "kaigishitsu",
    "english": "meeting room"
  },
  {
    "japanese": "とこや",
    "romaji": "tokoya",
    "english": "barber"
  },
  {
    "japanese": "試合",
    "romaji": "shiai",
    "english": "match, game"
  },
  {
    "japanese": "止む",
    "romaji": "yamu",
    "english": "to stop"
  },
  {
    "japanese": "のど",
    "romaji": "nodo",
    "english": "throat"
  },
  {
    "japanese": "戦争",
    "romaji": "sensō",
    "english": "war"
  },
  {
    "japanese": "降り出す",
    "romaji": "furidasu",
    "english": "to start to rain"
  },
  {
    "japanese": "コンピュータ / コンピューター",
    "romaji": "konpyūta / konpyūtā",
    "english": "computer"
  },
  {
    "japanese": "盛ん",
    "romaji": "sakan",
    "english": "popularity, prosperous"
  },
  {
    "japanese": "取り替える",
    "romaji": "torikaeru",
    "english": "to exchange"
  },
  {
    "japanese": "支度",
    "romaji": "shitaku-suru",
    "english": "to prepare"
  },
  {
    "japanese": "社会",
    "romaji": "shakai",
    "english": "society, public"
  },
  {
    "japanese": "沸く",
    "romaji": "waku",
    "english": "to boil, to grow hot, to get excited"
  },
  {
    "japanese": "ちっとも",
    "romaji": "chittomo",
    "english": "not at all (used with a negative verb)"
  },
  {
    "japanese": "おかげ",
    "romaji": "okage",
    "english": "owing to"
  },
  {
    "japanese": "ステーキ",
    "romaji": "sutēki",
    "english": "steak"
  },
  {
    "japanese": "消しゴム",
    "romaji": "keshigomu",
    "english": "eraser"
  },
  {
    "japanese": "遠慮",
    "romaji": "enryo-suru",
    "english": "to be reserved, to be restrained"
  },
  {
    "japanese": "工場",
    "romaji": "kōjō",
    "english": "factory"
  },
  {
    "japanese": "僕",
    "romaji": "boku",
    "english": "I (used by males)"
  },
  {
    "japanese": "招待",
    "romaji": "shōtai-suru",
    "english": "to invite"
  },
  {
    "japanese": "彼",
    "romaji": "kare",
    "english": "he, boyfriend"
  },
  {
    "japanese": "妻",
    "romaji": "tsuma",
    "english": "(humble) wife"
  },
  {
    "japanese": "石",
    "romaji": "ishi",
    "english": "stone"
  },
  {
    "japanese": "簡単",
    "romaji": "kantan",
    "english": "simple"
  },
  {
    "japanese": "残念",
    "romaji": "zannen",
    "english": "disappointment"
  },
  {
    "japanese": "血",
    "romaji": "chi",
    "english": "blood"
  },
  {
    "japanese": "ピアノ",
    "romaji": "piano",
    "english": "piano"
  },
  {
    "japanese": "おかしい",
    "romaji": "okashii",
    "english": "strange or funny"
  },
  {
    "japanese": "家内",
    "romaji": "kanai",
    "english": "housewife"
  },
  {
    "japanese": "試験",
    "romaji": "shiken",
    "english": "examination"
  },
  {
    "japanese": "布団",
    "romaji": "futon",
    "english": "Japanese bedding, futon"
  },
  {
    "japanese": "枝",
    "romaji": "eda",
    "english": "branch, twig"
  },
  {
    "japanese": "二階建て",
    "romaji": "nikaidate",
    "english": "two storied"
  },
  {
    "japanese": "大学生",
    "romaji": "daigakusei",
    "english": "university student"
  },
  {
    "japanese": "楽む",
    "romaji": "tanoshimu",
    "english": "to enjoy oneself"
  },
  {
    "japanese": "遠く",
    "romaji": "tōku",
    "english": "distant"
  },
  {
    "japanese": "今夜",
    "romaji": "kon'ya",
    "english": "tonight"
  },
  {
    "japanese": "決める",
    "romaji": "kimeru",
    "english": "to decide"
  },
  {
    "japanese": "なるべく",
    "romaji": "narubeku",
    "english": "as much as possible"
  },
  {
    "japanese": "引き出す",
    "romaji": "hikidasu",
    "english": "to withdraw"
  },
  {
    "japanese": "明日",
    "romaji": "asu",
    "english": "tomorrow"
  },
  {
    "japanese": "割れる",
    "romaji": "wareru",
    "english": "to break"
  },
  {
    "japanese": "田舎",
    "romaji": "inaka",
    "english": "countryside"
  },
  {
    "japanese": "寺",
    "romaji": "tera",
    "english": "temple"
  },
  {
    "japanese": "釣る",
    "romaji": "tsuru",
    "english": "to fish"
  },
  {
    "japanese": "建てる",
    "romaji": "tateru",
    "english": "to build"
  },
  {
    "japanese": "久しぶり",
    "romaji": "hisashiburi",
    "english": "after a long time"
  },
  {
    "japanese": "男性",
    "romaji": "dansei",
    "english": "male"
  },
  {
    "japanese": "割合",
    "romaji": "wariai",
    "english": "rate, ratio, percentage"
  },
  {
    "japanese": "相談",
    "romaji": "sōdan-suru",
    "english": "to discuss"
  },
  {
    "japanese": "足す",
    "romaji": "tasu",
    "english": "to add a number"
  },
  {
    "japanese": "社長",
    "romaji": "shachō",
    "english": "company president"
  },
  {
    "japanese": "経験",
    "romaji": "keiken-suru",
    "english": "to experience"
  },
  {
    "japanese": "訳",
    "romaji": "wake",
    "english": "meaning, reason"
  },
  {
    "japanese": "足りる",
    "romaji": "tariru",
    "english": "to be enough"
  },
  {
    "japanese": "味噌",
    "romaji": "miso",
    "english": "bean paste"
  },
  {
    "japanese": "もらう",
    "romaji": "morau",
    "english": "to receive"
  },
  {
    "japanese": "どんどん",
    "romaji": "dondon",
    "english": "more and more"
  },
  {
    "japanese": "工業",
    "romaji": "kōgyō",
    "english": "the manufacturing industry"
  },
  {
    "japanese": "終わり",
    "romaji": "owari",
    "english": "the end"
  },
  {
    "japanese": "いじめる",
    "romaji": "ijimeru",
    "english": "to tease"
  },
  {
    "japanese": "立てる",
    "romaji": "tateru",
    "english": "to stand something up"
  },
  {
    "japanese": "歴史",
    "romaji": "rekishi",
    "english": "history"
  },
  {
    "japanese": "おいでになる",
    "romaji": "oideninaru",
    "english": "(respectful) to be"
  },
  {
    "japanese": "うち",
    "romaji": "uchi",
    "english": "within"
  },
  {
    "japanese": "それで",
    "romaji": "sorede",
    "english": "because of that"
  },
  {
    "japanese": "ワープロ",
    "romaji": "wāpuro",
    "english": "word processor"
  },
  {
    "japanese": "漫画",
    "romaji": "manga",
    "english": "comic"
  }
];

const trainData = [
  { japanese: 'まもなく、1番線に、電車が参ります。', romaji: 'Mamonaku, ichibansen ni, densha ga mairimasu.', english: 'The train will soon arrive at track 1.' },
  { japanese: '危ないですから、黄色い点字ブロックの内側までお下がりください。', romaji: 'Abunai desu kara, kiiroi tenji burokku no uchigawa made osagari kudasai.', english: 'For your safety, please stand behind the yellow tactile paving.' },
  { japanese: 'この電車は、秋葉原、上野方面、山手線内回りです。', romaji: 'Kono densha wa, Akihabara, Ueno houmen, Yamanotesen uchimawari desu.', english: 'This train is for Akihabara and Ueno, on the Yamanote Line inner circle.' },
  { japanese: '次は、東京、東京です。', romaji: 'Tsugi wa, Toukyou, Toukyou desu.', english: 'The next station is Tokyo, Tokyo.' },
  { japanese: 'お出口は右側です。', romaji: 'Odeguchi wa migigawa desu.', english: 'The doors on the right side will open.' },
  { japanese: '新幹線、東海道線、横須賀線はお乗り換えです。', romaji: 'Shinkansen, Toukaidousen, Yokosukasen wa onorikae desu.', english: 'Please change here for the Shinkansen, Tokaido Line, and Yokosuka Line.' },
  { japanese: 'ドアが閉まります。ご注意ください。', romaji: 'Doa ga shimarimasu. Gochuui kudasai.', english: 'The doors are closing. Please be careful.' },
  { japanese: '無理なご乗車はおやめください。', romaji: 'Muri na gojousha wa oyame kudasai.', english: 'Please do not rush onto the train.' },
  { japanese: '本日も、JR東日本をご利用くださいまして、ありがとうございます。', romaji: 'Honjitsu mo, Jei-aaru Higashi-Nihon o goriyou kudasaimashite, arigatou gozaimasu.', english: 'Thank you for traveling with JR East today.' },
  { japanese: '車内では、携帯電話をマナーモードに設定の上、通話はお控えください。', romaji: 'Shanai dewa, keitaidenwa o manaamoodo ni settei no ue, tsuuwa wa ohikae kudasai.', english: 'Please set your mobile phone to silent mode and refrain from talking on the phone.' }
];
