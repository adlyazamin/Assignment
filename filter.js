const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.des-eff');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Highlight active button
        buttons.forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-primary');
        });
        button.classList.remove('btn-outline-primary');
        button.classList.add('btn-primary');

        const category = button.getAttribute('data-category');

        // Show/hide cards
        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".des-eff");

    // Add click event to each button
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 1. VISUAL: Reset ALL buttons to hollow (outline) style
            filterButtons.forEach(btn => {
                btn.classList.remove("btn-primary");       // Remove filled blue
                btn.classList.add("btn-outline-primary");  // Add hollow outline
                btn.classList.remove("active");            // Remove active flag
            });

            // 2. VISUAL: Make the CLICKED button filled (solid blue)
            this.classList.remove("btn-outline-primary");
            this.classList.add("btn-primary");
            this.classList.add("active");

            // 3. LOGIC: Filter the cards
            const category = this.getAttribute("data-category");
            
            cards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                
                // Show if category matches OR if 'all' is selected
                if (category === "all" || cardCategory === category) {
                    card.style.display = "block";
                    // Add animation class if you want (optional)
                    card.classList.add("animate__animated", "animate__fadeIn");
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});