import React from 'react'
import Layout from "../../layout/Layout"
import useQuiosco from '../../hooks/useQuiosco'
import Orden from '../../components/Orden'
const Ordenes = () => {

 const {orden} = useQuiosco();

  return (
    <Layout pagina='Resumen'>
    <h1 className="text-4xl font-black">Resumen</h1>
    <p className="text-2xl my-10">Revisa tu pedido</p>
        {orden.length === 0 ? (
        <p className="text-center text-2xl col-span-2">
            No se han realizado pedidos
        </p>
    ) 
        :(orden?.map(orden =>(
            <Orden key={orden.id} orden={orden}/>
          )))}
          </Layout>
  )
}

export default Ordenes
