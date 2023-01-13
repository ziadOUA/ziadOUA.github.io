const logo_mask = document.getElementById('logo-wrapper')
const logo_image = document.getElementById('logo_image')
let deg_value = 0

function rotateMask() {
    logo_mask.style.transform = 'rotate(' + deg_value + 'deg' + ')'
    if (deg_value === 360) {
        deg_value = 0
    }
    deg_value += 0.1
}

function negateRotationLogo() {
    logo_image.style.transform = 'rotate(' + (-1 * deg_value) + 'deg' + ')'
}

function updateStylingLogo() {
    rotateMask()
    negateRotationLogo()
    setTimeout(updateStylingLogo, 10)
}

updateStylingLogo()