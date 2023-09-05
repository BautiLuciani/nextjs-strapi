import qs from 'qs'
import { getStrapiURL } from './api-helper';

/* Esta funcion es para poder realizar un fetch a una api de manera dinamica
La funcion va a requerir 3 parametros:
- path: la url donde se va a realizar la peticion
- urlParamsObject: los parametros que deseamos agregarla a la url. Esto debe ser un objeto
- options: configuraciones como credenciales, api key, entre otras cosas. Esto tambien debe ser un objeto. (No lo vamos a usar en esta seccion)
Anteriormente tenemos que instalar la libreria Query String para que tome los urlParamsObject como parametros
Tambien debemos instalar los tipos para que TypeScript no lance error por los Query String*/
export const fetchApi = async (
    path: string,
    urlParamsObject = {},
    options = {}
) => {
    try {
        // Creamos una constante para las opciones, por ejemplo para el header o para limpiar el cache
        const mergedOptions = {
            next: { revalidate: 60 },
            headers: {
                "Content-Type": "application/json",
            },
            ...options,
        };

        /* Utilizamos el metodo stringify() de qs para transformar el objeto urlParamsObject en un string el cual funcione como query en la url
        Como primer parametro va el objeto, y el segundo parametro (opcional) sirve para ver la url un poco mas limpia */
        const queryString = qs.stringify(urlParamsObject, {encodeValuesOnly: true})

        // URL final
        const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`
        
        // Realizamos el fetch
        const res = await fetch(requestUrl, mergedOptions)
        const data = await res.json()
        
        return data

    } catch (error) {
        throw new Error("Error fetching API")
    }
}