const runSlider = (slider, content) => {
  const avatar = slider.querySelector('#user-avatar');
  const review = slider.querySelector('#user-review');
  const name = slider.querySelector('#user-name');
  const profile = slider.querySelector('#user-profile');
  const btnPrev = slider.querySelector('.btn--prev');
  const btnNext = slider.querySelector('.btn--next');
  let counter = 0;

  function populate() {
    avatar.src = `./images/${content[counter].avatar}`;
    review.innerText = content[counter].review;
    name.innerText = content[counter].name;
    profile.innerText = content[counter].profile;
  }

  populate();
  
  btnPrev.addEventListener('click', () => {
    counter = counter == 0 ? content.length - 1 : counter - 1;
    populate();
  });
  
  btnNext.addEventListener('click', () => {
    counter = counter == content.length - 1 ? 0 : counter + 1;
    populate();
  });
  
}

const testimonials = document.querySelector('.slider');
const testimonialsContent = [
  {
    name: 'Tanya Sinclair',
    profile: 'UX Engineer',
    review: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    avatar: 'image-tanya.jpg',
  },
  {
    name: 'John Tarkpor',
    profile: 'Junior Front-end Developer',
    review: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    avatar: 'image-john.jpg',
  },
];
runSlider(testimonials, testimonialsContent);