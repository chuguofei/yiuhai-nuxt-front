<template>
  <div class="aircle-details-view">
    <a-skeleton active v-if="!articleDetailComp" />
    <template v-else>
      <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
          <div class="article-details" id="content">
            <div v-html="mkContentComp"></div>
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
</template>

<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import ClipboardJS from "clipboard";
import AnchorLink from "@/components/aricle_detaile_anchor/index.vue";
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
  components: { AnchorLink },
  data() {
    return {
      index: 0,
      anchors: [],
      tocItems: [],
    };
  },
  async fetch({ store, params, query }) {
    await store.dispatch("getArticleDetails", { id: params.id });
  },
  computed: {
    articleDetailComp() {
      return this.$store.state.article_details.articleItem;
    },
    /**
     * 获取文章主体
     */
    mkContentComp() {
      let mdStr = this.$store.state.article_details.articleItem.article_content;
      renderMD.heading = (text, level) => {
        const anchor = this.add(text, level); //渲染目录的方法
        return `<h${level} id="${anchor}">${text}</h${level}>`;
      };
      return marked(mdStr).replace(/<pre>/g, "<pre class='hljs'>");
    },
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
  },
};
</script>


<style lang="scss" scope>
.aircle-details-view {
  margin: 0 auto;
  width: 80%;
  .article-details {
    padding: 10px;
    // width: 80%;
    border: 1px #ccc dashed;
    background: #fff;
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
    > div{
      width: initial;
      height: initial;
    }
  }
}
</style>