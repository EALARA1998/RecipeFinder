import type { StateCreator } from "zustand"
import type { Recipe } from "../types"
import { createRecipesSlice, type RecipesSliceType } from "./recipesSlice"
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice"

export type FavoritesSliceType = {
  favorites: Recipe[]
  handleClickFavorite: (recipe: Recipe) => void
  favoriteExists: (id: Recipe["idDrink"]) => boolean
  loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      set({
        favorites: get().favorites.filter( favorites => favorites.idDrink !== recipe.idDrink )
      })
      createNotificationSlice(set, get, api).showNotification({
        text: "Se elimino de favoritos.",
        error: false
      })
    }else{
      set({
        favorites: [ ...get().favorites, recipe ]
      })
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agrego a favoritos.",
        error: false
      })
    }
    createRecipesSlice(set, get, api).closeModal()
    localStorage.setItem("favorites", JSON.stringify(get().favorites))
  },
  favoriteExists: (id) => {
    return get().favorites.some(favorite => favorite.idDrink === id)
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites)
      })
    }
  }
})