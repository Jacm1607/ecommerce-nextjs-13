import ListShop from "@/components/page/listShop";

export default function CarritoCompraHome() {

    return (
        <div className="md:container md:mx-auto">
            <div className="my-6 relative">
                <h2 className="absolute text-4xl font-extrabold text-primary tracking-tight bg-white pr-3 uppercase">
                    LISTA DE COMPRA
                </h2>
                <div className="border-b-2 h-8 border-primary"></div>
            </div>
            <ListShop />
        </div>
    )
}
