import { remark } from 'remark'
import html from 'remark-html'
import { getPosts, getPost } from '../../lib/api'
import Image from 'next/image'

export default function PostPage({ post, contentHtml }) {

  var date = new Date(post.attributes.createdAt)

  return (
    <div className='bg-white mt-6 pb-12'>
      <div className="sm:w-11/12 md:w-10/12 mx-auto px-3">
        <div className="max-w-3xl mx-auto pt-6">
          <div className='text-center'>
            <Image src={post.attributes.profile.data.attributes.url} alt="This is alt text" width={500} height={250} className="rounded-2xl" />
          </div>
          <article>
            <header className='text-center'>
              <h1 className="text-4xl font-bold mt-12">{post.attributes.title}</h1>
              <h1 className="text-xl text-center mt-6">{post.attributes.description}</h1>
              <div className='mt-6'>{post.attributes.author}, {date.toLocaleDateString()}</div>
            </header>
            <section className='mt-12' dangerouslySetInnerHTML={{__html: contentHtml}}></section>
          </article>
        </div>
      </div>
    </div>
  )
}

// Generate all the post pages for each id
export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.data.map((post) => {
    return {params: {id: post.id.toString()}}
  })
  return {
    paths,
    /* paths: posts.data.map(post => `/posts/${post.id}`), */
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // get single post using id from getStaticPaths
 const post = await getPost(params.id)

 // render markdown
 const processedContent = await remark()
 .use(html)
 .process(post.data.attributes.content)
 const contentHtml = processedContent.toString()

 return {
   props: {
     post: post.data,
     contentHtml
   }
 }
}


/* // Generate all the post pages for each id
export async function getStaticPaths() {
  const res = await fetch(`${process.env.API_URL}/api/posts`)
  const postRes = await res.json()

  const paths = postRes.data.map((post) => {
    return {params: {id: post.id.toString()}}
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  // get single post using id from getStaticPaths
 const res = await fetch(`${process.env.API_URL}/api/posts/${params.id}`)
 const postRes = await res.json()

 // render markdown
 const processedContent = await remark()
 .use(html)
 .process(postRes.data.attributes.content)
 const contentHtml = processedContent.toString()

 return {
   props: {
     post: postRes.data,
     contentHtml
   }
 }

} */


/* 
  Research https://remark.js.org/ to find a more secure implementation
  ** dangerouslySetInnerHTML is susceptible to XSS attacks
  ** Check out 'rehype-sanitize' https://github.com/rehypejs/rehype
  ** "rehype is a tool that transforms HTML with plugins. These plugins can inspect and change the HTML. You can use rehype on the server, the client, CLIs, deno, etc."
*/