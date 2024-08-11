declare module "*.vue" {
    import { DefineComponent } from "vue";
    const Component: DefineComponent<{}, {}, any>;
    export default Component;
  }
  declare const _: any;
  /**
   * 地图工具类
   */
  declare const mapboxgl: any;
  declare const gs: any;
  declare module "*.json" {
    const value: any;
    export default value;
  }
  interface ImportMeta {
    readonly env: any;
  }
  interface Window {
    /**
     * naiveui message全局注入
     */
    $message: any;
    /**
     * naiveui dialog全局注入
     */
    $dialog: any;
    /**
     * 路由全局注入
     */
    $router: any;
    /**
     * 路由全局注入
     */
    $route: any;
    /**
     * handle事件全局注入
     */
    handle: any;
    /**
     * 工具类
     */
    $Tools: any;
    /**
     * 加载进度条
     */
    $loadingBar: any;
    /**
     * 模版字符事件挂载
     */
    $template: {};
  }
  declare module "$message";
  declare module "$dialog";
  declare module "$router";
  declare module "vue3-draggable";
  declare module "vue-image-crop-upload";
  