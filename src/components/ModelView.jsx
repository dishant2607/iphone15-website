import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import { Suspense } from "react"
import Iphone from './Iphone'
import * as THREE from 'three'
import Loader from "./Loader"


const ModelView=({index,groupRef,gsapType,controlRef,setrotationstate,size,item})=>{

return (
    <View index={index} id={gsapType}
    className={` border border-2 rounded-lg w-full h-[90vh] absolute
     ${index===2? 'right-[-100%]' : '' }`}>


     <ambientLight intensity={10}/>
     <PerspectiveCamera makeDefault position={[0,0,4]}/>

     <Lights/>

      <OrbitControls makeDefault ref={controlRef} enableZoom={false} 
      enablePan={false} rotateSpeed={0.4} 
      target={new THREE.Vector3(0,0,0)}
      onEnd={()=>setrotationstate(controlRef.current.getAzimuthalAngle())}/>
      
      <group ref={groupRef} name={`${index===1}?'small' : 'large'`} position={[0,0,0]}>
      <Suspense fallback={<Loader/>}>
      <Iphone scale={index===1 ? [15,15,15]:[17,17,17]}
      item={item} size={size}/>
     </Suspense>
      </group>
     
    </View>
)

}
export default ModelView