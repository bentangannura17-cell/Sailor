// ---------- APP LOGIC: VOCABULARY ----------
const wordChips = document.querySelectorAll(".word-chip");
const vocabDrops = document.querySelectorAll(".vocab-drop");
const vocabMessage = document.getElementById("vocab-message");
const vocabProgressPill = document.getElementById("vocab-progress-pill");
const turtleRing = document.getElementById("debris-ring");

let selectedWord = null;
let vocabAnswers = {
  0: null,
  1: null,
  2: null,
  3: null
};

function updateVocabProgress(correctCount) {
  if (!vocabProgressPill) return;
  vocabProgressPill.textContent = correctCount + " / 4 correct";
}

wordChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    selectedWord = chip.getAttribute("data-word");
    wordChips.forEach((c) => {
      c.classList.remove("ring-2", "ring-offset-2");
    });
    chip.classList.add("ring-2", "ring-offset-2");
  });
});

vocabDrops.forEach((drop, index) => {
  drop.addEventListener("click", () => {
    if (!selectedWord) {
      if (vocabMessage) {
        vocabMessage.textContent = "First, tap a word above.";
      }
      return;
    }
    drop.textContent = selectedWord;
    vocabAnswers[index] = selectedWord;
    if (vocabMessage) {
      vocabMessage.textContent = "";
    }
  });
});

const checkVocabBtn = document.getElementById("check-vocab");
const resetVocabBtn = document.getElementById("reset-vocab");

if (checkVocabBtn) {
  checkVocabBtn.addEventListener("click", () => {
    let correct = 0;
    vocabDrops.forEach((drop, index) => {
      const correctWord = drop.getAttribute("data-correct");
      const studentWord = vocabAnswers[index];
      if (!studentWord) {
        drop.style.boxShadow = "0 0 0 1px rgba(239,68,68,0.9)";
        return;
      }
      if (studentWord === correctWord) {
        correct++;
        drop.style.boxShadow = "0 0 0 1px rgba(34,197,94,0.9)";
      } else {
        drop.style.boxShadow = "0 0 0 1px rgba(239,68,68,0.9)";
      }
    });

    updateVocabProgress(correct);

    if (vocabMessage) {
      if (correct === 4) {
        vocabMessage.textContent =
          "Great job! You are ready to use these words in your narrative.";
      } else if (correct >= 2) {
        vocabMessage.textContent =
          "Nice! Check the red ones again and think about the picture of the story.";
      } else {
        vocabMessage.textContent =
          "Keep trying. Look back at your comic and think about each word.";
      }
    }

    // Turtle "freedom" effect when all correct
    if (turtleRing) {
      if (correct === 4) {
        turtleRing.style.strokeDashoffset = "40";
        turtleRing.style.opacity = "0.1";
        turtleRing.style.transition = "all 600ms ease-out";
      } else {
        turtleRing.style.strokeDashoffset = "0";
        turtleRing.style.opacity = "1";
        turtleRing.style.transition = "all 400ms ease-out";
      }
    }
  });
}

if (resetVocabBtn) {
  resetVocabBtn.addEventListener("click", () => {
    selectedWord = null;
    vocabAnswers = {
      0: null,
      1: null,
      2: null,
      3: null
    };
    vocabDrops.forEach((drop) => {
      drop.textContent = "pick a word";
      drop.style.boxShadow = "none";
    });
    wordChips.forEach((c) => {
      c.classList.remove("ring-2", "ring-offset-2");
    });
    if (vocabMessage) vocabMessage.textContent = "";
    updateVocabProgress(0);
    if (turtleRing) {
      turtleRing.style.strokeDashoffset = "0";
      turtleRing.style.opacity = "1";
    }
  });
}

// ---------- APP LOGIC: STORYLINE ----------
const correctOrder = {
  A: 1, // Lian and Mira on boat
  B: 2, // turtle trapped
  C: 3, // they rescue
  D: 4  // water clean
};

// Scene data
const scenes = [
  {
    id: 'A',
    text: 'Lian and Mira are on a boat. The sun is smiling. A dolphin jumps! 🐬☀'
  },
  {
    id: 'B',
    text: 'The water looks messy. There is yucky plastic. A turtle is stuck. 🢢😢'
  },
  {
    id: 'C',
    text: 'Lian picks up trash. Mira calls friends on a radio. 📻🗑'
  },
  {
    id: 'D',
    text: 'The water is sparkly clean. The turtle swims away happy. Everyone claps. 👏✨'
  }
];

// Shuffle array function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Render scenes in random order
function renderScenes() {
  const container = document.getElementById('scenes-container');
  const shuffledScenes = shuffleArray(scenes);
  
  shuffledScenes.forEach(scene => {
    const article = document.createElement('article');
    article.className = 'rounded-xl px-3 py-3 flex flex-col gap-2';
    article.style.border = '2px solid rgba(255,255,255,0.5)';
    article.style.backgroundColor = 'rgba(255,255,255,0.3)';
    article.setAttribute('data-scene', scene.id);
    
    article.innerHTML = `
      <div class="flex items-center justify-between gap-2 mb-2">
        <div class="flex items-center gap-1">
          <span class="text-[11px] md:text-xs opacity-80">Order:</span>
          <div class="flex gap-1" role="group" aria-label="Order for scene ${scene.id}">
            <button type="button" class="order-btn w-8 h-8 rounded-md text-sm font-bold border-2 focus-visible:outline-none" data-scene="${scene.id}" data-order="1">1</button>
            <button type="button" class="order-btn w-8 h-8 rounded-md text-sm font-bold border-2 focus-visible:outline-none" data-scene="${scene.id}" data-order="2">2</button>
            <button type="button" class="order-btn w-8 h-8 rounded-md text-sm font-bold border-2 focus-visible:outline-none" data-scene="${scene.id}" data-order="3">3</button>
            <button type="button" class="order-btn w-8 h-8 rounded-md text-sm font-bold border-2 focus-visible:outline-none" data-scene="${scene.id}" data-order="4">4</button>
          </div>
        </div>
      </div>
      <p class="text-xs md:text-sm leading-snug">
        ${scene.text}
      </p>
    `;
    
    container.appendChild(article);
  });
  
  // After rendering, attach event listeners to new buttons
  attachOrderButtonListeners();
}

const storyMessage = document.getElementById("story-message");
const storyProgressPill = document.getElementById("story-progress-pill");

// Track selected order for each scene
const sceneOrders = {
  A: null,
  B: null,
  C: null,
  D: null
};

// Render scenes on page load
renderScenes();

function resetSceneBorders() {
  document
    .querySelectorAll("#story-card article")
    .forEach((article) => {
      article.style.border = "2px solid rgba(255,255,255,0.5)";
    });
}

function updateOrderButtonStyles() {
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((btn) => {
    const scene = btn.getAttribute("data-scene");
    const order = btn.getAttribute("data-order");
    const selectedOrder = sceneOrders[scene];
    
    if (selectedOrder === order) {
      // Selected button
      btn.style.backgroundColor = "#eab308";
      btn.style.color = "#ffffff";
      btn.style.borderColor = "#eab308";
      btn.style.fontWeight = "bold";
    } else {
      // Unselected button
      btn.style.backgroundColor = "rgba(255,255,255,0.7)";
      btn.style.color = "#0f172a";
      btn.style.borderColor = "rgba(15,23,42,0.3)";
      btn.style.fontWeight = "normal";
    }
  });
}

// Add click handlers to order buttons
function attachOrderButtonListeners() {
  const orderButtons = document.querySelectorAll(".order-btn");
  orderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const scene = btn.getAttribute("data-scene");
      const order = btn.getAttribute("data-order");
      
      // Toggle selection
      if (sceneOrders[scene] === order) {
        sceneOrders[scene] = null; // Deselect
      } else {
        sceneOrders[scene] = order; // Select
      }
      
      updateOrderButtonStyles();
      
      // Clear any previous feedback
      if (storyMessage) storyMessage.textContent = "";
      resetSceneBorders();
    });
  });
  
  // Apply initial button styles
  updateOrderButtonStyles();
}

const checkStoryBtn = document.getElementById("check-story");
const resetStoryBtn = document.getElementById("reset-story");

if (checkStoryBtn) {
  checkStoryBtn.addEventListener("click", () => {
    let filled = 0;
    let correctCount = 0;

    resetSceneBorders();

    // Count filled scenes
    Object.values(sceneOrders).forEach((order) => {
      if (order !== null) filled++;
    });

    if (filled < 4) {
      if (storyMessage) {
        storyMessage.textContent =
          "Click a number button for each scene first.";
      }
      return;
    }

    // Check duplicates
    const values = Object.values(sceneOrders);
    const uniqueValues = new Set(values);
    if (uniqueValues.size !== 4) {
      if (storyMessage) {
        storyMessage.textContent =
          "Each number 1–4 can be used only once.";
      }
      return;
    }

    // Evaluate each scene
    Object.keys(sceneOrders).forEach((scene) => {
      const selectedOrder = Number(sceneOrders[scene]);
      const correctVal = correctOrder[scene];
      const article = document.querySelector(`[data-scene="${scene}"]`);
      
      if (selectedOrder === correctVal) {
        correctCount++;
        if (article) {
          article.style.border = "2px solid rgba(34,197,94,0.9)";
        }
      } else {
        if (article) {
          article.style.border = "2px solid rgba(239,68,68,0.9)";
        }
      }
    });

    if (storyProgressPill) {
      if (correctCount === 4) {
        storyProgressPill.textContent = "Perfect story order!";
      } else {
        storyProgressPill.textContent =
          correctCount + " scenes in the right place";
      }
    }

    if (storyMessage) {
      if (correctCount === 4) {
        storyMessage.textContent =
          "Excellent! Your narrative has a clear beginning, problem, solution, and ending.";
      } else if (correctCount >= 2) {
        storyMessage.textContent =
          "Good thinking. Check which scene shows the problem and which shows the solution.";
      } else {
        storyMessage.textContent =
          "Try again. Think: What happens first? When does the problem appear?";
      }
    }
  });
}

if (resetStoryBtn) {
  resetStoryBtn.addEventListener("click", () => {
    // Clear all selections
    sceneOrders.A = null;
    sceneOrders.B = null;
    sceneOrders.C = null;
    sceneOrders.D = null;
    
    updateOrderButtonStyles();
    resetSceneBorders();
    
    if (storyMessage) storyMessage.textContent = "";
    if (storyProgressPill) {
      storyProgressPill.textContent = "Order the 4 scenes";
    }
  });
}