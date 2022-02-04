import { IIngredient } from "./DrinkMix"

interface IDrinkArtProps {
    ingredients: IIngredient[];
}

export const DrinkArt = (props: IDrinkArtProps) => {
    const { ingredients } = props;

    return (
        <div className="drinkMix__glass--outer">
            <div className="drinkMix__glass--top"/>
            <div className="drinkMix__glass--shade"/>
            <div className="drinkMix__glass--inner">
                {ingredients.filter((ingredient: IIngredient) => ingredient.name !== '').map((ingredient: IIngredient, index: number) => {
                    let backgroundColor = ingredient.color;
                    if(index + 1 < ingredients.length) {
                        backgroundColor = `linear-gradient(180deg, ${ingredient.color} 90%, ${ingredients[index+1].color} 100%)`;
                    }

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