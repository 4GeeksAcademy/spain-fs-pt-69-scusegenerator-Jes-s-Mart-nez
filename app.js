function generarExcusa() {
    let who = ["Mi perro", "Mi abuela", "Mi mejor amigo", "El vecino de al lado"];
    let action = ["corrió", "saltó", "nadó", "cantó"];
    let what = ["Mis deberes", "Mi coche", "Mi teléfono", "Mi computadora"];
    let when = [
      "Estudiar",
      "Hacer ejercicio",
      "Leer un libro",
      "Jugar videojuegos",
      "Ver televisión"
    ];
    let eleccionWho = who[Math.floor(Math.random() * who.length)];
    let eleccionAction = action[Math.floor(Math.random() * action.length)];
    let eleccionWhat = what[Math.floor(Math.random() * what.length)];
    let eleccionWhen = when[Math.floor(Math.random() * when.length)];
    let frase = document.getElementById("excusa");
    frase.innerHTML = `${eleccionWho} ${eleccionAction} con ${eleccionWhat} cuando ${eleccionWhen}.`;
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "Nueva Excusa Generada";
  }
  