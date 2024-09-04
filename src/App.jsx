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
import NavBar from './components/NavBar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Demo1 /> } />
          <Route exact path="/2" element={ <Demo2 /> } />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;