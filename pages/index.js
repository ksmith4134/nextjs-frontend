import AllPosts from "../components/AllPosts"
import TabGallery from "../components/TabGallery"
import { getPosts, getCategories } from '../lib/api'

export default function Home({ posts, categories}) {

  return (
    <div>
      <div className="flex place-content-center mt-6">
        <AllPosts posts={posts} />
      </div>
      <div className="flex place-content-center mt-24 mb-24">
        <TabGallery tabs={categories} posts={posts}/>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getPosts()
  const allCategories = await getCategories()
  return {
    props: {
      posts: allPosts.data,
      categories: allCategories.data,
    }
  }
}

/* export async function getStaticProps() {
  const getPosts = await fetch(`${process.env.API_URL}/api/posts?populate=%2A`)
  const postsRes = await getPosts.json()

  const getTabs = await fetch(`${process.env.API_URL}/api/categories?populate=%2A`)
  const tabsRes = await getTabs.json()

  return {
    props: {
      posts: postsRes.data, 
      tabs: tabsRes.data,
    }
  }
} */