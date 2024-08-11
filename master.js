document.getElementById('calculate-btn').addEventListener('click',function(){
    const inputOne = document.getElementById('food').value;
    const inputTwo = document.getElementById('rent').value;
    const inputThree = document.getElementById('clothes').value;
    const total = inputOne*1 +  inputTwo*1 +  inputThree*1 ;
document.getElementById('total').innerText = total;  
const income = document.getElementById('Income').value;
    const totalBalance = income - total ;
document.getElementById('balance-now').innerText = totalBalance;  
})
document.getElementById('save-btn').addEventListener('click',function(){
    const saveInput = document.getElementById('save').value;
    const saveTotalMoney = saveInput * 1 * 100;
    document.getElementById('save-amount').innerText= saveTotalMoney;
    const remaingBalance = saveTotalMoney + 500;
    document.getElementById('Remaining-Balance').innerText = remaingBalance;  
})
