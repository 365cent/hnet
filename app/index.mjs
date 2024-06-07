import http from 'node:http';
import * as bare from "../bareServer/bs.index.mjs";

const httpServer = http.createServer((req, res) => {
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('Access-Control-Allow-Origin', '*');
});

httpServer.on('request', bare.sourceRequest);

httpServer.on('upgrade', bare.sourceUpgrade);

export default httpServer;
