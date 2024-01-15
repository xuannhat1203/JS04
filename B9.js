let n =+prompt("Nhap so a");
let sum = 0;
let a = 0;
let b = 1;
for(let i=1;i<=n;i++){
    if(sum <= n){
        console.log(b);
        var temp = a+ b;
        a = b;
        b = temp;
        sum = a + b;
    }
}