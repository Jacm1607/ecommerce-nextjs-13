import { URL_BASE } from "@/lib/endpoint"
import Img from "../ui/img";
import Link from "next/link";

export interface ICategory {
    id: number;
    attributes: ICategoryAttributes;
}

export interface ICategoryAttributes {
    nombre: string;
    visible: boolean;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    imagen: Imagen;
}

export interface Imagen {
    data: Data;
}

export interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    url: string;
}


const fetchCategories = () => {
    return fetch(`${URL_BASE}/api/categorias?populate[imagen][fields]=url`)
        .then(res => res.json())
}

const CategoryHome = async () => {
    const categories = await fetchCategories()
    return (
        <div className="grid grid-cols-5 my-6">
            <div className="col-span-4">
                <div className="flex w-full overflow-x-auto space-x-3 ">
                    {
                        categories.data.map((category: ICategory) =>
                            <Link key={category.id} href={`/categoria/${category.id}`}>
                                <div className="card flex-shrink-0 relative w-[220px] h-[190px] flex justify-center items-center">
                                    <div className="absolute w-full h-full bg-black bg-opacity-60 rounded-2xl"></div>
                                    <Img url={category.attributes.imagen.data.attributes.url} alt={category.attributes.nombre} qwidth={200} qheight={100} width={"70%"} height={"70%"} objectFit={"contain"}></Img>
                                    <p className="absolute text-white text-2xl font-bold text-center mt-[90px]">{category.attributes.nombre}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
            <div className="col-span-1 bg-primary rounded-l-3xl pl-4 ml-4 text-white font-bold text-5xl flex items-center justify-center">
                <p className="text-center uppercase">Categorías</p>
            </div>
        </div>
    )
}

export default CategoryHome