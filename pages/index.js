import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import HomePage from '@/components/homePage'
import Cart from '@/components/cart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={``}
    >
     <Navbar/>
     <HomePage/>
     <Cart/>
    </main>
  )
}
