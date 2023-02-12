import Image from "next/image";
import aboutimg from '../image/about.jpg'


 
 function About(){
    return(
        <div className="lg:mt-10">
            <div>
                <Image src={aboutimg}/>
            </div>
        </div>
    )
 }
 export default About;