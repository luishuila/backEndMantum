import { AnimalModel } from './Animales.Models';
import { DescripcionModel } from './AnimalDescripciones.Models';
import { TipoAnimalModel } from './TipoAnimales.Models';


AnimalModel.belongsTo(TipoAnimalModel,{as: 'TipoAnimales', foreignKey: 'idtipoanimal'})

DescripcionModel.belongsTo(AnimalModel,{as: 'Animal', foreignKey: 'idanimales'})


export const DescripcionModels =DescripcionModel;
export const AnimalModels =AnimalModel;
export const TipoAnimalModels =TipoAnimalModel;
