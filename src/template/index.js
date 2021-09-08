import custom from "./markdown/custom";
import normal from "./markdown/normal";

import atomOneDark from "./code/atomOneDark";
import atomOneLight from "./code/atomOneLight";
import github from "./code/github";
import monokai from "./code/monokai";
import vs2015 from "./code/vs2015";
import xcode from "./code/xcode";

import macAtomOneDark from "./macCode/macAtomOneDark";
import macAtomOneLight from "./macCode/macAtomOneLight";
import macGithub from "./macCode/macGithub";
import macMonokai from "./macCode/macMonokai";
import macVs2015 from "./macCode/macVs2015";
import macXcode from "./macCode/macXcode";

import basic from "./basic";

const content = `## 来了老弟？  
> 本编辑器是基于 [mdnice](https://github.com/mdnice/markdown-nice) 的开源版本打造。  
  
在这里，写 markdown 就好了。  
更多功能，可查看“菜单-教程”  
  
另外，主题可以自定义，点击“菜单-主题”即可，实时编辑、实时生效、实时保存。   
  
若有其他问题，可添加我的微信${`K-I2ving`}聊聊。  
<img
    src="https://kyrieliu.cn/images/qrcode2.jpg"
    width="200px"
/>`;

export default {
  basic,
  normal,
  custom,
  code: {
    atomOneDark,
    atomOneLight,
    github,
    monokai,
    vs2015,
    xcode,
    macAtomOneDark,
    macAtomOneLight,
    macGithub,
    macMonokai,
    macVs2015,
    macXcode,
  },
  content,
};
