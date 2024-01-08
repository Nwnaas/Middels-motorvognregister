function searchTable() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("bilTable");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) { // Start i=1 for å unngå å søke i overskriftsraden
        let found = false; // Legg til denne variabelen for å sjekke om søkeordet er funnet i raden
        for (let j = 1; j < tr[i].cells.length; j++) { // Start j=1 for å unngå å søke i første celle
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break; // Avbryt løkken hvis vi har funnet en match i denne raden
                }
            }
        }
        if (found) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}