import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sandwich',
      'Test Description',
      'https://www.mcalistersdeli.com/-/media/mcalisters/' +
      'menu/sandwiches/clubs_grilled-chicken-club_320x255.jpg?h=255&w=320&la=en&hash=8DC4AF60AAD8D58EBC6034F47938D5162D51910A',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Big fat Burger',
      'Test Description',
      'https://static01.nyt.com/images/2014/04/18/dining/salmonburger2/salmonburger-superJumbo.jpg',
      [
        new Ingredient('Tomatoes', 1),
        new Ingredient('French Fries', 20)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
