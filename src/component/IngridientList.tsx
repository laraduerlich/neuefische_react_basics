type IngridientListProps = {
    ingredients: string[]
}

export default function IngridientList ({ingredients} :IngridientListProps) {
    return <ul>
        {ingredients.map((ingredient: string) => (
            <li>{ingredient}</li>
        ))}
    </ul>
}

