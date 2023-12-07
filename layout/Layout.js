import Head from "next/head"
import Sidebar from "../components/Sidebar"
import ModalProducto from "../components/ModalProducto"
import Modal from "react-modal"
import useQuiosco from "../hooks/useQuiosco"
import { ToastContainer } from "react-toastify"
import Pasos from "../components/pasos";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#__next");

export default function Layout({children, pagina}) {  

    const {modal} = useQuiosco()

    return (
      <>
        <Head>
            <title>Café - {pagina}</title>
            <meta name="description" content="Quiosco Cafeteria"/>
        </Head>

        <div className="md:flex">
            <aside className="md:w-4/12 xl:w1/4 2xl:w1-5">
                <Sidebar />

            </aside>
            <main className="md:w-8/12 xl:w3/4 2xl:w4-5 h-screen overflow-y-scroll">
                <div className="p-10" >
                  <Pasos />
                  {children}
                </div>
            </main>
        </div>
        {modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
            <ModalProducto />
          </Modal>
        )}
        <ToastContainer/>
      </>

    )
  }
  
  