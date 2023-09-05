# HELPERS
1. Creamos la funcion para obtener la url y pasar los path de forma dinamica → helpers/api-helper.ts
2. Creamos la funcion para formatear el dia en español → helpers/format-date-helper.ts
3. Creamos la funcion para realizar el fetch a una api de forma dinamica → helpers/fetch-api.ts

# NOTAS
`Problemas al hacer solicitudes localhost`: Puede pasar que si hacemos una peticion fetch a la url del localhost, la pagina lanza un error. En este caso existen dos tipos de soluciones, la primera es reemplazar la url del localhost por la ip, por ejemplo: [http://127.0.01:1337/api/posts]. La segunda opcion es utilizar la url que nos da render cuando levantamos la pagina. Sin embargo, hoy en dia este problema ya no pasa, pero esta bueno saberlo por las dudas.

`Cache`: Cuando hacemos una peticion fetch, el resultado se almacena en cache, entonces en caso de volver a necesitar hacer el fetch, automaticamente utiliza la informacion almacenada. Esto podria ser un problema ya que si actualizamos algun dato desde strapi, nextjs no lo actualiza instantaneamente, ya que usa la informacion almacenada. Para esto existen dos soluciones, la primera y la mas recomendada es agregar como segundo parametro del fetch el siguiente objeto: `{next: {revalidate: 0}}`. La segunda es agregar como segundo parametro del fetch el siguiente objeto: `{next: {cache: "no-store"}}`, sin embargo esta podria tirar errores por TypeScript.

