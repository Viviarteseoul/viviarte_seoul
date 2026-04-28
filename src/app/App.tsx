import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <div style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden', position: 'relative' }}>
      <LanguageProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </LanguageProvider>
    </div>
  );
}