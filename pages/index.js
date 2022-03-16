import AllPosts from "../components/AllPosts"
import TabGallery from "../components/TabGallery"

export default function Home({ posts, tabs }) {

  return (
    <div>
      <div className="flex place-content-center mt-6">
        <AllPosts posts={posts} />
      </div>
      <div className="flex place-content-center mt-24 mb-24">
        <TabGallery tabs={tabs} posts={posts}/>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const getPosts = await fetch('https://shrouded-brushlands-64807.herokuapp.com/api/posts?populate=%2A')
  const postsRes = await getPosts.json()

  const getTabs = await fetch('https://shrouded-brushlands-64807.herokuapp.com/api/categories?populate=%2A')
  const tabsRes = await getTabs.json()

  return {
    props: {
      posts: postsRes.data,
      tabs: tabsRes.data
    }
  }
}