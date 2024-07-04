import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LinkPage from './pages/LinkPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:user" element={<LinkPage />} />
      </Routes>
    </Router>
  );
};

export default App;
