

// Расчёт дохода банковского депозита.
// Расчёт эффективной процентной ставки.

let depositAmount = 100000;
let interestRate = 9.5;
let depositTerm = 36;
let sum = depositAmount;
for(let i = 1; i <= depositTerm; i++) {
    sum += ((interestRate / 1200) * sum);
}
let withdrawalAmount = sum.toFixed(2);
console.log('Через ' + depositTerm + ' месяцев на счету будет ' + withdrawalAmount + ' руб.коп.');
let effectiveInterestRate = (((((withdrawalAmount - depositAmount) / depositAmount) * 100) / depositTerm) * 12).toFixed(2);
console.log('Эффективная процентная ставка ' + effectiveInterestRate + ' процентов годовых.');



