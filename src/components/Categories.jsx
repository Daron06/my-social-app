import React, { useState } from 'react';

const Categories = ({ cat, onClick }) => {
  return (
    <div>
      <ul>
        {cat.map((name, index) => (
          <li onClick={() => onClick(name)} key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
