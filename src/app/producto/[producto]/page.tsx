import DetailsProduct from "@/components/page/detailsProduct";

export default function ProductHome({params}:any) {
    const {producto} = params
    return (
        <div className="grid grid-cols-6 mt-10 space-y-6 px-10">
            <DetailsProduct product={producto} />
        </div>
    )
}