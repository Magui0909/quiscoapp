import { useRouter } from "next/router"
import useQuiosco from "../hooks/useQuiosco";

const pasos = [
    {paso:1, nombre: 'Menu', url: '/'},
    {paso:2, nombre: 'Resumen', url: '/resumen'},
    {paso:3, nombre: 'Total', url: '/total'},
    //{paso:4, nombre: 'Pedidos', url: '/Ordenes'},
]


const Pasos = () => {

    const router = useRouter();
    return (
    <>
    <div className="flex justify-between mb-10">
        {
        pasos.map(paso => (
            <button key={paso.paso}
            className="text-4xl font-bold"
            onClick={()=> {
                router.push(paso.url)}}
            >
                {paso.nombre}
            </button>
        ))
        }
    </div>
    </>
  )
}

export default Pasos
