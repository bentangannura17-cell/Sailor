// ==========================================
// SAILOR HOMEPAGE - JAVASCRIPT
// ==========================================

// ==========================================
// CHECK LOCALSTORAGE FOR VISITED ISLANDS
// ==========================================
function updateIslandStatus() {
    for (let i = 1; i <= 3; i++) {
        const visited = localStorage.getItem(`meeting${i}_visited`);
        if (visited === 'true') {
            const statusElement = document.getElementById(`status-${i}`);
            if (statusElement) {
                statusElement.textContent = '✅';
            }
        }
    }
}

// ==========================================
// NAVIGATE TO MEETING
// ==========================================
function navigateToMeeting(meetingNumber) {
    // Mark island as visited
    localStorage.setItem(`meeting${meetingNumber}_visited`, 'true');
    
    // Navigate to appropriate page
    if (meetingNumber === 1) {
        window.location.href = 'meeting1/index.html'; // Meeting 1 - Vocabulary Quiz
    } else if (meetingNumber === 2) {
        window.location.href = 'meeting2/index.html'; // Meeting 2 - Guided Comic
    } else if (meetingNumber === 3) {
        window.location.href = 'meeting3/index.html'; // Meeting 3 - Independent Comic
    }
}

// ==========================================
// INFO MODAL FUNCTIONS
// ==========================================
function openInfoModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('infoModal');
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeInfoModal();
            }
        });
    }
    
    // Initialize island status on page load
    updateIslandStatus();
});

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================
window.addEventListener('load', function() {
    updateIslandStatus();
    
    console.log('🌊 The Sailor Homepage loaded successfully!');
    console.log('📚 Meeting 1 path: meeting1/index.html');
    console.log('💬 Meeting 2 path: meeting2/index.html');
    console.log('🎯 Meeting 3 path: meeting3/index.html');
});