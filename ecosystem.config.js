// PM2 Ecosystem Config — production process manager
module.exports = {
  apps: [
    {
      name: "serenity-africa",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/serenityafricasafaris",
      instances: "max",          // use all CPU cores
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        // Do NOT store secrets here — use a .env.local file on the server
        // or inject via: pm2 start ecosystem.config.js --env production
        // Required at runtime:
        //   DATABASE_URL
        //   NEXTAUTH_SECRET
        //   NEXTAUTH_URL=https://serenityafricasafaris.com
        //   RESEND_API_KEY
        //   CONTACT_FORM_RECEIVER
      },
      error_file: "/var/log/pm2/serenity-error.log",
      out_file: "/var/log/pm2/serenity-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      autorestart: true,
      restart_delay: 4000,
      max_restarts: 10,
    },
  ],
};
