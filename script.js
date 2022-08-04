class MichiBall{

    constructor (etnia, antiguedad, sabor, vida){
        this.etnia = etnia;
        this.antiguedad = antiguedad;
        this.sabor = sabor;
        this.vida = vida
      }

      comunicarse = () => console.log(`${this.etnia} te dice "miau" `);
      pedirAbrazo = () => console.log(`${this.etnia} necesita un abrazo o morirá :( `);
  } 


  const michiBall1 = new MichiBall("michi fresita", 1000, "Fresita", 5000);
  const michiBall2 = new MichiBall("michi mandarinita", 1300, "Mandarinita", 6000);
  const michiBall3 = new MichiBall("michi naranjita", 2000, "Naranjita", );
  const michiBall4 = new MichiBall("michi arandanito", 3000, "Arandanito");
  const michiBall5 = new MichiBall("michi aguacatito", 2000000, "Aguacatito");
  
 console.log(michiBall1, michiBall2, michiBall3, michiBall4, michiBall5)
  
  michiBall3.comunicarse()
  michiBall4.pedirAbrazo()
  michiBall2.comunicarse()
  michiBall5.pedirAbrazo()

  
  