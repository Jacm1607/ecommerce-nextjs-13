
import { URL_BASE } from "@/lib/endpoint";
import { Skeleton } from "../ui/skeleton";
import Img from "../ui/img";

export interface IPaginaPrincipal {
    data: IPaginaPrincipalData;
    meta: Meta;
}

export interface IPaginaPrincipalData {
    id:         number;
    attributes: IAttributes;
}

export interface IAttributes {
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    imgBanner:   IImg;
    imgNovedad1: IImg;
    imgNovedad2: IImg;
    imgNovedad3: IImg;
}

export interface IImg {
    data: IImgBannerData;
}

export interface IImgBannerData {
    id:         number;
    attributes: IAttributesImg;
}

export interface IAttributesImg {
    url: string;
}

export interface Meta {
}


const fetchImgPaginaPrincipal = () => {
    return fetch (`${URL_BASE}/api/pagina-principal?populate[imgBanner][fields]=url&populate[imgNovedad1][fields]=url&populate[imgNovedad2][fields]=url&populate[imgNovedad3][fields]=url`)
    .then(res => res.json())
}

const CarouselHome = async () => {
    const images:IPaginaPrincipal = await fetchImgPaginaPrincipal()
    return (
        <div className="">
            <Img url={`${images.data.attributes.imgBanner.data.attributes.url}`} alt='Novedad Hauscenter' qwidth={1020} qheight={850} width={"100%"} height={"550px"} objectFit={"cover"}  />
        </div>
    )
    // <Skeleton className="w-full h-[620px] bg-gray-400" />
}

export default CarouselHome;