# POSTS
1. Creamos una funcion para obtener los posts → blog/page.tsx
2. Creamos la interfaz 'post.ts' para definir el tipo de los posts
3. Creamos el componente 'PageHeader' para estilizar los headers
4. Creamos el componente 'PageCardImage' para estilizar los posts

# SLUG
1. Creamos una funcion para obtener un post → blog/[slug]/page.tsx
2. Creamos la pagina 404 → not-found.tsx
3. Instalamos next-mdx-remote
4. @tailwindcss/typography 
[a] Instalamos @tailwindcss/typography para hacer mas lindo el mdx
[b] Agregamos 'require("@tailwindcss/typography")' dentro de 'plugins' en el archivo 'tailwind.config.js'
[c] Agregamos la clase 'prose' al div que envuelve el componente MDXRemote

# PAGINATION
1. Creamos el componente 'PagePagination' para la paginacion
2. Utilizamos la estructura de Flowbite para la paginacion → components/PagePagination.tsx
3. Incorporamos funcionalidad a la estructura → components/PagePagination.tsx
4. Implementamos el componente el el archivo 'blog/page.tsx'
