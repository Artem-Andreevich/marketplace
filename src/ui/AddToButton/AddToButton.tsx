import styles from "./AddToIcon.module.scss"

type type = "compare" | "favorites"

enum size {
    xs = "xs",
    lg = "lg"
}
interface AddToButtonType {
    type: type
    size: Record<size, string>
}

export const AddToButton = ({ type, size }: AddToButtonType) => {
    return (
        <button 
            className={styles.addTo}
            type="button"
        >
            <svg 
                className={size.lg}
                width="28px" 
                height="24px"
            >
                <use xlinkHref="#fav"></use>
            </svg>
        </button>
    )
}
