import { Route, Routes } from 'react-router';
import { Homepage, FavoritesPage } from './pages';
import { Header } from './components';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
