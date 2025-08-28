import { CategoriesAPIResponseSchema, RecipeAPIResponseSchema, DrinksAPIResponseSchema } from "../schemas/recipes-schema"
import type { Drink, SearchFilter } from "../types"

export async function getCategories() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error("HTTP error: " + res.status)

    const data = await res.json()
    if(!data) throw new Error("No hay respuesta")

    const result = CategoriesAPIResponseSchema.safeParse(data)
    if(!result.success) throw new Error("El schema no concuerda.")
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function getRecipes(searchFilter: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilter.category}&i=${searchFilter.ingredient}`
  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error("HTTP error: " + res.status)

    const data = await res.json()
    if(!data) throw new Error("No hay respuesta")

    const result = DrinksAPIResponseSchema.safeParse(data)
    if(!result.success) throw new Error("El schema no concuerda.")
    return result.data
  } catch (error) {
    console.log(error)
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  try {
    const res = await fetch(url)
    if(!res.ok) throw new Error("HTTP error: " + res.status)

    const data = await res.json()
    if(!data) throw new Error("No hay respuesta")
    
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(!result.success) throw new Error("El schema no concuerda.")
    return result.data
  } catch (error) {
    console.log(error)
  }
}