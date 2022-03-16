import PostImage from "./PostImage"
import Link from 'next/link'

export default function PostPreview({ post }) {

  return (
    <Link href={`/posts/${post.id}`}>
      <div className="card mb-5 hover:shadow-2xl hover:cursor-pointer">
        {/* <PostImage imgURL={post.attributes.profile.data.attributes.url} classes={"rounded-t-3xl"} /> */}
        <div className="p-5">
          <p className="font-bold">{post.attributes.title}</p>
          <small>{post.attributes.author}: {post.attributes.createdAt}</small>
          <p className="mt-4 text-sm pb-2">{post.attributes.description}</p>
        </div>
      </div>
    </Link>
  )
}