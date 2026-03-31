
// Copy another text
document.addEventListener('copy', function(e){
e.clipboardData.setData('text/plain', 'Maza aaya');
e.preventDefault();
});


//  Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Disable copy shortcut (Ctrl+C or Command+C)
document.addEventListener('keydown', function(e) {
    // For Windows (Ctrl) or Mac (Meta/Command)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
        e.preventDefault();
    }
});

// Disable copy event
document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert("Copying content is not allowed.");
});