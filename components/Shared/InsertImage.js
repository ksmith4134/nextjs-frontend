import Image from 'next/image'

export const InsertImage = (url, w, h, alt, layout, styles) => {
  return (
    <Image src={url} width={w} height={h} alt={alt} layout={layout} className={styles} />
  )
}