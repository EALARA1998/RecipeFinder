import type { StateCreator } from "zustand"
import AIService from "../services/AIService"

export type AISliceType = {
  recipe: string
  isGenerating: boolean
  generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISliceType> = (set, get,/* api*/) => ({
  recipe: "",
  isGenerating: false,
  generateRecipe: async (prompt) => {
    set({ recipe: "", isGenerating: true })
    const data = await AIService.generateRecipe(prompt)
    for await (const textPart of data){
      set({
        recipe: get().recipe + textPart
      })
    }
    set({ isGenerating: false })
  }
})