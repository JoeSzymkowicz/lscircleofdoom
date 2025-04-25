const image = document.getElementById('circle');

function rotateCircle() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const startRotationDate = new Date(currentYear, 9, 27); // October 27 (month is 0-indexed)

    // If today is before October 27, use the previous year's October 27
    if (today < startRotationDate) {
        startRotationDate.setFullYear(currentYear - 1);
    }

    const diff = today - startRotationDate;
    const oneDay = 1000 * 60 * 60 * 24;
    const daysSinceStart = Math.floor(diff / oneDay);

    // Calculate rotation degrees (1 full rotation = 360 degrees)
    const rotationDegrees = -(daysSinceStart / 365) * 360;
    image.style.transform = `rotate(${rotationDegrees}deg)`;
}

window.onload = rotateCircle;
