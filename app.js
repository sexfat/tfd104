console.log('webpack ok');



const x = (x , y) => x * y ;
document.getElementById('app').innerHTML = x(10 , 30)


// jquery import
import $ from 'jquery';
$('body').css('background-color' , 'yellow');


//  gsap  import
import {gsap} from 'gsap';
gsap.to('.box' , {
  x: 200,
  y: 100,
  rotation : 180,
  backgroundColor : 'red'


})



