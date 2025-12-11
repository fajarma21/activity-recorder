import { BrowserRouter, Route, Routes } from 'react-router';

import Header from '@/components/Header';
import Main from '@/routes/Main';
import NotFound from '@/routes/NotFound';
import Summary from '@/routes/Summary';

import ToasterContainer from './components/ToasterContainer';
import css from './View.module.scss';

// TODO: move routes to App
// TODO: 404 page
// TODO: export summary to pdf

const App = () => {
  return (
    <div className={css.container}>
      <Header />

      <div className={css.content}>
        <BrowserRouter basename="/activity-recorder">
          <Routes>
            <Route path="" element={<Main />} />
            <Route path="summary" element={<Summary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>

      <ToasterContainer />
    </div>
  );
};

export default App;
