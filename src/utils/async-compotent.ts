import { defineAsyncComponent, AsyncComponentLoader } from "vue";

export const loadAsyncComponent = (loader: AsyncComponentLoader<any>) =>
  defineAsyncComponent({
    loader,
    delay: 20
  });
