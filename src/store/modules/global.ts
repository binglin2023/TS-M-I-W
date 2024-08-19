import { defineStore } from "pinia";

export interface GlobalState {
  PANEL_SHOW: boolean;
  MAP_TOOLS: { right: number; top: number; yx: boolean; dx: boolean; tl: boolean };
  PANEL_DETAILS: { p_key: string | number; p_component: string; p_title: any; p_width: number } | any;
//   HN_MODEL: string;
//   HN_MODEL_ITEM: any;
  MENU_ACTIVE: any;
//   LEGEND: { show: boolean; type: any; options?: any };
  MAP_NAME?: string;
  MAP_LOAD?: boolean;
  MAP?: any;
}

export const GlobalModule = defineStore({
  id: "app-global",
  state: (): GlobalState => ({
    PANEL_SHOW: false,
    MAP_TOOLS: { right: 20, top: 200, yx: false, dx: false, tl: false },
    PANEL_DETAILS: { p_key: "1", p_component: "", p_title: "", p_width: 400 },
    // HN_MODEL: "",
    // HN_MODEL_ITEM: {},
    MENU_ACTIVE: {},
    // LEGEND: { show: false, type: "" },
    MAP_NAME: "HOME",
    MAP_LOAD: false,
    MAP: null
  }),
  getters: {
    getPanelDetails(state) {
      return state.PANEL_DETAILS.value.p_component;
    }
  },
  actions: {
    async setPanelDetails(item: GlobalState["PANEL_DETAILS"] & { key: string | number }, isChangeKey = true) {
      this.PANEL_SHOW = true;
      if (isChangeKey) {
        item.p_key = await guid();
      } else {
        item.p_key = item.p_component;
      }
      this.PANEL_DETAILS = item;
    },
    async mapCompleted() {
      return new Promise((resolve) => {
        if (this.MAP_LOAD) {
          resolve(true);
        } else {
          setTimeout(() => {
            this.mapCompleted().then((res) => {
              resolve(res);
            });
          }, 100);
        }
      });
    }
  }
});
