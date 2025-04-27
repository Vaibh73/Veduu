// Floating Hearts Animation
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; // random float speed
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 300);

// Add heart shape styles
const style = document.createElement('style');
style.innerHTML = `
.heart {
    width: 20px;
    height: 20px;
    position: fixed;
    top: -30px;
    background: pink;
    transform: rotate(45deg);
    animation: float 5s linear infinite;
    z-index: 0;
}

.heart::before,
.heart::after {
    content: '';
    width: 20px;
    height: 20px;
    background: pink;
    position: absolute;
    border-radius: 50%;
}

.heart::before {
    top: -10px;
    left: 0;
}

.heart::after {
    left: -10px;
    top: 0;
}

@keyframes float {
    0% {
        transform: translateY(0) rotate(45deg) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(45deg) scale(0.5);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
