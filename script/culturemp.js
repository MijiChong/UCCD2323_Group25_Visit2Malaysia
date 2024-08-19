document.addEventListener("DOMContentLoaded", function() {
    // Function to show buttons with animation
    function showButtons() {
        // Get button elements
        const traditionsBtn = document.getElementById('traditions-btn');
        const festivalsBtn = document.getElementById('festivals-btn');
        
        // Remove hidden class and add animation class
        traditionsBtn.classList.remove('hidden');
        festivalsBtn.classList.remove('hidden');
        
        traditionsBtn.classList.add('btn-animated');
        festivalsBtn.classList.add('btn-animated');
        
        // Remove the event listener to avoid re-triggering
        document.removeEventListener('click', showButtons);
    }

    // Add event listener to the document
    document.addEventListener('click', showButtons);
});
