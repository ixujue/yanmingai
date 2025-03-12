// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // 设置基础路径，如果部署在子目录则需要修改
  base: '/',
  // 构建输出目录
  outDir: './dist'
});
