import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from "@gsap/react"

gsap.registerPlugin(useGSAP);

const styles = {
    container : 'w-full text-center font-Dm-Sans text-sm text-gray-700 relative overflow-hidden h-10  border-b border-b-zinc-200 ',
    message1:'absolute py-4 w-full opacity-100 ',
    message2 : 'absolute py-4 w-full opacity-0 ',
    message3 : 'absolute py-4 w-full opacity-0 '
}

function Banner() {
        const container = useRef();
        const message1 = useRef();
        const message2 = useRef();
        const message3 = useRef();

  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 });

       timeline 
       .fromTo(
        message1.current,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.inOut' }
            )
      .to(message1.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 2.5,
        ease: 'power2.inOut',
      })
    .fromTo(
        message2.current,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.inOut' }
            )
      .to(message2.current, {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 2.5,
        ease: 'power2.inOut',
      })
      .fromTo(message3.current,
        {y:70,opacity:0},
        {y:0,opacity:1,duration:1,ease:"power2.inOut"}
      )
      .to(message3.current,{
        y:70,
        opacity:0,
        delay:2.5,
        ease:"power2.inOut"
      })
      gsap.ticker.lagSmoothing(1000, 16);
  }, { scope: container });

  return (
    <div ref={container}   
     className={styles.container}>
        <div ref={message1}  className={styles.message1}>Free Shipping on 10,000 or Above!</div>
        <div ref={message2}  className={styles.message2}>28-Days Easy Return and Exchange Policy!</div>
         <div ref={message3}  className={styles.message3}>Cash On Delivery - All Over Pakistan!</div>
    </div>
  )

}

export default Banner;
