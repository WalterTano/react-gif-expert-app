import { useState } from  'react';
// No es necesario poner "./components/index" para importar archivos index.
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  // Podemos tener tantos useState como variables de estado que tengamos.
  const [ categories, setCategories ] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    // Crear un objeto nuevo (esto es recomendado)
    setCategories( [ newCategory, ...categories ] );
    // setCategories( cat => [ ...cat, category ]);
  };

  return (
    <>
        <h1>GifExpertApp</h1>
     
        <AddCategory 
          // setCategories={ setCategories } 
          onNewCategory={ onAddCategory }
        />

        { 
          categories.map( category => (
              <GifGrid 
                key={ category }
                category={ category } 
              />
            ))
        } 
    </>
  )
}