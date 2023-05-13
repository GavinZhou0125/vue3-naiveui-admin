import type { Plugin, PluginOption } from "vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { loadHtmlPlugin } from "./html";
import { configMockPlugin } from "./mock";

export function loadVitePlugin(viteEnv: ViteEnv, isBuild: boolean, prodMock: boolean) {
  const {
    VITE_USE_MOCK,
  } = viteEnv;

  const vitePlugins: (Plugin | PluginOption)[] = [
    vue(),

    vueJsx(),


    Components({
      dts: true,
      resolvers: [NaiveUiResolver()],
    }),
  ];

  vitePlugins.push(loadHtmlPlugin(viteEnv, isBuild));

  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild, prodMock));

  return vitePlugins
}
