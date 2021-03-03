export function parseRecipe(recipe: GatsbyTypes.ContentfulRecipe) {
  const totalTime =
    recipe?.prepTime && recipe?.totalTime ? recipe?.prepTime + recipe?.totalTime : '';

  const prepDirections =
    recipe?.prepDirections?.prepDirections?.split('\n').map(prepDir => prepDir.slice(2)) ?? [];

  const instructions =
    recipe?.directions?.directions?.split('\n').map(direction => direction.slice(2)) ?? [];

  const notes = recipe?.notes?.notes?.split('\n').map(note => note.slice(2)) ?? [];

  const ingredients = recipe?.ingredients?.ingredients?.split('\n');
  const ingredientGroups = [];

  if (ingredients) {
    let currentIndex = 0;

    while (currentIndex < ingredients.length) {
      const currentGroup = [];
      const amountIndex = currentIndex + 1;
      const notesIndex = currentIndex + 2;
      currentGroup.push(ingredients[currentIndex].slice(2));
      currentGroup.push(ingredients[amountIndex].slice(4));

      const hasNotes = notesIndex < ingredients.length && ingredients[notesIndex][0] == ' ';

      if (hasNotes) {
        currentGroup.push(ingredients[notesIndex].slice(4));
        currentIndex++;
      }

      ingredientGroups.push(currentGroup);
      currentIndex += 2;
    }
  }

  return {
    title: recipe?.title,
    imageFluid: recipe?.mainImage?.fluid,
    cookTime: recipe?.totalTime,
    prepTime: recipe?.prepTime,
    totalTime: totalTime,
    yield: recipe?.yield,
    ingredientGroups: ingredientGroups,
    prepDirections: prepDirections,
    instructions: instructions,
    notes: notes,
  };
}
