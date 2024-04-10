const { env } = require('@strapi/utils');

module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: env('NODE_ENV') === 'production' ?
      ['https://test-deploy-vercel-klrhnvje1-danieldev200s-projects.vercel.app','http://test-deploy-vercel-klrhnvje1-danieldev200s-projects.vercel.app'] : ['*']
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
