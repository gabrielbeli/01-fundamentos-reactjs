import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="https://github.com/gabrielbeli.png" />
          <div className={styles.authorInfo}>
            <strong>Gabriel Beli</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="15 de maio as 19:00h" dateTime='2023-05-15 19:00:15'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Reactjs, formação da Rocketseat. O nome do projeto é Ignite Feed 🚀</p>
        <p><a href="">👉{' '} gabrielbeli/IgniteFeed</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '} 
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário' />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}