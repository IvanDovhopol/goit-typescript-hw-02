/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(data: Partial<User>): User {
  const initialValues: User = {
    name: 'Ivan',
    surname: 'Dovhopol',
    email: 'user@mail.com',
    password: 'mango',
  };

  return { ...initialValues, ...data };
}

const newUser = createOrUpdateUser({ email: 'new_user@mail.com', password: 'mango123' });
console.log(newUser);

export {};
