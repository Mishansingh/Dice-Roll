const dice= document.getElementById("btn");

function diceRoll(){
    var n =Math.random();
    var randomNumber1=Math.floor(n*6+1);
    var randomdiceImage1="images/" + "dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src",randomdiceImage1);

    var m =Math.random();
    var randomNumber2=Math.floor(m*6+1);
    var randomdiceImage2="images/" + "dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src",randomdiceImage2);

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player 1 win !🥳";
    }
        else if(randomNumber1<randomNumber2){
            document.querySelector("h1").innerHTML=" Player 2 win ! 🥳";
        }
    else{
        document.querySelector("h1").innerHTML="🙌 Draw !";
    }
    h1.innerHTML="play again";
}







// document.querySelector(".img1").addEventListener("click",handleclick1);
// function handleclick1(){
// var n =Math.random();
// var randomNumber1=Math.floor(n*6+1);
// var randomdiceImage1="images/" + "dice" + randomNumber1 + ".png";
// document.querySelector(".img1").setAttribute("src",randomdiceImage1);
// return randomNumber1;
// }

// document.querySelector(".img2").addEventListener("click",handleclick2);
// function handleclick2(){
// var m =Math.random();
// var randomNumber2=Math.floor(m*6+1);
// var randomdiceImage2="images/" + "dice" + randomNumber2 + ".png";
// document.querySelector(".img2").setAttribute("src",randomdiceImage2);
// return randomNumber2;
// }
// var p=handleclick1();
// var q=handleclick2();

// function ans(p,q){
//     if(p>q){
//         document.querySelector("h1").innerHTML="Player 1 win!🥳";
//     }
//         else if(p<q){
//             document.querySelector("h1").innerHTML=" Player 2 win! 🥳";
//         }
//     else{
//         document.querySelector("h1").innerHTML="🙌 Draw!";
//     }
//     h1.innerHTML="play again";
// }

// ans(p,q);


//  function random(){
//     var n =Math.random();
//      var randomNumber1=Math.floor(n*6+1);
//      return randomNumber1;
//  }
//  var p = random();
//  alert(p);