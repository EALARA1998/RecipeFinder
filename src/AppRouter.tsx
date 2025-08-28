import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"

const FavoritesPage = lazy(() => import("./views/FavoritesPage"))
const IndexPage = lazy(() => import("./views/IndexPage"))

type AppRouterProps = {
  
}

export default function AppRouter({}:AppRouterProps) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={
              <Suspense fallback="Cargando...">
                <IndexPage />
              </Suspense>
            }/>
            <Route path="/favorites" element={
              <Suspense fallback="Cargando...">
                <FavoritesPage />
              </Suspense>
            }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}