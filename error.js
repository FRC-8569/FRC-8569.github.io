window.onerror = (() => location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
document.addEventListener('error', function(event) {
    // Check if the error event was triggered by an image
    if (event.target.tagName.toLowerCase() === 'img') {
        // Prevent infinite loop in case the fallback image also fails
        if (!event.target.dataset.retry) {
            event.target.dataset.retry = true;
            // Set the fallback image source
            event.target.src = 'https://media1.tenor.com/m/x8v1oNUOmg4AAAAC/rickroll-roll.gif';
            // Optionally, set the alt text for accessibility
            event.target.alt = 'Fallback image description';
        } else {
            console.warn('Fallback image also failed to load:', event.target);
        }
    }
}, true); // Use the capturing phase to ensure the event is caught early
