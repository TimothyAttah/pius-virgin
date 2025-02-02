import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import About from './pages/about/About';
import Layout from './components/Layout';
import Contact from './pages/contact/Contact';
import ArtGallery from './pages/whatWeDo/modules/artGallery/ArtGallery';
import WhatWeDo from './pages/whatWeDo/WhatWeDo';
import Media from './pages/whatWeDo/modules/media/Media';
import ToursAndExcursion from './pages/whatWeDo/modules/toursAndExcursion/ToursAndExcursion';
import Rail from './pages/whatWeDo/modules/rail/Rail';
import Programming from './pages/whatWeDo/modules/programming/Programming';
import HumanRelations from './pages/whatWeDo/modules/humanRelations/HumanRelations';
import HealthManagement from './pages/whatWeDo/modules/healthManagement/HealthManagement';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<WhatWeDo />} />
          <Route path='/services/art_gallery' element={<ArtGallery />} />
          <Route path='/services/media' element={<Media />} />
          <Route
            path='/services/tours_excursion'
            element={<ToursAndExcursion />}
          />
          <Route path='/services/rail' element={<Rail />} />
          <Route
            path='/services/web_development_programming'
            element={<Programming />}
          />
          <Route
            path='/services/human_relations'
            element={<HumanRelations />}
          />
          <Route
            path='/services/health_management'
            element={<HealthManagement />}
          />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
