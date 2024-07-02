document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('typing-text');
  const text = 'Stiler';
  let index = 0;

  const type = () => {
      if (index < text.length) {
          textElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 340);
      } else {
          textElement.classList.add('blink-caret');
      }
  };

  setTimeout(type, 1000);
});