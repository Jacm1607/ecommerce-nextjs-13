import { URL_BASE } from "@/lib/endpoint"
import Image from "next/image"

interface IImg {
    url: string,
    alt?: string,
    qwidth?: number,
    qheight?: number,
    width: string,
    height: string,
    className?: string,
    objectFit: 'cover'|'contain'
}
const Img = ({url, alt = 'Hauscenter', qwidth= 1280, qheight= 720, width = '100%', height= '650px', objectFit = 'cover', className= ""}: IImg) => {
    return  <Image className={className} src={`${URL_BASE}${url}`} alt={alt} width={qwidth} height={qheight} style={{ width, height, objectFit}} />
}

export default Img