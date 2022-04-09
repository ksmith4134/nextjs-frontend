import Image from 'next/image'
import { useEffect, useState } from "react";

export default function PostImage({ imgURL, classes }) {

  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(`${imgURL.toString()}`);
    // const res = await fetch(`https://shrouded-brushlands-64807.herokuapp.com${imgURL.toString()}`);
    // const res = await fetch(`https://shrouded-brushlands-64807.herokuapp.com/uploads/next_react_69ba6152fe.png`);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <>
      <img src={img} alt="icons" className={classes} />
      {/* <Image src={img} width={500} height={250} /> */}
    </>
  );
}