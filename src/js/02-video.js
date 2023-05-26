const number = 36;
localStorage.setItem('number', 555);
localStorage.setItem('ABC', 'qweqweqweqwe');
console.log('localStorage:', localStorage.getItem('ABC'));

const user = {
  name: 'Dima',
  age: 36,
};
console.log('object:', user);

const userJSON = JSON.stringify(user);
console.log('JSON:', userJSON);

const parseUser = JSON.parse(userJSON);
console.log('parseUser:', parseUser);
localStorage.setItem('data', userJSON);

console.log(JSON.parse(localStorage.getItem('data')));
