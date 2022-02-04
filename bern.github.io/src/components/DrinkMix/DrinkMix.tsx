import { useState } from "react";
import { DrinkArt } from "./DrinkArt";
import { IngredientList } from "./IngredientList";

export interface IIngredient {
    name: string;
    amount: number;
    color: string;
}

export const DrinkMix = () => {
    const [ingredients, setIngredients] = useState<IIngredient[]>(Array.from(Array(0)));

    return (
        <div id="drink-mix-app">
            <div className="drinkMix__title">DrinkMix 🍸🍹🥂</div>
            <div className="drinkMix__container">
                <div className="drinkMix__ingredientsContainer">
                    <IngredientList
                        ingredients={ingredients}
                        onEditIngredient={(index: number, updatedIngredient: IIngredient) => {
                            setIngredients(ingredients.map((ingredient: IIngredient, idx: number) => {
                                if (idx === index) {
                                    return updatedIngredient;
                                }

                                return ingredient;
                            }));
                        }}
                        addEmptyIngredient={() => {
                            setIngredients(
                                ingredients.concat({name: '',amount: 0,color: ''})
                            );
                        }}
                        deleteIngredient={(index: number) => {
                            setIngredients(ingredients.filter((_, idx: number) => idx !== index));
                        }}
                    />
                </div>
                <div className="drinkMix__glassContainer">
                    <DrinkArt ingredients={ingredients}/>
                </div>
            </div>
        </div>
    )
}