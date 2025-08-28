import { create } from "zustand"
import { createRecipesSlice, type RecipesSliceType } from "./recipesSlice"
import { devtools } from "zustand/middleware"
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice"
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice"
import { createAISlice, type AISliceType } from "./aiSlice"

//SlicePattern
export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools((...a)=>({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
  ...createAISlice(...a)
})))