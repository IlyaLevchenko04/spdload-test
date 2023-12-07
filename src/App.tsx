import { Route, Routes } from 'react-router';
import { Homepage, Favorites } from './pages';
import { Header } from './components';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
