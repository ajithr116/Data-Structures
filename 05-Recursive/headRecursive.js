
/*Head Recursion: If a recursive function calling itself and that recursive call is the first statement in the function then it’s known as Head Recursion. There’s no statement, no operation before the call. The function doesn’t have to process or perform any operation at the time of calling and all operations are done at returning time.
*/


function headRecursiveFun(num) {
    if (num > 0) {
      // Recursive call is made before any other operations
      headRecursiveFun(num - 1);
      console.log("num = " + num);
    }
  }
  
  headRecursiveFun(3);
  