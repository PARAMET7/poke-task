import React from 'react';

function ItemList({ items, setCurrentItem }) {
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className="flex justify-between">
            <div>{item.name}</div>
            <button onClick={() => setCurrentItem(item)} className="bg-yellow-500 text-white px-2 py-1 rounded">
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
