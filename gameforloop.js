let f="salar";
let guess=prompt("guess my fav movie")
while(guess!=f)
{
    if(guess=="quit")
        break;
   guess=prompt("wrong answer enter again");
}
if(guess==f)
    console.log("congrats");
else{
    console.log("you have quit");
}