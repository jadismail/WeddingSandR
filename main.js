const daysRemaing = document.getElementById('day')
const hoursRemaining = document.getElementById('hour')
const minutesRemaining = document.getElementById('min')
const secondsRemaining = document.getElementById('sec')

const marriedDate = new Date('Jun 5, 2022 17:00:00').getTime()

function countDown() {
    const currentDate = new Date().getTime()
    const remainingTime = marriedDate - currentDate

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const days = Math.floor(remainingTime / day)
    const hours = Math.floor((remainingTime % day) / hour)
    const minutes = Math.floor((remainingTime % hour) / minute)
    const seconds = Math.floor((remainingTime % minute) / second)

    daysRemaing.innerHTML = days
    hoursRemaining.innerHTML = hours
    minutesRemaining.innerHTML = minutes
    secondsRemaining.innerHTML = seconds

    setTimeout(countDown, 1000)
}
countDown()
