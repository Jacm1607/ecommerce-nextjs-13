import { URL_BASE } from "@/lib/endpoint";
import Link from "next/link";
import Img from "../ui/img";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
export interface ISubcategory {
    data: DAT;
    meta: Meta;
}

export interface Subcategorias {
    data: DAT[];
}

export interface DatumAttributes {
    nombre: string;
    visible: boolean;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    subcategorias?: Subcategorias;
    imagen?: Imagen;
}

export interface DAT {
    id: number;
    attributes: DatumAttributes;
}

export interface Imagen {
    data: Data;
}

export interface Data {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    url: string;
}

export interface Meta {
}

const fetchSubcategory = (categoria: any) => {
    return fetch(`${URL_BASE}/api/categorias/${categoria}?populate[subcategorias][populate][fields][0]=nombre&populate[subcategorias][populate][imagen][fields][1]=url`)
        .then(res => res.json())
        .catch((e) => console.log(e))
}

interface ICategoria {
    categoria: any
}

const ListSubcategory = async ({ categoria }: ICategoria) => {
    const subcategories: ISubcategory = await fetchSubcategory(categoria);
    return (
        <>
            <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                    {subcategories.data.attributes.nombre}
                </h2>
                <p className="text-sm text-muted-foreground">
                    Seleciona una opción
                </p>
            </div>
            <div className="relative">
                <ScrollArea>
                    <div className="flex space-x-4 pb-4">
                        {
                            //    subcategories.data.attributes.subcategorias?.data.length > 0 ?? (
                            subcategories.data.attributes.subcategorias.data.map((subcategory: any) => (
                                // <Link key={subcategory.id} href={`/categoria/${subcategory}`}>
                                <div key={subcategory.id} className="card flex-shrink-0 relative w-[220px] h-[190px] flex justify-center items-center">
                                    <div className="absolute w-full h-full bg-black bg-opacity-60 rounded-2xl"></div>
                                    <Img url={subcategory.attributes.imagen.data.attributes.url} alt={subcategory.attributes.nombre} qwidth={200} qheight={100} width={"70%"} height={"70%"} objectFit={"contain"}></Img>
                                    <p className="absolute text-white text-2xl font-bold text-center mt-[90px]">{subcategory.attributes.nombre}</p>
                                </div>
                                // </Link>
                            ))
                            //    )
                        }
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </>
    )
}

export default ListSubcategory;