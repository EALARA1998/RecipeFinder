import { streamText } from "ai"
import { openrouter } from "../lib/ai"

export default {
  async generateRecipe(prompt: string){
    const result = streamText({
      model: openrouter("meta-llama/llama-3.3-70b-instruct:free"),
      prompt: prompt,
      system: "Da las recetas que te pidan con sus respectivas medidas de cada ingrediente y como se elabora a partir de ellos."
    })
    return result.textStream
  }
}