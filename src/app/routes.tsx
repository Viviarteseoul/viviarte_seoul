import { createBrowserRouter } from 'react-router';
import { About } from './components/About';
import { EducationPage } from './components/EducationPage';
import { ProceduresPage } from './components/ProceduresPage';
import { PartnershipPage } from './components/PartnershipPage';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntroPage } from './components/IntroPage';

// Layout wrapper for consistent header/footer
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

// Home page
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Footer />
      </div>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <IntroPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
  },
  {
    path: '/education',
    element: <Layout><EducationPage /></Layout>,
  },
  {
    path: '/procedures',
    element: <Layout><ProceduresPage /></Layout>,
  },
  {
    path: '/partnership',
    element: <Layout><PartnershipPage /></Layout>,
  },
  {
    path: '/shop',
    element: <Layout><ShopPage /></Layout>,
  },
  {
    path: '/shop/:id',
    element: <Layout><ProductDetailPage /></Layout>,
  },
]);