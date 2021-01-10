import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";
import style from './share.module.less';

export const ShareButtons = ({ twitterHandle, url, title, tags }) => (
  <div className={style.shareButton}>
    <FacebookShareButton url={url}>
      <FacebookIcon size={32} round={true}/>
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
    >
      <TwitterIcon size={32} round={true}/>
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon size={32} round={true}/>
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon size={32} round={true}/>
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={32} round={true}/>
    </WhatsappShareButton>
  </div>
);

export default ShareButtons;
