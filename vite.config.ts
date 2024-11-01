import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: { port: parseInt(env.VITE_LOCAL_PORT, 10) },
    resolve: {
      alias: {
        "@styles": path.resolve(__dirname, "src/styles"),
        "@nexus": path.resolve(__dirname, "nexus/src"),
      },
      dedupe: ["react", "react-dom"],
    },
    plugins: [react()],
    build: {
      assetsInlineLimit: 0,
      assetsDir: "./",
      cssCodeSplit: false,
      manifest: true,
      outDir: "./build",
      rollupOptions: { input: { app: "./index.html" } },
    },
    test: {
      environment: "jsdom",
      include: ["src/**/*.test.ts?(x)"],
      exclude: [],
      reporter: [],
      outputFile: "./report/index.html",
      setupFiles: "vitest.setup.ts",
      passWithNoTests: true,
      coverage: {
        reportOnFailure: true,
        reportsDirectory: "./report/coverage",
        enabled: false,
        provider: "v8",
        reporter: "html",
        include: ["src/**/*.{ts,tsx,js,jsx}"],
        exclude: [
          "src/**/*.type.ts",
          "src/**/*.d.ts",
          "src/**/*.enum.ts",
          "src/**/*.test.*",
        ],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  };
});
