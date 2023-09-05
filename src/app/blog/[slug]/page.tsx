import PageHeader from "@/app/components/PageHeader"
import { fetchApi } from "@/app/helpers/fetch-api"
import { formatDate } from "@/app/helpers/format-date-helper"
import { Post } from "@/app/interfaces/post"
import Image from "next/image"
import { notFound } from 'next/navigation'
import { MDXRemote } from "next-mdx-remote/rsc";

/* Funcion para obtener el post */
const getData = async (slug = "") => {
  const path = "/posts"
  const urlParamsObject = {
    /* Muestra todos las propiedades de la data, ya que a veces deja de mostrar algunos debido a que son muy extensos, por ejemplo las images */
    populate: "*",
    /* Filtramos por el slug */
    filters: {
      slug
    }
  }

  const {data} = await fetchApi(path, urlParamsObject)
  return data[0]
}

interface Props {
  params: {
    slug: string
  }
}

const SlugPage = async({ params }: Props) => {

  const { slug } = params
  const post: Post = await getData(slug)

  if(!post) {
    return notFound()
  }

  const { title, body, description, createdAt, image } = post.attributes;
  const { url, width, height } = image.data.attributes.formats.medium;

  return (
    <div className="space-y-8">
      <PageHeader text={title}/>
      <p className="text-gray-500 mb-2">{formatDate(createdAt)}</p>
      <Image
        className="h-auto rounded-lg"
        src={url}
        alt={`imagen de ${title}`}
        width={width}
        height={height}
      />
      <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        {description}
      </p>
      <div className="prose">
        {/* Utilizamos el componente MDXRemote para formatear el body de los post
        Esto quiere decir que aparezcan las letras en negrita, italic y subrayado
        Para eso tuvimos que haber instalado next-mdk-remote */}
        <MDXRemote source={body}/>
      </div>
    </div>
  )
}

export default SlugPage