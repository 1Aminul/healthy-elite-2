import Image from 'next/image';
import background from '../public/images.jpg'


function Background(){
    return(
        
        <Image
        src={background}
        alt="Picture of the author"
        
        

      />
        
    )
}
export default Background;