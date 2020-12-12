import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.linkedin.com/in/mandihaase/">
          <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
        </a>
      </li>
      <li>
        <a href="https://github.com/haase1020">
          <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/mandi_haase">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
