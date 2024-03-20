
/*
Direct Recursion: These can be further categorized into four types:
Tail Recursion: If a recursive function calling itself and that recursive call is the last statement in the function then it’s known as Tail Recursion. After that call the recursive function performs nothing. The function has to process or perform any operation at the time of calling and it does nothing at returning time.

 in simpler terms, tail recursion is like moving forward on your journey while throwing away any unnecessary baggage from previous steps. It's more efficient because you don't waste time and energy carrying unnecessary stuff with you.
*/

function fun(num){
    if(num>0){
        console.log("num = " + num);
        fun(num-1);
    }
}

fun(3);
