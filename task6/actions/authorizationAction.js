document.getElementsByClassName("go-button")[0].addEventListener('click', login)
        function login() {
            if (JSON.parse(localStorage.getItem(document.getElementById("username").value)) !== document.getElementById("password").value) {
                alert("invalid login or password!")
            } else {
                localStorage.setItem("user", JSON.stringify(document.getElementById("username").value))
                location.href = "index.html"
            }

        }
