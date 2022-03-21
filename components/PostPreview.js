import PostImage from "./PostImage"
import Link from 'next/link'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'

export default function PostPreview({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <motion.div
        /* key={} */
        initial={{opacity: 0}} // hidden
        animate={{opacity: 1}} // visible
        transition={{duration:.30}}
        whileHover={{scale: 1.1}}
        exit={{opacity: 0}}
      >
        <div className="card mb-5 hover:shadow-2xl hover:cursor-pointer">
          {/* <PostImage imgURL={post.attributes.profile.data.attributes.url} classes={"rounded-t-2xl"} /> */}
          <Image 
            src={post.attributes.profile.data.attributes.url}
            alt="This is alt text"
            width={1000}
            height={500}
            className="rounded-t-2xl"
          />
          <div className="p-5">
            <p className="font-bold">{post.attributes.title}</p>
            <small>{post.attributes.author}: {post.attributes.createdAt}</small>
            <p className="mt-4 text-sm pb-2">{post.attributes.description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}