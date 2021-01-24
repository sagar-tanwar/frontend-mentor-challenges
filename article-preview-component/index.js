function shareCard(card) {
  if(!card) return;

  const shareBtn = card.querySelector('.card__meta__button');
  const popover = card.querySelector('.card__meta__popover');
  shareBtn.addEventListener('click', () => {
    shareBtn.classList.toggle('active');
    popover.classList.toggle('active');
  });
}

const card = document.querySelector('.card');

shareCard(card);