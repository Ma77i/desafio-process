module.exports = {
  apps: [{
    name: "Server 1",
    script: "app.js",
    args: "8080"
  },{
    name: "Server 2",
    script: "cluster.js",
    args: "8081"
  },{
    name: "Server 3",
    script: "app.js",
    args: "8082"
  }]
}