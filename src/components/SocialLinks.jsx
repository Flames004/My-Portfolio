import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="mt-12 text-center">
      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 text-2xl sm:text-3xl">
        <a
          href="https://github.com/Flames004"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:hover:text-black transition duration-300 hover:text-gray-600"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:deepakshukla2442@gmai.com"
          className="hover:text-red-500 transition duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://instagram.com/flames._04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.com/users/flames_004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-500 transition duration-300"
        >
          <FaDiscord />
        </a>
        <a
          href="https://x.com/DeepakS00004"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-500 transition duration-300"
        >
          <FaXTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
