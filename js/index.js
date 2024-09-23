// go to blog page 
const blogButton = document.getElementById('blog');
blogButton.addEventListener('click', function () {
    window.location.href = './blog.html'
})
//  declare
const historyButton = document.getElementById('history-button');
const donationButton = document.getElementById('donation-button');
const donationCard = document.getElementById('card');
const history = document.getElementById('history-list');


// history button classlist
historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-primary')
    donationButton.classList.remove('bg-primary')
    donationCard.classList.add('hidden')
    history.classList.remove('hidden')


})
// donation button classlist 
donationButton.addEventListener('click', function () {
    donationButton.classList.add('bg-primary')
    historyButton.classList.remove('bg-primary')
    donationCard.classList.remove('hidden')
    history.classList.add('hidden')

})
// addEventListener One
document.getElementById('donate-button').addEventListener('click', function () {
    const inputAmount = Number(document.getElementById('input-amount').value);
    if (isNaN(inputAmount) || inputAmount < 1) {
        alert('Invalid Donation amount');
    } else {
        document.getElementById('my_modal_6').checked = true;
        const balance = Number(document.getElementById('balance').innerText);

        const newBalance = balance - inputAmount;
        document.getElementById('balance').innerText = newBalance;

        donationBalance = Number(document.getElementById('donation-balance').innerText);
        const newDonationBalance = donationBalance + inputAmount;
        document.getElementById('donation-balance').innerText = newDonationBalance;
        const historyItem = document.createElement('div');

        historyItem.className = 'border-2 p-5 rounded-lg w-11/12 mx-auto mb-5'
        historyItem.innerHTML = `
        <h1 class="font-bold text-xl"><span id="history-balance">96500</span> Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <p id="date"></p>
    `;

        const historyList = document.getElementById('history-list');
        historyList.insertBefore(historyItem, historyList.firstChild)
        document.getElementById('history-balance').innerText = inputAmount;
        const dates = 'Date : ';
        const currentDate = new Date();
        document.getElementById('date').innerText = dates + currentDate.toString();
    }



})

// addEventListener Two


document.getElementById('donate-button-2').addEventListener('click', function () {
    const inputAmount2 = Number(document.getElementById('input-amount-2').value);
    if (isNaN(inputAmount2) || inputAmount2 < 1) {
        alert('Invalid Donation amount');
    } else {
        document.getElementById('my_modal_6').checked = true;
        const balance = Number(document.getElementById('balance').innerText);

        const newBalance2 = balance - inputAmount2;
        document.getElementById('balance').innerText = newBalance2;

        donationBalance2 = Number(document.getElementById('donation-balance-2').innerText);
        const newDonationBalance2 = donationBalance2 + inputAmount2;
        document.getElementById('donation-balance-2').innerText = newDonationBalance2;
        const historyItem = document.createElement('div');

        historyItem.className = 'border-2 p-5 rounded-lg w-11/12 mx-auto mb-5'
        historyItem.innerHTML = `
        <h1 class="font-bold text-xl"><span id="history-balance">96500</span> Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
        <p id="date"></p>
    `;

        const historyList = document.getElementById('history-list');
        historyList.insertBefore(historyItem, historyList.firstChild)
        document.getElementById('history-balance').innerText = inputAmount2;
        const dates = 'Date : ';
        const currentDate = new Date();
        document.getElementById('date').innerText = dates + currentDate.toString();
    }


})

// addEventListener three
document.getElementById('donate-button-3').addEventListener('click', function () {
    const inputAmount3 = Number(document.getElementById('input-amount-3').value);
    if (isNaN(inputAmount3) || inputAmount3 < 1) {
        alert('Invalid Donation amount');
    } else {
        document.getElementById('my_modal_6').checked = true;
        const balance = Number(document.getElementById('balance').innerText);

        const newBalance3 = balance - inputAmount3;
        document.getElementById('balance').innerText = newBalance3;

        donationBalance3 = Number(document.getElementById('donation-balance-3').innerText);
        const newDonationBalance3 = donationBalance3 + inputAmount3;
        document.getElementById('donation-balance-3').innerText = newDonationBalance3;
        const historyItem = document.createElement('div');

        historyItem.className = 'border-2 p-5 rounded-lg w-11/12 mx-auto mb-5'
        historyItem.innerHTML = `
        <h1 class="font-bold text-xl"><span id="history-balance">96500</span> Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        <p id="date"></p>
    `;

        const historyList = document.getElementById('history-list');
        historyList.insertBefore(historyItem, historyList.firstChild)
        document.getElementById('history-balance').innerText = inputAmount3;
        const dates = 'Date : ';
        const currentDate = new Date();
        document.getElementById('date').innerText = dates + currentDate.toString();
    }


})

