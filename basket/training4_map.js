

const richieSambora = {
    firstName: 'Richie',
    lastName: 'Sambora',
};
const guitarPlayer = new Map();
guitarPlayer.set(richieSambora, {
    guitarCount: 10,
    tracks: 299,
});
guitarPlayer.set(false, 'Test');
guitarPlayer.set([], 'Another value');
console.log('Итерация по значениям');
for (const value of guitarPlayer.values()) {
    console.log(value);
}
console.log('Итерация по ключам');
for (const value of guitarPlayer.keys()) {
    console.log(value);
}
console.log('Итерация по парам ключ/значение');
for (const value of guitarPlayer.entries()) {
    console.log(value);
}




