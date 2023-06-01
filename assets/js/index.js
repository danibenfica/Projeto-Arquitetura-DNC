var modal = document.getElementById('windowModal')
var buttonX = document.getElementById('closeButton')


function openModal() {
    modal.style.display = 'block'
    modal.classList.add('fadeIn')

}


function closeModal() {
    modal.style.display = 'none'
}
function animateCount(elementId, targetValue, duration) {
    const element = document.getElementById(elementId)
    const increment = Math.ceil(targetValue / (duration / 16))
    let newValue = 0

    function updateValue() {
        if (newValue < targetValue) {
        newValue += increment
        if (newValue > targetValue) {
            newValue = targetValue
        }
        element.textContent = formatNumber(newValue)
        if (newValue < targetValue) {
            requestAnimationFrame(updateValue)
            }
        }
    }

    updateValue()
}

function formatNumber(number) {
    const parts = number.toFixed(0).split('.')
    const integerPart = parts[0]
    let formattedNumber = ''

    for (let i = integerPart.length - 1, count = 0; i >= 0; i--, count++) {
        if (count !== 0 && count % 3 === 0) {
            formattedNumber = ',' + formattedNumber
    }
    formattedNumber = integerPart[i] + formattedNumber
    }

    return formattedNumber
}

function startCountAnimations() {
    animateCount('projectsCount', 850, 5000)
    animateCount('experienceYears', 40, 5000)
    animateCount('projectsArea', 2000000, 5000)
}

startCountAnimations()
