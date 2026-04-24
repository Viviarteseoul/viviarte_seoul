import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartPopup({ isOpen, onClose }: CartPopupProps) {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log('결제 진행');
    onClose();
    // 실제 결제 페이지로 이동
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="text-xl font-medium text-black">
                  장바구니 <span className="text-gray-500">({totalItems})</span>
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-2">장바구니가 비어있습니다</p>
                  <button
                    onClick={() => {
                      onClose();
                      navigate('/shop');
                    }}
                    className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    쇼핑 시작하기
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-gray-50 rounded-xl relative group"
                    >
                      {/* Product Image */}
                      <div 
                        className="w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => {
                          onClose();
                          navigate(`/shop/${item.id}`);
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 
                          className="font-medium text-black mb-1 truncate cursor-pointer hover:underline"
                          onClick={() => {
                            onClose();
                            navigate(`/shop/${item.id}`);
                          }}
                        >
                          {item.nameKr}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{item.name}</p>
                        <p className="text-lg font-medium text-black">{item.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-50 transition-all"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                {/* Clear Cart Button */}
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-gray-500 hover:text-red-500 transition-colors"
                >
                  장바구니 비우기
                </button>

                {/* Total */}
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <span className="text-lg font-medium text-black">총 결제 금액</span>
                  <span className="text-2xl font-medium text-black">
                    ¥{totalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
                  >
                    결제하기
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      navigate('/shop');
                    }}
                    className="w-full py-4 border-2 border-gray-200 text-black rounded-full hover:bg-gray-50 transition-colors"
                  >
                    쇼핑 계속하기
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
