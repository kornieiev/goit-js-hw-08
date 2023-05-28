import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'form-data';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

window.addEventListener('load', onLoad);

refs.form.addEventListener(
  'input',
  throttle(e => {
    const { name, value } = e.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  formData = {};
}

function onLoad() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;
    formData = JSON.parse(savedData);
    Object.entries(formData).forEach(([key, val]) => {
      refs.form.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  }
}
