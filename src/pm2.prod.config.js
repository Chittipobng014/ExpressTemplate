module.exports = {
  apps: [
    {
      name: 'proxy',
      script: './src/proxy.js',
      watch: false,
      ignore_watch: ['[\\/\\\\]\\./', 'node_modules', 'logs'],
      instances: 1,
      // exp_backoff_restart_delay: 100
    },
    {
      name: 'server',
      script: './src/server.js',
      watch: false,
      ignore_watch: ['[\\/\\\\]\\./', 'node_modules', 'logs'],
      instances: 1,
      // instances: "max",
      // exec_mode: "cluster",
      // exp_backoff_restart_delay: 100
    },
    // {
    //   name: "cron",
    //   script: "./src/cron.js",
    //   watch: false,
    //   ignore_watch: ["[\\/\\\\]\\./", "node_modules", "logs"],
    //   instances: 1
    // }
  ],
};
