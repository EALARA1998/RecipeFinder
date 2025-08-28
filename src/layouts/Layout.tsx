import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { useAppStore } from "../stores/useAppStore"
import Notification from "../components/Notification"

type LayoutProps = {
  
}

export default function Layout({}:LayoutProps) {

  const { loadFromStorage } = useAppStore()

  useEffect(()=>{
    loadFromStorage()
  },[])

  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal />
      <Notification/>
    </>
  )
}