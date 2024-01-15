let a = +prompt("Nhập số a");

for(let j = 1; j <= a; j++){
    let count = 0;

    for(let i = 2; i <= Math.sqrt(j); i++){
        if(j % i == 0){
            count++;
            break;
        }
    }

    if(count == 0){
        console.log(j, "Đây là số nguyên tố");
    }
}