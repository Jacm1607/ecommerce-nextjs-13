'use client'
import { getProductStore, removeProductStore } from "@/lib/store";
import Img from "../ui/img";
import { useEffect, useState } from "react";
import Link from "next/link";

const ListShop = () => {
    // if (typeof window !== "undefined") {
    const productsStore = getProductStore();
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0.00);

    const updateTotal = (products: any) => {
        let subtotal = 0;
        products.map((product: any) => {
            if (product.precio_oferta > 0) {
                subtotal += (product.precio_oferta * product.cantidad);
            } else {
                subtotal += (product.precio * product.cantidad);
            }
        })
        setTotal(subtotal)
    }

    const updateProducts = (id: any) => {
        removeProductStore(id)
        const productsStore = getProductStore();
        setProducts(productsStore)
        updateTotal(productsStore)
    }

    useEffect(() => {
        setProducts(productsStore)
        updateProducts(productsStore)
    }, [])

    return (
        <>
            {
                products.length > 0 ?
                    <>
                        <div className="grid grid-cols-3">
                            <div className="col-span-2 divide-y divide-sky-700 px-2">
                                {
                                    products.map((product: any, key: any) => <div key={product.id} className="flex py-2">
                                        <div className="imagen">
                                            <Img className="border-solid border-2 border-sky-900 rounded-3xl" url={product.imagen} width={"180px"} height={"180px"} objectFit={"contain"} />
                                        </div>
                                        <div className="contenido flex flex-col w-full px-10">
                                            <p className="text-3xl uppercase font-bold text-sky-900">{product.nombre}.</p>
                                            <div className="flex justify-between">
                                                <p className="text-normal uppercase font-medium text-sky-900">{product.modelo}</p>
                                                <select className="rounded-full border-2 border-solid border-sky-900 w-20 text-3xl text-center text-sky-900 font-bold" name="" id="">
                                                    <option value={product.cantidad}>{product.cantidad}</option>
                                                </select>
                                            </div>
                                            <div className="flex justify-between">
                                                <button onClick={() => updateProducts(product.id)} className="">
                                                    <Img url={'/eliminar.png'} width={"42px"} height={"42px"} objectFit={"cover"} baseUrl={false} />
                                                </button>
                                                <p className="text-[40px] uppercase font-extrabold h-[60px] text-sky-900"><span>{product.precio_oferta > 0 ? product.precio_oferta : product.precio}</span> BS.</p>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                            <div className="col-span-1 px-2">
                                <div className="border-2 border-solid border-sky-900 w-full rounded-[60px] my-12 p-8">
                                    <div className="">
                                        <p className="text-center text-[50px] uppercase font-bold h-[40px] text-sky-900"><span>Total</span></p>
                                        <p className="text-center text-[70px] uppercase font-bold text-sky-900"><span>{total}</span> <span>BS</span></p>
                                        <p className="text-center"><Link href={'/caja'} className="bg-sky-900 rounded-full text-white font-bold uppercase px-6 py-2 text-2xl">Ir a caja</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : <>
                        CARRITO VACIO
                    </>
            }
        </>
    )
    // }
}

export default ListShop;