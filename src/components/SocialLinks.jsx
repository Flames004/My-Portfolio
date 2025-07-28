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
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/Flames004"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-all duration-200"
        aria-label="GitHub"
      >
        <FaGithub className="text-lg" />
      </a>
      <a
        href="https://www.linkedin.com/in/deepak004"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-lg" />
      </a>
      <a
        href="mailto:deepakshukla2442@gmail.com"
        className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-red-500 bg-zinc-100 dark:bg-zinc-800 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200"
        aria-label="Email"
      >
        <FaEnvelope className="text-lg" />
      </a>
      <a
        href="https://instagram.com/flames._04"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-pink-500 bg-zinc-100 dark:bg-zinc-800 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg transition-all duration-200"
        aria-label="Instagram"
      >
        <FaInstagram className="text-lg" />
      </a>
      <a
        href="https://discord.com/users/flames_004"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-500 bg-zinc-100 dark:bg-zinc-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all duration-200"
        aria-label="Discord"
      >
        <FaDiscord className="text-lg" />
      </a>
      <a
        href="https://x.com/DeepakS00004"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-all duration-200"
        aria-label="Twitter/X"
      >
        <FaXTwitter className="text-lg" />
      </a>
    </div>
  );
};

export default SocialLinks;
