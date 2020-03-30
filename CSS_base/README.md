# base_css
初始化标签的样式

### base.css在后期的实际项目中会不断优化。


### base.css在后期的实际项目中会不断优化。

### 2018.6.29
   因为表单元素的字体无法继承，所以要单独设置
   body{ font-size:0.24rem; }
   input, label, select, option, textarea, button, fieldset, legend { font-size:0.24rem;}
   
### 2018.3.28
	去掉 带有文本样式的标签（em、i、s、strong）。因为有的前端页面文本是通过 后台管理系统 配置的（即富文本）。
	后管编辑器 上编辑的 有样式的 文本，传递给前端是 带有样式标签的html标签。如果把这些标签样式重置了，后管设置的加粗字体就不能在前端页面正确显示了。