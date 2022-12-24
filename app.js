document.addEventListener('click', (ev) => {
  if (ev.target.id === 'expand') {
    ev.target.parentElement.classList.toggle('open');
  }
})
document.addEventListener('click', (ev) => {
  if (ev.target.id === '3') {
    ev.target.parentElement.classList.toggle('open');
  }
})
