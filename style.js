let n=prompt("Vvedit number N",10);
console.log(n);
console.log(!Number.isInteger(n));
let m=prompt("Vvedit number М ",100);
console.log(m);
console.log(!Number.isInteger(m));
let check=confirm("Пропускати парне число?");
if (check===true) {
  alert("Потрібно пропустити");
} else {
  alert("Не потрібно пропускати ");


}
let result_numbers = 0;

for(let i=n; i<=m; i++)
{
  if (check===true) {
    if(i % 2 == 0)
    { 
      continue;
      
        console.log("Парне число");
    }
    result_numbers += i;
  }

    else{
      result_numbers += i;
  console.log ("не парне число")
}
  
}
console.log ("Result:" + result_numbers);
document.writeln(`<h1 style=color:red;>Цикли і розгалуження</h1>`);
document.writeln(`Користувач ввів такі значення для N =${n} і M=${m}<br>`);
document.writeln(`Сума чисел буде: ${result_numbers}`);

