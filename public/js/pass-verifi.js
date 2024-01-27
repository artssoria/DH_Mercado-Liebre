window.onload = function () {
    document.querySelector(".form-register").addEventListener("submit", function(event) {
        var pwd = document.getElementById("pwd");
        var confirmPwd = document.getElementById("confirmPwd").value;
        var togglePwd = document.getElementById("togglePwd");

        if (pwd.value !== confirmPwd) {
            pwd.style.borderColor = "red";
            confirmPwd.style.borderColor = "red";
            event.preventDefault();
        } else {
            pwd.style.borderColor = "green";
            confirmPwd.style.borderColor = "green";
        }


        
    });
}
