// Slide data configuration for Meeting 3
const slides = [
    {
        id: 1,
        image: 'slide1.png',
        isQuiz: false
    },
    {
        id: 2,
        image: 'slide2.png',
        isQuiz: false
    },
    {
        id: 3,
        image: 'slide3.png',
        isQuiz: false
    },
    {
        id: 4,
        image: 'slide4.png',
        isQuiz: false
    },
    {
        id: 5,
        image: 'slide5.png',
        isQuiz: false
    },
    {
        id: 6,
        image: 'slide6.png',
        isQuiz: false
    },
    {
        id: 7,
        image: 'slide7.png',
        isQuiz: false
    },
    {
        id: 8,
        title: 'Quiz Time!',
        isQuiz: true
    }
];

let currentSlideIndex = 0;

function initializeSlides() {
    const container = document.getElementById('slideContainer');
    container.innerHTML = '';

    slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `slide ${index === 0 ? 'active' : ''}`;
        slideDiv.id = `slide${slide.id}`;

        if (slide.isQuiz) {
            slideDiv.innerHTML = `
                <div class="quiz-container">
                    <h2 class="quiz-title">🎯 Quiz Time!</h2>
                    <p class="quiz-subtitle">Test your understanding of the Ocean Adventure story</p>
                    <button class="btn-start-quiz" onclick="startQuiz()">
                        📝 Start Practice Quiz
                    </button>
                </div>
            `;
        } else {
            slideDiv.innerHTML = `
                <div class="comic-slide">
                    <img src="${slide.image}" alt="Comic Slide ${slide.id}" class="comic-image-full">
                </div>
            `;
        }

        container.appendChild(slideDiv);
    });

    updateProgress();
    updateNavigationButtons();
}

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

function updateProgress() {
    const progress = ((currentSlideIndex + 1) / slides.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentSlide').textContent = currentSlideIndex + 1;
    document.getElementById('percentage').textContent = Math.round(progress);
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slides.length - 1;
}

function openGlossary() {
    const modal = document.getElementById('glossaryModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGlossary() {
    const modal = document.getElementById('glossaryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ✨ FIXED: Start Quiz Function
function startQuiz() {
    const modal = document.getElementById('quizModal');
    
    // Check if quiz.html exists
    fetch('quiz.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Quiz file not found');
            }
            // If quiz.html exists, open modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        })
        .catch(error => {
            console.error('Quiz error:', error);
            // Show error message to user
            alert('Quiz file (quiz.html) not found!\n\nPlease make sure quiz.html is in the meeting3 folder:\nmeeting3/quiz.html');
        });
}

function closeQuiz() {
    const modal = document.getElementById('quizModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeGlossary();
        closeQuiz();
    }
});

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeGlossary();
            closeQuiz();
        }
    });
});

window.onload = initializeSlides;