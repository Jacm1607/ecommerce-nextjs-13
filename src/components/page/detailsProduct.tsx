import { URL_BASE } from "@/lib/endpoint"
import Img from "../ui/img";

const fetchProduct = (product: any) => {
    return fetch(`${URL_BASE}/api/productos/${product}?populate=*`)
        .then(res => res.json())
}

const fetchStock = (product: any) => {
    return fetch(`${URL_BASE}/api/productos/${product}?populate=*`)
        .then(res => res.json())
}


const DetailsProduct = async ({ product }: any) => {
    const _product = await fetchProduct(product);
    console.log(_product.data.attributes.imagen);
    
    return (
        <>
            <div className="lg:col-span-4 col-span-6">
                <span className="text-4xl text-sky-900 font-extrabold">{_product.data.attributes.nombre}</span> <br />
                <span className="text-5xl text-sky-900 font-medium">{_product.data.attributes.nombre}</span> <span className="text-3xl text-sky-900 font-medium">{_product.data.attributes.modelo.data !== null ?_product.data.attributes.modelo.data.attributes.nombre : 'SIN MODELO'}</span>
                <div className="grid grid-cols-3 gap-4">
                    <div className="lg:col-span-1 col-span-3 lg:block space-y-2 mt-10 flex flex-wrap justify-center gap-4">
                        {_product.data.attributes.imagen.data.map((element: any) => <div key={element.id} className="rounded-3xl border-2 border-solid border-sky-900 w-[150px] h-[150px] flex justify-center items-center">
                            <Img url={element.attributes.url} width={"100px"} height={"100px"} objectFit={"contain"} />
                        </div>)
                        }
                    </div>
                    <div className="lg:col-span-2 col-span-3 flex justify-center items-center">
                        <Img url={_product.data.attributes.imagen.data[0].attributes.url} width={'350px'} height={'350px'} objectFit={"contain"} />
                    </div>
                </div>
            </div>
            <div className="lg:col-span-2 col-span-6">
                <div className="rounded-[60px] border-4 border-solid border-sky-900 p-10">
                    {
                        _product.data.attributes.precio_oferta > 0
                            ? 
                            <><p className="text-xl text-gray-600 line-through decoration-red-600"><span>{_product.data.attributes.precio}</span> <span>BS.</span></p><p className="text-5xl text-sky-800 font-extrabold uppercase"><span>{_product.data.attributes.precio_oferta}</span> Bs.</p></>
                            : <p className="text-5xl text-sky-800 font-extrabold uppercase"><span>{_product.data.attributes.precio}</span> Bs.</p>
                    }

                    <p className="my-2"><span className="text-sky-800 font-medium">ENVIÓ A DOMICILIO </span><span className="text-sky-800 font-extrabold">DISPONIBLE.</span></p>
                    <p className="border-2 border-solid border-sky-900"></p>
                    <p>{_product.data.attributes.descripcion_corta}</p>
                    <div className="flex space-x-2 mt-4">
                        <select className="rounded-full border-2 border-solid border-sky-900 w-20 text-3xl text-center text-sky-900 font-bold" name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <button className="rounded-full border-2 border-solid border-sky-900 text-3xl text-center text-white font-bold bg-sky-900 px-5">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="col-span-6 border-t-2 border-solid border-sky-900 my-6">
                <div className="grid grid-cols-2 my-10 space-y-6">
                    <div className="lg:col-span-1 col-span-6 border-r-2 border-solid border-sky-900 px-4">
                        <span className="text-3xl font-extrabold text-sky-900">CARACTERISTICAS</span>
                        {/* <ReactMarkdown>{_product.caracteristica}</ReactMarkdown> */}

                    </div>
                    <div className="lg:col-span-1 col-span-6 px-4">
                        <span className="text-3xl font-extrabold text-sky-900">ESPECIFICACIONES</span>
                        {/* <ReactMarkdown>{_product.especificacion}</ReactMarkdown> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsProduct;