type recipeInfo = {
    name: string
    image: string
    ingridients: string[]
    instruction: string
    quote: string
    customer: string
}

function PrintRecipe (recipe: recipeInfo){
    return <>
        <header>
            <h2>{recipe.name}</h2>
        </header>
        <img src={recipe.image}/>
        <a href={"www.youtube.de"}>Youtube</a>
        <h3>Zutaten</h3>
        <ul>
            {recipe.ingridients.map((zutat:string) => (
                <li>{zutat}</li>
            ))}
        </ul>
        <p>
            {recipe.instruction}
        </p>
        <blockquote>
            <p>{recipe.quote}</p>
            <footer>- von {recipe.customer}</footer>
        </blockquote>
    </>
}

export default PrintRecipe
