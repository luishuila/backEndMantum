import { TipoAnimalModel } from "../../model/TipoAnimales.Models"
import { DescripcionModel } from '../../model/AnimalDescripciones.Models';
import { AnimalModel } from "../../model/Animales.Models";




export class AnimalesSeeds
{
    constructor(){
        this.Seeds()
    }

  async  Seeds(){
        const TipoAnimal1 = {
            tipoanimal:"mamífero",
            descripcion:""
        }
        const TipoAnimal2 = {
          tipoanimal:"aves",
          descripcion:""
        }
        const TipoAnimal3 = {
          tipoanimal:"peces",
          descripcion:""
        }
      const TipoAnimal4 = {
        tipoanimal:"Anfibios",
        descripcion:""
      }
      const TipoAnimal5 = {
        tipoanimal:"Reptiles",
        descripcion:""
      }
      const TipoAnimal6 = {
        tipoanimal:"Moluscos",
        descripcion:""
      }
      const TipoAnimal7 = {
        tipoanimal:"Esponjas",
        descripcion:""
      }
   
        const {idtipoanimal:tp1} =  ( await  TipoAnimalModel.create(TipoAnimal1)).get()
        const {idtipoanimal:tp2} =  ( await  TipoAnimalModel.create(TipoAnimal2)).get()
        const {idtipoanimal:tp3} =  ( await  TipoAnimalModel.create(TipoAnimal3)).get()
        const {idtipoanimal:tp4} =  ( await  TipoAnimalModel.create(TipoAnimal4)).get()
        const {idtipoanimal:tp5} =  ( await  TipoAnimalModel.create(TipoAnimal5)).get()
        const {idtipoanimal:tp6} =  ( await  TipoAnimalModel.create(TipoAnimal6)).get()
        const {idtipoanimal:tp7} =  ( await  TipoAnimalModel.create(TipoAnimal7)).get()
////////////////////////peces////////////////////////
    const animalespes1 = {
      animal:"Pez payaso",
      descripcion:"",
      idtipoanimal:tp3,
    }
    const animalespes2 = {
      animal:"Platy",
      descripcion:"",
      idtipoanimal:tp3,
    }
    const animalespes3 = {
      animal:"Pez guppy",
      descripcion:"",
      idtipoanimal:tp3,
    }
    const animalespes4 = {
      animal:"Neones",
      descripcion:"",
      idtipoanimal:tp3,
    }
    const animalespes5 = {
      animal:"Escalar",
      descripcion:"",
      idtipoanimal:tp3,
    }
    const {	idanimales:anp1} = (await AnimalModel.create(animalespes1)).get()
    const {	idanimales:anp2} = (await AnimalModel.create(animalespes2)).get()
    const {	idanimales:anp3} = (await AnimalModel.create(animalespes3)).get()
    const {	idanimales:anp4} = (await AnimalModel.create(animalespes4)).get()
    const {	idanimales:anp5} = (await AnimalModel.create(animalespes5)).get()
    const Descripcionpes1 = {
      nombre:"memo",
      fechanaciomiento:'2020-06-03 00:00:00',
      descripcion:"",
      sexo:"",
      idanimales:anp1,
    }
    const Descripcionpes2 = {
      nombre:"memito",
      fechanaciomiento:'2021-06-09 00:00:00',
      descripcion:"",
      sexo:"",
      idanimales:anp1,
    }
    const datapes1 = (await DescripcionModel.create(Descripcionpes1)).get()
    const datapes2 = (await DescripcionModel.create(Descripcionpes2)).get()
        /////////////////////////aves////////////////////////
        const animalesaves1 = {
          animal:"Tucán",
          descripcion:"",
          idtipoanimal:tp2,
      }
      const animalesaves2 = {
        animal:"Loro",
        descripcion:"",
        idtipoanimal:tp2,
      }
      const animalesaves3 = {
        animal:"Perico",
        descripcion:"",
        idtipoanimal:tp2,
      }
    const animalesaves4 = {
      animal:"Águilas",
      descripcion:"",
      idtipoanimal:tp2,
    }
    const animalesaves5 = {
        animal:"Colibrí",
        descripcion:"",
        idtipoanimal:tp2,
    }
    const animalesaves6 = {
      animal:"Azulejo",
      descripcion:"",
      idtipoanimal:tp2,
    }
    const animalesaves7 = {
      animal:"Secretario",
      descripcion:"",
      idtipoanimal:tp2,
    }
    const animalesaves8 = {
      animal:"Garza",
      descripcion:"",
      idtipoanimal:tp2,
    }
    const animalesaves9 = {
      animal:"Pingüino",
      descripcion:"",
      idtipoanimal:tp2,
    }
    const animalesaves10 = {
      animal:"Gallina",
      descripcion:"",
      idtipoanimal:tp2,
    }
    const {	idanimales:anv1} = (await AnimalModel.create(animalesaves1)).get()
    const {	idanimales:anv2} = (await AnimalModel.create(animalesaves2)).get()
    const {	idanimales:anv3} = (await AnimalModel.create(animalesaves3)).get()
    const {	idanimales:anv4} = (await AnimalModel.create(animalesaves4)).get()
    const {	idanimales:anv5} = (await AnimalModel.create(animalesaves5)).get()
    const {	idanimales:anv6} = (await AnimalModel.create(animalesaves6)).get()
    const {	idanimales:anv7} = (await AnimalModel.create(animalesaves7)).get()
    const {	idanimales:anv8} = (await AnimalModel.create(animalesaves8)).get()
    const {	idanimales:anv9} = (await AnimalModel.create(animalesaves9)).get()
    const {	idanimales:anv10} = (await AnimalModel.create(animalesaves10)).get()
    const Descripciona = {
      nombre:"pioli",
      fechanaciomiento:'2005-06-09 00:00:00',
      descripcion:"",
      sexo:"",
      idanimales:anv1,
    }
    const dataav1 = (await DescripcionModel.create(Descripciona)).get()
        ///////////////////mamífero//////////////////////////
        const animales1 = {
            animal:"Elefante",
            descripcion:"",
            idtipoanimal:tp1,
        }
        const animales2 = {
          animal:"Gato",
          descripcion:"",
          idtipoanimal:tp1,
        }
        const animales3 = {
          animal:"Gorila",
          descripcion:"",
          idtipoanimal:tp1,
        }
        const animales4 = {
          animal:"Jirafa",
          descripcion:"",
          idtipoanimal:tp1,
        }
        const animales5 = {
          animal:"León",
          descripcion:"",
          idtipoanimal:tp1,
        }
        const animales6 = {
          animal:"Perro",
          descripcion:"",
          idtipoanimal:tp1,
        }
        const animales7 = {
          animal:"Tigre",
          descripcion:"",
          idtipoanimal:tp1,
        }
        const animales8 = {
          animal:"Puma",
          descripcion:"",
          idtipoanimal:tp1,
        }
        const animales9 = {
          animal:"Oveja",
          descripcion:"",
          idtipoanimal:tp1,
        }
        const animales10 = {
          animal:"Oso",
          descripcion:"",
          idtipoanimal:tp1,
        }
     
        const {	idanimales:an1} = (await AnimalModel.create(animales1)).get()
        const {	idanimales:an2} = (await AnimalModel.create(animales2)).get()
        const {	idanimales:an3} = (await AnimalModel.create(animales3)).get()
        const {	idanimales:an4} = (await AnimalModel.create(animales4)).get()
        const {	idanimales:an5} = (await AnimalModel.create(animales5)).get()
        const {	idanimales:an6} = (await AnimalModel.create(animales6)).get()
        const {	idanimales:an7} = (await AnimalModel.create(animales7)).get()
        const {	idanimales:an8} = (await AnimalModel.create(animales8)).get()
        const {	idanimales:an9} = (await AnimalModel.create(animales9)).get()
        const {	idanimales:an10} = (await AnimalModel.create(animales10)).get()
        const Descripcion = {
            nombre:"paola",
            fechanaciomiento:'2016-05-12 00:00:00',
            descripcion:"",
            sexo:"",
            idanimales:an1,
         
        }
        const data = (await DescripcionModel.create(Descripcion)).get()
        const DescripcionGato1 = {
          nombre:"tom",
          fechanaciomiento:'2005-06-01 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an2,
        }
        const DescripcionGato2 = {
          nombre:"michi",
          fechanaciomiento:'2017-05-12 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an2,
        }
        const DescripcionGato3 = {
          nombre:"kata",
          fechanaciomiento:'2016-01-02 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an2,
        }
        const DescripcionGato4 = {
          nombre:"michi",
          fechanaciomiento:'2013-01-01 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an2,
        }
        const DescripcionGato5 = {
          nombre:"miao",
          fechanaciomiento:'2018-01-01 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an2,
        }
        const datag1 = (await DescripcionModel.create(DescripcionGato1)).get()
        const datag2 = (await DescripcionModel.create(DescripcionGato2)).get()
        const datag3 = (await DescripcionModel.create(DescripcionGato3)).get()
        const datag4 = (await DescripcionModel.create(DescripcionGato4)).get()
        const datag5 = (await DescripcionModel.create(DescripcionGato5)).get()

        const DescripcionPerro1 = {
          nombre:"firulai",
          fechanaciomiento:'2015-01-01 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an6,
        }
        const DescripcionPerro2 = {
          nombre:"elamigo",
          fechanaciomiento:'2012-01-04 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an6,
        }
        const DescripcionPerro3 = {
          nombre:"elperrofiel",
          fechanaciomiento:'2017-02-07 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an6,
        }
        const DescripcionPerro4 = {
          nombre:"firulai",
          fechanaciomiento:'2017-09-01 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an6,
        }
        const DescripcionPerro5 = {
          nombre:"toby",
          fechanaciomiento:'2015-06-03 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an6,
        }
        const datap1 = (await DescripcionModel.create(DescripcionPerro1)).get()
        const datap2 = (await DescripcionModel.create(DescripcionPerro2)).get()
        const datap3 = (await DescripcionModel.create(DescripcionPerro3)).get()
        const datap4 = (await DescripcionModel.create(DescripcionPerro4)).get()
        const datap5 = (await DescripcionModel.create(DescripcionPerro5)).get()
        console.log(data)
        
        

        const Descripcionleon1 = {
          nombre:"toby6",
          fechanaciomiento:'2011-05-09 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an5,
        }
        const Descripcionleon2 = {
          nombre:"toby5",
          fechanaciomiento:'2011-05-07 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an5,
        }
        const Descripcionleon3 = {
          nombre:"toby4",
          fechanaciomiento:'2014-06-03 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an5,
        }
        const Descripcionleon4 = {
          nombre:"toby3",
          fechanaciomiento:'2019-02-08 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an5,
        }
        const Descripcionleon5 = {
          nombre:"toby2",
          fechanaciomiento:'2020-06-05 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an5,
        }

        const Descripcionleon6 = {
          nombre:"toby1",
          fechanaciomiento:'2020-07-03 00:00:00',
          descripcion:"",
          sexo:"",
          idanimales:an5,
        }
        const datal1 = (await DescripcionModel.create(Descripcionleon1)).get()
        const datal2 = (await DescripcionModel.create(Descripcionleon2)).get()
        const datal3 = (await DescripcionModel.create(Descripcionleon3)).get()
        const datal4 = (await DescripcionModel.create(Descripcionleon4)).get()
        const datal5 = (await DescripcionModel.create(Descripcionleon5)).get()
        const datal6 = (await DescripcionModel.create(Descripcionleon6)).get()

      }
}