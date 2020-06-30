<template>
  <div class="home">
    <div class="head">
      <div class="head_bar">
        <div class="head_bar_search">
          <input type="text" placeholder="搜索关键词" />
        </div>
        <div class="head_bar_icon">
          <img src="../../assets/images/scan.png" alt />
          <img src="../../assets/images/notice.png" alt />
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="item in navList" :key="item.id">
          <img :src="item.icon" alt />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="s_banner">
      <img src="../../assets/images/s_banner.png" alt />
    </div>
    <div class="list">
      <h5>载体推荐</h5>
      <div class="item" v-for="item in comList" :key="item.id">
        <img :src="item.image" alt />
        <div class="item_text">
          <p>{{ item.name }}</p>
          <span>{{ item.info }}</span>
          <span>{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
@Component({
  name: 'home'
})
export default class Home extends Vue {
  private value!: string | number
  private navList: object[] = [
    {
      id: 0,
      name: '政策解答',
      icon: require('../../assets/images/nav_01.png')
    },
    {
      id: 1,
      name: '科技载体',
      icon: require('../../assets/images/nav_02.png')
    },
    {
      id: 2,
      name: '新型研发机构',
      icon: require('../../assets/images/nav_03.png')
    },
    {
      id: 3,
      name: '双创地图',
      icon: require('../../assets/images/nav_04.png')
    },
    {
      id: 4,
      name: '服务超市',
      icon: require('../../assets/images/nav_05.png')
    },
    {
      id: 5,
      name: '高企培育',
      icon: require('../../assets/images/nav_06.png')
    },
    {
      id: 6,
      name: '认证服务机构',
      icon: require('../../assets/images/nav_07.png')
    },
    {
      id: 7,
      name: '双创活动',
      icon: require('../../assets/images/nav_08.png')
    }
  ]
  private comList: object[] = [
    {
      id: 0,
      name: '苏州纳米城西北区厂房',
      image: require('../../assets/images/default_company_icon.png'),
      info:
        '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
      time: '2020-06-17'
    },
    {
      id: 1,
      name: '苏州纳米城西北区厂房',
      image: require('../../assets/images/default_company_icon.png'),
      info:
        '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
      time: '2020-06-17'
    },
    {
      id: 2,
      name: '苏州纳米城西北区厂房',
      image: require('../../assets/images/default_company_icon.png'),
      info:
        '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
      time: '2020-06-17'
    },
    {
      id: 3,
      name: '苏州纳米城西北区厂房',
      image: require('../../assets/images/default_company_icon.png'),
      info:
        '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
      time: '2020-06-17'
    },
    {
      id: 4,
      name: '苏州纳米城西北区厂房',
      image: require('../../assets/images/default_company_icon.png'),
      info:
        '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
      time: '2020-06-17'
    },
    {
      id: 5,
      name: '苏州纳米城西北区厂房',
      image: require('../../assets/images/default_company_icon.png'),
      info:
        '厂房位于【苏州纳米城西北区】，由【苏州纳米科技发展有限公司】管理由【苏州纳米科技发展有限公司】管理',
      time: '2020-06-17'
    }
  ]
}
</script>

<style lang="less" scoped>
.home {
  overflow-y: scroll;
  background-color: #fff;
  .head {
    width: 100%;
    height: 176px;
    background: url(../../assets/images/f_banner.png) no-repeat center;
    background-size: cover;
    padding: 15px 10px;
    .head_bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .head_bar_search {
      position: relative;
      width: 288.5px;
      height: 27px;
      border-radius: 18px;
      overflow: hidden;
      padding-left: 40px;
      background-color: #70c2fe;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background: url(../../assets/images/search_icon.png) no-repeat center;
        background-size: cover;
      }
      input {
        width: 100%;
        height: 27px;
        line-height: 27px;
        border: none;
        background-color: transparent;
        font-size: 13px;
        color: #fff;
        padding: 0;
        vertical-align: top;
        &::-webkit-input-placeholder {
          color: #fff;
        }
      }
    }
    .head_bar_icon {
      display: flex;
      justify-content: space-between;
      img {
        width: 24px;
        height: 24px;
        margin-left: 8px;
      }
    }
  }
  .nav {
    color: #252525;
    font-size: 14px;
    margin-top: 22.5px;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 25%;
        margin-bottom: 19px;
        img {
          width: 45px;
          margin-bottom: 12px;
        }
      }
    }
  }
  .s_banner {
    background-color: #f3f5fd;
    padding: 13px 0;
    img {
      width: 100%;
      height: 84px;
    }
  }
  .list {
    padding: 16.5px;
    background-color: #fff;
    h5 {
      position: relative;
      font-size: 14.5px;
      padding-left: 24px;
      margin: 0;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-40%);
        width: 15px;
        height: 14px;
        background: url(../../assets/images/zt_icon.png) no-repeat center;
        background-size: cover;
      }
    }
    .item {
      display: flex;
      padding: 16px 0;
      border-bottom: 1px solid #ededed;
      img {
        width: 100.5px;
        margin-right: 15px;
      }
      .item_text {
        width: calc(100% - 115.5px);
        display: flex;
        flex-direction: column;
        p {
          margin: 0;
          font-size: 14px;
          color: #252525;
        }
        span {
          font-size: 10px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          &:first-of-type {
            color: #555555;
            margin-top: 8.5px;
          }
          &:last-of-type {
            color: #c1c1c2;
            margin-top: 6.5px;
          }
        }
      }
    }
  }
}
</style>
