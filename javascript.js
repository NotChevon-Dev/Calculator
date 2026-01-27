let input = document.getElementById("input");
        let buttons = document.querySelectorAll("button");

        buttons.forEach(btn => {
            let value = btn.innerText;
            btn.addEventListener("click", () => {
                if (value === "C") {
                    input.value = "";
                } else if (value === "=") {
                    input.value = eval(input.value);
                } else {
                    input.value += value;
                }
            })
        })