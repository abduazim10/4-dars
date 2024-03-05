let son = Math.round(Math.random()*100);
alert('Soningiz:  ' + son);
if(son % 3 ===0 && son % 5 ===0){
    alert(`${son}  FizzBuz`);
}
else if(son %5 === 0){
    alert( `${son}  Buzz`);
}
else if(son %3 === 0){
    alert(`${son}  Fizz`);
}
else{
    alert(`${son}  fizzmas buzzmas fizbuzzmas`);
}

