import { useRef, useState } from "react";

interface IIngredient {
    name: string;
    amount: number;
    color: string;
}

const IngredientForm = ({onIngredientSave}: {onIngredientSave: (name: string, amount: number, color: string) => void}) => {
    const [ingredient, setIngredient] = useState<IIngredient>();
    const [isEditing, setIsEditing] = useState(true);
    const [hasError, setHasError] = useState(false);

    const ingredientRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const colorRef = useRef<HTMLInputElement>(null);

    if(!isEditing && ingredient) {
        const { name, amount, color } = ingredient;

        return (
            <div onClick={() => setIsEditing(true)} style={{ cursor: 'pointer', backgroundColor: color }}>{`${name} - ${amount}oz`}</div>
        )
    }

    return (
        <div style={{ border: hasError ? '1px solid red' : undefined }}>
            <div>Ingredient <input type="text" ref={ingredientRef} defaultValue={ingredient && ingredient.name}></input></div>
            <div>Amount <input type="text" placeholder="in ounces" ref={amountRef} defaultValue={ingredient && ingredient.amount}></input></div>
            <div>Color <input type="text" placeholder="hex code, like #9900cc" ref={colorRef} defaultValue={ingredient && ingredient.color}></input></div>
            <div style={{ cursor: 'pointer', border: '1px solid black' }} onClick={() => {
                const name = ingredientRef && ingredientRef.current && ingredientRef.current.value || '';
                const amount = amountRef && amountRef.current && parseFloat(amountRef.current.value) || 0;
                const color = colorRef && colorRef.current && colorRef.current.value || '';

                if (name === '' || amount <= 0 || color === '') {
                    setHasError(true);
                    return;
                }

                setIngredient({
                    name,
                    amount,
                    color
                });
                setHasError(false);
                setIsEditing(false);
                onIngredientSave(name, amount, color);
            }}>Save</div>
        </div>
    );
}

export const DrinkMix = () => {
    const [ingredients, setIngredients] = useState<IIngredient[]>(Array.from(Array(1)));
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div>
            Let's create a recipe :)
            {ingredients.map((ingredient: IIngredient, i: number) => {
                return (
                    <IngredientForm onIngredientSave={(name: string, amount: number, color: string) => {
                        const currIngredients = ingredients;
                        currIngredients[i] = {name, amount, color};
                        setIngredients(currIngredients);
                    }}/>
                )
            })}
            <div
            onClick={() => {
                setIngredients([...ingredients, {name:'',amount:0,color:''}]);
            }}
            style={{
                cursor: 'pointer',
                border: '1px solid black',
                borderRadius: '8px',
                padding: '4px',
                width: '200px',
                margin: 'auto',
                textAlign: 'center'
            }}>
                New Ingredient
            </div>
            <div
            style={{
                cursor: 'pointer',
                border: '1px solid black',
                borderRadius: '8px',
                padding: '4px',
                width: '200px',
                margin: 'auto',
                textAlign: 'center'
            }} onClick={() => setIsSaved(true)}>Save Drink</div>
            {isSaved && (
                <div style={{ height: '315px', width: '200px', borderLeft: '4px solid black', borderRight: '4px solid black', borderBottom: '4px solid black' }}>
                    <div style={{ paddingTop: '15px', height: '300px', width: '100%'}}>
                        {ingredients.map((ingredient: IIngredient) => {
                            const totalOunces = ingredients.reduce((acc: number, obj: IIngredient) => {
                                if (!obj) {
                                    return acc;
                                }
                                return acc + obj.amount;
                            }, 0);

                            return (
                                <div style={{ width: '100%', height: `${((ingredient.amount / totalOunces) * 100)}%`, backgroundColor: ingredient.color}}/>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}