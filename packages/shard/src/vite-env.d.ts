/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PROJECT_A_URL: string;
  readonly VITE_PROJECT_B_URL: string;
  readonly VITE_PROJECT_C_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
