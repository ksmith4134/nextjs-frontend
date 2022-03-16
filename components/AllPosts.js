import PostPreview from "./PostPreview";

export default function AllPosts(props) {
  const {
    posts,
    heading = "Preview popular blog articles",
    subHeading = "Anim dolor pariatur irure commodo ullamco proident magna consectetur. Ullamco voluptate minim culpa eiusmod aliquip cupidatat aute minim cupidatat elit culpa mollit dolore est. Anim ut occaecat irure minim."
  } = props

  return (
    <div className="">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-3xl font-bold">{heading}</h2>
        <p className="mt-6 text-center text-lg">{subHeading}</p>
      </div>
      <div className="flex gap-8 mt-12">
        {posts.map((post) => (
            <PostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
    
  )
}
