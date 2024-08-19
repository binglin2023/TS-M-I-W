<template>
    <div class="panel-modules">
      <div class="panel-modules-title">
        <Filter theme="filled" :size="16" />
        <span>组合筛选</span>
        <p>
          <span @click="status = !status">{{ status ? "收起" : "展开" }}</span>
          <component @click="status = !status" :is="status ? 'UpOne' : 'DownOne'" theme="filled" :size="12" />
        </p>
      </div>
      <div v-show="status">
        <slot name="query"></slot>
        <div v-show="moreShow" style="margin: 10px 0; height: 1px; background: rgba(255, 255, 255, 0.2)"></div>
        <div v-show="moreShow">
          <slot name="more" :more="moreShow"></slot>
        </div>
        <div class="panel-modules-title" v-show="more">
          <p>
            <span @click="moreShow = !moreShow">{{ moreShow ? "收起筛选" : "更多筛选" }}</span>
            <component @click="moreShow = !moreShow" :is="moreShow ? 'UpOne' : 'DownOne'" theme="filled" :size="12" />
          </p>
        </div>
      </div>
      <div class="query-but">
        <n-button :theme-overrides="resetStyle" style="margin-right: 10px" @click="reset">重置</n-button>
        <n-button :theme-overrides="submitStyle" @click="query">查询</n-button>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { Filter, DownOne, UpOne } from "@icon-park/vue-next";
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    name: "query",
    components: { Filter, DownOne, UpOne },
    props: {
      more: {
        type: Boolean,
        default: false
      }
    },
    emits: ["query", "reset"],
    setup(_props, { emit }) {
      const resetStyle = {
        textColor: "#26ffe6",
        textColorHover: "#26ffe6",
        textColorFocus: "#26ffe6",
        textColorPressed: "#26ffe6",
        borderPressed: "1px solid #26ffe6",
        border: "1px solid #26ffe6",
        borderHover: "1px solid #26ffe6",
        borderFocus: "1px solid #26ffe6"
      };
      const submitStyle = {
        ...resetStyle,
        color: "#26ffe6",
        textColor: "#000"
      };
      const status = ref(true);
      const moreShow = ref(false);
      return {
        resetStyle,
        submitStyle,
        status,
        moreShow,
        query() {
          moreShow.value = false;
          emit("query");
        },
        reset() {
          moreShow.value = false;
          emit("reset");
        },
        changeStatus(s: boolean) {
          status.value = s;
        }
      };
    }
  });
  </script>
  <style lang="scss" scoped></style>
  