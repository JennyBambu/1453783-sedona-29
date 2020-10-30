let btn = document.querySelector('.button-date-search');
let form = document.querySelector('.search-form');
let formDateIn = form.querySelector('[name="check-in"]');
let formDateOut = form.querySelector('[name="check-out"]');
let formNumberAdults = form.querySelector('[name="number-adults"]');
let formNumberKids = form.querySelector('[name="number-children"]');

let isStorageSupport = true;

form.addEventListener('submit', function(evt) {
  console.log('пустая форма');
    if (!formDateIn.value || !formDateOut.value || !formNumberAdults.value || !formNumberKids.value) {
      evt.preventDefault();
      form.classList.remove('search-form-error');
      form.offsetWidth = form.offsetWidth;
      form.classList.add('search-form-error');
}
});

btn.addEventListener('click', function() {
  form.classList.toggle('form-active');
});


