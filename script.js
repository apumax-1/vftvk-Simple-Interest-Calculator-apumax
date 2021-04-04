// Compute Interest value
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest =  principal * years * rate / 100;
    var final_year = new Date().getFullYear() + parseInt(years);
    document.getElementById('result').innerHTML = `If you deposit <span class="result-number">${principal}</span>,<br /> at an interest rate of <span class="result-number">${rate}%</span>.<br /> You will receive an amount of <span class="result-number">${interest.toFixed(2)}</span>,<br /> in the year <span class="result-number">${final_year}</span>`;
}

// Updates slider value
function updateSlider()
{
    var rate = document.getElementById("rate").value;
    document.getElementById('slider_value').innerHTML = `${rate}%`;
}

// Performs form validation
function validate()
{
    const principal_element = document.getElementById("principal");
    var principal = principal_element.value;
    if (Number(principal) <= 0 || principal == "") {
        alert("Enter a positive number for amount");
        principal_element.focus();
        return false;
    }

    const year_element = document.getElementById("years");
    var year = year_element.value;
    if (year == "") {
        alert("Set year number");
        year_element.focus();
        return false;
    }

    compute();
    return false; // To prevent actual submit and page refresh.
}
