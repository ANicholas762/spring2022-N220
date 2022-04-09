let userInput = document.getElementById("userInput");
    userInput.style.padding = "5px";
    userInput.style.borderRadius = "4px";
    userInput.style.borderColor = "#328ba8";

    function btnClick() {
        let txt = userInput.value;

        let tip = ((15 / 100) * txt);
        tip.toFixed(2);

        let total = txt + tip;
        // total.toFixed(2);
        Math.ceil(total);

        console.log("Tip: $" + tip + " " + "Total: $" + total);
    }
