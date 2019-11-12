const widget = document.querySelector('.button-area');
const wlacznik = document.getElementById('wlacznik');
const content = document.getElementById('content');
const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}


// function descendingOrder(n){
//   let result = []
//   let numberToString = n.toString();
//   let array = Array.from(numberToString);
//   let arrayOfNumbers = array.map(item => parseInt(item));
//   let biggest1 = Math.max(...arrayOfNumbers);
//   result.push(biggest1);
//   let smallerArray1 = arrayOfNumbers.filter( item => item !== biggest1);
//
//   let biggest2 = Math.max(...smallerArray1);
//   result.push(biggest2);
//   let smallerArray2 = arrayOfNumbers.filter( item => item !== biggest2);
//
//   let biggest3 = Math.max(...smallerArray2);
//   result.push(biggest3);
//   let smallerArray3 = arrayOfNumbers.filter( item => item !== biggest3);
//
//   console.log(smallerArray3);
//   console.log(result);
// }
//
// descendingOrder(123);


let currentSetting = localStorage.getItem('stan');
console.log('Currently twoj ulubiony switch is: ' +  currentSetting);

if ( currentSetting == 'on' ) {
  wlacznik.className = 'circle2';
} else {
  wlacznik.className = 'circle';
}

widget.addEventListener('click', () => {
  if ( wlacznik.className == 'circle' ) {
    wlacznik.className = 'circle2';
    widget.style.backgroundColor = 'green';
    widget.style.transition = '.5s ease-out .2s';
    localStorage.setItem('stan', 'on');
    let currentSetting = localStorage.getItem('stan');
  } else {
    wlacznik.className = 'circle';
    widget.style.backgroundColor = 'red';
    localStorage.setItem('stan', 'off');
    let currentSetting = localStorage.getItem('stan');
  }
});
