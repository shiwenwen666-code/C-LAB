import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function rewritePublicAssetPaths(base: string) {
  return {
    name: "rewrite-public-asset-paths",
    enforce: "pre" as const,
    transform(code: string, id: string) {
      if (base === "/" || id.includes("node_modules")) return null;

      const rewritten = code.replace(
        /(["'`(])\/(images|media|videos)\//g,
        `$1${base}$2/`,
      );

      return rewritten === code ? null : { code: rewritten, map: null };
    },
  };
}

export default defineConfig(({ command }) => {
  const base = command === "build" ? "/C-LAB/" : "/";

  return {
    base,
    plugins: [rewritePublicAssetPaths(base), react()],
  };
});
