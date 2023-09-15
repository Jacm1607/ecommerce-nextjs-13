import AdsHome from '@/components/page/adsHome'
import BranHome from '@/components/page/brandHome'
import CarouselHome from '@/components/page/carouselHome'
import CategoryHome from '@/components/page/categoryHome'
import ListProductsHome from '@/components/page/listProductHome'
import Img from '@/components/ui/img'
import TitleSection from '@/components/ui/titleSection'
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

      <ListProductsHome />

      

      <div className="grid grid-cols-2 w-full">
        <div className="lg:col-span-1 col-span-2 mt-20">
          <Img baseUrl={false} url={'/iPhone-13.png'} qwidth={992} qheight={832} width={'100%'} height={'100%'} objectFit={'cover'} />
        </div>
        <div className="lg:col-span-1 col-span-2 md:px-10 px-1">
          <div className="">
            <p className="text-sky-900 md:text-[60px] text-[40px] h-[40px] uppercase w-full">PRODUCTO</p>
            <p className="text-sky-900 md:text-[100px] text-[60px] font-extrabold mt-0 pt-0 uppercase">DESTACADO</p>
          </div>
          <div className="">
            <p className="text-sky-900 font-extrabold text-[60px] mt-0 pt-0 uppercase leading-[50px] ">IPHONE 13</p>
            <p className="text-sky-900 md:text-[60px] text-[40px] uppercase">PRO max</p>
          </div>
          <div className="">
            <p className="text-sky-900 text-[30px] uppercase">CARACTERÍSTICAS:</p>
            <p className="text-sky-900 text-[20px] uppercase md:px-8">El iPhone 13 presenta un diseño similar al iPhone 12 con nuevos colores. Sus mejoras incluyen cámaras avanzadas, chip A15 Bionic para un rendimiento más rápido, pantallas OLED vibrantes, almacenamiento inicial de 128GB, conectividad 5G y funciones como Modo Cinemático y fotografía computacional.</p>
          </div>
          <center className="m-6"><Link className="md:text-[36px] text-white bg-sky-950 rounded-full px-8 py-2 font-bold tracking-wider" href={'/'}>ADQUIÉRELO YA</Link></center>
        </div>
      </div>



    </main>
  )
}
