let a = 'true';
if (typeof(a) === 'string'){
    console.log(a + ' - строка');
} else if (typeof(a) === 'boolean') {
    console.log(a + ' - логический тип');
} else if (typeof(a) === 'number') {
    console.log(a + ' - число');
} else {
    console.log('Тип а не определен');
}