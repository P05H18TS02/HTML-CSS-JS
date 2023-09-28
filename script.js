const textarea = document.getElementById('text');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const text = textarea.value;
    const speaks = new SpeechSynthesisUtterance(text);
    speaks.lang = 'pr-BR';
    window.speechSynthesis.speak(speaks);
});