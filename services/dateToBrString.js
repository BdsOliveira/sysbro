function dateToBrString(brDate) {
    //let brDate = new Date();
    //brDate.setDate(brDate.getDate().toString().padStart(2, '0'));

    return weekDayToBrString(brDate.getDay()) + " " +
        brDate.getDate() + " de " + 
        monthToBrString(brDate.getMonth()) + " de " + 
        brDate.getFullYear() + " " + 
        brDate.getHours().toString().padStart(2, '0') + ":" + 
        brDate.getMinutes().toString().padStart(2, '0') + ":" + 
        brDate.getSeconds().toString().padStart(2, '0') + 
        " (Horário Padrão de Brasília)";
}

function weekDayToBrString(day) {
    if (day === 0) {
        return "Dom";
    } else if (day === 1) {
        return "Seg"
    } else if (day === 2) {
        return "Ter"
    } else if (day === 3) {
        return "Qua"
    } else if (day === 4) {
        return "Qui"
    } else if (day === 5) {
        return "Sex"
    } else if (day === 6) {
        return "Sab"
    }
}

function monthToBrString(month) {
    if (month === 0) {
        return "Jan";
    } else if (month === 1) {
        return "Fev"
    } else if (month === 2) {
        return "Mar"
    } else if (month === 3) {
        return "Abr"
    } else if (month === 4) {
        return "Mai"
    } else if (month === 5) {
        return "Jun"
    } else if (month === 6) {
        return "Jul"
    } else if (month === 7) {
        return "Ago"
    } else if (month === 8) {
        return "Set"
    } else if (month === 9) {
        return "Out"
    } else if (month === 10) {
        return "Nov"
    } else if (month === 11) {
        return "Dez"
    }
}

module.exports = dateToBrString;