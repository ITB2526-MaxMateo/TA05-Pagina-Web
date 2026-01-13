/**
 * Fitxer de script per al Portfoli de Max Mateo
 * Tasca TA05 - ASIX
 */

// 1. BENVINGUDA (Execució al carregar la pàgina)
window.onload = function() {
    console.log("%c SYSTEM ONLINE: Portfoli de Max Mateo carregat amb animacions.", "color: #E3B23C; font-weight: bold;");
};

// 2. VALIDACIÓ DEL FORMULARI (Gestió de dades)
// Aquesta funció s'executa quan l'usuari intenta enviar el formulari de contacte
function validarFormulari() {
    // Agafem els valors dels camps
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const missatge = document.getElementById("missatge").value;

    // Verifiquem que no estiguin buits
    if (nom.trim() === "" || email.trim() === "" || missatge.trim() === "") {
        alert("Si us plau, omple tots els camps abans d'enviar.");
        return false; // Atura l'enviament
    }

    // Verificació bàsica d'email
    if (!email.includes("@")) {
        alert("Introdueix un correu electrònic vàlid.");
        return false; // Atura l'enviament
    }

    // Si tot està bé
    alert("Gràcies per contactar, " + nom + ". El teu missatge s'ha enviat correctament.");
    return true; // Permet l'enviament
}