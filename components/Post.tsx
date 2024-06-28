import { Post as PostPrisma, User } from "@prisma/client"
import Link from "next/link"
import styles from './Post.module.css'

type Props = {
  post: PostPrisma & {
    author: User | null
  }
}

export default function Post({ post }: Props) {
  const authorName = post.author ? post.author.name : 'Anonymous'
  return (
    <Link href={`/posts/${post.id}`} className={styles.post}>
      <h2>{post.title}</h2>
      <small>{authorName}</small>
    </Link>
  )
}