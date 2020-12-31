module.exports = {
  pathPrefix: '',
  siteUrl: 'https://zigzagrainbow.com',
  siteTitle: 'Suryakiran Maruvada',
  siteDescription: 'Logbook of a software developer',
  author: 'Suryakiran Maruvada',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
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
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT,
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'UA-186241167-1',
  tags: {
    cplusplus: {
      name: 'cplusplus',
      description: 'C++ is a general purpose programming language and widely used now a days for competitive programming. \
      It has imperative, object-oriented and generic programming features. C++ runs on lots of platform like Windows, Linux, Unix, Mac etc.',
      color: '#00599C',
    },
    qt: {
      name: 'qt',
      description: 'Qt is a powerful cross platform framework used to build GUIs.',
      color: '#41CD52',
    },
    opencv: {
      name: 'opencv',
      description: 'OpenCV is an open source computer vision library.',
      color: '#257acc',
    },
    cmake: {
      name: 'cmake',
      description: 'CMake is an open-source, cross-platform family of tools designed to build, test and package software. \
      CMake is used to control the software compilation process using simple platform and compiler independent configuration files, and \
      generate native makefiles and workspaces that can be used in the compiler environment of your choice.',
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
