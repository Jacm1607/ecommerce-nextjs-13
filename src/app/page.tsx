import AdsHome from '@/components/page/adsHome'
import BranHome from '@/components/page/brandHome'
import CarouselHome from '@/components/page/carouselHome'
import CategoryHome from '@/components/page/categoryHome'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='w-full flex justify-center'>
        <p className='text-primary font-bold text-4xl my-4'>CRÉDITOS APROBADOS EN 24 HORAS</p>
      </div>
      <div className="grid grid-cols-3 gap-3 text-center py-4 bg-gray-300 text-2xl font-bold text-primary">
        <div className="col-span-1"><Link href={'/'}>CREDI HAUS</Link></div>
        <div className="col-span-1 border-l-2 border-r-2 border-primary"><Link href={'/'}>SEGUIMIENTO DE PEDIDO</Link></div>
        <div className="col-span-1"><Link href={'/'}>SUCURSALES</Link></div>
      </div>

      <CarouselHome />

      <CategoryHome />

      <BranHome />

      <AdsHome />

    </main>
  )
}
