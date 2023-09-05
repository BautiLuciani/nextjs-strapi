# GITHUB
1. Creamos un repositorio
2. En la terminal escribimos: 
[a] git add .
[b] git commit -m "texto"
[c] git remote add origin https://github.com/BautiLuciani/nextjs-strapi.git
[d] git branch -M main
[e] git push -u origin main

# VERCEL
1. Tocamos en 'Add new' ► 'Proyect'
2. Importamos el proyecto
3. Tocamos en 'Enviroment Variables' y agregamos:
[a] NEXT_PUBLIC_STRAPI_API_URL ► '.env.local'
4. Tocamos en 'Deploy'