module.exports = {
  pathPrefix: '',
  siteUrl: 'https://zigzagrainbow.com',
  siteTitle: 'Suryakiran Maruvada',
  siteDescription: 'Logbook of a software developer',
  author: 'Suryakiran Maruvada',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://suryakiran_maruvada.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/SurKM9',
    facebook: 'https://www.facebook.com/surya.kiran54',
    twitter: 'https://twitter.com/SurKM9',
    instagram: 'https://www.instagram.com/surkm9/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-175000136-1',
  tags: {
    cplusplus: {
      name: 'cplusplus',
      description: 'This is a test.',
      color: '#00599C',
    },
    qt: {
      name: 'qt',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#41CD52',
    },
    opencv: {
      name: 'opencv',
      description: 'OpenCV is an open source computer vision library.',
      color: '#257acc',
    },
    cmake: {
      name: 'cmake',
      description: 'CMake is a build system.',
      color: '#064F8C',
    },
    gatsby: {
      name: 'gatsby',
      description: 'A framework built over ReactJS to generate static page web application.',
      color: '#6f309f',
    },
    tensorflow: {
      name: 'tensorflow',
      description: 'Machine learning library.',
      color: '#dd3431',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  },
};
