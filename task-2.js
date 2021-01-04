/*Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback,
 а принимала всего два параметра allUsers и userName и возвращала промис.*/

/*Если Имя совпадает, то выводим всех, но у Имя меняем статус(active) на противоположный,
иначе(если Имя не найдено) - выводим просто всех без изменений
user.name === userName ? { ...user, active: !user.active } : user*/

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

/*const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user
    );

  callback(updatedUsers);
};*/

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  const promise = new Promise(resolve => resolve(updatedUsers));
  return promise;
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
