import React from 'react'
import Image from 'next/image'
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

const Producto = ({producto}) => {

    const {imagen, nombre, precio} = producto
    const {handleSetProducto, handleChangeModal} = useQuiosco()

  return (
    <div className='border p-3'>
        <Image
            src = {`/assets/img/${imagen}.jpg`}
            alt = {`Imagen Platillo ${nombre}`}
            width={400}
            height={500}
        />

        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
        </div>
        <div className='p-5'>
            <h3 className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</h3>
        </div>

        <button type='button' className='bg-indigo-600 hover:bg-indigo-800 text-white uppercase font-bold w-full mt-5 p-3'
            onClick={()=>{
                handleSetProducto(producto)
                handleChangeModal()
            }}
        >
            Agregar
        </button>
    </div>
  )
}

export default Producto

