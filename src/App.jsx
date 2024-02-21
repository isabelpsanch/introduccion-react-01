import Ejercicio1 from './components/Ejercicio1/Saludar'
import Ejercicio2 from './components/Ejercicio2/ListaProductos'
import Ejercicio3 from './components/Ejercicio3/ListaProductosCondicional'
import Ejercicio4 from './components/Ejercicio4/Contador'
import Footer from './components/Footer'
import Header from './components/Header'
import TituloPrincipal from './components/TituloPrincipal'
import './components/TituloPrincipal'



export default function App() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1 />
        <Ejercicio2 />
        <Ejercicio3 />
        <Ejercicio4 />
        
      </main>
      <Footer />
    </>
  )
}
