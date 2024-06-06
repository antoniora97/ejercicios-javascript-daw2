
const centigradosAFarenheit = (centigrados) => {
    return (centigrados * (9/5)) + 32
}

const exec_ej3 = () => {
    let temperatura = parseInt(prompt("Temperatura: "))
    alert(centigradosAFarenheit(temperatura))
}
