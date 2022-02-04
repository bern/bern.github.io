import { useState } from "react";
import { AddIngredientModal } from "./AddIngredientModal";
import { IIngredient } from "./DrinkMix";
import { DrinkMixButton } from "./DrinkMixButton";
import { IngredientListItem } from "./IngredientListItem";

interface IIngredientListProps {
    filteredIngredients: IIngredient[];
    onEditIngredient: (index: number, ingredient: IIngredient) => void;
    addEmptyIngredient: () => void;
    deleteIngredient: (index: number) => void;
}

export const IngredientList = (props: IIngredientListProps) => {
    const { filteredIngredients, addEmptyIngredient, onEditIngredient, deleteIngredient } = props;

    const [isEditingIndex, setIsEditingIndex] = useState(-1);

    return (
        <div className="drinkMix__ingredientList">
            {filteredIngredients
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
                    setIsEditingIndex(filteredIngredients.length);
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
                defaultValue={filteredIngredients[isEditingIndex] || {}}
            />}
        </div>
    );
}