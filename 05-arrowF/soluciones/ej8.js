
const empleados = {
    nombres: ["Antonio", "María", "Mercedes"],
    sueldos: [1230, 3000, 1145]
}

const maxSueldo = (emp) => {
    return emp.nombres[emp.sueldos.findIndex(element => element == Math.max(...emp.sueldos))]
}

const exec_ej8 = () => {
    let mensaje = "Empleados:\n"
    for (let i = 0; i < 3; i++) {
        mensaje += " - " + empleados.nombres[i] + " cobra " + empleados.sueldos[i] + "\n"
    }
    mensaje += "\n ** El sueldo más alto es el de " + maxSueldo(empleados) + " **"
    alert(mensaje)
}