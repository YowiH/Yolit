const searchbarInput = document.getElementById("searchbar-input");
searchbarInput.addEventListener("input", text => {
    const searchTerm = text.target.value.toLowerCase();
    console.log(searchTerm);
    
    const lits = document.querySelectorAll(".lit");
    lits.forEach(lit => {
        litText = lit.textContent.toLowerCase();
        if (litText.includes(searchTerm)) {
            lit.style.display = "block";
        } else {
            lit.style.display = "none";
        }
    });
});