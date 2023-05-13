import { createHtmlPlugin } from "vite-plugin-html";

export function loadHtmlPlugin(env: ViteEnv, isBuild: boolean) {
  const { VITE_GLOB_APP_TITLE } = env;
  return createHtmlPlugin({
    minify: isBuild,
    /**
     * 需要注入 index.html ejs 模版的数据
     */
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE,
        injectScript: `<script type="module" src="/src/main.ts"></script>`,
      },
    },
  });
}
