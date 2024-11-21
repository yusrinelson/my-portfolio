import { layout } from "./style"
import { tech } from "../constants"
const Experience = () => {

  return (
    <div name="experience" className={layout.sectionBtoG}>
        <div className={`${layout.sectionDisplay} text-white`}>
            <div>
                <p className="text-gray-400">explore my</p>
                <p className={layout.sectionHeadText}>Experience</p>    
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 text-center py-8 px-0 sm:px-12">
                {tech.map(({id, src, title, style}) => (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="html" className="w-10 sm:w-20 mx-auto"/>
                    <p className="mt-4">{title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience