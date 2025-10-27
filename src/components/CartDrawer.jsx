import React from 'react'
import { IoClose } from "react-icons/io5"
import { BsTrash } from "react-icons/bs"
import { useCart } from '../context/CartContext'

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice,
    clearCart 
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className='fixed inset-0 bg-black/50 z-40 transition-opacity'
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className='fixed right-0 top-0 h-full w-full md:w-[450px] bg-white z-50 shadow-2xl flex flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b-[2px] border-primary'>
          <h2 className='text-[24px] font-semibold'>Your Cart</h2>
          <button
            onClick={closeCart}
            className='p-2 hover:bg-primary/10 rounded-lg transition-all'
          >
            <IoClose className='text-[28px]' />
          </button>
        </div>

        {/* Cart Items */}
        <div className='flex-1 overflow-y-auto p-6'>
          {cartItems.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-full text-center'>
              <p className='text-[18px] font-semibold text-primary/60 mb-2'>Your cart is empty</p>
              <p className='text-[14px] font-medium text-primary/40'>Add some equipment to get started</p>
            </div>
          ) : (
            <div className='space-y-4'>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className='border-[2px] border-primary rounded-lg p-4'
                >
                  <div className='flex gap-4'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-20 h-20 object-cover rounded-lg'
                    />
                    <div className='flex-1'>
                      <h3 className='text-[16px] font-semibold mb-1'>{item.name}</h3>
                      <p className='text-[12px] font-medium text-primary/60 mb-2'>
                        {item.brand} • {item.size}
                      </p>
                      <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-2 border-[2px] border-primary rounded-lg'>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className='px-3 py-1 hover:bg-primary/10 transition-all text-[16px] font-semibold'
                          >
                            -
                          </button>
                          <span className='text-[14px] font-semibold min-w-[20px] text-center'>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className='px-3 py-1 hover:bg-primary/10 transition-all text-[16px] font-semibold'
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className='p-2 hover:bg-red-50 rounded-lg transition-all'
                        >
                          <BsTrash className='text-[16px] text-red-600' />
                        </button>
                      </div>
                    </div>
                    <div className='text-right'>
                      <p className='text-[16px] font-bold'>${item.price * item.quantity}</p>
                      <p className='text-[12px] font-medium text-primary/60'>${item.price}/day</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className='border-t-[2px] border-primary p-6 space-y-4'>
            <button
              onClick={clearCart}
              className='w-full py-2 text-[14px] font-semibold text-primary/60 hover:text-primary transition-all'
            >
              Clear Cart
            </button>
            <div className='flex items-center justify-between mb-4'>
              <span className='text-[18px] font-semibold'>Total:</span>
              <span className='text-[28px] font-bold'>${getTotalPrice()}</span>
            </div>
            <button className='w-full py-4 bg-primary text-white rounded-lg text-[16px] font-semibold hover:bg-primary/90 transition-all'>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer

