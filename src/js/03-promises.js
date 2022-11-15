import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

function onSubmitCreatePromise(event) {
  event.preventDefault();
  createPromise();
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success('Great');
  } else {
    Notiflix.Notify.failure('Bad');
  }
}

formEl.addEventListener('submit', onSubmitCreatePromise);
