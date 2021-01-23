// TODO: Callbacks

function suma(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(4, 2, suma));

function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 2000);
}


function printDate(dateNow) {
  console.log(dateNow);
}


date(printDate);