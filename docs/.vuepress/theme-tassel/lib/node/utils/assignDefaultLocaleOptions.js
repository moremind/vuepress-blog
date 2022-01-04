"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignDefaultLocaleOptions = exports.DEFAULT_LOCALE_DATA = exports.DEFAULT_LOCALE_OPTIONS = void 0;
exports.DEFAULT_LOCALE_OPTIONS = {
    // navbar
    navbar: [],
    logo: null,
    darkMode: true,
    repo: null,
    selectLanguageText: 'Languages',
    selectLanguageAriaLabel: 'Select language',
    // sidebar
    sidebar: 'auto',
    sidebarDepth: 2,
    // page meta
    editLink: true,
    editLinkText: 'Edit this page',
    lastUpdated: true,
    lastUpdatedText: 'Last Updated',
    contributors: true,
    contributorsText: 'Contributors',
    // 404 page messages
    notFound: [
        `There's nothing here.`,
        `How did we get here?`,
        `That's a Four-Oh-Four.`,
        `Looks like we've got some broken links.`,
    ],
    backToHome: 'Take me home',
    // a11y
    openInNewWindow: 'open in new window',
    toggleDarkMode: 'toggle dark mode',
    toggleSidebar: 'toggle sidebar',
};
exports.DEFAULT_LOCALE_DATA = {
    // navbar
    selectLanguageName: 'English',
};
/**
 * Assign default options to `themeConfig`
 */
const assignDefaultLocaleOptions = (localeOptions) => {
    if (!localeOptions.locales) {
        localeOptions.locales = {};
    }
    if (!localeOptions.locales['/']) {
        localeOptions.locales['/'] = {};
    }
    Object.assign(localeOptions, {
        ...exports.DEFAULT_LOCALE_OPTIONS,
        ...localeOptions,
    });
    Object.assign(localeOptions.locales['/'], {
        ...exports.DEFAULT_LOCALE_DATA,
        ...localeOptions.locales['/'],
    });
};
exports.assignDefaultLocaleOptions = assignDefaultLocaleOptions;
