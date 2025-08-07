  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetID = this.getAttribute('href');
      const targetElement = document.querySelector(targetID);

      if (targetElement) {
        const headerOffset = 70; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarToggler.offsetParent !== null && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });


        window.addEventListener('scroll', function () {
            const navbar = document.getElementById('navbar');
            const isDesktop = window.innerWidth > 768;

            if (isDesktop && window.scrollY > 50) {
            navbar.classList.add('scrolled');
            } else {
            navbar.classList.remove('scrolled');
            }
        });


        window.addEventListener('resize', function () {
            const navbar = document.getElementById('navbar');
            if (window.innerWidth <= 768) {
            navbar.classList.remove('scrolled');
            }
        });

         document.querySelectorAll('.navbar-collapse .nav-link').forEach(function(navLink) {
            navLink.addEventListener('click', function () {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');

            if (navbarToggler.offsetParent !== null) {
                navbarToggler.click();
            }
            });
        });



  const togglerButton = document.querySelector('.custom-toggler');
  const navbarCollapse = document.getElementById('navbarNav');

  togglerButton.addEventListener('click', () => {
    togglerButton.classList.toggle('active');
  });


  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && navbarCollapse.classList.contains('show')) {
        togglerButton.click(); 
      }
    });
  });
