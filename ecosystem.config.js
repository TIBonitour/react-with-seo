module.exports = {
  apps : [{
    name: 'Desenvolvedores',
    script: 'app.js',
    args: 'run start:production',
    instances: 1,
    autorestart: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {

    },
    staging : {
      user : 'ubuntu',
      host : '3.86.10.194',
      ref  : 'origin/master',
      repo : 'git@github.com:TIBonitour/react-with-seo.git',
      path : '/home/ubuntu/react-with-seo',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {

    }
  },
};
