const blogButton = document.getElementById('blog');
blogButton.addEventListener('click', function () {
    window.location.href = './blog.html'
})

const historyButton = document.getElementById('history-button');
const donationButton = document.getElementById('donation-button');
const donationCard = document.getElementById('card');


historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-primary')
    donationButton.classList.remove('bg-primary')
    donationCard.classList.add('hidden')
})
donationButton.addEventListener('click', function () {
    donationButton.classList.add('bg-primary')
    historyButton.classList.remove('bg-primary')
    donationCard.classList.remove('hidden')

})
document.getElementById('donate-button').addEventListener('click', function () {
    const inputAmount = Number(document.getElementById('input-amount').value);
    if (isNaN(inputAmount) || inputAmount < 1) {
        alert('Invalid Donation amount');
    } else {
        const balance = Number(document.getElementById('balance').innerText);

        const newBalance = balance - inputAmount;
        document.getElementById('balance').innerText = newBalance;

        donationBalance = Number(document.getElementById('donation-balance').innerText);
        const newDonationBalance = donationBalance + inputAmount;
        document.getElementById('donation-balance').innerText = newDonationBalance;
    }




})

