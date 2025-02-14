import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import alias from "./alias.config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: alias,
  },
});
