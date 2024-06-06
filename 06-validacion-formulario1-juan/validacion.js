const exp_reg = {
    nombre: /^[a-zA-ZÀ-ÿ]*$/,
    apellido: /^[a-zA-ZÀ-ÿ]*$/,
    telefono: /^[0-9]{9}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

const fieldsets = document.getElementsByTagName("fieldset")

// ERRORES DE FIELDSET
// Con esto, se crea una estructura de contenedor para mensajes de error, y se asocian a cada 
// campo específico mediante la creación de elementos "p" con nombres específicos como error_nombre, 
// error_ape1, error_ape2, etc.

const div_errs_fs1 = document.createElement("div");
div_errs_fs1.setAttribute("class", "errores");
const error_nombre = document.createElement("p");
const error_ape1 = document.createElement("p");
const error_ape2 = document.createElement("p");
const error_dir = document.createElement("p");
const error_tel = document.createElement("p");
const error_email = document.createElement("p");
const error_contra = document.createElement("p");
const error_sexo = document.createElement("p");
div_errs_fs1.appendChild(error_nombre);
div_errs_fs1.appendChild(error_ape1);
div_errs_fs1.appendChild(error_ape2);
div_errs_fs1.appendChild(error_dir);
div_errs_fs1.appendChild(error_tel);
div_errs_fs1.appendChild(error_email);
div_errs_fs1.appendChild(error_contra);
div_errs_fs1.appendChild(error_sexo);
fieldsets[0].appendChild(div_errs_fs1);

function validar_fieldset1 () {
    const nombre = document.getElementById("nombre").value;
    nombre.length === 0
        ? error_nombre.innerHTML = "El campo 'Nombre' no puede estar vacío."
        : exp_reg.nombre.test(nombre) === true
            ? error_nombre.innerHTML = ""
            : error_nombre.innerHTML = "El campo 'Nombre' contiene errores.";

    const apellido1 = document.getElementById("apellido1").value;
    apellido1.length === 0
        ? error_ape1.innerHTML = "El campo 'Primer Apellido' no puede estar vacío."
        : exp_reg.apellido.test(apellido1) === true
            ? error_ape1.innerHTML = ""
            : error_ape1.innerHTML = "El campo 'Primer Apellido' contiene errores.";

    const apellido2 = document.getElementById("apellido2").value;
    apellido2.length === 0
        ? error_ape2.innerHTML = "El campo 'Segundo Apellido' no puede estar vacío."
        : exp_reg.apellido.test(apellido2) === true
            ? error_ape2.innerHTML = ""
            : error_ape2.innerHTML = "El campo 'Segundo Apellido' contiene errores.";
        
    const direccion = document.getElementById("direccion").value;
    direccion.length === 0
        ? error_dir.innerHTML = "El campo 'Dirección' no puede estar vacío."
        : error_dir.innerHTML = "";

    const telefono = document.getElementById("telefono").value;
    telefono.length === 0
        ? error_tel.innerHTML = "El campo 'Teléfono' no puede estar vacío."
        : exp_reg.telefono.test(telefono) === true
            ? error_tel.innerHTML = ""
            : error_tel.innerHTML = "El campo 'Teléfono' contiene errores.";

    const email = document.getElementById("email").value;
    email.length === 0
        ? error_email.innerHTML = "El campo 'Email' no puede estar vacío."
        : exp_reg.email.test(email) === true
            ? error_email.innerHTML = ""
            : error_email.innerHTML = "El campo 'Email' contiene errores.";
    
    const contra = document.getElementById("contraseña").value;
    const contra_r = document.getElementById("contraseñaR").value;
    contra.length === 0 || contra_r.length === 0
        ? error_contra.innerHTML= "Los campos 'Contraseña' y 'Repetir contraseña' deben estar rellenados."
        : contra === contra_r
            ? error_contra.innerHTML = ""
            : error_contra.innerHTML = "La contraseñas no coinciden.";

    const sexo = document.getElementsByName("sexo");
    let checked = false;
    sexo.forEach((e) => { if (e.checked) checked = true });
    checked === true
        ? error_sexo.innerHTML = ""
        : error_sexo.innerHTML = "Se debe marcar una opción en la sección 'Sexo'.";
}

function validacion() {
    validar_fieldset1();
}