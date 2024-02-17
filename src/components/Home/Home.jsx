import Type from "./Type";
import Icon from "../Icon";
import { motion } from "framer-motion";
import { socialLinks } from "./SocialLinks";
import codingGif from "../../assets/CodingGif.gif";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-center items-center mb-10 pb-12 px-4 md:px-16"
    >
      <div className="mx-5 p-5 text-center md:text-left md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-400">
          Hello, I'm <div className="text-blue-900 md:block">Shawn Sidwell</div>
        </h2>
        <Type />
        <div className="flex justify-center md:justify-start py-3">
          {socialLinks.map((link, i) => (
            <a
              href={link.name}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="px-1"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Icon icon={link.icon} size={45} useHover={false}></Icon>
              </motion.div>
            </a>
          ))}
        </div>
        <p className="text-lg md:text-xl text-slate-500 mt-4">
          A passionate individual who always thrives to work on end-to-end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
      </div>
      <img className="w-full md:w-auto mt-5 p-5" src={codingGif} alt="icon" />
    </section>
  );
}

export default Home;
