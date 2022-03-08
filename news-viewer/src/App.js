import React from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useState, useCallback } from 'react';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  return (
    <>
      <Categories onSelect={onSelect} category={category} />
      <NewsList category={category} />
    </>
  );
}

export default App;
