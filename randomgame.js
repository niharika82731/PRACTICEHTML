let n=prompt("enter a max value")
let random=Math.ceil(Math.random()*n)
let guess=prompt ("guess the number")
while(true)
{
    if(guess>random){
        guess=prompt("guess is big guess again")
    }
    else if(guess==random){
         console.log("congrats")
         break;
    }
    else if(guess<random)
    {
        guess=prompt("guess is small guess again")
    }
    if(guess=="quit")
    {
      console.log("i quit");
      break;
    }
}