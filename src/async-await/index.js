const asyncFunction = async () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve(console.log("Process Async"));
        }, 2000)
      : reject(new Error("Error async"));
  });
};

const callAsync = async () => {
  try {
    const something = await asyncFunction();
    console.log(something);
  } catch {
    console.log(error);
  }
};

console.log("Before 1");
callAsync();
console.log("After 1");

(async () => {
  console.log("Before 2");
  await callAsync();
  console.log("After 2");
})();
