// 应用级
import {Timeline, Card, Tag, Icon, Badge, Button, TimelineItem, Pagination, Row} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './font-awesome-4.7.0/css/font-awesome.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
  }) => {
    // 应用级别的路由配置
    // router.addRoutes([
    //   {
    //     path: '/archives/',
    //     component: () => import('@theme/components/Archives.vue')
    //   },
    //   {
    //     path: '/tags/',
    //     component: () => import('@theme/components/Tags.vue')
    //   },
    //   {
    //     path: '/posts/',
    //     component: () => import('@theme/components/Post.vue')
    //   }
    // ])
  Vue.use(Timeline);
  Vue.use(Card);
  Vue.use(Tag);
  Vue.use(Icon);
  Vue.use(Badge);
  Vue.use(Button);
  Vue.use(TimelineItem);
  Vue.use(Pagination);
  Vue.use(Row);
}
