import { Post }  from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Gabriel Beli"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nobis aliquid perferendis fugiat voluptatibus alias esse obcaecati doloremque dolore soluta autem ipsum, corrupti illo delectus ipsam doloribus voluptatum? Minus, officiis!" 
          />
        </main>
      </div>
    </div>
  )
}

