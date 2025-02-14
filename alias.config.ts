import { resolve } from "path";

const alias: Record<string, string> = {
  "@components": resolve(__dirname, "src/components"),
  "@utils": resolve(__dirname, "src/utils"),
};

export default alias;
