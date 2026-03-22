// Track which keys are currently pressed
const keysPressed = {};

// Listen for keydown
document.addEventListener("keydown", (e) => {
    keysPressed[e.key.toLowerCase()] = true; // store key in lowercase

    // Check for modifiers + letter keys
    if (
        keysPressed["s"] && 
        keysPressed["p"] && 
        e.ctrlKey &&        // Ctrl pressed
        e.shiftKey          // Shift pressed
        // You can add e.altKey if needed
    ) {
        window.location.href = "spotify:track:7CSGAVrDUKJPS9Ow0O7kkK";
        // Optional: reset keys so it doesn't trigger repeatedly
        keysPressed["s"] = false;
        keysPressed["p"] = false;
    }
});

// Listen for keyup to release keys
document.addEventListener("keyup", (e) => {
    keysPressed[e.key.toLowerCase()] = false;
});