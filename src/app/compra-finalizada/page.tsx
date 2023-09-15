import Link from "next/link";

export default function ShopComplete() {
    return (
        <div className="my-32 mx-16">
            <p><span className=" font-extrabold text-4xl text-sky-900">Compra realizada</span></p>
            <p className="text-sky-900 text-lg mb-10">Tu pedido ha sido recibido y se esta procesando, te mantendremos informado. Esperamos que disfrutes de tus nuevos productos.</p>

            <Link className="font-extrabold text-2xl text-sky-900 border-2 border-sky-900 px-6 py-4 rounded-full" href={'/'}>Ir al inicio</Link>
        </div>
    )
}