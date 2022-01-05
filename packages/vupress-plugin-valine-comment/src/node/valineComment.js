"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.valineComment = void 0;
var utils_1 = require("@vuepress/utils");
__exportStar(require("../shared"), exports);
var valineComment = function (options, app) {
    // @ts-ignore
    var valeneOptions;
    var config = {
        name: "vupress-plugin-valine-comment",
        define: function () { return ({
            COMMENT_OPTIONS: __assign({}, valeneOptions)
        }); },
        clientAppEnhanceFiles: utils_1.path.resolve(__dirname, "../client/appEnhance.js")
    };
    return config;
};
exports.valineComment = valineComment;
// import { addViteOptimizeDeps, getLocales } from "@mr-hope/vuepress-shared";
// import { path } from "@vuepress/utils";
// import { useReadingTimePlugin } from "vuepress-plugin-reading-time2";
// import { usePalettePlugin } from "vuepress-plugin-sass-palette";
// import { pageInfoI18n, walineI18n } from "./i18n";
//
// import type { CommentOptions } from "../shared";
// import type { Plugin, PluginObject } from "@vuepress/core";
//
// export * from "../shared";
//
// const commentPlugin: Plugin<CommentOptions> = (options, app) => {
//     const { themeConfig } = app.options;
//     // @ts-ignore
//     const commentOptions: CommentOptions =
//         Object.keys(options).length > 0
//             ? (options as CommentOptions)
//             : (themeConfig.comment as CommentOptions) || { type: "disable" };
//
//     addViteOptimizeDeps(app, "@waline/client");
//
//     useReadingTimePlugin(app, { wordPerminute: options.wordPerminute });
//     usePalettePlugin(app, { id: "hope" });
//
//     const config: PluginObject = {
//         name: "vuepress-plugin-comment2",
//
//         alias: {
//             "@Waline":
//                 commentOptions.type === "waline"
//                     ? path.resolve(__dirname, "../client/components/Waline.js")
//                     : "@mr-hope/vuepress-shared/client/noopModule.js",
//         },
//
//         define: () => ({
//             COMMENT_OPTIONS: {
//                 hint: !themeConfig.pure,
//                 ...commentOptions,
//             },
//             PAGE_INFO_I18N: getLocales(app, pageInfoI18n, options.pageInfoLocale),
//             WALINE_I18N: getLocales(app, walineI18n, options.walineLocale),
//         }),
//
//         clientAppEnhanceFiles: path.resolve(__dirname, "../client/appEnhance.js"),
//     };
//
//     // if (commentOptions.type === "vssue")
//     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//     // config.plugins!.push(["@vssue/vuepress-plugin-vssue", commentOptions]);
//
//     return config;
// };
//
// export default commentPlugin;
