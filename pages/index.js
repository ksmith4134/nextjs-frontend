import AllPosts from "../components/AllPosts"
import TabGallery from "../components/TabGallery"
import { getPostsGQL, getCategories } from '../lib/api'

export default function Home({ posts, tabs, tests }) {

  return (
    <div>
      <div className="flex place-content-center mt-6">
        <AllPosts posts={tests} />
      </div>
      <div className="flex place-content-center mt-24 mb-24">
        <TabGallery tabs={tabs} posts={tests}/>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const getPosts = await fetch(`${process.env.API_URL}/api/posts?populate=%2A`)
  const postsRes = await getPosts.json()

  const getTabs = await fetch(`${process.env.API_URL}/api/categories?populate=%2A`)
  const tabsRes = await getTabs.json()

  const testPosts = await getPostsGQL()
  const tests = testPosts.data
  

  return {
    props: {
      posts: postsRes.data,
      tabs: tabsRes.data,
      tests
    }
  }

  /* const posts = await getPosts()
  const tabs = await getCategories()
  
  return {
    props: {
      posts,
      tabs
    }
  } */

}