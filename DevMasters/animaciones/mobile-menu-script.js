document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const menuBar = document.getElementById('MenuBar1');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      menuBar.classList.toggle('show');
    });
  }
});
