const Ingredient = ({ ingredient, onAdd, onRemove, isStack }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      {isStack ? (
        <button onClick={() => onRemove()}>X</button>
      ) : (
        <button onClick={() => onAdd(ingredient)}>+</button>
      )}
    </li>
  );
};

export default Ingredient; 