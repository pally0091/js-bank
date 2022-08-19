document.getElementById("btn-dep").addEventListener('click', function(){

    const deposited = document.getElementById("p-dep");
    const depositedBalString =deposited.innerText;
    const depositedBal = parseFloat(depositedBalString);
    
    const deposit =document.getElementById("dep");
    const depositBalstring = deposit.value;
    const depositBal = parseFloat(depositBalstring);

    const newDepositedBal = depositedBal + depositBal;
    deposited.innerText = newDepositedBal;

    const pBalance = document.getElementById("p-bal");
    const pBalancestring = pBalance.innerText;
    const pbalanceBal = parseFloat(pBalancestring);

    const newBalance = pbalanceBal + depositBal;
    pBalance.innerText = newBalance

})

