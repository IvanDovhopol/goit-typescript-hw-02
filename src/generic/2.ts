/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type Compare = Pick<AllType, 'name' | 'position' | 'color' | 'weight'>;

function compare(top: Compare, bottom: Compare): Compare {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const a: Compare = { name: 'first', color: 'second', position: 1, weight: 1500 };
const b: Compare = { name: 'first', color: 'second', position: 2, weight: 3000 };
// console.log(compare(a, b));

export {};
