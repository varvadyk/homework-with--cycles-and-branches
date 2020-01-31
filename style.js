let n=prompt("Vvedit number");
console.log(n);
console.log(Number(n));
console.log(Number.isInteger(n));
let m=prompt("Vvedit number");
console.log(m);
console.log(Number.isInteger(m));
if (confirm("Пропускати парне число")) {
  alert("Потрібно");
} else {
  alert("Не потрібно");


}

for(let  i=0; i===n && i===m; i++)
{
    if(i % 2 == 0)
    {
        console.log("Парне число");
    }
    else{
  console.log ("не парне число")
   let sum=n+m;
   console.log("сума чисел"+sum)
    }}