import Image from "next/image"
import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const ResumenProducto = ({ producto }) => {

  const{handleEditarCantidades, handleEliminarProducto} = useQuiosco();

  return (
    
    <div className="shadow bottom-2  mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Imagen producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}>

        </Image>
      </div>

      <div className="md:w-5/6">

        <p className="text-3xl font-bold">
          {producto.nombre}
        </p>
        <p className="text-xl font-bold mt-2">
          Cantidad: {producto.cantidad}
        </p>
        <p className="text-xl font-bold mt-2 text-amber-500">
          Precio: {formatearDinero(producto.precio)}
        </p>

      </div>
      
    </div>
    
    
  )
}

export default ResumenProducto
