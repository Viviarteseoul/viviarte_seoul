import { RouterProvider } from 'react-router';
import { router } from './routes';
import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </LanguageProvider>
  );
}