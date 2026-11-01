const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const bagDrawer = document.getElementById('bagDrawer');
const overlay = document.getElementById('overlay');
const toast = document.getElementById('toast');
const bagCount = document.getElementById('bagCount');
const bagItems = document.getElementById('bagItems');
const bagHeading = document.getElementById('bagHeading');
const bagText = document.getElementById('bagText');
const bagTotal = document.getElementById('bagTotal');
const totalPrice = document.getElementById('totalPrice');
const cart = {};
const PRICE_PER_ITEM = 499;
let lastFocusedElement = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2400);
}
function countItems() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}
function renderBag() {
  const count = countItems();
  bagCount.textContent = count;
  bagItems.replaceChildren();
  let total = 0;
  Object.entries(cart).forEach(([shade, qty]) => {
    total += qty * PRICE_PER_ITEM;
    const row = document.createElement('div');
    row.className = 'bag-line';
    const name = document.createElement('span');
    name.textContent = `${shade} × ${qty}`;
    const price = document.createElement('strong');
    price.textContent = `₹${(qty * PRICE_PER_ITEM).toLocaleString('en-IN')}`;
    row.append(name, price);
    bagItems.append(row);
  });
  bagHeading.textContent = count ? 'Your glow is on its way.' : 'A little empty in here.';
  bagText.textContent = count ? 'Your selected Dew Drop shades are in your demo bag.' : 'Your next favourite gloss is just a swipe away.';
  bagTotal.hidden = !count;
  totalPrice.textContent = `₹${total.toLocaleString('en-IN')}`;
}
function openDrawer() {
  lastFocusedElement = document.activeElement;
  bagDrawer.classList.add('open');
  overlay.classList.add('show');
  bagDrawer.setAttribute('aria-hidden', 'false');
  document.getElementById('closeBag').focus();
}
function closeDrawer() {
  bagDrawer.classList.remove('open');
  overlay.classList.remove('show');
  bagDrawer.setAttribute('aria-hidden', 'true');
  if (lastFocusedElement) lastFocusedElement.focus();
}
document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', () => {
    const shade = button.dataset.shade;
    cart[shade] = (cart[shade] || 0) + 1;
    renderBag();
    showToast(`${shade} added to your Yukta demo bag.`);
  });
});
document.getElementById('openBag').addEventListener('click', openDrawer);
document.getElementById('closeBag').addEventListener('click', closeDrawer);
document.getElementById('keepShopping').addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation menu');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && bagDrawer.classList.contains('open')) closeDrawer();
});
document.getElementById('newsletterForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email');
  if (!email.checkValidity()) {
    email.reportValidity();
    return;
  }
  document.getElementById('newsletterMessage').textContent = 'Thanks! This is a demo confirmation only; your email was not sent or saved.';
  email.value = '';
});
renderBag();
