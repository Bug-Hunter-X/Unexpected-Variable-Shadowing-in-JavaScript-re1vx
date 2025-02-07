function myFunction() {
  let x = 10;
  if (true) {
    let y = 20; 
    console.log(y); // Output: 20
  }
  console.log(x); // Output: 10
}

//Alternative solution
function myFunction2() {
  let x; 
  if (true) {
    x = 20; 
  } else {
    x = 10;
  }
  console.log(x); // Output: 20
}