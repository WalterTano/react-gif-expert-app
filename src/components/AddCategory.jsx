import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if ( newInputValue.length <= 1 ) return;

        // No es preferible, tiene que saber que la función pasada es de state
        // setCategories(categories => [ inputValue, ...categories ]);
        
        // Preferible, emite el valor a una función de callback dada y no necesita saber nada de ella
        onNewCategory( newInputValue );

        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}