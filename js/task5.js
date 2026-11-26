// 5. Display grades based on marks (A, B, C, D, F).
let mark = parseInt(prompt("Enter your mark:"));
if(mark >= 80){
  console.log("Your grade is A.");
}
else if(mark >= 60){
  console.log("Your grade is B.");
}
else if(mark >= 40){
  console.log("Your grade is C.");
}
else if(mark >= 20){
  console.log("Your grade is D.");
}
else{
  console.log("You are fail.")
}