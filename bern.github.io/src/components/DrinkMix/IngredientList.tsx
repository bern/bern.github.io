import { useState } from "react";
import { AddIngredientModal } from "./AddIngredientModal";
import { IIngredient } from "./DrinkMix";
import { DrinkMixButton } from "./DrinkMixButton";
import { IngredientListItem } from "./IngredientListItem";

interface IIngredientListProps {
    ingredients: IIngredient[];
    onEditIngredient: (index: number, ingredient: IIngredient) => void;
    addEmptyIngredient: () => void;
    deleteIngredient: (index: number) => void;
}

export const IngredientList = (props: IIngredientListProps) => {
    const { ingredients, addEmptyIngredient, onEditIngredient, deleteIngredient } = props;

    const [isEditingIndex, setIsEditingIndex] = useState(-1);

    return (
        <div className="drinkMix__ingredientList">
            {ingredients
                .filter((ingredient: IIngredient) => ingredient.name !== '')
                .map((ingredient: IIngredient, index: number) => {
                    return (
                        <IngredientListItem
                            ingredient={ingredient}
                            onItemClick={() => { setIsEditingIndex(index); }}
                            onDelete={() => {
                                setIsEditingIndex(-1);
                                deleteIngredient(index);
                            }}
                        />
                    );
                })
            }
            <DrinkMixButton
                onClick={() => {
                    addEmptyIngredient();
                    setIsEditingIndex(ingredients.length);
                }}
                className="drinkMix_newIngredientButton"
            >
                + Add Ingredient
            </DrinkMixButton>
            {isEditingIndex >= 0 && <AddIngredientModal
                onSaveIngredient={
                    (ingredient: IIngredient) => { onEditIngredient(isEditingIndex, ingredient); }
                }
                onClose={() => { setIsEditingIndex(-1); }}
                defaultValue={ingredients[isEditingIndex] || {}}
            />}
        </div>
    );
}