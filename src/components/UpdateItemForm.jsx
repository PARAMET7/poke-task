import React, { useState, useEffect } from 'react';

function UpdateItemForm({ currentItem, updateItem }) {
  const [itemData, setItemData] = useState(currentItem);

  useEffect(() => {
    setItemData(currentItem); // Update local state when currentItem changes
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData({ ...itemData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(itemData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <h2 className="mb-2">Update Item</h2>
      <div className="mb-2">
        <label className="block mb-1">Name:</label>
        <input type="text" name="name" value={itemData.name} onChange={handleChange} required className="border rounded w-full" />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Description:</label>
        <textarea name="description" value={itemData.description} onChange={handleChange} required className="border rounded w-full" />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Price:</label>
        <input type="number" name="price" value={itemData.price} onChange={handleChange} required className="border rounded w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Update Item
      </button>
    </form>
  );
}

export default UpdateItemForm;
