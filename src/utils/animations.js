import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger);



export const animatewithgsap=(target,animationprops,scrollprops)=>{
gsap.to(target,{
    ...animationprops,
    scrollTrigger:{
        trigger:target,
        toggleActions: 'play reverse play reverse',
        start:'top 90%',
        ...scrollprops
    }
})    
}


export const animatewithGsaptimeline =(timeline,rotationref,rotationstate,firsttarget,secondtarget,animationProps
)=>{
    
    timeline.to(rotationref.current.rotation,{
        y:rotationstate,
        duration:2,
        ease:'power2.inOut'

    })

    timeline.to(
        firsttarget,{
            ...animationProps,
            ease:'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondtarget,{
            ...animationProps,
            ease:'power2.inOut'
        },
        '<'
    )
}