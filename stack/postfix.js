function stack(expression){
    let stack = [];
    if(expression.length<=0){
        return arr;
    }
    for(let i=0;i<expression.length;i++){
        if(!isNaN(expression[i])){
            stack.push(Number(expression[i]));
        }else{
            let val1 = stack.pop();
            let val2 = stack.pop();
            if(expression[i]=="+"){
                stack.push(val2+val1);
            }else if(expression[i]=="-"){
                stack.push(val2-val1);
            }else if(expression[i]=="*"){
                stack.push(val2*val1);
            }else if(expression[i]=="/"){
                stack.push(val2/val1);
            }
        }
    }
    return stack.pop();
}


console.log(stack("231*+9-")); 

