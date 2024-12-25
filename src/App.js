import Buttons from './components/Buttons';
import Square from './components/Square';
import Zoho from './components/Zoho';
import styles from './style.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
          <Router>
      <Routes>
        <Route path="/" element={<Buttons/>} />
        <Route path="/zoho" element={<Zoho />} />
        <Route path="/Square" element={<Square />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
