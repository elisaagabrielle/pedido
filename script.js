// script.js

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('yesButton').classList.add('hidden');
    document.getElementById('noButton').classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    // Move o botão "Não" para um local aleatório na tela
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - button.offsetWidth;
    const maxY = containerRect.height - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
