module.exports = {
  apps: [
    {
      name: "server",
      script: "./src/server.ts",
      watch: [
        // "../client/",
        "./src"
      ],
      ignore_watch: [
        "[\\/\\\\]\\./",
        "./node_modules",
        "./logs",
        "../client/node_modules"
      ],
      watch_options: {
        followSymlinks: false
      },
      instances: 1
    }
    // {
    //   name: "proxy",
    //   script: "proxy.js",
    //   watch: false,
    //   ignore_watch: ["[\\/\\\\]\\./", "node_modules", "logs"],
    //   instances: 1
    // }
  ]
};
