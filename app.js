document.addEventListener('DOMContentLoaded', () => {
  
  // --- Voice Initialization ---
  let preferredVoice = null;
  const loadVoices = () => {
    const voices = speechSynthesis.getVoices();
    const jpVoices = voices.filter(v => v.lang === 'ja-JP' || v.lang === 'ja_JP');
    if (jpVoices.length > 0) {
      preferredVoice = jpVoices.find(v => v.name.includes('Kyoko') || v.name.includes('Google')) || jpVoices[0];
    }
  };
  speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices(); // Initial call

  const playAudio = (text) => {
    if (!text) return;
    
    // Try using Google's free TTS API for a high-quality voice
    const url = `https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=ja&q=${encodeURIComponent(text)}`;
    const audio = new Audio(url);
    
    audio.play().catch(e => {
      // Fallback to browser's native offline TTS if network or playback fails
      console.warn("Cloud TTS failed, falling back to native TTS", e);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.75;
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }
      speechSynthesis.speak(utterance);
    });
  };

  // --- Navigation Logic ---
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.view');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(n => n.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));
      
      item.classList.add('active');
      const targetView = document.getElementById(`view-${item.dataset.view}`);
      targetView.classList.add('active');
    });
  });

  // --- Home Logic ---
  document.getElementById('btn-start-daily').addEventListener('click', () => {
    navItems[1].click();
  });

  // --- Kana Trainer Logic ---
  const kanaGrid = document.getElementById('kana-grid-container');
  const kanaTitle = document.getElementById('kana-title');
  const btnHiragana = document.getElementById('btn-hiragana');
  const btnKatakana = document.getElementById('btn-katakana');
  
  let selectedKanaIndex = 0;

  const updateKanaFocus = (newIndex) => {
    const cards = kanaGrid.querySelectorAll('.kana-card');
    if (cards.length === 0) return;
    
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= cards.length) newIndex = cards.length - 1;

    cards.forEach(c => c.classList.remove('focused'));
    
    selectedKanaIndex = newIndex;
    const targetCard = cards[selectedKanaIndex];
    if (targetCard && !targetCard.classList.contains('empty')) {
      targetCard.classList.add('focused');
      // Scroll into view if it's out of viewport bounds
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const moveFocus = (step) => {
    const cards = kanaGrid.querySelectorAll('.kana-card');
    if (cards.length === 0) return;
    
    let nextIndex = selectedKanaIndex + step;
    
    // Skip empty cells
    while (nextIndex >= 0 && nextIndex < cards.length && cards[nextIndex].classList.contains('empty')) {
      nextIndex += step;
    }

    if (nextIndex >= 0 && nextIndex < cards.length && !cards[nextIndex].classList.contains('empty')) {
      if (selectedKanaIndex !== nextIndex) {
        updateKanaFocus(nextIndex);
        
        // Auto-play audio when navigating to a new card
        const kanaText = cards[nextIndex].querySelector('.kana-char').textContent;
        playAudio(kanaText);
      }
    }
  };

  // Keyboard Event Listener
  document.addEventListener('keydown', (e) => {
    const kanaViewActive = document.getElementById('view-kana').classList.contains('active');
    if (!kanaViewActive) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      moveFocus(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      moveFocus(-1);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveFocus(5);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveFocus(-5);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const cards = kanaGrid.querySelectorAll('.kana-card');
      const targetCard = cards[selectedKanaIndex];
      if (targetCard && !targetCard.classList.contains('empty')) {
        targetCard.click();
        targetCard.classList.add('active-press');
        setTimeout(() => targetCard.classList.remove('active-press'), 150);
      }
    }
  });

  const renderKana = (data) => {
    kanaGrid.innerHTML = ''; // clear grid
    data.forEach((item, index) => {
      const card = document.createElement('div');
      if (item.kana === '') {
        card.className = 'kana-card empty';
      } else {
        card.className = 'kana-card';
        card.innerHTML = `
          <div class="kana-char">${item.kana}</div>
          <div class="kana-romaji">${item.romaji}</div>
        `;
        card.addEventListener('click', () => {
          updateKanaFocus(index);
          playAudio(item.kana);
        });
      }
      kanaGrid.appendChild(card);
    });

    // Reset focus to the first valid card
    selectedKanaIndex = 0;
    while(selectedKanaIndex < data.length && data[selectedKanaIndex].kana === '') {
      selectedKanaIndex++;
    }
    setTimeout(() => updateKanaFocus(selectedKanaIndex), 50);
  };

  // Initial render (Hiragana)
  renderKana(hiraganaData);

  // Toggles
  btnHiragana.addEventListener('click', () => {
    btnHiragana.classList.add('btn-primary');
    btnHiragana.classList.remove('btn-secondary');
    btnKatakana.classList.remove('btn-primary');
    btnKatakana.classList.add('btn-secondary');
    kanaTitle.textContent = 'Hiragana Chart (ひらがな)';
    renderKana(hiraganaData);
  });

  btnKatakana.addEventListener('click', () => {
    btnKatakana.classList.add('btn-primary');
    btnKatakana.classList.remove('btn-secondary');
    btnHiragana.classList.remove('btn-primary');
    btnHiragana.classList.add('btn-secondary');
    kanaTitle.textContent = 'Katakana Chart (カタカナ)';
    renderKana(katakanaData);
  });

  // --- Flashcard Logic ---
  let currentCardIndex = 0;
  const flashcardElement = document.getElementById('flashcard');
  const jpText = document.getElementById('fc-jp');
  const enText = document.getElementById('fc-en');
  const romajiText = document.getElementById('fc-romaji');
  const btnPlayVocab = document.getElementById('btn-play-vocab');
  
  const updateCard = () => {
    flashcardElement.classList.remove('flipped');
    setTimeout(() => {
      const cardData = vocabData[currentCardIndex];
      jpText.textContent = cardData.japanese;
      enText.textContent = cardData.english;
      romajiText.textContent = cardData.romaji;
    }, 150);
  };
  
  let cardHistory = [];
  let historyIndex = -1;

  const getRandomIndex = () => Math.floor(Math.random() * vocabData.length);

  const loadRandomCard = () => {
    const nextIndex = getRandomIndex();
    cardHistory.push(nextIndex);
    historyIndex = cardHistory.length - 1;
    currentCardIndex = nextIndex;
    updateCard();
  };

  const loadPrevCard = () => {
    if (historyIndex > 0) {
      historyIndex--;
      currentCardIndex = cardHistory[historyIndex];
      updateCard();
    }
  };

  const loadNextCard = () => {
    if (historyIndex < cardHistory.length - 1) {
      historyIndex++;
      currentCardIndex = cardHistory[historyIndex];
      updateCard();
    } else {
      loadRandomCard();
    }
  };

  // Initialize first card
  loadRandomCard();
  
  flashcardElement.addEventListener('click', (e) => {
    if (e.target.closest('#btn-play-vocab')) return;
    flashcardElement.classList.toggle('flipped');
  });

  btnPlayVocab.addEventListener('click', (e) => {
    e.stopPropagation();
    playAudio(vocabData[currentCardIndex].japanese);
  });
  
  document.getElementById('btn-next').addEventListener('click', loadNextCard);
  document.getElementById('btn-prev').addEventListener('click', loadPrevCard);

  // --- Train Announcements Logic ---
  const trainContainer = document.getElementById('train-container');
  const renderTrainData = () => {
    trainContainer.innerHTML = '';
    trainData.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'train-row';
      row.innerHTML = `
        <div class="train-content">
          <div class="train-jp">${item.japanese}</div>
          <div class="train-romaji">${item.romaji}</div>
          <div class="train-en">${item.english}</div>
        </div>
        <button class="btn-icon train-play-btn" title="Play Pronunciation">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
        </button>
      `;
      row.addEventListener('click', () => {
        playAudio(item.japanese);
      });
      trainContainer.appendChild(row);
    });
  };
  
  if (trainContainer) {
    renderTrainData();
  }

  // --- Dictionary Rendering Logic (N5 & N4) ---
  const renderDictionary = (dataArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Group by first letter of romaji
    const groups = {};
    dataArray.forEach(item => {
      if (!item.romaji) return;
      const firstLetter = item.romaji.charAt(0).toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(item);
    });

    const sortedLetters = Object.keys(groups).sort();
    
    container.innerHTML = '';
    
    sortedLetters.forEach(letter => {
      // Group Wrapper
      const groupDiv = document.createElement('div');
      groupDiv.className = 'dict-group';
      
      // Group Header
      const header = document.createElement('div');
      header.className = 'dict-group-header';
      header.textContent = letter;
      groupDiv.appendChild(header);
      
      // Grid for cards
      const grid = document.createElement('div');
      grid.className = 'dict-grid';
      
      groups[letter].forEach(item => {
        const card = document.createElement('div');
        card.className = 'dict-card';
        card.innerHTML = `
          <div>
            <div class="dict-jp">${item.japanese}</div>
            <div class="dict-romaji">${item.romaji}</div>
            <div class="dict-en">${item.english}</div>
          </div>
          <button class="btn-icon" title="Play Pronunciation">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
          </button>
        `;
        
        card.addEventListener('click', () => {
          playAudio(item.japanese);
        });
        
        grid.appendChild(card);
      });
      
      groupDiv.appendChild(grid);
      container.appendChild(groupDiv);
    });
  };

  if (typeof n5VocabData !== 'undefined') renderDictionary(n5VocabData, 'dict-n5-container');
  if (typeof n4VocabData !== 'undefined') renderDictionary(n4VocabData, 'dict-n4-container');

});
