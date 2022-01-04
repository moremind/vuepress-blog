import type { GitPluginOptions } from '@vuepress/plugin-git';
import type { DefaultThemeLocaleOptions, DefaultThemePluginsOptions } from '../../shared';
/**
 * Resolve options for @vuepress/plugin-git
 */
export declare const resolveGitPluginOptions: (themePlugins: DefaultThemePluginsOptions, localeOptions: DefaultThemeLocaleOptions) => GitPluginOptions | boolean;
