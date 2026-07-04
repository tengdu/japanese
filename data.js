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
  { japanese: 'こんにちは', romaji: 'Konnichiwa', english: 'Hello / Good afternoon' },
  { japanese: 'ありがとう', romaji: 'Arigatou', english: 'Thank you' },
  { japanese: 'さようなら', romaji: 'Sayounara', english: 'Goodbye' },
  { japanese: 'はい', romaji: 'Hai', english: 'Yes' },
  { japanese: 'いいえ', romaji: 'Iie', english: 'No' },
  { japanese: 'すみません', romaji: 'Sumimasen', english: 'Excuse me / I am sorry' },
  { japanese: 'おねがいします', romaji: 'Onegaishimasu', english: 'Please' },
  { japanese: 'おいしい', romaji: 'Oishii', english: 'Delicious' },
  { japanese: 'かわいい', romaji: 'Kawaii', english: 'Cute' },
  { japanese: 'すごい', romaji: 'Sugoi', english: 'Amazing / Great' }
];
