// Variabel for å holde poengsummen og totalt antall oppgaver
let poengSummen = 0;
let totaltAntallOppgaver = 0;

document.addEventListener("DOMContentLoaded", function () {
    // ... (eksisterende kode)

    // Legg til en funksjon for å oppdatere poengsum og totalt antall oppgaver
    function oppdaterPoengsum() {
        const fullførteOppgaver = document.querySelectorAll(".task-checkbox:checked").length;
        totaltAntallOppgaver = document.querySelectorAll(".task-checkbox").length;
        poengSummen = fullførteOppgaver;
        poengSum.textContent = `${poengSummen}/${totaltAntallOppgaver} oppgaver ferdig`;
    }

    // Legg til en sjekk når oppgavene lastes for å oppdatere poengsummen
    oppdaterPoengsum();

    oppgaveListe.addEventListener("change", function (event) {
        if (event.target.classList.contains("task-checkbox")) {
            oppdaterPoengsum();
            const taskSpan = event.target.nextElementSibling;
            taskSpan.style.textDecoration = event.target.checked ? "line-through" : "none";
        }
    });

    // legger til checkbokser og slett knapper
    addOppgaveButton.addEventListener("click", function () {
        const oppgaveTekst = oppgaveInput.value.trim();

        if (oppgaveTekst !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span>${oppgaveTekst}</span>
                <button class="slett">Slett</button>
            `;

            oppgaveListe.appendChild(li);
            oppgaveInput.value = "";

            // får slett knappen til å fjerne en oppgave
            const slettKnapp = li.querySelector(".slett");
            slettKnapp.addEventListener("click", function () {
                li.remove();
                oppdaterPoengsum();
            });
        }
    });
});
