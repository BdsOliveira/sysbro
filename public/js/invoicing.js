async function init(beginDate = 0) {
    const clients = await getInvoicingClients(beginDate);
    const employe = await getInvoicingEmploye(beginDate);
    document.getElementById("cash").innerHTML = ((clients * 4) + (employe * 3) + ',00');
}

async function getAllSellsFromXDays(beginDate = 0) {
    let date = new Date();
    const endDate = date.toISOString();
    date.setDate(date.getDate() - beginDate);
    const initialDate = date.toISOString();

    let vendas = [];
    vendas = await fetch(`https://sysbro.herokuapp.com/sells/${initialDate}/${endDate}`);
    return await vendas.json();
}

async function getInvoicingClients(beginDate = 0) {
    const allSells = await getAllSellsFromXDays(beginDate);
    let invoicingClients = 0;
    for (let i = 0; i < allSells.length; i++) {
        invoicingClients += (allSells[i].quantityClients);
    }
    return invoicingClients;
}

async function getInvoicingEmploye(beginDate) {
    const allSells = await getAllSellsFromXDays(beginDate);
    let invoicingEmploye = 0;
    for (let i = 0; i < allSells.length; i++) {
        invoicingEmploye += (allSells[i].quantityEmploye);
    }
    return invoicingEmploye;
}

async function getReport() {
    let beginDate = new Date(document.getElementById("beginDate").value).toISOString()
    let endDate = new Date(document.getElementById("endDate").value).toISOString()
    let vendas = [];
    vendas = await fetch(`https://sysbro.herokuapp.com/sells/${beginDate}/${endDate}`);
    return await vendas.json();
}

function printReport() {
    getReport()
        .then(listOfSellsFromPeriod => {
            populateTable(listOfSellsFromPeriod)
        })
        .catch(error => {
            console.log(error)
        })
}

function populateTable(listOfSellsFromPeriod) {
    let compactedtList = {}
    for (let index = 0; index < listOfSellsFromPeriod.length; index++) {
        console.log(listOfSellsFromPeriod[index]);
        if (index === 0) {
            // print result on screen 
            compactedtList = listOfSellsFromPeriod[index];
        }

    }
}