let c = document.querySelector(`canvas`)
let ctx = c.getContext(`2d`)

let timer = setInterval(main, 1000/60)


let box = []

for(let i=0; i<50; i++)
    {
        box[i] = new GameObject()
        box[i].x = Math.random()*c.width
        box[i].y = Math.random()*c.height
        box[i].vy = Math.random()*(15-5)+5
        box[i].w = box[i].vy;
        box[i].h = box[i].w;


    }

// let x = 100
// let y = 100
// let w = 100
// let h = 100
// let color = `purple`
// let vx = 7
// let vy = 0
// x+=vx

//    if(x > c.width-w)
//    {
//        vx = -vx
//    }
//    if(x < 0)
//    {
//        vx = -vx
//    }

function main()
{
    ctx.clearRect(0,0, c.width, c.height)

    for(let i=0; i<box.length; i++)
    {
        box[i].move()
         box[i].render()

         if(box[i].y > c.height)
         {
            box[i].y = -800
         }
    }
   
    

}