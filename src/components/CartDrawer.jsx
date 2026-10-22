import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import '../styles/CartDrawer.css';

export default function CartDrawer({ items, onClose, onQty, onCheckout }) {
  const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <div className="cart">
      <div className="cart__backdrop" onClick={onClose} />
      <aside className="cart__panel">
        <div className="cart__head">
          <div>
            <ShoppingBag size={20} />
            <h3>Your Order Bag</h3>
          </div>
          <button onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="cart__body">
          {items.length === 0 ? (
            <div className="cart__empty">
              <ShoppingBag size={48} />
              <p>Your bag is empty.</p>
              <span>Select from our popular meals to begin!</span>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart__item">
                <img src={item.img} alt={item.name} />
                <div className="cart__info">
                  <h4>{item.name}</h4>
                  <span>${item.price.toFixed(2)} each</span>
                  <div className="cart__qty">
                    <button onClick={() => onQty(item.id, -1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <strong className="cart__line">${(item.price * item.qty).toFixed(2)}</strong>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart__foot">
            <div className="cart__subtotal">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="cart__checkout" onClick={onCheckout}>
              Confirm &amp; Checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
