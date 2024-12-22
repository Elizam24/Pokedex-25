import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import  './index.css';
import { NameProvider } from './contexts/nameContext';

createRoot(document.getElementById('root')).render(
  <NameProvider>
    <HashRouter future={{
      v7_startTransition: true,
        v7_relativeSplaPath:true
        }}>  
          <AppRouter/>
           </HashRouter>
             </NameProvider>
          )