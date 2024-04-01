import { Post }  from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Gabriel Beli"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, nobis aliquid perferendis fugiat voluptatibus alias esse obcaecati doloremque dolore soluta autem ipsum, corrupti illo delectus ipsam doloribus voluptatum? Minus, officiis!" 
      />
      <Post
        author="Joana Dark"
        content="O fogo não é nada, se não, a propria raiva" 
      />
    </div>
  )
}

