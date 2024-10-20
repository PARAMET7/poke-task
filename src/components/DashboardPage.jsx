import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import UpdateItemForm from './UpdateItemForm';
import ItemList from './ItemList'; // Assuming you have an ItemList component

function DashboardPage() {
  const [items, setItems] = useState([]); // Initial items list
  const [currentItem, setCurrentItem] = useState(null);

  const addItem = (newItem) => {
    setItems([...items, { id: Date.now(), ...newItem }]); // Adding unique ID
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setCurrentItem(null); // Reset currentItem after updating
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <AddItemForm addItem={addItem} />
      {currentItem && <UpdateItemForm currentItem={currentItem} updateItem={updateItem} />}
      <ItemList items={items} setCurrentItem={setCurrentItem} /> {/* Pass setCurrentItem to select an item for updating */}
    </div>
  );
}

export default DashboardPage;
