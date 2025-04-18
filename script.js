const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * 300);
  const j = Math.floor(Math.random() * 300);
  noBtn.style.position = 'absolute';
  noBtn.style.top = `${i}px`;
  noBtn.style.left = `${j}px`;
});

yesBtn.addEventListener('click', () => {
  alert("Yay! I knew it!");
});
