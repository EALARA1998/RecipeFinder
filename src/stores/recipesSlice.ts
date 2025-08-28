import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

export type RecipesSliceType = {
  categories: Categories
  drinks: Drinks
  selectedRecipe: Recipe
  modal: boolean
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>
  closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType> = (set, /*get , api*/) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    const data = await getCategories()
    set({
      categories: data
    })
  },
  searchRecipes: async (searchFilter: SearchFilter) => {
    const data = await getRecipes(searchFilter)
    set({
      drinks: data
    })
  },
  selectRecipe: async (id) => {
    const data = await getRecipeById(id)
    set({
      selectedRecipe: data,
      modal: true
    })
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe
    })
  }
})