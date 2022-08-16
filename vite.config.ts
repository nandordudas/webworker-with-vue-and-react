import { resolve } from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import React from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";

const relativePath = (...args: Array<string>) => resolve(__dirname, ...args);

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${relativePath("src")}/`
    }
  },
  plugins: [
    React(),
    Vue({
      reactivityTransform: true
    }),
    AutoImport({
      imports: ["react", "vue", "vue/macros"],
      vueTemplate: true
    }),
    Unocss({
      shortcuts: [
        [
          /^btn-(.*)$/,
          ([, c]) =>
            `px-4 py-1 rounded inline-block bg-${c}-700 text-white cursor-pointer hover:bg-${c}-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50`
        ]
      ]
    })
  ]
});
