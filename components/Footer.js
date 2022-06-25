import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { GiAce } from "react-icons/gi";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="right-mark">2022</div>
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
