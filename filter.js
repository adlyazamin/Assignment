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
