import Link from "next/link";
import PageCardImage from "../components/PageCardImage"
import PageHeader from "../components/PageHeader"
import PagePagination from "../components/PagePagination";
import { fetchApi } from "../helpers/fetch-api"
import { Post } from '../interfaces/post';

/* Funcion para obtener los posts */
const getData = async (page = 1, pageSize = 2) => {
    const path = "/posts"
    const urlParamsObject = {
        /* Muestra todos las propiedades de la data, ya que a veces deja de mostrar algunos debido a que son muy extensos, por ejemplo las images */
        populate: "*",
        /* Ordena la data */
        sort: {
            createdAt: "asc",
        },
        /* Le decimos que pagina mostrar (page) y la cantidad de elementos por pagina (pageSize)
        Lo podemos pasar por props para que sea dinamico */
        pagination: {
            page,
            pageSize
        }
    }

    const { data, meta } = await fetchApi(path, urlParamsObject)
    return {
        data,
        pagination: meta.pagination
    }
}

interface Props {
    searchParams: {
        page: string
    }
}

const Blog = async ({ searchParams }: Props) => {

    const { page } = searchParams

    let pageNumber = page ? parseInt(page) : 1
    if (isNaN(pageNumber) || pageNumber < 1) {
        pageNumber = 1
    }

    const { data, pagination } = await getData(pageNumber)

    return (
        <div className="space-y-8 my-5">
            <PageHeader text="Latest Posts" />
            <PagePagination pagination={pagination} />
            <div className="grid gap-4">
                {
                    (data.length > 0)
                        ? data.map((post: Post) => (
                            <PageCardImage key={post.id} post={post} />
                        ))
                        : (
                            <div className="flex flex-col items-center gap-2">
                                <h4 >No post :(</h4>
                                <Link
                                    href="/blog"
                                    className="px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    all posts
                                </Link>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default Blog