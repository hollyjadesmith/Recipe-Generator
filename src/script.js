function displayRecipe(response){
console.log("Recipe generated...");

  let recipeText = response.data.answer
    .replace(/```html/g, "")
    .replace(/```/g, "")
    .trim();

new Typewriter("#recipe-text", {
  strings: [recipeText],
  autoStart: true,
  cursor: "",
  loop: false,
  delay: 20,
  deleteSpeed: null
});
}

function generateRecipe(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
let aipKey = "o94ea318dba23fta40204c3af2064fda";

let prompt = `User instructions are: Generate a short recipe of no more than 10 lines based on the ingredients: ${instructionsInput.value}`;
let context = "You are a recipe expert and love to write short recipes to help people decide on what to cook based on the contents of their fridge. Your mission is to generate a short recipe in basic HTML and make sure to follow the user instructions inputted.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${aipKey}`;


axios.get(apiUrl).then(displayRecipe);


}

let recipeGeneratorElement = document.querySelector("#recipe-generator-form");
recipeGeneratorElement.addEventListener("submit",generateRecipe);

