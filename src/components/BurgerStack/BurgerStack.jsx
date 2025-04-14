// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ ingredients, onRemoveIngredient }) => {
  return (
    <ul className="burger-stack">
      {ingredients.length === 0 ? (
        <li className="no-ingredients">No Ingredients</li>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onRemove={() => onRemoveIngredient(index)}
            isStack={true}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
  