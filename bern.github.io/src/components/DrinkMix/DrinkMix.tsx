import { useState } from "react";
import { AddIngredientModal } from "./AddIngredientModal";
import { IngredientList } from "./IngredientList";

export interface IIngredient {
    name: string;
    amount: number;
    color: string;
}

export const DrinkMix = () => {
    const [ingredients, setIngredients] = useState<IIngredient[]>(Array.from(Array(0)));
    const [isSaved, setIsSaved] = useState(false);

    console.log({ ingredients })

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
                            setIngredients(ingredients.filter((_: IIngredient, idx: number) => idx !== index));
                        }}
                    />
                </div>
                <div className="drinkMix__glassContainer">
                    <div className="drinkMix__glass--outer">
                        <div className="drinkMix__glass--inner">
                            {ingredients.map((ingredient: IIngredient) => {
                                const totalOunces = ingredients.reduce((acc: number, obj: IIngredient) => {
                                    if (!obj) {
                                        return acc;
                                    }
                                    return acc + obj.amount;
                                }, 0);

                                return (
                                    <div
                                        className="drinkMix__glass--contents"
                                        style={{
                                            height: `${((ingredient.amount / totalOunces) * 100)}%`,
                                            backgroundColor: ingredient.color
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}