
import express from 'express';
import { routerMap, proxy } from './middleware.js';

const app = express();
const port = 8060;

const { projectA, projectB, projectC, lingjieShell } = routerMap

app.use(
  [
    projectA.proxyPath,
    projectB.proxyPath,
    projectC.proxyPath,
    lingjieShell.proxyPath
  ],
  proxy
)

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
