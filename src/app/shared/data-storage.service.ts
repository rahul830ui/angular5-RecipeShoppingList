import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authSevice: AuthService) {}

  storeRecipes() {
    const token = this.authSevice.getToken();
    return this.http.put('https://angular5-recipe.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authSevice.getToken();
    this.http.get<Recipe[]>('https://angular5-recipe.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (newRecipes) => {
          for (const recipe of newRecipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return newRecipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.updateRecipes(recipes);
        }      );
  }
}
