import IngridientList from "./IngridientList.tsx";

type RecipeInfoProps = {
    className: string
    name: string
    image: string
    ingredients: string[]
    instruction: string
    quote: string
    customer: string
}

function PrintRecipe (props: RecipeInfoProps){
    return <>
        <article className={props.className}>
            <header>
                <h2>{props.name}</h2>
            </header>
            <img src={props.image}/>
            <a href={"www.youtube.de"}>Youtube</a>
            <h3>Zutaten</h3>
            <IngridientList ingredients={props.ingredients}/>
            <p>
                {props.instruction}
            </p>
            <blockquote>
                <p>{props.quote}</p>
                <footer>- von {props.customer}</footer>
            </blockquote>
        </article>
    </>
}

export default PrintRecipe
