// Variabel for å holde poengsummen og totalt antall oppgaver
let poengSummen = 0;
let totaltAntallOppgaver = 0;

document.addEventListener("DOMContentLoaded", function () {
    
    // gjør at hvis bruker klikker enter så legger den til oppgaven i listen
    oppgaveInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            leggTilOppgave();
        }
    });

    // klikkhendelse på legg til knappen, hvis knappen blir trykket, så skjer denne funksjonen
    addOppgaveButton.addEventListener("click", leggTilOppgave);

    // legger til ny oppgave i listen
    function leggTilOppgave() {
        const oppgaveTekst = oppgaveInput.value.trim();

        // Hvis oppgaveteksten ikke er tom, så oppretter den en ny oppgave i listen
        if (oppgaveTekst !== "") {

            // oppretter nytt listeelement, som oppgaven vil være inni
            const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span>${oppgaveTekst}</span>
                <button class="slett">Slett</button>
            `;

            // legger til det nye listeelementet fra "const li" og legger med oppgaven
            oppgaveListe.appendChild(li);

            // Tømmer input feltet etter at brukeren har laget en oppgave, slik at brukeren igjen kan lage ny oppgave uten å må slette alt i feltet
            oppgaveInput.value = "";

            // får slett knappen til å fjerne en oppgave
            const slettKnapp = li.querySelector(".slett");
            slettKnapp.addEventListener("click", function () {
                li.remove();
                oppdaterPoengsum();
            });

            oppdaterPoengsum();
        }
    }

    // Legg til en funksjon for å oppdatere poengsum og totalt antall oppgaver
    function oppdaterPoengsum() {
        const fullførteOppgaver = document.querySelectorAll(".task-checkbox:checked").length;
        totaltAntallOppgaver = document.querySelectorAll(".task-checkbox").length;
        poengSummen = fullførteOppgaver;

        // Oppdaterer poengSum-elementet
        const poengSum = document.getElementById("poengSum");
        poengSum.textContent = `${poengSummen}/${totaltAntallOppgaver} oppgaver ferdig`;
    }

    // Legg til en sjekk når oppgavene lastes for å oppdatere poengsummen
    oppdaterPoengsum();

    oppgaveListe.addEventListener("change", function (event) {
        if (event.target.classList.contains("task-checkbox")) {
            oppdaterPoengsum();

            // Finner elementet rett etter checkbox checkboxen som har blitt checket av
            const taskSpan = event.target.nextElementSibling;
            // lager en strek gjennom oppgaven når den har blitt checket av i checkboxen, eller fjerner streken hvis den er blitt unchecket
            taskSpan.style.textDecoration = event.target.checked ? "line-through" : "none";
        }
    });
});
