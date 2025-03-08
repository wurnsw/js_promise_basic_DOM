'use strict';

const elem = document.querySelector('.logo');

const promise1 = new Promise((resolve) => {
  if (elem) {
    elem.addEventListener('click', () => {
      resolve();
    });
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise1.then(() => {
  const newDiv = document.createElement('div');

  newDiv.classList.add('message');
  newDiv.textContent = 'Promise was resolved!';
  document.body.append(newDiv);

  setTimeout(() => {
    newDiv.remove();
  }, 2000);
});

promise2.catch((err) => {
  const errDiv = document.createElement('div');

  errDiv.classList.add('message', 'error-message');
  errDiv.textContent = err.message;
  document.body.append(errDiv);

  setTimeout(() => {
    errDiv.remove();
  }, 2000);
});
