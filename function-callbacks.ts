/*
*
*
*/

// CALLBACK FUNCTION
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(2, 3, (result) => {
  console.log(result);
  return result; //TS does not throw error though callback function was inferred void return
  //It just tells us we are not meant to do anything with returned value from callback
})
