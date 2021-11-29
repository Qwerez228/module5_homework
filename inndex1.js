let meaning = prompt('Введите значение');
meaning = +meaning;
alert(typeof meaning);
if (meaning%2 === 0){
   alert('четное');
}else if (meaning%1 === 0){
    alert('не четное');
}else {
    alert('Упс, кажется, вы ошиблись');
}
if (meaning>0)
    alert(true)
else if (meaning<0)
    alert(false)
else
    alert(false)

