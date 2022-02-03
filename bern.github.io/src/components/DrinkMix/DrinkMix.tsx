import { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IIngredient {
    name: string;
    amount: number;
    color: string;
}

const IngredientForm = ({onIngredientSave}: {onIngredientSave: (name: string, amount: number, color: string) => void}) => {
    library.add(Icons.faTimes);

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
        <Modal
            isOpen={isEditing}
            className="newIngredientModal__container"
            appElement={document.getElementById('root') || undefined}
        >
            <div style={{ border: hasError ? '1px solid red' : undefined }}>
                <div className="newIngredientModal__title">New Ingredient</div>
                <div id="modal-close" className="newIngredientModal__closeButton" onClick={() => {
                    setIsEditing(false);
                }}><FontAwesomeIcon icon="times"/></div>
                <div className="newIngredientModal__spacer"/>
                <div className="newIngredientModal__form">
                    <div>
                        <input className="newIngredientModal__form--input" type="text" ref={ingredientRef} defaultValue={ingredient && ingredient.name}/>
                        <span className="newIngredientModal__form--label">Ingredient</span>
                    </div>
                    <div>
                        <input className="newIngredientModal__form--input" type="text" placeholder="in ounces" ref={amountRef} defaultValue={ingredient && ingredient.amount}/>
                        <span className="newIngredientModal__form--label">Amount</span>
                    </div>
                    <div>
                        <input className="newIngredientModal__form--input" type="text" placeholder="hex code, like #9900cc" ref={colorRef} defaultValue={ingredient && ingredient.color}/>
                        <span className="newIngredientModal__form--label">Color</span>
                    </div>
                </div>
                <div className="newIngredientModal__spacer"/>
                <div id="modal-button-row" className="newIngredientModal__actionButtonRow">
                    <div className="newIngredientModal__button" tabIndex={0} onClick={() => {
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
                    <div className="newIngredientModal__button--secondary" tabIndex={0} onClick={() => {
                        setIsEditing(false);
                    }} >
                        Cancel
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export const DrinkMix = () => {
    const [ingredients, setIngredients] = useState<IIngredient[]>(Array.from(Array(1)));
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div id="drink-mix-app">
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