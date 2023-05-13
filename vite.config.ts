import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import { loadVitePlugin } from "./build/vite/plugin/index";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}



export default defineConfig(({ command, mode }) => {

  const rootPath = process.cwd();
  const env = loadEnv(mode, rootPath, '')

  const { VITE_PORT, VITE_GLOB_PROD_MOCK, VITE_PROXY } = env;
  const prodMock = VITE_GLOB_PROD_MOCK;
  const isBuild = command === 'build';
  return {
    // vite 配置
    plugins: loadVitePlugin(env, isBuild, prodMock),
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/",
        },
        {
          find: "@",
          replacement: pathResolve("src") + "/",
        },
      ],
    },
    server: {
      port: VITE_PORT,
    }
  }
})
