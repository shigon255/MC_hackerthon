function openCountdownModal() {
    var modal = document.getElementById("countdownModal");
    modal.style.display = "block";

    var countdownElement = document.getElementById("countdown");
    var remainingSeconds = 5;
    function updateCountdown() {
        countdownElement.innerText = remainingSeconds;
        remainingSeconds--;
    
        if (remainingSeconds >= 0) {
            setTimeout(updateCountdown, 1000);
        }
        else
            window.location.href = 'index.html';
    }
    
    updateCountdown();
}
function doctorLeave(){
    let btn = document.querySelector("#show");
    let infoModal = document.querySelector("#infoModal");
    let close = document.querySelector("#close");
            
    btn.addEventListener("click", function () {
        infoModal.showModal();
    });

    close.addEventListener("click", function () {
        CloseStream(0);
    });
}
function CloseStream(UID){
    window.location.href = 'index.html';
}