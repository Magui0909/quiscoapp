import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

const totalProducto = ({ producto }) => {

  const{handleEditarCantidades, handleEliminarProducto} = useQuiosco();

  return (
    
    <div className="shadow bottom-2  mb-3 flex gap-10 items-center">

      <div className="md:w-5/6">

        <p className="text-3xl font-bold">
          {producto.nombre} x {producto.cantidad}
        </p>
        <p className="text-xl font-bold mt-2 text-amber-500">
          Precio: {formatearDinero(producto.precio)}
        </p>

      </div>
      
    </div>

    
    
    
  )
}

export default totalProducto
