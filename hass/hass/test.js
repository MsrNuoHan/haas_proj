function toggleSwitch(checkbox) {
    const slider = checkbox.nextElementSibling;
    if (checkbox.checked) {
        slider.style.backgroundColor = '#2196F3';
        slider.style.transform = 'translateX(26px)';
    } else {
        slider.style.backgroundColor = '#ccc';
        slider.style.transform = 'translateX(0)';
    }
}