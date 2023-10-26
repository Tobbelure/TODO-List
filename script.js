// gjør at koden ikke starter før siden er lastet ferdig
document.addEventListener("DOMContentLoaded", function () {

    // variabler for inputen, boksen og listen jeg laget i index filen
    const oppgaveInput = document.getElementById("oppgaveInput");
    const addOppgaveButton = document.getElementById("addOppgaveButton");
    const oppgaveListe = document.getElementById("oppgaveListe");
    const poengSum = document.getElementById("poengSum");


    // legger til klikk funksjon til knappen
    addOppgaveButton.addEventListener("click", function () {
        const oppgaveTekst = oppgaveInput.value.trim();



    // sjekker om bruker har skrevet noe inn i oppgaveboksen eller om den er tom
        if (oppgaveTekst !== ""/* sjekker om det som er skrevet er ikke lik en tom string*/ ) {
            /* lager en ny liste i HTML */ const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span>${oppgaveTekst}</span>
                <button class="slett">Slett</button>
                `;
            
            oppgaveListe.appendChild(li);
            oppgaveInput.value = "";


            // legger til en slettboks som fjerner en oppgave som bruker har laget
            const slettKnapp = li.querySelector(".slett");
            slettKnapp.addEventListener("click", function () {
                li.remove();
            });
        }
    });
    // lager en linje gjennom oppgaver som er fullført/checked
    oppgaveListe.addEventListener("change", function (event) {
        if (event.target.classList.contains("task-checkbox")) {
            const taskSpan = event.target.nextElementSibling;
            taskSpan.style.textDecoration = event.target.checked ? "line-through" : "none";

        }
    });
});