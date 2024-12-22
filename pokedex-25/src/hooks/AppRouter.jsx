import {Routes,Route} from 'react-router-dom'
import Home from '../app/Home'
import Pokedex from '../app/Pokedex'
import Details from '../app/Details'
import ProtectedRouter from './ProtectedRouter'

function AppRouter () {
    return ( 
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path='/pokedex' element ={<ProtectedRouter />}>
                <Route index element ={<Pokedex />}/>
                <Route path=':name' element={<Details />}/>
            </Route>
        </Routes>
    )
}
 
export  { AppRouter } 