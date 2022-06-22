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
        .then(response => {
            if (response === 201) {
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
    let response = await fetch("https://sysbro.herokuapp.com/sells", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newSell),
    });
    return response.status;
}

function printMessage(field = '') {
    alert(`Preencha o "${field.toUpperCase()}" para continuar`);
}

function getSellObjectFromForm() {
    let newSell = {};
    let form = document.getElementById("formCreateSell");
    newSell.nameSeller = form.elements[0].value;
    newSell.companySeller = form.elements[1].value;
    newSell.quantityClients = form.elements[2].value;
    newSell.quantityEmploye = form.elements[3].value;
    if (newSell.nameSeller === '' || newSell.nameSeller === null) {
        printMessage('Nome do Vendedor');
        return -1;
    } else if (newSell.companySeller === '' || newSell.companySeller === null) {
        printMessage('Empresa do vendedor');
        return -1;
    } else if (newSell.quantityClients === '' || newSell.quantityClients === null) {
        printMessage('Quantidade vendida para clientes');
        return -1;
    } else if (newSell.quantityEmploye === '' || newSell.quantityEmploye === null) {
        printMessage('Quantidade vendida para lojistas');
        return -1;
    }
    document.getElementById("formCreateSell").reset();
    return newSell;
}