import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import "./SocialMedia.css";
function SocialMedia() {
    return(
        <div className="Social-media">
          <Link color="inherit" href="https://www.linkedin.com/in/pranav-kamathe-1911592a4/" target="_blank"><LinkedInIcon /></Link>
          <Link color="inherit" href="https://github.com/PranavKamathe" target="_blank"><GitHubIcon /></Link>
        </div>
    )
}

export default SocialMedia;