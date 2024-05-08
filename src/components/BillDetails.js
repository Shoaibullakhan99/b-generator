import React, { useState } from 'react'

function BillDetails({onAddItem, onDeleteItem}) {

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddition = () => {
        if(!item.trim()) {
            setErrorMessage(`Please input data in the item section.`);
            return;
        }
        if(!/^[a-zA-Z]+$/.test(item)){
            setErrorMessage(`Item should only contain alphabetical charecters.`);
            return;
        }
        const newitem = {item, quantity, price};
        onAddItem(newitem);
        setItem('');
        setQuantity(1);
        setPrice(0);
        setErrorMessage('')
    }

  return (
    <div>
        <label>Item</label>
        <input type='text' value={item} onChange={(e) => setItem(e.target.value)} />
        <label>Quantity</label>
        <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <label>Price</label>
        <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
        <button 
            onClick={handleAddition}
        >
            Add Item
        </button>
        <p style={{color: 'red'}}> 
            {errorMessage}
        </p>
    </div>
  )
}

export default BillDetails