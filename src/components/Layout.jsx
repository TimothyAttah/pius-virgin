import { Outlet} from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';


const Layout = () => {
  return (
    <>
      <Header />
      <div style={{marginTop: '90px'}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout
