
async function getAllSells(){
    let date = new Date();
    const endDate = date.toISOString();
    date.setDate(date.getDate() - 30);
    const initialDate = date.toISOString();
    
    let vendas = [];
    vendas = await fetch(`https://sysbro.herokuapp.com/sells/${initialDate}/${endDate}`);
    return await vendas.json();
}

async function getInvoicingClients(){
    const allSells = await getAllSells();
    let invoicingClients = 0;
    for (let i = 0; i < allSells.length; i++) {
        invoicingClients += (allSells[i].quantityClients);
    }
    return invoicingClients;
}

async function getInvoicingEmploye(){
    const allSells = await getAllSells();
    let invoicingEmploye = 0;
    for (let i = 0; i < allSells.length; i++) {
        invoicingEmploye += (allSells[i].quantityEmploye);
    }
    return invoicingEmploye;
}

const clients = await getInvoicingClients();
const employe = await getInvoicingEmploye();

document.getElementById("cash").innerHTML = ((clients * 4) + (employe * 3) + ',00');