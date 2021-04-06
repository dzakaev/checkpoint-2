//аново создай функцию getDayName. Функция должна всё также принимать парметр с именем day

function getDayName(day) {
  if (typeof day !== 'number')
  return 'error'
};

console.log(getDayName('hello'));
