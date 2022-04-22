'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`aside li a[href="#${id}"]`)
                    .parentElement.classList.add('active');
            } else {
                document.querySelector(`aside li a[href="#${id}"]`)
                    .parentElement.classList.remove('active');
            }
        });
    });
});