document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const emailInput = document.getElementById("email");
    const thanksMsg = document.getElementById("thanksMsg");
    const userEmail = document.getElementById("userEmail");
    const containerForm = document.getElementById("containerForm");

    // Email do usuário
    userEmail.textContent = emailInput.value;

    thanksMsg.style.display = "block";
    setTimeout(() => {
        thanksMsg.classList.add("show")
    }, 10);
    containerForm.style.display = "none"; 

    emailInput.value = "";
});

document.getElementById("closeMsg").addEventListener("click", function() {
    document.getElementById("thanksMsg").style.display = "none"; 
    document.getElementById("containerForm").style.display = "flex"; 

    thanksMsg.classList.remove("show");
    setTimeout(() => {
        thanksMsg.style.display ="none"
    }, 900);
  });