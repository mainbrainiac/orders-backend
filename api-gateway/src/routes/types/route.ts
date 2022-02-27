export type Route = {
  url: string;
  auth: boolean;
  rateLimit: {
    windowMs: number;
    max: number;
  },
  proxy: {
    target: string;
    changeOrigin: boolean;
    pathRewrite: {
      [key: string]: string;
    }
  }
}