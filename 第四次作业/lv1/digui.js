function sumTo(n){
    return(n==1)? +n : (+n + +sumTo(n-1));
    
}
let a = prompt('请输入一个整数','');
alert(sumTo(a));