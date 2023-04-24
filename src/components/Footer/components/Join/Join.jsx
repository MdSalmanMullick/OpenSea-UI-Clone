import React from "react";
import SocialButton from "./components/SocialButton";

//icon imports
import { ReactComponent as TwitterIcon } from "../../../../assets/svg/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../../../assets/svg/instagram.svg";
import { ReactComponent as DiscordIcon } from "../../../../assets/svg/discord.svg";
import { ReactComponent as RedditIcon } from "../../../../assets/svg/reddit.svg";
import { ReactComponent as YoutubeIcon } from "../../../../assets/svg/youtube.svg";
import { ReactComponent as NewsletterIcon } from "../../../../assets/svg/newsletter.svg";
import { ReactComponent as TikTokIcon } from "../../../../assets/svg/tiktok.svg";

function Join() {
  return (
    <div>
      <div
        style={{
          color: "rgb(255, 255, 255)",
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "8px",
          textAlign: "left",
        }}
      >
        Join the community
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <SocialButton icon={<TwitterIcon />} Link="" />
        <SocialButton icon={<InstagramIcon />} Link="" />
        <SocialButton icon={<DiscordIcon />} Link="" />
        <SocialButton icon={<RedditIcon />} Link="" />
        <SocialButton icon={<YoutubeIcon />} Link="" />
        <SocialButton
          icon={<TikTokIcon />}
          Link="https://www.tiktok.com/@opensea?lang=en"
        />
        <SocialButton
          icon={<NewsletterIcon />}
          Link="https://opensea.io/blog/newsletter/"
        />
      </div>
    </div>
  );
}

export default Join;
