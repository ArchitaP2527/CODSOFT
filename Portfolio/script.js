document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('load', () => {
  setTimeout(() => {
    alert("Welcome to Archita's Portfolio!");
  }, 500);
});

document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = '#e3f2fd';
  });
  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = '#f9f9f9';
  });
});


const contactSection = document.querySelector('#contact');
contactSection.addEventListener('click', () => {
  alert("📧 Email: archita.2585@gmail.com\n📱 Phone: +91-9099925805");
});
