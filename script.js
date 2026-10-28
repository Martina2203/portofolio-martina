
const formKontak = document.getElementById("formKontak");
const feedback = document.getElementById("feedback");

formKontak.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!formKontak.checkValidity()) {
        formKontak.classList.add("was-validated");
        feedback.textContent =
            "Periksa kembali nama, email, dan pesan Anda.";
        feedback.className = "mt-3 text-danger";
        return;
    }
    
    const nama = document.getElementById("nama").value.trim();

    feedback.textContent =
        "Terima kasih, " + nama +
        "! Form berhasil divalidasi.";

    feedback.className = "mt-3 text-success fw-bold";

    formKontak.reset();
    formKontak.classList.remove("was-validated");
});
