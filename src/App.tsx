import './App.css'
import PrintRecipe from "./component/Blog.tsx";
import DeveloperProfil from "./component/DeveloperProfil.tsx"

type recipeInfo = {
    className: string
    name: string
    image: string
    ingredients: string[]
    instruction: string
    quote: string
    customer: string
}

const recipes: recipeInfo[] = [
    {
        className: "Rezept1",
        name: "Grünes Öl",
        image: "https://brotmitei.de/wp-content/uploads/2024/09/Gruenes-Oel-.jpg",
        ingredients: ["300 g frische Kräuter", "500 g neutrales Pflanzenöl"],
        instruction: "Erhitzt euer Öl auf ca. 80-90° Celsius. Hackt währenddessen die Kräuter grob klein, um euren Mixer, vor allem bei den hartnäckigen und langen Stängeln, zu unterstützen.\n" +
            "    Gebt nun die Kräuter samt Öl in einen Mixer und püriert das Ganze für 4-5 Minuten auf hoher Stufe.\n" +
            "    Anschließend gebt ihr die Masse durch ein mit einem alten Handtuch ausgelegtes Spitzsieb und lasst das Öl langsam in ein Bügelglas oder größeres Gefäß ablaufen.\n" +
            "    Versucht das nicht zu stark auszupressen, da ansonsten zu viele Pflanzenstoffe, sprich grobe Partikel durch das Sieb in das Öl gedrückt werden. Das würde die Haltbarkeit stark mindern.",
        quote: "Was für eine coole Idee!",
        customer: "Max"
    },
    {
        className: "Rezept2",
        name:"Vegetarisches Fried Chicken",
        image: "https://brotmitei.de/wp-content/uploads/2024/03/KACHEL_WEB2.jpg",
        ingredients: ["250 g Buttermilch",
            "60 g Weizenmehl",
            "1 Tl Salz",
            "1 Tl Knoblauchpulver",
            "1 Tl Paprikapulver (süß)",
            "400 g Champignons",
            "200 g Cornflakes",
            "1 L Speiseöl (Raps oder Sonnenblumenöl)",
            "Passender Dip (bspw. Remoulade)"],
        instruction: "Vermengt die Buttermilch mit dem Mehl und euren Gewürzen.\n" +
            "    Die Cornflakes zerbröselt ihr nur grob.\n" +
            "    Nebenbei stellt ihr einen kleinen Topf (möglichst klein und hoch, um weniger Öl zu benötigen) auf und erhitzt es auf mittlerer Hitze auf ca. 170° C.\n" +
            "    Eure gesäuberten (trocken putzen) Pilze wälzt ihr am besten zunächst in etwas Mehl, anschließend in der Buttermilch und zuletzt in euren Cornflakes.\n" +
            "    Frittiert sie nun in dem heißen Öl bis sie goldbraun sind.\n" +
            "    Am besten schmecken sie mit selbstgemachter Remoulade und etwas Zitrone.",
        quote: "Dieses Rezept ist besonders lecker!",
        customer: "Anna"
    }
]

function App() {
  return <>
      <h1>Die besten Rezepte zum nachkochen!</h1>
      <h2>Einfach lecker!</h2>
      {recipes.map(recipe => {
            return <PrintRecipe
                key={recipe.className}
                className={recipe.className}
                name={recipe.name}
                image={recipe.image}
                ingredients={recipe.ingredients}
                instruction={recipe.instruction}
                quote={recipe.quote}
                customer={recipe.customer}
                />
          })}
      <DeveloperProfil key={"Lara"} name={"Lara"} age={27}/>
  </>
}

export default App
