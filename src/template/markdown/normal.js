export default `/* 默认主题：原谅绿 */
#nice {
}

#nice p {
	margin: 0 0 20px;
	padding: 0;
	line-height: 32px;
	color: #3a3a3a;
}

/* 一级标题 */
#nice h1 {
  font-size: 36px;
	line-height: 28px;
	padding-top: 16px;
  padding-bottom: 10px;
  padding-left: 5px;
  margin-bottom: 5px;
  border-bottom: 3px solid #2AAE67;
}
/* 一级标题内容 */
#nice h1 .content {
  color: #515151;
  font-weight: 700;
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {}

/* 二级标题 */
#nice h2 {
  margin-bottom: 5px;
}

/* 二级标题内容 */

#nice h2 .content {
  display: inline-block;
  font-weight: bold;
  background: linear-gradient(#fff 60%, #7DE699 30%);
  color: #515151;
  padding: 2px 10px;
  margin-right: 3px;
  height: 50%;
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {}

/* 三级标题 */
#nice h3 {
  line-height: 1.4;
  padding-top: 10px;
  margin: 20px 0 5px;
}

/* 三级标题内容 */
#nice h3 .content {
  color: #515151;
  font-weight: 700;
  font-size: 1.0em;
  padding-left: 10px;
  border-left: 5px solid #2AAE67;
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
#nice .multiquote-1 {
  border-left-color: #2AAE67;
  background: #D4FAD7;
}

/* 引用文字 */
#nice .multiquote-1 p {
  color: #085349;
}

/* 链接 */
#nice a {
  border: none;
  text-decoration: none;
  color: #157D5A;
}

#nice a:hover {
  color: #2AAE67;
  text-decoration: underline;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
}

/* 列表内容，不要设置li
 */
#nice li section {
}

/* 加粗 */
#nice strong {}

/* 斜体 */
#nice em {}

/* 加粗斜体 */
#nice em strong {}

/* 删除线 */
#nice del {
  color: #d19826;
}

/* 分隔线
* 粗细、样式和颜色
* border-top: 1px solid #3e3e3e;
*/
#nice hr {
  border-top: 1px solid #f9bf45;
  margin: 20px 0px;
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
#nice img {
  width: 100%;
 border-radius: 5px;
 display: block;
 margin-bottom: 15px;
 height: auto;
}

/* 图片描述文字 */
#nice figcaption {
  color: #dda52d;
  font-size: 14px;
}

/* 行内代码 */
#nice p code, #nice li code {
  color: #0D6450;
  background-color: #D4FAD7;
  padding: 2px 6px;
  margin: 3px;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
#nice table tr th,
#nice table tr td {
  text-align: center;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #157D5A;
  padding: 3px;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #157D5A;
  margin: 0px;
  padding: 0px;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  margin: 30px 0px 15px 0px;
  font-weight: 800;
  color: #2AAE67;
}


/* 参考资料编号 */
#nice .footnote-num {
  width: auto;
  margin-right: 3px;
}

/* 参考资料文字 */
#nice .footnote-item p { 
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}

/* 滑动图片
 */
#nice .imageflow-img {
  display: inline-block;
  width:100%;
  margin-bottom: 0;
}`;
