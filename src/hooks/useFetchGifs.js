import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    // Recibe una función con el efecto a realizar y un array de dependencias.
    // Si dejamos el array de dependencias vacio, el efecto se ejecuta solo la primera vez.
    useEffect( () => getImages, [] ); 

    return {
        images,
        isLoading
    }
}
