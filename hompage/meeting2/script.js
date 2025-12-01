// Slide data configuration
const slides = [
    {
        id: 1,
        image: 'slide1.png',
        hasActivity: false
    },
    {
        id: 2,
        image: 'slide2.png',
        hasActivity: true,
        instruction: 'Complete the dialogue!',
        dialogues: [
            {
                label: 'Lian says:',
                words: ['Mira', 'do', 'you', 'see', 'that', 'There\'s', 'plastic', 'waste', 'floating', 'near', 'the', 'rising', 'tide'],
                distractors: ['beautiful', 'clean'],
                target: 'Mira, do you see that? There\'s plastic waste floating near the rising tide.'
            },
            {
                label: 'Mira responds:',
                words: ['Oh', 'no', 'that\'s', 'terrible', 'We', 'should', 'clean', 'it', 'up'],
                distractors: ['very', 'scary', 'beautiful'],
                target: 'Oh no, that\'s terrible! We should clean it up.'
            }
        ]
    },
    {
        id: 3,
        image: 'slide3.png',
        hasActivity: true,
        instruction: 'Complete Mira\'s response!',
        dialogues: [
            {
                label: 'Mira responds:',
                words: ['This', 'is', 'so', 'sad', 'and', 'heartbreaking'],
                distractors: ['beautiful', 'nice', 'happy', 'good'],
                target: 'This is so sad and heartbreaking.'
            }
        ]
    },
    {
        id: 4,
        image: 'slide4.png',
        hasActivity: false
    },
    {
        id: 5,
        image: 'slide5.png',
        hasActivity: true,
        instruction: 'Complete Mira\'s response!',
        dialogues: [
            {
                label: 'Mira responds:',
                words: ['We\'re', 'on', 'our', 'way', 'Stay', 'there'],
                distractors: ['off', 'leave', 'go', 'run'],
                target: 'We\'re on our way. Stay there!'
            }
        ]
    },
    {
        id: 6,
        image: 'slide6.png',
        hasActivity: true,
        instruction: 'Complete Mira\'s response!',
        dialogues: [
            {
                label: 'Mira responds:',
                words: ['You\'re', 'welcome', 'I\'m', 'happy', 'to', 'help'],
                distractors: ['sad', 'tired', 'sorry', 'angry'],
                target: 'You\'re welcome! I\'m happy to help.'
            }
        ]
    },
    {
        id: 7,
        image: 'slide7.png',
        hasActivity: true,
        instruction: 'Complete Lian\'s response!',
        dialogues: [
            {
                label: 'Lian responds:',
                words: ['Yes', 'let\'s', 'always', 'keep', 'our', 'ocean', 'clean', 'and', 'safe'],
                distractors: ['never', 'dirty', 'polluted', 'destroy'],
                target: 'Yes, let\'s always keep our ocean clean and safe.'
            }
        ]
    }
];

let currentSlideIndex = 0;
let draggedElement = null;

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Initialize all slides
function initializeSlides() {
    const container = document.getElementById('slideContainer');
    container.innerHTML = '';

    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `slide ${index === 0 ? 'active' : ''}`;
        slideDiv.id = `slide${slide.id}`;

        let content = '';

        if (slide.hasActivity) {
            // Layout with 2 columns: Activity LEFT, Image RIGHT
            content += `
                <div class="activity-column">
                    <div class="activity-section">
                        <h3 class="activity-title">📝 Speaking Activity</h3>
                        <p class="instructions">${slide.instruction}</p>`;
            
            // Create separate word bank and drop zone for each dialogue
            slide.dialogues.forEach((dialogue, dIndex) => {
                // Collect words for this specific dialogue
                const allWords = [...dialogue.words, ...dialogue.distractors];
                const shuffledWords = shuffleArray(allWords);
                
                content += `
                    <div class="dialogue-section">
                        <label class="dialogue-label">${dialogue.label}</label>
                        
                        <div class="word-bank" id="wordBank${slide.id}_${dIndex}">
                            ${shuffledWords.map(word => {
                                const isDistractor = dialogue.distractors.includes(word);
                                return `<div class="word ${isDistractor ? 'distractor' : ''}" 
                                         draggable="true" 
                                         data-word="${word}"
                                         data-dialogue="${dIndex}">
                                    ${word}
                                </div>`;
                            }).join('')}
                        </div>
                        
                        <div class="drop-zone" id="dropZone${slide.id}_${dIndex}" data-dialogue-index="${dIndex}">
                            <p style="color: #95a5a6; font-style: italic;">Drop words here...</p>
                        </div>
                    </div>
                `;
            });
            
            content += `<div id="message${slide.id}"></div>
                    </div>
                </div>
                <div class="image-column">
                    <img src="${slide.image}" alt="Comic Slide ${slide.id}" class="comic-image">
                </div>`;
        } else {
            // Full width image for slides without activities
            content = `<img src="${slide.image}" alt="Comic Slide ${slide.id}" class="comic-image" style="width: 100%; margin: 0 auto; display: block;">`;
        }

        slideDiv.innerHTML = content;
        container.appendChild(slideDiv);
    });

    initializeDragAndDrop();
    updateProgress();
    updateNavigationButtons();
}

// Initialize drag and drop functionality
function initializeDragAndDrop() {
    slides.forEach(slide => {
        if (slide.hasActivity) {
            const words = document.querySelectorAll(`#slide${slide.id} .word`);
            const dropZones = document.querySelectorAll(`#slide${slide.id} .drop-zone`);

            words.forEach(word => {
                word.addEventListener('dragstart', dragStart);
                word.addEventListener('dragend', dragEnd);
            });

            dropZones.forEach(dropZone => {
                dropZone.addEventListener('dragover', dragOver);
                dropZone.addEventListener('drop', drop);
                dropZone.addEventListener('dragleave', dragLeave);
            });
        }
    });
}

// Drag and drop event handlers
function dragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function dragEnd(e) {
    this.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
    this.classList.add('drag-over');
    e.dataTransfer.dropEffect = 'move';
}

function dragLeave(e) {
    this.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');

    if (draggedElement) {
        const placeholder = this.querySelector('p');
        if (placeholder) {
            placeholder.remove();
        }
        this.appendChild(draggedElement);
        checkCompletion();
    }
}

// Check if all dialogues are completed
function checkCompletion() {
    const currentSlide = slides[currentSlideIndex];
    if (!currentSlide.hasActivity) return;

    const allDropZones = document.querySelectorAll(`#slide${currentSlide.id} .drop-zone`);
    let allCompleted = true;
    
    allDropZones.forEach((dropZone, index) => {
        const words = dropZone.querySelectorAll('.word:not(.distractor)');
        const dialogue = currentSlide.dialogues[index];
        
        if (words.length < dialogue.words.length) {
            allCompleted = false;
        }
    });

    if (allCompleted) {
        const dropZones = document.querySelectorAll(`#slide${currentSlide.id} .drop-zone`);
        if (dropZones.length > 0) {
            document.getElementById('resetBtn').style.display = 'block';
        }
        showMessage(currentSlide.id, 'Great job! Now practice reading your sentences aloud! 🎉', 'success');
    } else {
        const dropZones = document.querySelectorAll(`#slide${currentSlide.id} .drop-zone`);
        const hasAnyWords = Array.from(dropZones).some(zone => 
            zone.querySelectorAll('.word').length > 0
        );
        if (hasAnyWords) {
            document.getElementById('resetBtn').style.display = 'block';
        }
    }
}

// Show message to user
function showMessage(slideId, text, type) {
    const messageDiv = document.getElementById(`message${slideId}`);
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
}

// Reset current slide
function resetCurrentSlide() {
    const currentSlide = slides[currentSlideIndex];
    if (!currentSlide.hasActivity) return;

    currentSlide.dialogues.forEach((dialogue, dIndex) => {
        const wordBank = document.getElementById(`wordBank${currentSlide.id}_${dIndex}`);
        const dropZone = document.getElementById(`dropZone${currentSlide.id}_${dIndex}`);

        // Collect all words from this specific drop zone
        const words = dropZone.querySelectorAll('.word');
        const allWords = Array.from(words);
        
        // Clear drop zone
        dropZone.innerHTML = '<p style="color: #95a5a6; font-style: italic;">Drop words here...</p>';

        // Shuffle and return to word bank
        const shuffledWords = shuffleArray(allWords);
        shuffledWords.forEach(word => {
            wordBank.appendChild(word);
        });
    });

    document.getElementById(`message${currentSlide.id}`).innerHTML = '';
    document.getElementById('resetBtn').style.display = 'none';
}

// Navigation functions
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        document.getElementById(`slide${slides[currentSlideIndex].id}`).classList.remove('active');
        currentSlideIndex++;
        document.getElementById(`slide${slides[currentSlideIndex].id}`).classList.add('active');
        updateProgress();
        updateNavigationButtons();
    }
}

function previousSlide() {
    if (currentSlideIndex > 0) {
        document.getElementById(`slide${slides[currentSlideIndex].id}`).classList.remove('active');
        currentSlideIndex--;
        document.getElementById(`slide${slides[currentSlideIndex].id}`).classList.add('active');
        updateProgress();
        updateNavigationButtons();
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentSlideIndex + 1) / slides.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentSlide').textContent = currentSlideIndex + 1;
    document.getElementById('percentage').textContent = Math.round(progress);
}

// Update navigation buttons state
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const resetBtn = document.getElementById('resetBtn');

    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slides.length - 1;

    if (slides[currentSlideIndex].hasActivity) {
        resetBtn.style.display = 'block';
    } else {
        resetBtn.style.display = 'none';
    }
}

// Initialize on load
window.onload = initializeSlides;