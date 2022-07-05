function alibaba() {

  const password = "Vung oi mo ra";

  let input = null;
  
  do {

    input = prompt("please enter your words here: ");
    if (input != password) {
    alert("your password is incorrect. Please try again.");
    }
   
  } while (input != password);

  alert("Congratulation!. The door is available. Come in please.");

}


