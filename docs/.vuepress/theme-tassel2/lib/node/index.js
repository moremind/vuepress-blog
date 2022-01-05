const { path } = require('@vuepress/utils')

module.exports = {
    // 你的主题
    name: 'vuepress-theme-tassel',
    // 要继承的父主题
    extends: '@vuepress/theme-default',
    // 覆盖父主题的布局
    layouts: {
        Layout: path.resolve(__dirname, '../layouts/Layout.vue'),
    },
}