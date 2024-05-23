import { layout } from "./style"

const About = () => {
  return (
    <div name="about" className={`${layout.sectionGtoB} text-white`}>
        <div  className={layout.sectionDisplay}>
            <div className='pb-8'>
              <p className="text-gray-400">get to know more</p>
              <h2 className={`${layout.sectionHeadText}`}>About Me</h2>
            </div>
            <p className='md:text-xl mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quidem, consequatur esse omnis est reiciendis quia asperiores quis sapiente. Numquam nam necessitatibus similique. Tempore veritatis sapiente soluta praesentium. Quia deserunt repellat libero illum, animi, fuga numquam ipsa eveniet, tempora obcaecati earum consectetur! Nemo tempore ut sit illo nam accusamus vel!</p>

            <br/>

            <p className='md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quibusdam libero ut placeat quas rem maxime sunt, quia modi iure distinctio earum enim ducimus delectus. Quos at ab nemo debitis perferendis. Amet consectetur quod nam expedita autem ipsa et consequuntur illum, nobis dolores ad minima vitae pariatur! Aut, mollitia veritatis!</p>
        </div>
    </div>
  )
}

export default About