function showSuccessfullMessage() {
    alert("Venda cadastrada com sucesso.");
}
function showFailMessage() {
    alert("Não foi possivel cadastrar a venda");
}
async function resquest() {
    const sell = getSellObjectFromForm();
    if (sell === -1) {
        showFailMessage();
        return;
    }
    createSell(sell)
        .then(status => {
            if (status === 201) {
                showSuccessfullMessage()
            } else {
                showFailMessage()
            }
        })
        .catch(data => {
            console.log(data)
        })
}
async function createSell(newSell = {}) {
    let sellObject = {
        "nameSeller": `${newSell.nameSeller}`,
        "companySeller": `${newSell.companySeller}`,
        "quantitySold": `${newSell.quantitySold}`,
        "date": `${new Date(newSell.date).toISOString()}`,
    }
    let response = await fetch("https://sysbro.herokuapp.com/sells", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(sellObject),
    });
    return response.status;
}
function printMessage(field = '') {
    alert(`Preencha o campo '"${field.toUpperCase()}"' para continuar`);
}
function getSellObjectFromForm() {
    let newSell = {};
    let form = document.getElementById("formCreateSell");
    newSell.nameSeller = form.elements[0].value;
    newSell.companySeller = form.elements[1].value;
    newSell.quantitySold = form.elements[2].value;
    newSell.date = form.elements[3].value;
    if (newSell.nameSeller === '' || newSell.nameSeller === null) {
        printMessage('Nome do Vendedor');
        return -1;
    } else if (newSell.companySeller === '' || newSell.companySeller === null) {
        printMessage('Empresa do vendedor');
        return -1;
    } else if (newSell.quantitySold === '' || newSell.quantitySold === null) {
        printMessage('Quantidade vendida');
        return -1;
    } else if (newSell.date === '' || newSell.date === null) {
        printMessage('Data da Venda');
        return -1;
    }
    document.getElementById("formCreateSell").reset();
    return newSell;
}