import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Barra } from "./barra_nav/Barra"
import { Pagina_1 } from './pagina_pricipal/pagina-1'
import { PagCosola } from './pagina-consola'
function App() {

  return (
    <>
      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path='/' element={<Pagina_1 />}></Route>
          <Route path='/pagComsola/' element={<PagCosola/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
