import PostDetails from "@/components/PostDetails";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = {
  params: {
    postId: string;
  }
}

export default async function PostPage({ params }: Props) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.postId)
    },
    include: {
      author: true
    }
  })

  if (!post) {
    notFound();
  }
  console.log(post)

  return (
    <PostDetails {...post} />
  )
}