// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Catering form validation
  var form = document.getElementById('cateringForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      var errorEl = document.getElementById('formError');
      var headcount = document.getElementById('headcount');
      if (headcount && parseInt(headcount.value, 10) < 8) {
        e.preventDefault();
        errorEl.textContent = 'Catering orders require an 8-person minimum.';
        errorEl.style.display = 'block';
        headcount.focus();
        return;
      }
      errorEl.style.display = 'none';
    });
  }
});
