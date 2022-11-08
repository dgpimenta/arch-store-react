import styles from './Home.module.css'

import shoppingIcon from '../assets/shopping.svg'
import timeIcon from '../assets/time.svg'
import { ProductCard } from '../components/ProductCard'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const products = [
  {
    id: 1,
    title: "Camiseta Polo Azul",
    description: "Camiseta polo na cor azul, 100% algodão",
    image: "/polo-shirt.svg",
    price: "109,90",
    category: "Roupas"
  },
  {
    id: 2,
    title: "Notebook I7",
    description: "Notebook I7, 1Tb de disco rígido com 8Gb de memória RAM",
    image: "/laptop.svg",
    price: "4.510,79",
    category: "TI"
  },
  {
    id: 3,
    title: "Cadeira para escitório",
    description: "Cadeira giratória para escritótio na cor azul",
    image: "/chair.svg",
    price: "539,90",
    category: "Escritório"
  },
  {
    id: 4,
    title: "Xícara Geek",
    description: "Xícara Geek, tamanho de 220ml",
    image: "/geek-cup.png",
    price: "35,99",
    category: "Utensílios"
  },
  {
    id: 5,
    title: "Teclado Programmer",
    description: "Teclado especial para programadores",
    image: "/keyboard.svg",
    price: "279,90",
    category: "TI"
  },
  {
    id: 6,
    title: "Mouse bluetooth 2.0",
    description: "Mouse especial para devs",
    image: "/mouse.svg",
    price: "169,90",
    category: "TI"
  },
  {
    id: 7,
    title: "Camisa Polo Vermelha",
    description: "Camiseta polo na cor vermelha, 100% algodão",
    image: "/red-polo-shirt.svg",
    price: "109,90",
    category: "Roupas"
  },{
    id: 8,
    title: "Tablet DEV 2.5-SE",
    description: "Tablet especial para programadores",
    image: "/tablet.svg",
    price: "3.990,59",
    category: "TI"
  }
]

export function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <main id={theme === 'dark' && styles.dark}>
      <section id={styles.about}>
        <div id={styles.details} className={styles.container}>
          <div>
            <div id={styles.message}>
              <h1>Encontre o produto perfeito para você!</h1>
              <p>
                Com a Arch-Store você recebe seu produto onde estiver, a
                qualquer hora
              </p>
              <ul>
                <li>
                  <img src={shoppingIcon} alt="" />
                  <p>Compra simples e segura</p>
                </li>
                <li>
                  <img src={timeIcon} alt="" />
                  <p>Entrega rápida e rastreada</p>
                </li>
              </ul>
            </div>
          </div>
          <div id={styles.storeImage}>
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmclMjBvbmxpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </section>
      <section id={styles.store} className={styles.container}>
      
        <h2>Nossos produtos</h2>
        
        <div className={styles.products}>          
          
          {
            products.map(({id, title, description, image, price, category}) => {
              return (
                <ProductCard 
                  key={id}
                  title={title}
                  description={description}
                  image={image}
                  price={price}
                  category={category}
                />

              )
            })
          }
          

        </div>
      </section>
    </main>
    
  )
}