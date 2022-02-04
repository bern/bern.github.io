import { useRef, useState } from "react";
import ReactModal from 'react-modal';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IIngredient } from "./DrinkMix"
import { DrinkMixButton } from "./DrinkMixButton";

enum AddIngredientModalError {
    NoName,
    NoAmount,
    NoColor
}

interface IAddIngredientModalProps {
    defaultValue: IIngredient;

    onClose: () => void;
    onSaveIngredient: (ingredient: IIngredient) => void;
}

export const AddIngredientModal = (props: IAddIngredientModalProps) => {
    const { defaultValue, onClose, onSaveIngredient } = props;

    const [ingredient, setIngredient] = useState<IIngredient>(defaultValue);
    const [errors, setErrors] = useState<AddIngredientModalError[]>([]);

    const ingredientRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const colorRef = useRef<HTMLInputElement>(null);

    library.add(Icons.faTimes);

    const saveIngredient = () => {
        const name = ingredientRef && ingredientRef.current && ingredientRef.current.value || '';
        const amount = amountRef && amountRef.current && parseFloat(amountRef.current.value) || 0;
        const color = colorRef && colorRef.current && colorRef.current.value || '';

        let errors = [];

        if (name === '') {
            errors.push(AddIngredientModalError.NoName);
        }
        if (amount <= 0) {
            errors.push(AddIngredientModalError.NoAmount);
        }
        if (color === '') {
            errors.push(AddIngredientModalError.NoColor);
        }

        if (errors.length > 0) {
            setErrors(errors);
            return;
        }

        setIngredient({
            name,
            amount,
            color
        });
        setErrors([]);
        onSaveIngredient({name, amount, color});
        onClose();
    };

    return (
        <ReactModal
            isOpen={true}
            className="newIngredientModal__container"
            appElement={document.getElementById('root') || undefined}
        >
            <div>
                <div className="newIngredientModal__title">Add Ingredient</div>
                <div
                    id="modal-close" 
                    className="newIngredientModal__closeButton"
                    onClick={() => { onClose(); }}
                >
                    <FontAwesomeIcon icon="times"/>
                </div>
                <div className="newIngredientModal__spacer"/>
                <div className="newIngredientModal__form">
                    <div>
                        <input className="newIngredientModal__form--input" type="text" ref={ingredientRef} defaultValue={ingredient && ingredient.name}/>
                        <span className="newIngredientModal__form--label">Ingredient</span>
                        {errors.indexOf(AddIngredientModalError.NoName) >= 0 && (<span className="newIngredientModal__form--error">Ingredient can't be blank.</span>)}
                    </div>
                    <div>
                        <input className="newIngredientModal__form--input" type="text" placeholder="in ounces" ref={amountRef} defaultValue={ingredient && ingredient.amount}/>
                        <span className="newIngredientModal__form--label">Amount</span>
                        {errors.indexOf(AddIngredientModalError.NoAmount) >= 0 && (<span className="newIngredientModal__form--error">The amount entered was invalid.</span>)}
                    </div>
                    <div>
                        <input className="newIngredientModal__form--input" type="text" placeholder="hex code, like #9900cc" ref={colorRef} defaultValue={ingredient && ingredient.color}/>
                        <span className="newIngredientModal__form--label">Color</span>
                        {errors.indexOf(AddIngredientModalError.NoColor) >= 0 && (<span className="newIngredientModal__form--error">Color can't be blank.</span>)}
                    </div>
                </div>
                <div className="newIngredientModal__spacer"/>
                <div id="modal-button-row" className="newIngredientModal__actionButtonRow">
                    <DrinkMixButton onClick={() => saveIngredient()}>
                        Save
                    </DrinkMixButton>
                    <DrinkMixButton
                        className="newIngredientModal__cancelButton"
                        onClick={() => onClose()}
                        secondary
                    >
                        Cancel
                    </DrinkMixButton>
                </div>
            </div>
        </ReactModal>
    );
}