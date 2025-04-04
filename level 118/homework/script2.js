        let count = 0;
        let counterDiv = document.getElementById("counter");

        function increase() {
            if (count < 10) {
                count++;
                counterDiv.textContent = count;
            } else {
                alert("რიცხვი ვერ გაიზრდება 10-ზე მეტს!");
            }
        }

        function decrease() {
            if (count > 0) {
                count--;
                counterDiv.textContent = count;
            } else {
                alert("რიცხვი ვერ შემცირდება 0-ზე ნაკლებზე!");
            }
        }