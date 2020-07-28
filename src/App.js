import React, { useState, useEffect } from 'react';
import Categories from './components/Categories';

function App() {
  const cat = ['Все', 'Вкусные', 'разные', 'Очень', 'Сладкие'];

  // useEffect(() => {
  //   document.title = name;
  // });
  return (
    <div>
      <h1>{cat}</h1>
      <Categories cat={cat} onClick={(name) => (document.title = name)} />
    </div>
  );
}

export default App;
