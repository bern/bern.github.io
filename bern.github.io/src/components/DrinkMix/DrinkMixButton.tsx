interface IDrinkMixButtonProps {
    secondary?: boolean;
    className?: string;
    children: React.ReactNode;

    onClick?: () => void;
}

export const DrinkMixButton = (props: IDrinkMixButtonProps) => {
    const { children, className, secondary, onClick } = props;

    return (
        <div
            className={
                `${secondary ?
                    `drinkMix__button--secondary` :
                    `drinkMix__button`} ${className}`
            }
            tabIndex={0}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
