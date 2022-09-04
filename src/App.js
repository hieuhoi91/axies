import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Home from './pages/home/Home';

function App() {
  console.log('app');
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
