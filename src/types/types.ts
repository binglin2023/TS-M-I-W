import type { App } from "vue";

export type InstallType<T> = T & { install(app: App): void };
