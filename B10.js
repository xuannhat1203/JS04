let n = +prompt("Nhập số hàng của tam giác: ");
for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}
for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = n; j >= i; j--) {
    star += "*";
  }
  console.log(star);
}