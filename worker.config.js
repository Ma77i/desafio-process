module.exports = {
  apps: [{
    name: "Server 1",
    script: "app.js",
    args: "3030"
  },{
    name: "Server 2",
    script: "cluster.js",
    args: "3031"
  },{
    name: "Server 3",
    script: "app.js",
    args: "3032"
  }]
}