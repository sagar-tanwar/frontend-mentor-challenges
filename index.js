const projects = [
  'intro-component-with-sign-up-form',
  'profile-card-component',
  'testimonials-grid-section',
  'faq-accordion-card',
  'social-proof-section',
  'article-preview-component',
]

function cardTemplate (project) {
  return `
    <div class="solution__card">
      <header class="solution__card__header">
        <img class="solution__card__thumbnail" src="./${project}/design/desktop-design.jpg" alt="Project Name">
      </header>
      <footer class="solution__card__footer">
        <div class="solution__card__title">${project.split('-').join(' ')}</div>
        <div class="solution__card__actions">
          <div class="solution__card__action">
            <a href="https://github.com/sagar-tanwar/frontend-mentor-challenges/tree/master/${project}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.5 4C15.57 4 14 5.57 14 7.5C14 9.054 15.025 10.359 16.43 10.815C16.284 11.747 15.883 12.515 15.2 13.138C13.254 14.911 9.673 15.073 8 15.045V8.837C9.44 8.403 10.5 7.08 10.5 5.5C10.5 3.57 8.93 2 7 2C5.07 2 3.5 3.57 3.5 5.5C3.5 7.08 4.56 8.403 6 8.837V15.163C4.56 15.597 3.5 16.92 3.5 18.5C3.5 20.43 5.07 22 7 22C8.93 22 10.5 20.43 10.5 18.5C10.5 17.949 10.36 17.435 10.133 16.971C12.193 16.785 14.79 16.214 16.542 14.621C17.639 13.624 18.273 12.357 18.446 10.853C19.915 10.438 21 9.1 21 7.5C21 5.57 19.43 4 17.5 4ZM5.5 5.5C5.5 4.673 6.173 4 7 4C7.827 4 8.5 4.673 8.5 5.5C8.5 6.327 7.827 7 7 7C6.173 7 5.5 6.327 5.5 5.5ZM7 20C6.173 20 5.5 19.327 5.5 18.5C5.5005 18.1056 5.65629 17.7273 5.93366 17.4469C6.21103 17.1666 6.58765 17.0067 6.982 17.002L7.112 17.012C7.30819 17.0194 7.50102 17.0653 7.67947 17.1472C7.85791 17.229 8.01849 17.3452 8.15202 17.4892C8.28555 17.6331 8.38942 17.8019 8.45771 17.986C8.52599 18.1701 8.55735 18.3658 8.55 18.562C8.54265 18.7582 8.49672 18.951 8.41485 19.1295C8.33297 19.3079 8.21675 19.4685 8.07282 19.602C7.92889 19.7355 7.76007 19.8394 7.57599 19.9077C7.39192 19.976 7.19619 20.0074 7 20ZM17.5 9C16.673 9 16 8.327 16 7.5C16 6.673 16.673 6 17.5 6C18.327 6 19 6.673 19 7.5C19 8.327 18.327 9 17.5 9Z"
                  fill="white" />
              </svg>
            </a>
          </div>
          <div class="solution__card__action">
            <a href="https://fem-solutions.netlify.app/${project}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                  fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  `;
}

function generateHTML (projects) {
  const html = projects.map(cardTemplate).join('');
  solutionList.innerHTML = html;
}

const solutionList = document.querySelector('.solutions__list');

generateHTML(projects);