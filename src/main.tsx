import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter , Route,Routes  , } from "react-router-dom"
import AnimacionesCompnetne from './AnimacionesCompnetne.tsx'
import AnimeList from './Componentes/animeList.tsx'

import IzquierdaCompene from './Componentes/IzquierdaCompene.tsx'
import SingleAnime from './Componentes/SingleAnime.tsx'

import { Carousel  } from "@material-tailwind/react"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <App />} ></Route> 
      <Route path='/compo' element={ <AnimacionesCompnetne />} ></Route>
      <Route path='/animeList' element={<AnimeList></AnimeList>} ></Route>
      
      {/* <Route path='/list' element={<GridLater></GridLater>} ></Route> */}
            {/* <Route path='/animeList:/user' element={<SingleAnime></SingleAnime>} ></Route> */}
    </Routes>
  
    </BrowserRouter>
   
  </StrictMode>,
)
