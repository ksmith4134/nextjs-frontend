import Image from 'next/image'

export const InsertImage = (url, w, h, layout, classes) => {
  return (
    <Image src={url} width={w} height={h} layout={layout} className={classes} />
  )
}