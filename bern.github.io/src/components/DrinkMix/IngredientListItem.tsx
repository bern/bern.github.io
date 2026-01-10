import { IIngredient } from "./DrinkMix"
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IIngredientListItemProps {
    ingredient: IIngredient;
    onItemClick: () => void;
    onDelete: () => void;
}

export const IngredientListItem = (props: IIngredientListItemProps) => {
    const { ingredient, onItemClick, onDelete } = props;

    library.add(Icons.faTrash);

    return (
        <div className="drinkMix__ingredientListItem">
            <div className="drinkMix__ingredientListItem--label" onClick={() => { onItemClick(); }}>
                <div className="drinkMix__ingredientListItem--color" style={{ backgroundColor: ingredient.color }}/>
                <span className="drinkMix__ingredientListItem--amount">{`${ingredient.amount}oz.`}</span>
                <span style={{ display: 'block', marginLeft: '4px' }}>{`${ingredient.name}`}</span>
            </div>
            <div className="drinkMix__ingredientListItem--delete" onClick={() => { onDelete(); }}>
                <FontAwesomeIcon icon="trash"/>
            </div>
        </div>
    );
}
