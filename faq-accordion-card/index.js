function accordion(component) {
  if(!component) return;
  const lists = component.querySelectorAll('li');
  const questions = component.querySelectorAll('.accordion__heading');
  questions.forEach(ques => {
    ques.addEventListener('click', e => {
      lists.forEach(list => {
        if(list.classList.contains('active')) {
          list.classList.remove('active');
        }
      })
      e.currentTarget.parentNode.classList.add('active');
    })
  })
}

const faq = document.querySelector('.accordion');
accordion(faq);