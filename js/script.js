

function num(buttonId, inputId, field, balancefield, isAdd) {
    if (isAdd == true) {
        document.getElementById(buttonId).addEventListener("click", function () {
            //getting deposit input value and converting into number data type
            const depositInput = document.getElementById(inputId).value;
            const depositAmount = parseFloat(depositInput);
            if (depositAmount >= 0) {
                //getting deposit field value and converting into number data type
                const depositField = document.getElementById(field).innerText;
                const depositFieldAmount = parseFloat(depositField);
                // assigning
                const totalDeposit = depositAmount + depositFieldAmount;

                // assigning total amount that is deposited or withdrawn in the balance field
                const balanceField = document.getElementById(balancefield).innerText;
                const balanceFieldAmount = parseFloat(balanceField);
                const totalBalance = balanceFieldAmount + depositAmount;
                document.getElementById(field).innerText = totalDeposit;
                document.getElementById(balancefield).innerText = totalBalance;
                document.getElementById(inputId).value = "";
            }
            else {
                document.getElementById(inputId).value = "";
            }
        })
    }

    if (isAdd == false) {
        document.getElementById(buttonId).addEventListener("click", function () {
            //getting deposit input value and converting into number data type
            const depositInput = document.getElementById(inputId).value;
            const depositAmount = parseFloat(depositInput);
            if (depositAmount >= 0) {
                //getting deposit field value and converting into number data type
                const depositField = document.getElementById(field).innerText;
                const depositFieldAmount = parseFloat(depositField);
                // assigning
                const totalDeposit = depositAmount + depositFieldAmount;

                // assigning total amount that is deposited or withdrawn in the balance field
                const balanceField = document.getElementById(balancefield).innerText;
                const balanceFieldAmount = parseFloat(balanceField);
                const totalBalance = balanceFieldAmount - depositAmount;
                if (totalBalance >= 0) {
                    document.getElementById(field).innerText = totalDeposit;
                    document.getElementById(balancefield).innerText = totalBalance;
                    document.getElementById(inputId).value = "";
                } else {
                    document.getElementById(inputId).value = "tor mare bap";
                }

            } else {
                document.getElementById(inputId).value = "";
            }
        })
    }
}







num("deposit-btn", "deposit-input", "depositField", "balanceField", true);
num("withdraw-btn", "withdraw-input", "withdrawField", "balanceField", false);


