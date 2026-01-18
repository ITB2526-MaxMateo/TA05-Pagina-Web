window.onload = function() {
    console.log("%c SYSTEM ONLINE: Portfoli de Max Mateo carregat amb animacions.", "color: #E3B23C; font-weight: bold;");
};

function validarFormulari() {
    
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const missatge = document.getElementById("missatge").value;

    if (nom.trim() === "" || email.trim() === "" || missatge.trim() === "") {
        alert("Si us plau, omple tots els camps abans d'enviar.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Introdueix un correu electrònic vàlid.");
        return false;
    }

    alert("Gràcies per contactar, " + nom + ". El teu missatge s'ha enviat correctament.");
    return true;
}