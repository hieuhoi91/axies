import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import router from './routes';

function App() {
  return (
    <Routes>
      {router.map((route, index) => {
        const Page = route.component;

        return (
          <Route
            key={index}
            path="/"
            element={
              <DefaultLayout>
                <Page />
              </DefaultLayout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
