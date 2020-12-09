<template>
  <div style="padding: 0.1rem">
    <div id="toolbar-container" class="toolbar"></div>

    <div id="text-container" class="text"></div>

    <div v-html="mo">

    </div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "editoritem",
  data() {
    return {
      mo:
        '<h1 id="wg6go"><table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><th><p>1</p></th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><td style="text-align: center;">6</td><td style="text-align: center;">7</td><td style="text-align: center;">8</td><td style="text-align: center;">9</td><td style="text-align: center;">0</td></tr></tbody></table></h1><ul><li style="text-align: center;"><u>测试</u></li><li style="text-align: center;"><u><img src="https://cn.vuejs.org/images/logo.png" style="max-width:100%;" width="30%"><br></u></li></ul>',
    };
  },

  mounted() {
    const editor = new E("#toolbar-container", "#text-container"); // 传入两个元素
    editor.config.placeholder = "请输入";
    // 配置菜单栏，删减菜单，调整顺序
    editor.config.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      //   'video', // 插入视频
      //   'code', // 插入代码
      "undo", // 撤销
      "redo", // 重复
      "fullscreen", // 全屏
    ];
    // 配置 onchange 回调函数
    editor.config.onchange =  (newHtml) =>{
      console.log("change 之后最新的 html", newHtml);
      this.mo = newHtml
    };
    editor.create();
    editor.txt.html(this.mo) // 重新设置编辑器内容
  },
  methods: {},
};
</script>

<style scoped>
.toolbar {
  border: 1px solid #ccc;
}
.text {
  border: 1px solid #ccc;
  min-height: 400px;
  margin-top: 0.1rem;
}
</style>