import PostPreview from "./PostPreview";

export default function AllPosts(props) {
  const {
    posts,
    heading = "Preview popular blog articles",
    subHeading = "Anim dolor pariatur irure commodo ullamco proident magna consectetur. Ullamco voluptate minim culpa eiusmod aliquip cupidatat aute minim cupidatat elit culpa mollit dolore est. Anim ut occaecat irure minim."
  } = props

  return (
    <div className="bg-white">
      <div className="sm:w-11/12 md:w-10/12 mx-auto px-3">
        <div className="max-w-3xl mx-auto text-center pt-12">{/* mx-auto text-center pt-12 */}
          <h2 className="text-4xl font-bold">{heading}</h2>
          <p className="text-lg mt-6">{subHeading}</p>
        </div>
        <div className="flex place-items-center gap-8 mt-12">
          {posts.map((post) => (
              <PostPreview key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
    
  )
}
