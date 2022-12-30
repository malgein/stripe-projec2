import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Submenu from '../components/Submenu'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  )
}
