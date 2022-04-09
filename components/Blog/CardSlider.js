import Card from './Card'

export default function CardSlider(props) {

  const {
    posts,
    selected,
  } = props;

  return (
    <div className=''>
      {
        posts.map((post)=>(
          <Card key={post.id} post={post} active={selected} />
        ))
      }
    </div>
  )
}

