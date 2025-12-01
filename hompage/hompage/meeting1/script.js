// ==========================================
// 🟢 VOCABULARY DATA - 10 Words (Reduced to 4 options & 9 clues)
// ==========================================
const vocabularyData = [
    {
        word: "coral",
        clues: [
            "It's a hard substance found in warm ocean waters",
            "It forms from the skeletons of tiny sea animals",
            "It creates important ecosystems called reefs",
            "It comes in many bright colors like pink, orange, and purple",
            "Fish and marine creatures live among these structures",
            "It grows very slowly over many years",
            "The Great Barrier Reef is made of this material",
            "Divers and snorkelers love to explore these underwater formations",
            "It provides protection for coastlines from waves and storms"
        ],
        options: ["seaweed", "coral", "shell", "sponge"],
        imagePath: "./images/coral.jpg",
        audioPath: "./audio/coral.mp3",
        definition: "A hard substance formed from the skeletons of very small sea animals, often forming reefs in warm seas.",
        definitionId: "Terumbu karang - struktur keras yang terbentuk dari kerangka hewan laut kecil."
    },
    {
        word: "ecosystem",
        clues: [
            "It's a community of living organisms in their environment",
            "It includes plants, animals, and their surroundings working together",
            "The ocean has many different types of these",
            "Coral reefs are one example of this in the sea",
            "Scientists study how organisms interact within this",
            "It can be damaged by pollution and climate change",
            "Conservation efforts aim to protect these natural systems",
            "It maintains balance through food chains and energy flow",
            "Understanding this helps us protect ocean biodiversity"
        ],
        options: ["habitat", "ecosystem", "community", "biome"],
        imagePath: "./images/ecosystem.jpg",
        audioPath: "./audio/ecosystem.mp3",
        definition: "A biological community of interacting organisms and their physical environment.",
        definitionId: "Ekosistem - komunitas biologis dari organisme yang berinteraksi dengan lingkungan fisik mereka."
    },
    {
        word: "pollution",
        clues: [
            "It's the introduction of harmful substances into the environment",
            "Plastic waste in the ocean is a major form of this",
            "It damages marine ecosystems and kills sea life",
            "Oil spills are a severe type of this problem",
            "It can make water unsafe for swimming and drinking",
            "Human activities are the main cause of this issue",
            "Beach clean-ups help reduce this in coastal areas",
            "It affects the health of both animals and humans",
            "International laws try to control and reduce this problem"
        ],
        options: ["conservation", "pollution", "erosion", "contamination"],
        imagePath: "./images/pollution.jpg",
        audioPath: "./audio/pollution.mp3",
        definition: "The presence or introduction into the environment of substances or things that are harmful or poisonous.",
        definitionId: "Polusi - kehadiran atau masuknya zat berbahaya ke lingkungan yang merusak."
    },
    {
        word: "anchor",
        clues: [
            "It's a heavy metal object used on boats and ships",
            "Sailors drop this to the seabed to prevent drifting",
            "It keeps vessels in place when they're not moving",
            "It has hooks or flukes that grip the ocean floor",
            "Lian uses this tool when helping clean the ocean",
            "It's connected to the boat with a strong chain or rope",
            "Raising this means the boat is ready to depart",
            "Different sizes exist depending on the vessel's weight",
            "It's a common symbol representing sailors and the sea"
        ],
        options: ["sail", "anchor", "rudder", "buoy"],
        imagePath: "./images/anchor.jpg",
        audioPath: "./audio/anchor.mp3",
        definition: "A heavy metal object attached to a rope or chain, dropped from a boat to keep it in one place.",
        definitionId: "Jangkar - benda logam berat yang dijatuhkan dari kapal untuk menahan kapal tetap di tempatnya."
    },
    {
        word: "sailor",
        clues: [
            "This person works on boats or ships",
            "They navigate across oceans and seas",
            "Lian is training to become one of these",
            "They need to understand wind, waves, and tides",
            "Navigation tools like compasses are essential for this job",
            "They may work on cargo ships, fishing boats, or naval vessels",
            "This profession has existed for thousands of years",
            "They wear special uniforms and follow maritime traditions",
            "They face challenges like storms and long voyages"
        ],
        options: ["fisherman", "sailor", "captain", "diver"],
        imagePath: "./images/sailor.jpg",
        audioPath: "./audio/sailor.mp3",
        definition: "A person who works on a ship or boat as a member of the crew.",
        definitionId: "Pelaut - orang yang bekerja di kapal sebagai anggota kru."
    },
    {
        word: "shipwreck",
        clues: [
            "It's what remains when a vessel sinks or is destroyed",
            "These can be found on the seabed around the world",
            "Marine archaeologists study these underwater sites",
            "Storms, collisions, or accidents can cause this",
            "Fish and sea creatures often make homes in these structures",
            "Divers explore these sunken vessels",
            "Some famous examples include the Titanic",
            "They can be dangerous for other boats to navigate around",
            "They become artificial reefs over time"
        ],
        options: ["harbor", "shipwreck", "lighthouse", "dock"],
        imagePath: "./images/shipwreck.jpg",
        audioPath: "./audio/shipwreck.mp3",
        definition: "The destruction of a ship at sea by sinking or breaking up.",
        definitionId: "Bangkai kapal - kehancuran kapal di laut karena tenggelam atau rusak."
    },
    {
        word: "conservation",
        clues: [
            "It's the practice of protecting nature and wildlife",
            "Mira calls a group that specializes in this work",
            "It involves preserving ocean ecosystems",
            "Marine biologists often work in this field",
            "It includes activities like beach clean-ups",
            "The goal is to protect endangered species",
            "National parks and marine reserves practice this",
            "Education helps people understand the importance of this",
            "Sustainable fishing supports this effort"
        ],
        options: ["destruction", "conservation", "pollution", "development"],
        imagePath: "./images/conservation.jpg",
        audioPath: "./audio/conservation.mp3",
        definition: "The protection of plants, animals, and natural resources.",
        definitionId: "Konservasi - perlindungan tumbuhan, hewan, dan sumber daya alam."
    },
    {
        word: "debris",
        clues: [
            "It refers to scattered pieces of waste or remains",
            "In the ocean, this often includes plastic and trash",
            "The sea turtle in the story gets stuck in this",
            "It can be dangerous for marine animals",
            "Beach clean-ups focus on removing this",
            "It accumulates in ocean currents forming large patches",
            "After storms, beaches are often covered with this",
            "It includes broken objects and discarded materials",
            "Reducing this helps protect ocean life"
        ],
        options: ["treasure", "debris", "coral", "seaweed"],
        imagePath: "./images/debris.jpg",
        audioPath: "./audio/debris.mp3",
        definition: "Scattered pieces of waste or remains; trash or rubbish.",
        definitionId: "Puing/sampah - potongan-potongan sampah atau sisa yang berserakan."
    },
    {
        word: "jellyfish",
        clues: [
            "It's a marine animal with a soft, transparent body",
            "It has long tentacles that can sting",
            "It drifts with ocean currents rather than swimming actively",
            "Some species glow in the dark (bioluminescence)",
            "It's mostly made of water (about 95%)",
            "Turtles often eat these as their main food",
            "It comes in many sizes from tiny to several meters",
            "Its sting can be painful or even dangerous to humans",
            "Some types are beautiful but should not be touched"
        ],
        options: ["octopus", "jellyfish", "squid", "starfish"],
        imagePath: "./images/jellyfish.jpg",
        audioPath: "./audio/jellyfish.mp3",
        definition: "A sea creature with a soft, transparent body and long tentacles that can sting.",
        definitionId: "Ubur-ubur - makhluk laut dengan tubuh lunak transparan dan tentakel panjang yang bisa menyengat."
    },
    {
        word: "seaweed",
        clues: [
            "It's a type of plant that grows in the ocean",
            "It can be green, brown, or red in color",
            "It provides food and shelter for marine animals",
            "Humans harvest and eat certain types of this",
            "Kelp is a large, fast-growing type of this",
            "It grows attached to rocks or floating freely",
            "It plays an important role in marine ecosystems",
            "It produces oxygen through photosynthesis",
            "Forests of this provide habitat for many sea creatures"
        ],
        options: ["coral", "seaweed", "moss", "algae"],
        imagePath: "./images/seaweed.jpg",
        audioPath: "./audio/seaweed.mp3",
        definition: "Large algae growing in the sea or on rocks below the high-water mark.",
        definitionId: "Rumput laut - alga besar yang tumbuh di laut atau di bebatuan."
    }
];

// ==========================================
// 🟢 GAME STATE
// ==========================================
let originalOrder = [];
let currentCardIndex = 0;
let currentClueSet = 0; // Track which set of 3 clues we're showing (0, 1, or 2)
let selectedAnswer = null;
let isCorrect = null;
let showResult = false;
let score = 0;
let wrongAnswers = [];
let playbackSpeed = 1.0;
let attempts = 0; // Track number of attempts

// ==========================================
// 🟢 DOM ELEMENTS
// ==========================================
const currentCardEl = document.getElementById('currentCard');
const totalCardsEl = document.getElementById('totalCards');
const scoreEl = document.getElementById('score');
const totalScoreEl = document.getElementById('totalScore');
const progressFillEl = document.getElementById('progressFill');
const vocabularyImageEl = document.getElementById('vocabularyImage');
const imagePlaceholderEl = document.getElementById('imagePlaceholder');
const imagePathEl = document.getElementById('imagePath');
const cluesListEl = document.getElementById('cluesList');
const showMoreBtn = document.getElementById('showMoreBtn');
const clueProgressEl = document.getElementById('clueProgress');
const flipCardEl = document.getElementById('flipCard');
const optionsSectionEl = document.getElementById('optionsSection');
const optionsGridEl = document.getElementById('optionsGrid');
const resultSectionEl = document.getElementById('resultSection');
const resultMessageEl = document.getElementById('resultMessage');
const definitionTextEl = document.getElementById('definitionText');
const definitionIndonesianEl = document.getElementById('definitionIndonesian');
const pronunciationTextEl = document.getElementById('pronunciationText');
const playAudioBtn = document.getElementById('playAudioBtn');
const slowSpeedBtn = document.getElementById('slowSpeedBtn');
const normalSpeedBtn = document.getElementById('normalSpeedBtn');
const vocabularyAudioEl = document.getElementById('vocabularyAudio');
const audioPathEl = document.getElementById('audioPath');
const nextBtn = document.getElementById('nextBtn');
const nextBtnText = document.getElementById('nextBtnText');
const gameCardEl = document.getElementById('gameCard');
const completionScreenEl = document.getElementById('completionScreen');
const finalScoreEl = document.getElementById('finalScore');
const completionProgressFillEl = document.getElementById('completionProgressFill');
const completionMessageEl = document.getElementById('completionMessage');
const reviewSectionEl = document.getElementById('reviewSection');
const reviewListEl = document.getElementById('reviewList');
const reviewBtn = document.getElementById('reviewBtn');
const restartBtn = document.getElementById('restartBtn');

// ==========================================
// 🟢 SHUFFLE FUNCTION
// ==========================================
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ==========================================
// 🟢 INITIALIZE GAME
// ==========================================
function initGame() {
    // Shuffle vocabulary order
    originalOrder = shuffleArray(vocabularyData.map((_, index) => index));
    
    totalCardsEl.textContent = vocabularyData.length;
    totalScoreEl.textContent = vocabularyData.length;
    loadCard();
}

// ==========================================
// 🟢 LOAD CURRENT CARD
// ==========================================
function loadCard() {
    const actualIndex = originalOrder[currentCardIndex];
    const currentCard = vocabularyData[actualIndex];
    
    // Hide Next button at start
    nextBtn.style.display = 'none';
    
    // Update header
    currentCardEl.textContent = currentCardIndex + 1;
    scoreEl.textContent = score;
    
    // Update progress bar
    const progress = (currentCardIndex / vocabularyData.length) * 100;
    progressFillEl.style.width = progress + '%';
    
    // Set themed background
    const cardContainer = document.getElementById('gameCard');
    cardContainer.setAttribute('data-theme', currentCard.word);
    
    // Update image
    imagePathEl.textContent = currentCard.imagePath;
    vocabularyImageEl.src = currentCard.imagePath;
    vocabularyImageEl.alt = currentCard.word;
    
    vocabularyImageEl.onerror = function() {
        vocabularyImageEl.style.display = 'none';
        imagePlaceholderEl.style.display = 'block';
    };
    
    vocabularyImageEl.onload = function() {
        vocabularyImageEl.style.display = 'block';
        imagePlaceholderEl.style.display = 'none';
    };
    
    // Update audio
    vocabularyAudioEl.src = currentCard.audioPath;
    vocabularyAudioEl.playbackRate = playbackSpeed;
    audioPathEl.textContent = 'Audio file: ' + currentCard.audioPath;
    
    // Update pronunciation text in result section
    pronunciationTextEl.textContent = currentCard.word;
    definitionTextEl.textContent = currentCard.definition;
    definitionIndonesianEl.textContent = currentCard.definitionId;
    
    // Update next button text
    if (currentCardIndex < vocabularyData.length - 1) {
        nextBtnText.textContent = 'Next Card';
    } else {
        nextBtnText.textContent = 'Finish';
    }
    
    // Reset state
    currentClueSet = 0;
    selectedAnswer = null;
    isCorrect = null;
    showResult = false;
    attempts = 0;
    
    // Reset flip card - IMPORTANT: Reset before loading content
    flipCardEl.classList.remove('flipped');
    
    // Load clues and options AFTER reset
    setTimeout(() => {
        loadClues();
        loadOptions();
    }, 100);
}

// ==========================================
// 🟢 LOAD CLUES (3 at a time with rolling transition)
// ==========================================
function loadClues() {
    const actualIndex = originalOrder[currentCardIndex];
    const currentCard = vocabularyData[actualIndex];
    cluesListEl.innerHTML = '';
    
    // Show 3 clues at a time
    const startIdx = currentClueSet * 3;
    const endIdx = Math.min(startIdx + 3, currentCard.clues.length);
    
    for (let i = startIdx; i < endIdx; i++) {
        const clueDiv = document.createElement('div');
        clueDiv.className = 'clue-item';
        clueDiv.innerHTML = `<p><span class="clue-number">${i + 1}.</span> ${currentCard.clues[i]}</p>`;
        cluesListEl.appendChild(clueDiv);
    }
    
    // Show "Next Clues" button if more clues available
    if (endIdx < currentCard.clues.length && !showResult) {
        showMoreBtn.style.display = 'block';
        clueProgressEl.textContent = `${currentClueSet + 1}/3`;
    } else {
        showMoreBtn.style.display = 'none';
    }
}

// ==========================================
// 🟢 LOAD OPTIONS
// ==========================================
function loadOptions() {
    const actualIndex = originalOrder[currentCardIndex];
    const currentCard = vocabularyData[actualIndex];
    optionsGridEl.innerHTML = '';
    
    currentCard.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => handleAnswerSelect(option);
        optionsGridEl.appendChild(button);
    });
}

// ==========================================
// 🟢 SHOW MORE CLUES (Roll to next set)
// ==========================================
showMoreBtn.addEventListener('click', () => {
    const actualIndex = originalOrder[currentCardIndex];
    const currentCard = vocabularyData[actualIndex];
    
    // Move to next set of clues (max 3 sets = 9 clues)
    if ((currentClueSet + 1) * 3 < currentCard.clues.length) {
        currentClueSet++;
        
        // Add rolling animation
        cluesListEl.style.opacity = '0';
        cluesListEl.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            loadClues();
            cluesListEl.style.opacity = '1';
            cluesListEl.style.transform = 'translateY(0)';
        }, 300);
    }
});

// ==========================================
// 🟢 HANDLE ANSWER SELECTION
// ==========================================
function handleAnswerSelect(answer) {
    if (showResult) return;
    
    const actualIndex = originalOrder[currentCardIndex];
    const currentCard = vocabularyData[actualIndex];
    selectedAnswer = answer;
    isCorrect = answer === currentCard.word;
    attempts++;
    
    if (isCorrect) {
        // Only count score on first attempt
        if (attempts === 1) {
            score++;
            scoreEl.textContent = score;
        }
        showResult = true;
        
        // Mark correct answer
        const buttons = optionsGridEl.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.disabled = true;
            
            if (btn.textContent === currentCard.word) {
                btn.classList.add('correct');
                btn.innerHTML = btn.textContent + '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            }
        });
        
        // Show Next button
        nextBtn.style.display = 'flex';
        
        // Flip card after a short delay
        setTimeout(() => {
            flipCardEl.classList.add('flipped');
            showResultSection();
        }, 600);
        
    } else {
        // Mark wrong answer and make it disappear
        const buttons = optionsGridEl.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            if (btn.textContent === selectedAnswer) {
                btn.classList.add('incorrect');
                btn.innerHTML = btn.textContent + '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
                
                // After animation, hide it
                setTimeout(() => {
                    btn.classList.add('disabled');
                }, 800);
            }
        });
        
        // Track wrong answer on first attempt
        if (attempts === 1) {
            wrongAnswers.push({
                word: currentCard.word,
                userAnswer: answer
            });
        }
    }
}

// ==========================================
// 🟢 SHOW RESULT SECTION
// ==========================================
function showResultSection() {
    const actualIndex = originalOrder[currentCardIndex];
    const currentCard = vocabularyData[actualIndex];
    
    const resultIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    const resultTitle = 'Correct! 🎉';
    
    resultMessageEl.className = 'result-message correct';
    resultMessageEl.innerHTML = `
        <div class="result-header correct">
            ${resultIcon}
            <h3>${resultTitle}</h3>
        </div>
        <p class="result-answer">The answer is: <span class="result-answer-word">${currentCard.word}</span></p>
    `;
    
    // Show definition
    definitionTextEl.textContent = currentCard.definition;
    definitionIndonesianEl.textContent = currentCard.definitionId;
    
    // Update pronunciation text
    pronunciationTextEl.textContent = currentCard.word;
    
    // Update next button text
    if (currentCardIndex < vocabularyData.length - 1) {
        nextBtnText.textContent = 'Next Card';
    } else {
        nextBtnText.textContent = 'Finish';
    }
    
    showMoreBtn.style.display = 'none';
}

// ==========================================
// 🟢 AUDIO CONTROLS
// ==========================================
playAudioBtn.addEventListener('click', () => {
    vocabularyAudioEl.playbackRate = playbackSpeed;
    vocabularyAudioEl.play();
});

slowSpeedBtn.addEventListener('click', () => {
    playbackSpeed = 0.75;
    vocabularyAudioEl.playbackRate = playbackSpeed;
    slowSpeedBtn.classList.add('active');
    normalSpeedBtn.classList.remove('active');
});

normalSpeedBtn.addEventListener('click', () => {
    playbackSpeed = 1.0;
    vocabularyAudioEl.playbackRate = playbackSpeed;
    normalSpeedBtn.classList.add('active');
    slowSpeedBtn.classList.remove('active');
});

// ==========================================
// 🟢 NEXT CARD
// ==========================================
nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    console.log('✅ Next button clicked!');
    console.log('Current:', currentCardIndex, 'Total:', vocabularyData.length);
    
    if (currentCardIndex < vocabularyData.length - 1) {
        currentCardIndex++;
        
        console.log('➡️ Moving to card:', currentCardIndex + 1);
        
        // Reset flip card first
        flipCardEl.classList.remove('flipped');
        
        // Small delay before loading new card
        setTimeout(() => {
            loadCard();
        }, 400);
    } else {
        console.log('🏁 Showing completion screen');
        showCompletionScreen();
    }
});

// ==========================================
// 🟢 SHOW COMPLETION SCREEN
// ==========================================
function showCompletionScreen() {
    gameCardEl.style.display = 'none';
    completionScreenEl.style.display = 'block';
    
    finalScoreEl.textContent = score + '/' + vocabularyData.length;
    
    const percentage = (score / vocabularyData.length) * 100;
    completionProgressFillEl.style.width = percentage + '%';
    
    let message = '';
    if (score === vocabularyData.length) {
        message = "Perfect! You're an ocean vocabulary expert! 🌊";
    } else if (score >= vocabularyData.length * 0.7) {
        message = "Great job! Keep practicing! 🐠";
    } else {
        message = "Good effort! Try again to improve! 🚢";
    }
    completionMessageEl.textContent = message;
    
    // Show review section if there are wrong answers
    if (wrongAnswers.length > 0) {
        reviewSectionEl.style.display = 'block';
        reviewListEl.innerHTML = '';
        
        wrongAnswers.forEach(item => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.textContent = `❌ ${item.word} (You answered: ${item.userAnswer})`;
            reviewListEl.appendChild(reviewItem);
        });
    }
}

// ==========================================
// 🟢 REVIEW WRONG ANSWERS
// ==========================================
reviewBtn.addEventListener('click', () => {
    // Reset and show only wrong answers
    const wrongIndices = wrongAnswers.map(item => {
        return vocabularyData.findIndex(vocab => vocab.word === item.word);
    });
    
    originalOrder = wrongIndices;
    currentCardIndex = 0;
    score = 0;
    wrongAnswers = [];
    
    gameCardEl.style.display = 'grid';
    completionScreenEl.style.display = 'none';
    
    totalCardsEl.textContent = originalOrder.length;
    totalScoreEl.textContent = originalOrder.length;
    
    loadCard();
});

// ==========================================
// 🟢 RESTART GAME
// ==========================================
restartBtn.addEventListener('click', () => {
    currentCardIndex = 0;
    score = 0;
    wrongAnswers = [];
    
    originalOrder = shuffleArray(vocabularyData.map((_, index) => index));
    
    gameCardEl.style.display = 'grid';
    completionScreenEl.style.display = 'none';
    
    totalCardsEl.textContent = vocabularyData.length;
    totalScoreEl.textContent = vocabularyData.length;
    
    loadCard();
});

// ==========================================
// 🟢 START THE GAME
// ==========================================
initGame();