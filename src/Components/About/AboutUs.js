import Title from "../Title/Title";
import { Box, Grid } from "@mui/material";
import "../../Styles/Container.css";
import {
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  TwitterTweet,
} from "react-social-plugins";

const AboutUs = () => {
  const description = `Somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de:
        Educación, deportes, primera infancia, salud, alimentación y trabajo social.`;
  return (
    <>
      <Box className="title-container">
        <Title title="Nosotros" />
        <div className="title-container-text">
          <p>{description}</p>
          <div>
            <LinkedinCompanyProfile
              lang="en_US"
              companyId={68737437}
              format="inline"
              text="Company name"
            />
            <TwitterTweet
              align="center"
              coversation="none"
              tweetId="1450535690199085058"
              theme="light"
              width={300}
            />
            <TwitterTweet
              align="center"
              coversation="none"
              tweetId="1440383594615042052"
              theme="light"
              width={300}
            />
            <TwitterTweet
              align="center"
              coversation="none"
              tweetId="1271501359658012675"
              theme="light"
              width={300}
            />
          </div>
        </div>
      </Box>
      <AboutUsMembers />
    </>
  );
};

export default AboutUs;
