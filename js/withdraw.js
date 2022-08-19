
document.getElementById("btn-with").addEventListener('click', function(){

    const pBalance = document.getElementById("p-bal");
    const pBalancestring = pBalance.innerText;
    const pbalanceBal = parseFloat(pBalancestring);

    const pWithdraw = document.getElementById("p-with");
    const pWithdrawStrign = pWithdraw.innerText;
    const pWithdrawBal = parseFloat(pWithdrawStrign);

    const withdraw = document.getElementById("with");
    const withdrawSrting =withdraw.value;
    const withdrawbal =parseFloat(withdrawSrting);

    const newWithdraw = pWithdrawBal + withdrawbal;
    pWithdraw.innerText = newWithdraw;

    const finalBalance = pbalanceBal - withdrawbal;
    pBalance.innerText = finalBalance

})