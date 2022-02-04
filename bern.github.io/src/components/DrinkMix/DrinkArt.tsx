import { IIngredient } from "./DrinkMix"
import { IngredientList } from "./IngredientList";

interface IDrinkArtProps {
    filteredIngredients: IIngredient[];
}

export const DrinkArt = (props: IDrinkArtProps) => {
    const { filteredIngredients } = props;

    return (
        <div className="drinkMix__glass--outer">
            <div className="drinkMix__glass--top"/>
            <div className="drinkMix__glass--shade"/>
            <div className="drinkMix__glass--inner">
                {filteredIngredients.map((ingredient: IIngredient, index: number) => {
                    let backgroundColor = ingredient.color;
                    if(index + 1 < filteredIngredients.length) {
                        backgroundColor = `linear-gradient(180deg, ${ingredient.color} 90%, ${filteredIngredients[index+1].color} 100%)`;
                    }

                    const totalOunces = filteredIngredients.reduce((acc: number, obj: IIngredient) => {
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
                                backgroundColor,
                                background: backgroundColor
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}