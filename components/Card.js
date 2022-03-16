import Link from 'next/link'
import PostImage from './PostImage';

export default function Card(props) {

  const {
    post,
    active,
  } = props;

  // Push a Post's category id's into its own array
  const ids =[];
  post.attributes.categories.data.map((category) => {ids.push(category.id)})

  // If that array contains an id that equals the Tab's category id, then show that post
  return (
    <div className={`${ids.some((id) => id === active) ? "" : "hidden"} min-h-max`}>
      <div className='mt-16 grid grid-cols-2 grid-rows-1 gap-8 items-start'>
        <div>
          <h3 className='text-2xl font-bold'>{post.attributes.title}</h3>
          <p className='mt-2 text-sm'>{post.attributes.author}: {post.attributes.createdAt}</p>
          <p className='mt-4'>{post.attributes.description}</p>
          <br />
          <Link href={`/posts/${post.id}`}><a className='text-blue-500 hover:cursor-pointer hover:underline hover:underline-offset-4 font-semibold'>Learn More &gt;</a></Link>
        </div>
        <div>
          <PostImage imgURL={post.attributes.profile.data.attributes.url} classes={"rounded-3xl"} />
        </div>
      </div>
    </div>
  )
}

