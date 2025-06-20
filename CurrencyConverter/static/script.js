const currencies = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CNY", name: "Chinese Yuan Renminbi" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "KRW", name: "South Korean Won" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "INR", name: "Indian Rupee" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "ZAR", name: "South African Rand" },
    { code: "AOA", name: "Angolan Kwanza" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "THB", name: "Thai Baht" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "UAH", name: "Ukrainian Hryvnia" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "DKK", name: "Danish Krone" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "CZK", name: "Czech Koruna" },
    { code: "ILS", name: "Israeli New Shekel" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "COP", name: "Colombian Peso" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "BDT", name: "Bangladeshi Taka" }
];

function populateSelect(selectId) {
    const select = document.getElementById(selectId);
    currencies.forEach(({ code, name }) => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${name}`;
        select.appendChild(option);
    });
}

// setting selects through js
populateSelect("from"); 
populateSelect("to");

async function convert() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const response = await fetch(`/convert?amount=${amount}&from=${from}&to=${to}`);
    const data = await response.json();

    if (data.result) 
        document.getElementById("result").innerText = `${amount} ${from} = ${data.result} ${to}`;
    else 
        document.getElementById("result").innerText = `Error: ${data.error}`;
}
