/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

const getPromise: Promise<Array<string | number>> = new Promise(resolve => {
  return resolve(['Text', 50, '435', '345', 545]);
});

getPromise.then(data => {
  console.log(data);
});

export {};
