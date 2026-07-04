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
  // Greetings & Basics
  { japanese: 'おはようございます', romaji: 'Ohayou gozaimasu', english: 'Good morning' },
  { japanese: 'こんにちは', romaji: 'Konnichiwa', english: 'Hello / Good afternoon' },
  { japanese: 'こんばんは', romaji: 'Konbanwa', english: 'Good evening' },
  { japanese: 'おやすみなさい', romaji: 'Oyasuminasai', english: 'Good night' },
  { japanese: 'ありがとう', romaji: 'Arigatou', english: 'Thank you' },
  { japanese: 'ありがとうございます', romaji: 'Arigatou gozaimasu', english: 'Thank you very much' },
  { japanese: 'どういたしまして', romaji: 'Douitashimashite', english: 'You are welcome' },
  { japanese: 'すみません', romaji: 'Sumimasen', english: 'Excuse me / I am sorry' },
  { japanese: 'ごめんなさい', romaji: 'Gomen nasai', english: 'I am sorry' },
  { japanese: 'はい', romaji: 'Hai', english: 'Yes' },
  { japanese: 'いいえ', romaji: 'Iie', english: 'No' },
  { japanese: 'おねがいします', romaji: 'Onegaishimasu', english: 'Please' },
  
  // Daily Expressions
  { japanese: 'いただきます', romaji: 'Itadakimasu', english: 'Let\'s eat (before eating)' },
  { japanese: 'ごちそうさまでした', romaji: 'Gochisousama deshita', english: 'Thank you for the meal' },
  { japanese: 'いってきます', romaji: 'Ittekimasu', english: 'I am leaving' },
  { japanese: 'いってらっしゃい', romaji: 'Itterasshai', english: 'Have a good trip / Take care' },
  { japanese: 'ただいま', romaji: 'Tadaima', english: 'I am home' },
  { japanese: 'おかえりなさい', romaji: 'Okaerinasai', english: 'Welcome home' },
  { japanese: 'おつかれさまでした', romaji: 'Otsukaresama deshita', english: 'Good work today' },
  
  // Useful Phrases
  { japanese: 'わかりません', romaji: 'Wakarimasen', english: 'I do not understand' },
  { japanese: 'わかりました', romaji: 'Wakarimashita', english: 'I understand' },
  { japanese: 'もう一度お願いします', romaji: 'Mou ichido onegaishimasu', english: 'One more time, please' },
  { japanese: 'ゆっくり話してください', romaji: 'Yukkuri hanashite kudasai', english: 'Please speak slowly' },
  { japanese: '英語が話せますか', romaji: 'Eigo ga hanasemasu ka', english: 'Can you speak English?' },
  { japanese: 'ちょっと待ってください', romaji: 'Chotto matte kudasai', english: 'Please wait a moment' },
  { japanese: 'いくらですか', romaji: 'Ikura desu ka', english: 'How much is it?' },
  { japanese: 'これをください', romaji: 'Kore o kudasai', english: 'I will take this one, please' },
  { japanese: 'トイレはどこですか', romaji: 'Toire wa doko desu ka', english: 'Where is the restroom?' },
  { japanese: '助けてください', romaji: 'Tasukete kudasai', english: 'Please help me' },
  { japanese: '大丈夫です', romaji: 'Daijoubu desu', english: 'It is okay / I am fine' },
  
  // Adjectives
  { japanese: 'おいしい', romaji: 'Oishii', english: 'Delicious' },
  { japanese: 'かわいい', romaji: 'Kawaii', english: 'Cute' },
  { japanese: 'すごい', romaji: 'Sugoi', english: 'Amazing / Great' },
  { japanese: 'やばい', romaji: 'Yabai', english: 'Crazy / Awesome / Oh no' },
  { japanese: 'かっこいい', romaji: 'Kakkoii', english: 'Cool / Handsome' },
  { japanese: 'きれい', romaji: 'Kirei', english: 'Beautiful / Clean' }
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
