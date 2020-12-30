import React from 'react';
import { Disqus } from 'gatsby-plugin-disqus';

const DisqusComments = (props) => {
  const disqusConfig = {
    url: props.postURL,
    identifier: props.postURL,
    title: props.postTitle,
  };
  return (
    <>
      <Disqus config={disqusConfig} />
    </>
  );
};

export default DisqusComments;
