const menu = document.getElementById('menu-bar');
const side = document.getElementById('sidebar');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const featured = document.getElementById('featured');
const company = document.getElementById('company');
const sidefeatures = document.getElementById('side-feature');
const sidcompany = document.getElementById('side-company');
const featurelinks = document.querySelectorAll('item');
const companylinks = document.querySelector('.company-links');


menu.addEventListener('click', () => {
    side.classList.toggle('hide');
})

featured.addEventListener('mouseover', () => {
    box1.classList.toggle('show');
})

company.addEventListener('mouseover', () => {
    box2.classList.toggle('show');
})

sidefeatures.addEventListener('click', () => {
    featurelinks.classList.toggle('none');
})