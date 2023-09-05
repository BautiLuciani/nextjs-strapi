/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        /* El dominio que debemos utilizar se encuentra dentro de 'url' dentro de 'images' en el JSON de un post
        solo debemos colocar el dominio, sin el http */
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
