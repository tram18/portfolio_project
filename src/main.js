 
 // Add interactive elements 
 document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    
    // You could add animations, scroll effects, or other interactive elements here
    const profileImg = document.querySelector('.profile-img');
    profileImg.addEventListener('click', () => {
        profileImg.style.transform = 'scale(1.05)';
        setTimeout(() => {
            profileImg.style.transform = 'scale(1)';
        }, 200);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const text = "a software developer.";
    const developerElement = document.querySelector('.developer');
    const cursorElement = document.querySelector('.cursor');
    let charIndex = 0;
    
    // Function to type one character at a time
    function type() {
        if (charIndex < text.length) {
            developerElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 130); // Typing speed in milliseconds
        } else {
            // Once typing is complete, can either stop or restart
            setTimeout(resetAndStartTyping, 3000); // Wait 3 seconds before restarting
        }
    }
    
    // Function to reset and start typing again
    function resetAndStartTyping() {
        // Clear the text with a deleting animation
        const deleteInterval = setInterval(() => {
            if (developerElement.textContent.length > 0) {
                developerElement.textContent = developerElement.textContent.slice(0, -1);
            } else {
                clearInterval(deleteInterval);
                charIndex = 0;
                setTimeout(type, 500); // Wait before typing again
            }
        }, 100); // Deleting speed
    }
    
    // Start the typing effect
    setTimeout(type, 1000); // Initial delay before typing starts
});

 // Add simple animations for tags - About
 document.querySelectorAll('.tag').forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

