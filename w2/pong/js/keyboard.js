//array of keys
var keys = [];

//keydown code
document.addEventListener(`keydown`, (e)=>{
    keys[e.key]=true;
    //console.log(e.key)
})


//keyup code
document.addEventListener(`keyup`, (e)=>{
    keys[e.key]=false;
})

//keyup Player 2 code
document.addEventListener(`keyup2`, (e)=>{
    keys[e.key]=false;
    //console.log(e.key)
})
 
//keydown Player 2 code
document.addEventListener(`keydown2`, (e)=>{
    keys[e.key]=true;
    //console.log(e.key)
})