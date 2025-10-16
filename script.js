// Get the HTML elements we need to work with from the document
const disc = document.getElementById('disc');
const song = document.getElementById('our-song');
const popup = document.getElementById('popup-container');

// Add an event listener that waits for a 'click' on the disc
disc.addEventListener('click', () => {
    // The logic is based on whether the song is currently paused or playing.
    if (song.paused) {
        // --- If the song is paused, we want to START everything ---

        // 1. Play the audio
        song.play();

        // 2. Add the 'spinning' class to the disc to start the CSS animation
        disc.classList.add('spinning');

        // 3. Show the pop-up by removing the 'hidden' class
        popup.classList.remove('hidden');

    } else {
        // --- If the song is already playing, we want to STOP everything ---

        // 1. Pause the audio
        song.pause();

        // 2. Stop the spinning animation by removing the class
        disc.classList.remove('spinning');

        // 3. Hide the pop-up by adding the 'hidden' class back
        popup.classList.add('hidden');
    }
});
s