import Layout from "../../layout/Layout"
import useQuiosco from "../../hooks/useQuiosco"
import ResumenProducto from "../../components/ResumenProducto"

export default function Resumen() {
    const {pedido} = useQuiosco()
    return(
        <Layout pagina='Resumen'>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu pedido</p>

            {pedido.length === 0 ? (
                <p className="text-center text-2xl">
                    No hay elementos en tu pedido
                </p>
            ) : (
                pedido.map((producto)=>(                    
                    <ResumenProducto 
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )
            }
            <button
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded bg-center">
                Hacer Pedido
            </button>
        </Layout>

        
    )
 }