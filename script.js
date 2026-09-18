const navButtons = document.querySelectorAll('.nav-link');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const sections = document.querySelectorAll('.section-content');

    function switchTab(target) {
      sections.forEach(section => {
        section.classList.toggle('active', section.id === target);
      });

      navButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.target === target);
      });

      categoryButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.target === target);
      });
    }

    [...navButtons, ...categoryButtons].forEach(button => {
      button.addEventListener('click', () => {
        switchTab(button.dataset.target);

        if (button.classList.contains('nav-link')) {
          document.querySelector('#produtos').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
