(function () {
  'use strict';

  // Theme toggle
  var toggleBtn = document.querySelector('[data-theme-toggle]');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile nav toggle
  var navToggle = document.querySelector('[data-nav-toggle]');
  var navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('is-open');
    });

    // Close on link click
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('is-open');
      });
    });
  }
})();
function calculateEV() {
  const km = document.getElementById('km').value;
  const petrol = document.getElementById('petrol').value;
  const efficiency = document.getElementById('efficiency').value;
  const electricity = document.getElementById('electricity').value;
  const evcost = document.getElementById('evcost').value;

  const monthlyKm = km * 30;

  const petrolCostPerKm = petrol / 40;
  const evCostPerKm = electricity / efficiency;

  const petrolMonthly = monthlyKm * petrolCostPerKm;
  const evMonthly = monthlyKm * evCostPerKm;

  const savings = petrolMonthly - evMonthly;
  const yearly = savings * 12;
  const breakeven = evcost / yearly;

  document.getElementById('result').innerHTML = `
    <p><strong>Monthly Petrol Cost:</strong> ₹${petrolMonthly.toFixed(0)}</p>
    <p><strong>Monthly EV Cost:</strong> ₹${evMonthly.toFixed(0)}</p>
    <p><strong>Monthly Savings:</strong> ₹${savings.toFixed(0)}</p>
    <p><strong>Break-even:</strong> ${breakeven.toFixed(1)} years</p>
  `;
}