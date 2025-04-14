// src/components/IngredientList/IngredientList.jsx
import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients, onAddIngredient }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onAdd={onAddIngredient}
          isStack={false}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
  