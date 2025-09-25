function generateRecipe(event){
    event.preventDefault();

new Typewriter("#recipe-text", {
  strings: ["Generating poem..."],
  autoStart: true,
  cursor: "",

});
}

let recipeGeneratorElement = document.querySelector("#recipe-generator-form");
recipeGeneratorElement.addEventListener("submit",generateRecipe);

