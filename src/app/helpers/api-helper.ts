/* Funcion para obtener la url y poder pasarle los path de forma dinamica
Anteriormente debemos definir la url de strapi en el archivo '.env.local'
El ejecutarse esta funcion primero va a intentar con la url de strapi y en 
caso de no poder va a intentar con el localhost */
export const getStrapiURL = (path = "") => {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/"}${path}`;
}
