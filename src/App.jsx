import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';
import Demo3 from './pages/Demo3';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <Router>
        <nav className='bg-black/90 text-gray-400 flex justify-center gap-5 uppercase p-3 transition-all '>
          <NavLink to="/">Demo 1</NavLink>
          <NavLink to="/2">Demo 2</NavLink>
          <NavLink to="/3">Demo 3</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={ <Demo1 /> } />
          <Route exact path="/2" element={ <Demo2 /> } />
          <Route exact path="/3" element={ <Demo3 /> } />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;