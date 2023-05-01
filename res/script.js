const toggle = document.querySelectorAll(".toggle");
toggle.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const toggleContentId = toggle.dataset.toggleid;
        const toggleContent = document.getElementById(toggleContentId);
        toggleContent.classList.toggle("active");
        const toggleButton = document.querySelectorAll(".toggle-button");
        toggleButton.forEach(button => {
            const toggleButtonId = button.dataset.toggleid;
            if (toggleButtonId == toggleContentId) {
                button.classList.toggle("active");
            }
        })

    });
});

