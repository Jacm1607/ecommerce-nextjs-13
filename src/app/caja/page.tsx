'use client'
// import FormShop from "@/components/page/formShop";

import { getProductStore } from "@/lib/store";
import router from "next/router";
import { useEffect, useState } from "react";

export default function ShopHome () {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ci, setCi] = useState('');
    const [correo, setCorreo] = useState('');
    const [nit, setNit] = useState('');
    const [razonSocial, setRazonSocial] = useState('');
    const [direccion, setDireccion] = useState('');
    const [metodoPago, setMetodoPago] = useState(3);
    const [metodoEnvio, setMetodoEnvio] = useState(1);

    const handleMetodoEnvio = (event: any) => {
        setMetodoEnvio(event.target.value)
    };

    const handleMetodoPago = (event: any) => {
        setMetodoPago(event.target.value);

    };

    if (typeof window !== "undefined") {
        let products = getProductStore()
        const [total, setTotal] = useState(0);
        const [isToken, setToken] = useState(false);

        const updateTotal = () => {
            let subtotal = 0;
            products.map((obj: any) => {
                if (obj.precio_oferta > 0) {
                    subtotal += (obj.precio_oferta * obj.cantidad);
                } else {
                    subtotal += (obj.precio * obj.cantidad);
                }
            })
            console.log(subtotal)
            setTotal(subtotal)
        }
        useEffect(() => {
            if (products.length < 1) {
                router.replace('/')
            }
            if (products !== null) {
                updateTotal()
            }
        }, [])

        const handleSubmit = async (event: any) => {
            event.preventDefault();

            const dataForm = {
                data: {
                    nombre_completo: nombre,
                    ci: ci,
                    email: correo,
                    nit: nit,
                    razon_social: razonSocial,
                    direccion: direccion,
                    celular: telefono,
                    costo_envio: 0,
                    subtotal: 1000,
                    estado_orden: [1],
                    users_permissions_user: [4],
                    metodo_pago: [metodoPago],
                    metodo_envio: [metodoEnvio]
                }
            }

            // const api = new Api();
            // const data = await api.post(`https://www.dashboard.hauscenter.com.bo/api/ordens`, dataForm);
            // if (data.status === 200) {
            //     router.push('/compra-realizada')
            // }
            // else {
            //     alert("Error al registrar intente mas tarde.")
            // }
            // Aquí puedes realizar acciones adicionales, como enviar los datos al servidor.
        };
        return (
            // <form onSubmit={handleSubmit} method="post">
                <div className="grid grid-cols-3 mt-4">
                    sasas
                    {/* <div className="lg:col-span-2 col-span-3 pt-6">
                        <div className="grid grid-cols-2 gap-6 px-6">


                            <div className="md:col-span-1 col-span-2">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Nombre completo</span>
                                    <input onChange={(event) => setNombre(event.target.value)} type="text" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                </div>
                            </div>

                            <div className="md:col-span-1 col-span-2">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Número telefono</span>
                                    <input onChange={(event) => setTelefono(event.target.value)} type="number" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                </div>
                            </div>

                            <div className="md:col-span-1 col-span-2">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Carnet identidad</span>
                                    <input onChange={(event) => setCi(event.target.value)} type="number" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                </div>
                            </div>

                            <div className="md:col-span-1 col-span-2">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">correo electronico</span>
                                    <input onChange={(event) => setCorreo(event.target.value)} type="email" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                </div>
                            </div>

                            <div className="md:col-span-1 col-span-2">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Razon social / Nombre</span>
                                    <input onChange={(event) => setRazonSocial(event.target.value)} type="text" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                </div>
                            </div>

                            <div className="md:col-span-1 col-span-2">
                                <div className="flex flex-col">
                                    <span className="text-xl font-extrabold text-sky-900 uppercase ">Nit / Ci (Opcional)</span>
                                    <input onChange={(event) => setNit(event.target.value)} type="number" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                </div>
                            </div>

                            {metodoEnvio == 1 &&
                                (<div className="col-span-2">
                                    <div className="flex flex-col">
                                        <span className="text-xl font-extrabold text-sky-900 uppercase ">Dirección</span>
                                        <input onChange={(event) => setDireccion(event.target.value)} type="text" className="h-[50px] rounded-full border-solid border-[1px] border-sky-900 focus:outline-none focus:border-sky-900 focus:ring-0 focus:ring-sky-900 placeholder:text-3xl text-xl px-4" placeholder="" required />
                                    </div>
                                </div>)}

                            <div className="col-span-2">
                                <TitleBorder title={"METODO ENVIO"} />

                                <fieldset className="my-5">
                                    <div className="flex items-center">
                                        <input id="normal" onChange={handleMetodoEnvio} aria-labelledby="normal" aria-describedby="normal" type="radio" name="envio" value={1} className="h-4 w-4 border-sky-300 focus:ring-0" required checked={metodoEnvio == 1} />
                                        <label htmlFor={"normal"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">ENVIO NORMAL</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input onChange={handleMetodoEnvio} id="tienda" aria-labelledby="tienda" aria-describedby="tienda" type="radio" name="envio" value={2} className="h-4 w-4 border-sky-300 focus:ring-0" checked={metodoEnvio == 2} required />
                                        <label htmlFor={"tienda"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">RECOGER EN TIENDA</label>
                                    </div>

                                    {metodoEnvio == 2 && <div>
                                        <select name="" id="" onChange={(event) => setDireccion(`Tienda: ${event.target.value}`)} required={metodoEnvio == 2} className="rounded-full border-2 border-solid border-sky-900 text-xl px-4 py-1 text-sky-900 font-bold">
                                            <option value="">Selecciona una opcion</option>
                                            <option value="Central">Central</option>
                                            <option value="Ventura">Ventura</option>
                                            <option value="Isabel La Catolica">Isabel La Catolica</option>
                                            <option value="Las Brisas">Las Brisas</option>
                                            <option value="Cbba">Cbba</option>
                                        </select>
                                    </div>}

                                </fieldset>
                            </div>

                            <div className="col-span-2">
                                <TitleBorder title={"METODO PAGO"} />

                                <fieldset className="my-5">
                                    <div className="flex items-center">
                                        <input onChange={handleMetodoPago} id="transferencia" aria-labelledby="transferencia" aria-describedby="transferencia" type="radio" name="pago" value={3} className="h-4 w-4 border-sky-300 focus:ring-0" required checked={metodoPago == 3} />
                                        <label htmlFor={"transferencia"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">Transferencia</label>
                                    </div>
                                    {metodoPago == 3 && (
                                        <div>
                                            <p className="text-sky-900 w-full">Tan pron­to como su pe­di­do sea com­proba­do y proce­sa­do por un agen­te de HausCenter, le en­via­re­mos una con­fir­ma­ción de pe­di­do con nues­tros datos ban­ca­rios. Por favor, tenga en cuen­ta que las trans­fe­ren­cias tar­dan aproxima­da­men­te 1 a 2 días la­bo­ra­bles en lle­gar y que su pe­di­do será en­via­do cuan­do re­ciba­mos la misma.</p>
                                        </div>
                                    )}

                                    <div className="flex items-center">
                                        <input onChange={handleMetodoPago} id="qr" aria-labelledby="qr" aria-describedby="qr" type="radio" name="pago" value={2} className="h-4 w-4 border-sky-300 focus:ring-0" required checked={metodoPago == 2} />
                                        <label htmlFor={"qr"} className="text-[25px] font-semibold text-sky-900 ml-2 block uppercase">QR</label>
                                    </div>

                                    {metodoPago == 2 && (
                                        <div>
                                           
                                        </div>
                                    )}

                                </fieldset>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="lg:col-span-1 col-span-3 mx-4">
                        <div className="py-2 border-2 border-gray-300 rounded-2xl">
                            <Link href={'/lista-compra'} className="rounded-full border-2 border-solid border-sky-900 text-xl text-center text-white font-bold bg-sky-900 px-5">Editar pedido</Link>

                            {products.map((prod: any) =>
                                <div key={prod.id} className="grid grid-cols-6 gap-4 mt-6 w-full">
                                    <div className="imagen-pedido col-span-1">
                                        <Img url={prod.imagen} width={"60px"} height={"60px"} objectFit={"cover"} />
                                    </div>
                                    <div className="col-span-5">
                                        <p className="text-xl font-extrabold text-sky-900 leading-5">{prod.nombre}</p>
                                        <div className="flex justify-between">
                                            <p>{prod.modelo}</p>
                                            <p className="text-xl font-extrabold text-sky-900">{prod.precio_oferta > 0 ? prod.precio_oferta : prod.precio} Bs.</p>
                                        </div>
                                        <p className="text-xl font-extrabold text-sky-900">X{prod.cantidad}</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between mt-8">
                                <p className="text-xl font-extrabold text-sky-900">GASTO DE ENVIO</p>
                                <p className="text-xl font-extrabold text-sky-900">GRATIS</p>
                            </div>
                            <div className="flex justify-end">
                                <p className="text-xl font-extrabold text-sky-900">TOTAL {total} BS.</p>
                            </div>
                            <div className="flex justify-end mt-2">
                                <button type="submit" className="rounded-full border-2 border-solid border-sky-900 text-xl text-center text-white font-bold bg-sky-900 px-5 uppercase">Comprar ahora</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            // </form>
        )
    }
}