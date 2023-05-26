import throttle from 'lodash.throttle';
import '../../src/css/common.css';
import '../../src/css/03-feedback.css';

const STORAGE_EMAIL = 'email';
const STORAGE_MESSAGE = 'message';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', e => {
  console.log('e.target.name:', e.target.name);
  console.log('e.target.value:', e.target.value);
  formData[e.target.name] = e.target.value;
  if (e.target.name === 'message') {
    localStorage.setItem('message', e.target.value);
  }
  if (e.target.name === 'email') {
    localStorage.setItem('email', e.target.value);
  }
  return formData;
});

filledEmailArea(formData);

console.log(formData);

refs.email.addEventListener('input', throttle(onEmailInputSubmit, 500));
refs.textarea.addEventListener('input', throttle(onMessageInputSubmit, 500));

filledMessageArea();

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset(); // сбрасываем значение формы
  localStorage.removeItem(STORAGE_EMAIL);
  localStorage.removeItem(STORAGE_MESSAGE);
}

function onEmailInputSubmit(evt) {
  const value = evt.target.value;
  localStorage.setItem(STORAGE_EMAIL, value);
}

function filledEmailArea(evt) {
  const email = localStorage.getItem(STORAGE_EMAIL);
  if (email) {
    refs.email.value = email;
  }

  const savedMessage = localStorage.getItem(STORAGE_EMAIL);
  if (savedMessage) {
    refs.email.value = savedMessage;
  }
}

function onMessageInputSubmit(evt) {
  const value = evt.target.value;
  localStorage.setItem(STORAGE_MESSAGE, value);
}

function filledMessageArea(evt) {
  const savedMessage = localStorage.getItem(STORAGE_MESSAGE);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
