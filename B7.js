let sum = 0;
let a = +prompt("Nhap 1 so muon kiem tra");
for (let i = 1; i <= a / 2; i++) {
  if (a % i == 0) {
    sum += i;
  }
}
if (sum == a) {
  console.log("Day la so hoan hao");
} else {
  console.log("Day khong phai so hoan hao");
}