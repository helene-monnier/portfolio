document.querySelectorAll('.main-page__sidebar__light__list-items a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    this.classList.add("selected");
  });
});

document.querySelectorAll('a[href="#home"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    document.querySelectorAll('a[href="#about"]').classList.add("selected");
  });
});

document.querySelectorAll('a[href="#about-me"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' });
    document.querySelectorAll('a[href="#about-me"]').classList.add("selected");
  });
});

document.querySelectorAll('a[href="#resume"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('resume').scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('a[href="#portfolio"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('a[href="#contact"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});


/** DARK MODE */
if (localStorage.getItem('theme') === 'dark') {
  document.querySelector('#theme').classList.add('dark');
} else {
  document.querySelector('#theme').classList.remove('dark');
}

document.querySelector('#darkMode').addEventListener('click', function() {
  document.querySelector('#theme').classList.toggle('dark');
  if (document.querySelector('#theme').classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
