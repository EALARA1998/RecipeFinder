import { create } from "zustand"
import { createRecipesSlice, type RecipesSliceType } from "./recipesSlice"
import { devtools } from "zustand/middleware"
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice"
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice"

//SlicePattern
export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a)=>({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a)
})))