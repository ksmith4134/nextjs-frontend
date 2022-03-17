import { remark } from 'remark'
import html from 'remark-html'
import { getPosts, getPost } from '../../lib/api'

export default function PostPage({ post, contentHtml }) {
  return (
    <article>
      <header>
        <h1 className="mb-4"><span className="text-xl font-bold mb-2">Title: </span>{post.attributes.title}</h1>
        <h1 className="mb-4"><span className="text-xl font-bold mb-2">Description: </span>{post.attributes.description}</h1>
      </header>
      <h3 className="text-xl font-bold mb-2">Content: </h3>
      <section dangerouslySetInnerHTML={{__html: contentHtml}}></section>
    </article>
  )
}

// Generate all the post pages for each id
export async function getStaticPaths() {
  const posts = await getPosts()
  /* const paths = posts.data.map((post) => {
    return {params: {id: post.id.toString()}}
  }) */
  return {
    /* paths, */
    paths: posts.data.map(post => `/posts/${post.id}`),
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