import { UseConfig } from "@zzhaon/create-electron-app";

export default (): UseConfig => {
  return {
    main: {
        input: "./main/index.ts",
        preload: "./main/preload.ts"
    },
    vite: "./vite.config.ts",
  };
};