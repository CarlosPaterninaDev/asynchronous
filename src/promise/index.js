console.log("Program Init");

const promise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("OK");
    } else {
      const error = new Error("Ocurred an error");
      reject(error);
    }
  });
};

promise()
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

console.log("Program Middle");

const promiseSetTimeOut = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("OK SET TIME OUT");
      }, 2000);
    } else {
      const error = new Error("Set Time Out error");
      reject(error);
    }
  });
};

promiseSetTimeOut()
  .then((resp) => console.log(`${resp} Promise 2 seg`))
  .catch((err) => console.error(`${err} Promise 2 seg`));

console.log("Program End");

Promise.all([promise(), promiseSetTimeOut()])
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));

Promise.race([promise(), promiseSetTimeOut()])
  .then((resp) => {
    console.log(`${resp} Race`);
  })
  .catch((err) => {
    console.log(`${err} Race`);
  });
