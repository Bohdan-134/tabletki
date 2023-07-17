// accordion
const headers = document.querySelectorAll('.accordion-header');

function toggleAccordion(header) {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const isActive = content.style.maxHeight;

    headers.forEach(({ classList, parentElement }) => {
        parentElement.querySelector('.accordion-content').style.maxHeight = null;
        classList.remove('active');
    });

    if (!isActive) {
        header.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

headers.forEach(header => header.addEventListener('click', () => toggleAccordion(header)));

// open main menu
const openMainContentBtn = document.getElementById('open-container-main');
const bookingContainerMain = document.querySelector('.booking-container-main');

openMainContentBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    bookingContainerMain.classList.toggle('active');
});