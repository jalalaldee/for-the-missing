
function welcoming(){
var age = prompt('what is your age');

if (age >= 10 && age <= 80) {
  alert('Welcome to my site');
} else if (age < 10 || age >= 80) {
  msg = 'Sorry you are not allowed'
} else {
  alert('Have a nice day!');
}
}
welcoming();
