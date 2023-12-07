import 'react-toastify/dist/ReactToastify.css'
import Image from "next/image"
import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'
const Orden = ({ orden }) => {
  const { nombre, total, fecha, pedido, imagen } = orden
  const {handleEliminarOrden} = useQuiosco();
  const formatearFecha = (fecha) => {
    const fechaNum = Number(fecha);
    const fechaNueva = new Date(fechaNum)
    return (<p>{fechaNueva.getDate()}/{fechaNueva.getMonth()+1}/{fechaNueva.getFullYear()}</p>);
  }
  return (
    <div className='border p-15 w-ful ease-in duration-100 bg-white rounded-lg'>
        <div className='p-8'>
            <h3 className='text-3xl font-bold'>Cliente del pedido: {nombre}</h3>
            <p className='font-black text-xl text-green-600'>Total: {formatearDinero(total)}</p>
            <div className="text-xl font-bold mt-2">Fecha: {formatearFecha(fecha)}</div>
            <div className='flex justify-between'>
                <p className="text-sm font-bold mt-2">Productos</p>
                <p className="text-sm font-bold mt-2">Cantidad</p>
            </div>
            {pedido.map(({id,cantidad, nombre,imagen}) => {
                return( 
                <ul className='flex justify-between cente' key={id} >
                    <li>  
                    <div className="md:w-8/12">  
                        <Image
                             width={150}
                             height={200}
                            src={`/assets/img/${imagen}.jpg`}>
                        </Image>
                    </div>
                    </li>    
                    <li className="text-sm font-bold mt-2 ">{nombre}</li>                    
                    <li className="text-sm font-bold mt-2">{cantidad}</li>
                    
                </ul>
                );
            })}
            <div className='w-full flex justify-end'>
                 <button
                    type='button'
                    className='bg-red-600 hover:bg-red-800 text-white w-2/6 mt-5 p-3 uppercase font-bold'
                    onClick={() => {
                        const confirmar = window.confirm("¿Está seguro de completar esta orden?");
                        if (confirmar) {
                            handleEliminarOrden(orden.id);
                        }
                    }}>
                    Completar Orden 
                </button>
            </div>
        </div>
    </div>
  )
}

export default Orden