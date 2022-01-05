<template>
  <div class="home-main-page">
    <div class="cardpage" style="padding-bottom: 40px;">
      <el-card shadow="always" :body-style="{ padding: '0px' }" class="box-card">
        <img
          :src="config.homeSrc"
          class="image"
        >
        <div class="nickname">
          <span class="nick">{{config.nickname}}</span>
        </div>
        <div style="padding: 16px;" class="motto">
          <span>{{config.signature}}</span>
        </div>


        <el-row class="funct-button" style="padding: 20px;">
          <router-link style="text-decoration: none" :to="{path:'post'}"><el-button class="start">Get Started →</el-button></router-link>
<!--          <el-button round @click="openPage(config.urllink1)">{{config.urllink1_text}}</el-button>-->
<!--          <el-button round @click="openPage(config.urllink2)">{{config.urllink2_text}}</el-button>-->
        </el-row>
      </el-card>
    </div>

    <!-- <hr style="width:740px;"> -->
    <div class="footer">
      <p class="footer-list" style="color: #424242;">
        <span v-if="$site.themeConfig.homeConfig.copyright">
          <i class="fa fa-copyright" aria-hidden="true"></i>
          <a class="copyright" style="color: #424242;">{{config.copyright}}</a>
        </span>
        <span v-if="$site.themeConfig.homeConfig.beian">
          <i class="fa fa-shield" aria-hidden="true"></i>
          <a class="filing" style="color: #424242;">{{config.beian}}</a>
        </span>
        <span>
          <i class="fa fa-book" aria-hidden="true"></i>
          <a class="theme" href="https://github.com/hirCodd/vuepress-theme-tassel" style="color: #424242;" target="_blank">主题 — vuepress-theme-tassel</a>
        </span>
        <span v-if="$site.themeConfig.homeConfig.github">
          <i class="fa fa-github" aria-hidden="true"></i>
          <a class="github" style="color: #424242;" :href="config.github_url">{{config.github}}</a>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLayout',
  props: {
    config: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    openPage(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="stylus">
@media (min-width: 1200px) {
  .start {
    display:inline-block;
    font-size:1.2rem;
    color:#fff;
    background-color:#3eaf7c;
    padding:.8rem 1.6rem;
    border-radius:4px;
    transition:background-color .1s ease;
    box-sizing:border-box;
    border-bottom:1px solid #389d70;
  }
  .start:hover{
    background-color:#4abf8a;
    color:#fff;
    border-radius:4px;
    box-sizing:border-box;
    border-bottom:1px solid #389d70;
  }

  .cardpage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow-x: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 120px;
  }
  .nickname span {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: 700;
    font-size: 22px;
  }
  .motto span {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: cadetblue;
  }

  .image {
    margin-top: 20px;
    margin-bottom: 30px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .box-card {
    width: 400px;
  }
  .footer {
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .footer-list i {
    margin-left: 1rem;
  }
}

@media (max-width: $MQMobile) {
  .start {
    display:inline-block;
    font-size:1.2rem;
    color:#fff;
    background-color:#3eaf7c;
    padding:.8rem 1.6rem;
    border-radius:4px;
    transition:background-color .1s ease;
    box-sizing:border-box;
    border-bottom:1px solid #389d70;
  }
  .start:hover{
    background-color:#4abf8a;
    color:#fff;
    border-radius:4px;
    box-sizing:border-box;
    border-bottom:1px solid #389d70;
  }
  .box-card {
    width: 100%;
  }
  .cardpage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    overflow-x: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin-top: 60px;
  }
  .nickname span {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: 700;
    font-size: 22px;
  }
  .motto span {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: cadetblue;
  }
  .image {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .footer {
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-align: left!important
  }
  .footer span {
    display: block
    line-height 2rem
  }
  .footer-list i {
    margin-left: .5rem;
  }
}
</style>
<style>
.cardpage>.el-card >.el-card__body {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
</style>
