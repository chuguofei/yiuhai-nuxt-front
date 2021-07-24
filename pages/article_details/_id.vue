<template>
  <div class="aircle-details-view">
    <div v-if="articleDetailStatus != 200">非法访问呢</div>
    <div v-else>
      <a-skeleton active v-if="!articleDetailComp" />
      <template v-else>
        <a-row>
          <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
            <div class="article-container">
              <div class="article-title font-23 text-center margin-top-10">
                {{ articleDetailComp.article_title }}
              </div>
              <!-- 工具 -->
              <div class="article-common flex justify-center">
                <div class="create-time">
                  <i class="fa fa-calendar font-15"></i>
                  <span class="font-15">{{ articleDetailComp.create_time }}</span>
                </div>
                <div class="sentiment">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  <span class="font-15">{{ articleDetailComp.article_sentiment }}</span>
                </div>
                <!-- <div class="love">
                <i class="fa fa-heart font-15"></i>
                <span class="font-15">9999</span>
              </div>
              <div class="collection">
                <i class="fa fa-star font-15"></i>
                <span class="font-15">9999</span>
              </div> -->
              </div>
              <div class="article-details" id="content">
                <div v-html="mkContentComp"></div>
              </div>
            </div>
          </a-col>
          <a-col :xs="0" :sm="0" :md="0" :lg="6" :xl="6">
            <div class="article-anchor margin-left-10">
              <a-anchor
                affix
                :showInkInFixed="true"
                :offsetTop="60"
                v-if="tocItems.length > 0"
              >
                <AnchorLink :list="tocItems" />
              </a-anchor>
              <a-skeleton active v-else />
            </div>
          </a-col>
        </a-row>
      </template>
    </div>
    <!-- 图片预览 -->
    <ImgPreview v-if="imgPreviewShow" :src="imgPreviewUrl" :show.sync="imgPreviewShow" />
  </div>
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
// import "highlight.js/styles/atom-one-dark-reasonable.css";
import "highlight.js/styles/an-old-hope.css";
import AnchorLink from "@/components/aricle-detaile-anchor/index.vue";
import ImgPreview from "@/components/img-preview/index.vue";
let renderMD = new marked.Renderer();
marked.setOptions({
  renderer: renderMD,
  gfm: true, //默认为true。 允许 Git Hub标准的markdown.
  tables: true, //默认为true。 允许支持表格语法。该选项要求 gfm 为true。
  breaks: false, //默认为false。 允许回车换行。该选项要求 gfm 为true。
  pedantic: false, //默认为false。 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
  sanitize: false, //对输出进行过滤（清理）
  smartLists: true,
  smartypants: false, //使用更为时髦的标点，比如在引用语法中加入破折号。
});
export default {
  components: { AnchorLink, ImgPreview },
  data() {
    return {
      index: 0,
      anchors: [],
      tocItems: [],
      // =======================>>>
      noId: false,
      imgPreviewUrl: "",
      imgPreviewShow: false,
    };
  },
  head() {
    return {
      title:
        "GF." + this.articleDetailComp?.article_title == undefined
          ? "加载中..."
          : this.articleDetailComp?.article_title,
    };
  },
  async fetch({ $axios, store, params, query }) {
    let result = await $axios.get(`/b/d/${params.id}`);
    if (result) {
      store.commit("article_details/SET_ARTICLE_STATUS", result.code);
      store.commit("article_details/SET_ARTICLE_ITEM", result.data);
    }
  },
  computed: {
    articleDetailStatus() {
      return this.$store.state.article_details.status;
    },
    articleDetailComp() {
      return this.$store.state.article_details.articleItem;
    },
    /**
     * 获取文章主体
     */
    mkContentComp() {
      let mdStr = this.$store.state.article_details.articleItem.article_content;
      renderMD.heading = (text, level) => {
        let _text = text.replace(/<[^>]+>/g, "");
        const anchor = this.add(_text, level); //渲染目录的方法
        return `<h${level} id="${anchor}">${_text}</h${level}>`;
      };
      return marked(mdStr).replace(/<pre>/g, "<pre class='hljs'>");
    },
  },
  mounted() {
    this.preCopy();
  },
  methods: {
    add(text, level) {
      const anchor = `toc${level}${++this.index}`;
      this.anchors.push(anchor);
      const item = { anchor, level, text };
      const items = this.tocItems;

      if (items.length === 0) {
        // 第一个 item 直接 push
        items.push(item);
      } else {
        let lastItem = items[items.length - 1]; // 最后一个 item

        if (item.level > lastItem.level) {
          // item 是 lastItem 的 children
          for (let i = lastItem.level + 1; i <= 6; i++) {
            const { children } = lastItem;
            if (!children) {
              // 如果 children 不存在
              lastItem.children = [item];
              break;
            }
            lastItem = children[children.length - 1]; // 重置 lastItem 为 children 的最后一个 item

            if (item.level <= lastItem.level) {
              // item level 小于或等于 lastItem level 都视为与 children 同级
              children.push(item);
              break;
            }
          }
        } else {
          // 置于最顶级
          items.push(item);
        }
      }
      return anchor;
    },
    preCopy() {
      if (this.articleDetailComp == null) {
        return;
      }
      let content = document.getElementById("content");
      let pre = content.querySelectorAll("pre");
      for (let i = 0; i < pre.length; i++) {
        //这里应为是script引入的，所以直接调用hljs就行
        //代码块高亮
        hljs.highlightBlock(pre[i].querySelector("code"));
        //对代码块加行数
        // hljs.lineNumbersBlock(pre[i].querySelector("code"));
        // 获取code去除标签，保留code里的内容 复制的时候用到
        let median = pre[i].querySelector("code").innerHTML.replace(/<\/?.+?>/g, "");
        let res = median.replace(/ /g, "");
        //添加3个html标签，分别是复制按钮，放大按钮，和一个textarea存放code里的内容
        let a = `<a class="copy-code"><i class="fa fa-clone" aria-hidden="true"></i></a>`;
        let b = `<a class="enlarge"><i class="iconfont icon-fangda"></a>`;
        let banquan =
          "————————————————\n" +
          " 版权声明：本文为「GF.Blog」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\n" +
          "原文链接：" +
          window.location.href;
        let _copy_text = `${res}\n${banquan}`;
        let common = `<div class="pre-common">${a}${b}</div>`;
        //追加标签
        // pre[i].querySelector("code").insertAdjacentHTML("afterend", a);
        // pre[i].querySelector("code").insertAdjacentHTML("afterend", b);
        pre[i].querySelector("code").insertAdjacentHTML("afterend", common);
        // 给放大按钮添加点击事件
        pre[i].querySelector(".copy-code").onclick = () => {
          this.$copyText(_copy_text);
          this.$message.success("复制成功");
        };
        pre[i].querySelector(".enlarge").onclick = () => {
          if (pre[i].classList.contains("code-block-fullscreen")) {
            pre[i].classList.remove("code-block-fullscreen");
          } else {
            pre[i].classList.add("code-block-fullscreen");
          }
        };
      }

      let img = content.querySelectorAll("img");
      for (let i = 0; i < img.length; i++) {
        img[i].onclick = (e) => {
          this.imgPreviewUrl = img[i].src;
          this.imgPreviewShow = true;
        };
      }
    },
  },
};
</script>

<style lang="scss" scope>
.aircle-details-view {
  margin: 0 auto;
  width: 80%;
  .article-container {
    background: #fff;
    border: 1px #ccc dashed;
    .article-details {
      padding: 10px;
      border-top: 1px dashed #999;
      // width: 80%;
    }
  }
  .article-title {
    user-select: none;
  }
  .article-common {
    user-select: none;
    display: flex;
    align-items: center;
    > div {
      margin: 8px 8px;
    }
  }
  .article-anchor {
    z-index: 100;
  }
}
@media screen and (max-width: 800px) {
  .aircle-details-view {
    width: 95%;
  }
  .article-anchor {
    > div {
      width: initial;
      height: initial;
    }
  }
}
</style>
