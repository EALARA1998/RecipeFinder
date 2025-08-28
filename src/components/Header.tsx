import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

type HeaderProps = {
  
}

export default function Header({}:HeaderProps) {

  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: ""
  })

  const { pathname } = useLocation()
  const isHome = useMemo(() => pathname === "/",[pathname])

  const {
    fetchCategories,
    categories,
    searchRecipes,
    showNotification
  } = useAppStore()

  useEffect(()=>{
    fetchCategories()
  },[])

  function handleChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (Object.values(searchFilters).includes("")) {
      showNotification({
        text: "Todos los campos son obligatorios.",
        error: true
      })
      return
    }
    searchRecipes(searchFilters)
  }

  return (
    <>
      <header className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
        <div className="mx-auto container px-5 py-16">
          <div className="flex justify-between items-center">
            <div>
              <img className="w-32" src="/logo.svg" alt="logo" />
            </div>
            <nav className="flex gap-4">
              <NavLink
                className={({isActive})=>isActive? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                to="/"
                >Inicio</NavLink>
              <NavLink
                className={({isActive})=>isActive? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                to="/favorites"
              >Favoritos</NavLink>
              <NavLink
                className={({isActive})=>isActive? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                to="/generate"
              >Generar con AI</NavLink>
            </nav>
          </div>
          { isHome && (
            <form
              className="md:w-1/2 2xl:w-1/3 bg-amber-400 my-32 p-10 rounded-lg shadow space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="block text-white uppercase font-extrabold text-lg"
                  htmlFor="ingredient"
                  >Nombre o Ingredientes</label>
                <input
                  className="p-3 w-full rounded-lg focus:outline-none bg-white"
                  id="ingredient"
                  name="ingredient"
                  type="text"
                  placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe."
                  value={searchFilters.ingredient}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block text-white uppercase font-extrabold text-lg"
                  htmlFor="category"
                  >Categoria</label>
                <select
                  className="p-3 w-full rounded-lg focus:outline-none bg-white"
                  id="category"
                  name="category"
                  value={searchFilters.category}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccione --</option>
                  {categories.drinks.map(c => (
                    <option
                      key={c.strCategory}
                      value={c.strCategory}
                    >{c.strCategory}</option>
                  ))}
                </select>
                <input
                  className="cursor-pointer bg-orange-800 hover:bg-amber-900 text-white font-extrabold w-full p-2 rounded-lg uppercase mt-4"
                  type="submit"
                  value="Buscar Recetas"
                />
              </div>
            </form>
          )}
        </div>
      </header>     
    </>
  )
}