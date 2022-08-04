const BROWNIE_PRICE = 5
const BROWNIE_COMMISSION = 1
const URL_API = "https://sysbro.herokuapp.com/sells"

async function init(beginDate = 0) {
    const clients = await getInvoicingClients(beginDate);
    document.getElementById("cash").innerHTML = ((clients * BROWNIE_PRICE) + ',00');
}

async function getAllSellsFromXDays(beginDate = 0) {
    let date = new Date();
    const endDate = date.toISOString();
    date.setDate(date.getDate() - beginDate);
    const initialDate = date.toISOString();

    let vendas = [];
    vendas = await fetch(`${URL_API}/${initialDate}/${endDate}`);
    return await vendas.json();
}

async function getInvoicingClients(beginDate = 0) {
    const allSells = await getAllSellsFromXDays(beginDate);
    let invoicingClients = 0;
    for (let i = 0; i < allSells.length; i++) {
        invoicingClients += (allSells[i].quantitySold);
    }
    return invoicingClients;
}

async function getReport() {
    let beginDate = new Date(document.getElementById("beginDate").value).toISOString()
    let endDate = new Date(document.getElementById("endDate").value).toISOString()
    let vendas = [];
    vendas = await fetch(`${URL_API}/${beginDate}/${endDate}`);
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
    if (listOfSellsFromPeriod.length < 1) {
        alert("Não existem vendas cadastradas no período.");
    } else {
        for (let index = 0; index < listOfSellsFromPeriod.length; index++) {
            addNewTrOnTable(listOfSellsFromPeriod[index], index + 1)
        }
    }
}

function addNewTrOnTable(row, numberRow) {
    createTrTag(numberRow)
    addNewDataTable(row.nameSeller, numberRow)
    addNewDataTable(`R$ ${row.quantitySold * BROWNIE_PRICE},00`, numberRow)
    addNewDataTable(`R$ ${row.quantitySold * BROWNIE_COMMISSION},00`, numberRow)
}

function createTrTag(numberRow) {
    let tableRow = document.createElement("tr")
    tableRow.id = `row${numberRow}`
    document.getElementById("tableBody").appendChild(tableRow)
}

function addNewDataTable(data, numberRow) {
    let tableData = document.createElement("td")
    tableData.innerHTML = data;
    document.getElementById(`row${numberRow}`).appendChild(tableData)
}