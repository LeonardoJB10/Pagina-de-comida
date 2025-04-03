import { Route, Routes } from 'react-router-dom';

// Importación de componentes para cada una de las páginas de la aplicación
import PageHome from './home/pageHome';
import PageContact from './contact/pageContact';
import PageAbout from './about/pageAbout';
import HomePage from '../pages/HomePage';
import NotFound from './NotFound';
import PageDash from './dash/PageDash';
import PageTrading from './dash/PageTrading';
import DetallesDash from './dash/DetallesDash';
import DetalleComida from '../pages/DetalleComida';
import { AlumnoPromedio } from '../components/AlumnoPromedio';
import { ContenedorAprobado } from '../components/Alumnospro/ContenedorAprobado';
import { ContenedorReprobado } from '../components/Alumnospro/ContenedorReprobado';
import MainTienda from '../components/Tienda/MainTienda/MainTienda';
import Objectos_Tienda from '../components/Tienda/Objectos_Tienda/Objectos_Tienda';
import ContenidoJuegos from '../pages/ContenidoJuegos';
import GameDetail from '../pages/GameDetail.';

export default function AppRoutes() {
    return (
        <Routes>
            {/* Página de inicio */}
            <Route path='/' element={<PageHome />} />

            {/* Páginas "Acerca de" y "Contacto" */}
            <Route path='/about' element={<PageAbout />} />
            <Route path='/contact' element={<PageContact />} />

            {/* Sección de recetas */}
            <Route path='/recetas'>
                <Route index element={<HomePage />} />
                <Route path=':id' element={<DetalleComida />} />
            </Route>

            {/* Sección de promedios */}
            <Route path="/promedio">
                <Route index element={<AlumnoPromedio />} />
                <Route path='aprobado' element={<ContenedorAprobado />} />
                <Route path='reprobado' element={<ContenedorReprobado />} />
            </Route>

            {/* Sección de la tienda */}
            <Route path="/tienda">
                <Route index element={<MainTienda />} />
                <Route path='productos' element={<Objectos_Tienda />} />
            </Route>

            {/* Ruta para la página de juegos */}
            <Route path="/juegos" element={<ContenidoJuegos />} />  {/* Esta ruta puede ser la página donde se listan los juegos */}

            {/* Ruta dinámica para los detalles del juego */}
            <Route path="/game/:id" element={<GameDetail />} />

            {/* Ruta comodín para páginas no encontradas */}
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}
