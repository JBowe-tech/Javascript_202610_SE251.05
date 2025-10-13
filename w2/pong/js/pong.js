//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)
var player = [];
var pad = [];
var scoreBoard = document.querySelectorAll(`#score div`);

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97

//Player Setup
player[0] = new Player(`Player_1`, new Box());
player[1] = new Player(`Player_2`, new Box());

//Paddles stored to pad
pad[0] = player[0].pad;
pad[1] = player[1].pad;

//p1 setup
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2

//p2 setup
pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width - pad[1].w/2
pad[1].color = `purple`

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }

    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }

     if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }
    
    
    //applies friction
    pad[0].vy *= fy
    pad[1].vy *= fy

    //player movement loop
    for (let i = 0; i < pad.length; i++){
        pad[i].move();
    }
    

    //ball movement
    ball.move()

    //player collision loop
    for (let i = 0; i < pad.length; i++){
        if(pad[i].y < pad[i].h/2) pad[i].y = pad[i].h/2;
        if(pad[i].y > c.height - pad[i].h/2) pad[i].y = c.height-pad[i].h/2   
   
    }
    

    //p2 Collision
    if(pad[1].y < 0+pad[1].h/2)
    {
        pad[1].y = 0+pad[1].h/2
    }  
     if(pad[1].y > c.height-pad[1].h/2)
    {
        pad[1].y = c.height-pad[1].h/2
    }

    //ball collision 
    if(ball.x < 0)
    {//player 2 scores
        player[1].score++;
        console.log(player[0].score + ` | ` + player[1].score);

        ball.x = c.width/2
        ball.y  =c.height/2
    }
    if(ball.x > c.width)
    {//player 1 scores
        player[0].score++;
        console.log(player[0].score + ` | ` + player[1].score);

        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y < 0)
    {
    
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //p1 with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    //p2 with ball collision
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
  for (let i = 0; i < pad.length; i++){
        pad[i].draw();
    }
    ball.draw()

    for(let i = 0; i < scoreBoard.length; i++){
        scoreBoard[i].innerHTML = player[i].score;
    }
}
