document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.computedStyleMap.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', () => {
        link.computedStyleMap.transform = 'scale(1)';
    });
});