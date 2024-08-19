import type { GlobalTheme, GlobalThemeOverrides } from "naive-ui";

const vars: Partial<GlobalTheme["common"]> = {
  fontFamily: "'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif !important",
  primaryColor: "#2681ff",
  primaryColorPressed: "#2681ff",
  primaryColorHover: "#409fff",
  fontSizeSmall: "16px"
};

const themeOverrides: GlobalThemeOverrides = {
  common: {
    ...vars
  },
  // Tabs: {
  //   tabFontWeightActive: "700",
  //   tabFontWeight: "700",
  //   tabColor: "transparent",
  //   tabBorderColor: "rgba(255,255,255,0.4)",
  //   tabTextColorCard: "#fff",
  //   tabTextColorActiveCard: "#fff",
  //   colorSegment: "rgba(255,255,255,0.1)",
  //   tabTextColorSegment: "#fff",
  //   tabTextColorActiveSegment: "#fff",
  //   tabColorSegment: "#2E5151",
  //   tabTextColorHoverSegment: "#fff"
  // },
  Tabs: {
    tabFontWeightActive: "700",
    tabFontWeight: "700",
    tabColor: "rgba(255,255,255,0.1)",
    tabBorderColor: "rgba(255,255,255,0.2)",
    tabTextColorCard: "#fff",
    tabTextColorActiveCard: "#fff",
    colorSegment: "#2a50bc",
    tabTextColorSegment: "#fff",
    tabTextColorActiveSegment: "#fff",
    tabColorSegment: "#4b9aed",
    tabTextColorHoverSegment: "#fff"
  },
  Breadcrumb: {
    itemTextColor: "#fff",
    itemTextColorActive: "rgba(255,255,255,0.6)",
    itemTextColorHover: "#2F58E8FF"
  },
  TreeSelect: {
    peers: {
      Tree: {
        fontSize: "18px"
      },
      InternalSelection: {
        fontSizeMedium: "18px"
      }
    }
  },
  Descriptions: {
    thColorModal: "rgba(20,255,234,0.2)",
    tdColorModal: "#21479E00",
    thTextColor: "#fff",
    tdTextColor: "#fff",
    borderColorModal: "#14FFEA"
  },
  Drawer: {},
  Select: {
    peers: {
      InternalSelectMenu: {
        color: "#1C272B",
        optionTextColor: "#ffffff",
        optionCheckColor: "#fff",
        optionColorPending: "rgba(255,255,255,0.2)",
        optionColorActivePending: "rgba(255,255,255,0.2)",
        optionTextColorPressed: "#ffffff",
        optionTextColorActive: "#26ffe6",
        optionColorActive: "rgba(255,255,255,0.2)"
      },
      InternalSelection: {
        color: "rgba(255,255,255,0.1)",
        border: "1px solid #26ffe6",
        borderActive: "1px solid #26ffe6",
        borderHover: "1px solid #26ffe6",
        borderFocus: "1px solid #26ffe6",
        colorActive: "rgba(255,255,255,0.2)",
        textColor: "#fff"
      }
    }
  },
  Divider: {
    color: "rgba(255,255,255,0.4)",
    textColor: "#ffffff"
  },
  Table: {
    thColorModal: "rgba(20,255,234,0.2)",
    thFontWeight: "bold",
    thTextColor: "#fff",
    tdColorModal: "#21479E",
    tdTextColor: "#fff",
    borderColorModal: "rgba(255,255,255,0.2)"
  },
  DataTable: {
    thColorModal: "#212F34",
    thFontWeight: "bold",
    thTextColor: "#fff",
    tdColorModal: "#325656",
    tdTextColor: "#fff",
    borderColorModal: "rgba(255,255,255,0.2)",
    thColor: "#212F34",
    tdColor: "#325656",
    tdColorStripedModal: "#325656",
    tdColorHoverModal: "#325656",
    tdColorHover: "#325656",
    borderColor: "rgba(255,255,255,0.2)"
  },
  Form: {
    labelTextColor: "#fff"
  },
  Input: {
    color: "rgba(255,255,255,0.2)",
    border: "1px solid #26ffe6",
    textColor: "#fff",
    borderHover: "1px solid #26ffe6",
    borderFocus: "1px solid #26ffe6",
    colorFocus: "rgba(255,255,255,0.2)"
  },
  Radio: {
    textColor: "#fff",
    colorDisabled: "rgba(255,255,255,0.2)",
    dotColorActive: "#26ffe6"
  },
  Checkbox: {
    textColor: "#fff",
    border: "1px solid #26ffe6",
    borderChecked: "1px solid #26ffe6",
    borderFocus: "1px solid #26ffe6",
    colorChecked: "#488483",
    color: "transparent",
    colorDisabled: "rgba(255,255,255,0.2)",
    borderDisabled: "1px solid rgba(255,255,255,0.2)",
    colorDisabledChecked: "rgba(255,255,255,0.2)",
    borderDisabledChecked: "1px solid rgba(255,255,255,0.2)"
  }
};

export { themeOverrides };
