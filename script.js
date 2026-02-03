document.addEventListener('DOMContentLoaded', () => {
    let lastScrollY = window.scrollY;
    let accumulatedScroll = 0;
    const threshold = 50; // Spawn a flower every 50px of scroll

    // Optimization: throttling (or rather, distance-based triggering)
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDiff = Math.abs(currentScrollY - lastScrollY);

        accumulatedScroll += scrollDiff;
        lastScrollY = currentScrollY;

        if (accumulatedScroll > threshold) {
            // Number of flowers to spawn based on scroll speed/distance
            const count = Math.min(Math.floor(accumulatedScroll / threshold), 3);

            for (let i = 0; i < count; i++) {
                spawnMimosaFlower();
            }

            accumulatedScroll = accumulatedScroll % threshold;
        }
    });

    function spawnMimosaFlower() {
        const flower = document.createElement('div');
        flower.classList.add('mimosa-flower');

        // Random horizontal position
        const startX = Math.random() * window.innerWidth;
        flower.style.left = `${startX}px`;

        // Random size variation (0.6 to 1.2) - slightly smaller for elegance
        const scale = 0.6 + Math.random() * 0.6;
        flower.style.setProperty('--scale', scale);

        // Random falling duration (between 4s and 8s) - slower for floaty feel
        const duration = 4 + Math.random() * 4;
        flower.style.animationDuration = `${duration}s`;

        // Random oscillation (sway) using CSS variable if intricate, 
        // or just apply a class with specific swaying animation
        // Let's vary the animation timing function slightly
        flower.style.animationDelay = '0s';

        document.body.appendChild(flower);

        // Remove element after animation finishes
        setTimeout(() => {
            flower.remove();
        }, duration * 1000);
    }
});
