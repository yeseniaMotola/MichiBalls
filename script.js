class MichiBall{

    constructor (etnia, antiguedad, sabor, vida){
        this.etnia = etnia;
        this.antiguedad = antiguedad;
        this.sabor = sabor;
        this.vida = vida
      }

      comunicarse = () => alert(`${this.etnia} te dice "miau" `);
      pedirAbrazo = () => alert(`${this.etnia} necesita un abrazo o morirá :( `);
  } 


  const michiBall1 = new MichiBall("michi fresita", 1000, "Fresa", 5000);
  const michiBall2 = new MichiBall("michi mandarinita", 1300, "Mandarina", 6000);
  const michiBall3 = new MichiBall("michi naranjita", 2000, "Naranja", 5500);
  const michiBall4 = new MichiBall("michi arandanito", 3000, "Arándano", 5800);
  const michiBall5 = new MichiBall("michi aguacatito", 2000000, "Aguacate", 6800);
  
 const michiballs = [michiBall1, michiBall2, michiBall3, michiBall4, michiBall5]
 const etniasMichiballs = [" Michi Fresita", " Michi Mandarinita", " Michi Naranjita", " Michi Arandanito", " Michi Aguacatito"]

  console.table(michiballs)

  alert(`Estas son las etnias conocidas de la raza alienígena "Michiballs": ${etniasMichiballs}`)


let michiElegido = prompt("¿Con que MichiBall deseas interactuar? (Escribir la palabra Michi seguida de la etnia, a los michiballs les encanta usar diminutivos, recuerda usarlos también para referirte a ellos).").toLowerCase

if (michiElegido = "michi fresita") {
    alert(`Has elegido a Michi Fresita, ${michiBall1.comunicarse()}`)
} else if (michiElegido = "michi mandarinita") {
    alert(`Has elegido a Michi Mandarinita, ${michiBall2.comunicarse()}`)
} else if (michiElegido = "michi naranjita") {
    alert(`Has elegido a Michi Naranjita, ${michiBall3.comunicarse()}`)
} else if (michiElegido = "michi arandanito") {
    alert(`Has elegido a Michi Arandanito, ${michiBall4.comunicarse()}`)
} else if (michiElegido = "michi aguacatito") {
    alert(`Has elegido a Michi Aguacatito, ${michiBall5.comunicarse()}`)
} else {
    alert("Ingresa una opción válida")
}

alert(`Queremos que sepas que ${michiBall3.etnia, michiBall3.pedirAbrazo}`) 

let respuesta = prompt("¿Deseas abrazar a michi Naranjita?")

if (respuesta === "si") {
    alert("Has abrazado a tu michiBall, ahora vivirá una vida larga <3")
} else {
    alert("Tu michiBall murió :( ")
}