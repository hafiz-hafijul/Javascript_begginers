let num = parseFloat(prompt("Enter Your Exam Number : "));

if (num > 79)
  document.write("Your exam number is " + num + ". Also you have got A+.");
else if (num > 69)
  document.write("Your exam number is " + num + ". Also you have got A.");
else if (num > 59)
  document.write("Your exam number is " + num + ". Also you have got A-.");
else if (num > 49)
  document.write("Your exam number is " + num + ". Also you have got B.");
else if (num > 39)
  document.write("Your exam number is " + num + ". Also you have got C.");
else if (num >= 33)
  document.write("Your exam number is " + num + ". Also you have got D.");

if (num < 33)
  document.write("Your exam number is " + num + ". Also you have got F.");
