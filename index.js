//let alumnos = ["eliana", "edisson", "kristian", "james", "jairo", "julian", "frandy", "jorge", "gustavo", "erick", "jesus", "luis", "hector", "patricia"];
//let alumnos = ["Alejandro", "Rodrigo", "Alejo", "Claudio", "Debora", "Felipe", "Francisco", "Mau", "Patricio", "Samuel", "Sussan", "Pauline"];
//let alumnos = ["Alberto", "Carlos P", "Carlos V", "Giannina", "Jimena", "Jonatan", "Jose Miguel", "Karina", "Mau", "Mauricio", "Max", "Neriannys"];
//let alumnos = ["Cristofer", "Elsa", "Felipe", "Gabriel", "Luis Caro", "Mariandris", "Mauricio", "Nico", "Rodrigo", "Victor"]
//let alumnos = ["Cristofer", "Elsa", "Felipe", "Gabriel", "Manuel", "Mariandris", "Nico", "Rodrigo", "Victor", "Luis Castillo"];

let alumnos = ["Agustin", "Elsa", "Benjamin", "Gonzalo", "Mauricio", "Ricardo", "Yurbanis", "Alan"]; // Ginnina, Josefa

const generarEquipos = (alumnos = [], nroEquipos = 0) => {
    let equipos = [];
    let integrantes = alumnos.length / nroEquipos;
    if (alumnos.length % nroEquipos !== 0) console.log(`No puede generar ${nroEquipos} con ${alumnos.length} alumnos`);

    for (let i = 0; i < nroEquipos; i++) {
        console.log(`Armando equipo nro ${i + 1}`);
        let miembros = {}
        for (let j = 0; j < integrantes; j++) {
            let rn = Math.floor(Math.random() * alumnos.length);
            if (equipos.length > 0) {
                let encontrado = equipos.find((equipo) => equipo.hasOwnProperty(alumnos[rn]))
                if (encontrado) {
                    j--;
                } else {
                    if (miembros.hasOwnProperty(alumnos[rn])) {
                        j--;
                    } else {
                        miembros[alumnos[rn]] = 'activo';
                    }
                }
            } else {
                if (miembros.hasOwnProperty(alumnos[rn])) {
                    j--;
                } else {
                    miembros[alumnos[rn]] = 'activo';
                }
            }
        }
        equipos.push(miembros);
    }

    if (equipos.length > 0) { }
    equipos.forEach((equipo, index) => {
        console.log(`Equipo nro ${index + 1}`);
        console.log(equipo)
    })
}

generarEquipos(alumnos, 4);