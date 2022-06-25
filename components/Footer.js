import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { GiAce } from "react-icons/gi";
import { DiReact } from "react-icons/di";
import { SiBuymeacoffee } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="right-mark">
            Powered by
            <span className="text-blue">
              <DiReact className="icon" />
            </span>
            and
            <span className="icon text-coffe">
              <SiBuymeacoffee className="icon" />
            </span>
            .
          </div>
          <div className="social-networks">
            <a
              className="social-link github"
              href="https://github.com/CMOISDEAD"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
            <a
              className="social-link linkedin"
              href="https://linkedin.com"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="social-link portfolio"
              href="https://godemperordoom.netlify.com"
              target="_blank"
            >
              <GiAce />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
