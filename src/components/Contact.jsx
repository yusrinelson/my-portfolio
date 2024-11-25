import { layout } from "./style";

const Contact = () => {
  return (
    <div name="contact" className={`${layout.sectionBtoG} p-4 text-white`}>
      <div className={`${layout.sectionDisplay} p-4`}>
        <div className="pb-8">
        <p className="text-gray-400">Get in Touch</p>
          <p className={layout.sectionHeadText}>Contact</p>
        </div>
        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/pbqgddgb"
            method="POST"
            className="md:1/2 flex w-[80%] flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="enter your full name"
              required
              className={layout.inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              required
              className={layout.inputStyle}
            />
             <input
              type="text"
              name="subject"
              placeholder="subject"
              required
              className={layout.inputStyle}
            />
            <textarea
              name="message"
              placeholder="enter your message"
              rows="7"
              required
              className={layout.inputStyle}
            ></textarea>

            <button
              type="submit"
              className={`mx-auto ${layout.buttongradient}`}
            >
              Lets Talk
            </button>
          </form>
        </div>
      </div>
      <div className="w-full border-b-[1px] border-gray-500"/>
      <div className="text-center py-2 text-[12px]">
        <p>Copyright &#169; 2024 Yusri Nelson, All Rights .Reserved</p>
        </div>
    </div>
  );
};

export default Contact;
