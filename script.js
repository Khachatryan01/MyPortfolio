


// let slide=document.querySelector('.slide')
// function changeImage(){
//     slide.src=arr[i];
//     if(i<arr.length-1){
//         i++
//     }else{

//     }
// }
// setInterval(changeImage,1000)


// ***************************************************
// let images=document.querySelectorAll('.item'); 

// let currentElIndex=0; 
// let newElIndex=0; 


// function changeSilder(){ 
//   if(newElIndex===-1){ 
//     newElIndex=images.length-1 
//   }else if(newElIndex===images.length){ 
//     newElIndex=0; 
//   } 
//   images[currentElIndex].classList.remove('item-2'); 
//   images[newElIndex].classList.add('item-2'); 
//   currentElIndex=newElIndex 
// } 

// setInterval(function(){ 
//   newElIndex++; 
//   changeSilder() 
// },1000); 
// changeSilder()



// function f1(a){
//     return((a-(a%100))/100)+1
// }
// console.log(f1(2021)+" " + "dar");

// let n  = +prompt("");
// let sum = 0
// for(let i=0;i<=n;i++){
// 	sum +=i
// }console.log(sum)


//  const body = document.querySelector("body");
//  const overlay = document.querySelector("#overlay");
//  body.addEventListener("click", () => {
//    overlay.classList.toggle("dark-mode");
//    body.classList.toggle("darkmood");
//  });
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

}

// const togglebutton = document.getElementsByClassName("dark-mode");
// const navbarlink = document.getElementsByClassName("light-mode");
// togglebutton.addEventListener("click",() =>{
//   navbarlink.classList.toggle("");
//   togglebutton.addEventListener.toggle("Lightmood")

// })
const btn = document.getElementById("myButton1");
btn.addEventListener('click', () => {
  if(btn.innerText === 'Dark') {
    btn.innerText = 'Light';
    // document.getElementById("myButton1").style.backgroundColor= "black";
    // document.getElementById("myButton1").style.color= "white";
  }
  else {
    btn.innerText = 'Dark';
    document.getElementById("myButton1").style.backgroundColor= "white";
    document.getElementById("myButton1").style.color= "black";
  }
});

