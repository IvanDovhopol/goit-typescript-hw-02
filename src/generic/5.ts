/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

const user: KeyValuePair<number, boolean> = {
  key: 1,
  value: true,
};

// console.log(user);

export {};
