let counter = 0;

document.getElementById('convertBtn').addEventListener('click', convertCurrency);

async function convertCurrency() {
    try {
        const amount = parseFloat(document.getElementById('amount').value);
        const from = document.getElementById('fromCurrency').value;
        const to = document.getElementById('toCurrency').value;

        if (isNaN(amount) || amount <= 0) {
            throw new Error('Please enter a valid positive amount');
        }

        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }

        const data = await response.json();
        const rate = data.rates[to];

        if (!rate) {
            throw new Error('Exchange rate not available for selected currencies');
        }

        const result = amount * rate;
        document.getElementById('result').textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;

        counter++;
        document.getElementById('counter').textContent = counter;
    } catch (error) {
        document.getElementById('result').textContent = 'Error: ' + error.message;
    } finally {
        console.log('Currency conversion attempt completed');
    }
}