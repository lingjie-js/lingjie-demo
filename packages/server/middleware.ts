import { createProxyMiddleware } from "http-proxy-middleware"
import { Request } from 'express';

export const routerMap = {
  projectA: {
    proxyPath: '/project-a',
    targetUrl: 'http://localhost:8091'
  },
  projectB: {
    proxyPath: '/project-b',
    targetUrl: 'http://localhost:8092'
  },
  projectC: {
    proxyPath: '/project-c',
    targetUrl: 'http://localhost:8093'
  },
  lingjieShell: {
    proxyPath: '/lingjie',
    targetUrl: (query: string) => `http://localhost:3033/?lingjie_url=${query}`
  }
}

const { projectA, projectB, projectC, lingjieShell } = routerMap

export const proxy = createProxyMiddleware({
  changeOrigin: true,
  router: (req: Request) => {
    const { originalUrl: path } = req

    if (path.startsWith(projectA.proxyPath)) return projectA.targetUrl

    if (path.startsWith(projectB.proxyPath)) return projectB.targetUrl

    if (path.startsWith(projectC.proxyPath)) return projectC.targetUrl

    if (path.startsWith(lingjieShell.proxyPath)) return lingjieShell.targetUrl(req.query.lingjie_url as string)

    const originalFullUrl = req.protocol + '://' + req.get('host') + path;
    return originalFullUrl
  }
})
