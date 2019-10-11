# JQuery学习

**JavaScript库**

library：封装好特定的集合（方法和函数），在这个库中有预先定义好的函数在里面：animate、hide、show或者获取元素，以及一些兼容性的问题解决方案；

相当于一个js文件，将**原生js代码进行封装**，存放在里面，我们可以快速的使用这些封装好的功能。

**常见的js库**

	JQuery(学习)
	Prototype
	YUI
	Dojo
	Ext JS
	移动端的zepto

## 优点

快速简洁，更少的代码，做更多的事情。

封装了常用的JS功能代码，优化DOM操作、事件处理、动画设计和Ajax交互。

轻量级；跨浏览器；链式编程，隐式迭代；对事件、样式、动画支持，简化DOM操作；支持插件扩展开发，有着丰富的第三方插件；免费、开源。

## 使用

**入口函数**

等着DOM结构渲染完成即可执行内部代码，不必等到所有外部资源加载完成，JQuery帮我们完成封装；

相当于原生JS中的DOMContentLoaded;

	$(document).ready(function(){
	})
	$(function){
		
	}

**以$开头**

$是JQuery的别名；

	$(function(){})
	JQuery(function(){})

$也是JQuery的顶级对象,相当于原生JavaScript中的window；

## DOM对象与JQuery对象的区别

**DOM对象**：用原生JS获取的对象是DOM对象，使用原生JavaScript的属性和方法；

**JQuery对象**：用jQuery方法获取额的元素对象就是JQuery对象，使用jQuery中封装的的属性和方法。

**jQuery对象本质**：利用```$```对DOM对象包装后产生的对象（为数组的形式存储）

**DOM对象和JQuery对象可以相互转化**：原生的JS属性和方法JQuery没有封装，我们使用时需要将JQuery对象转换为DOM对象才能使用；

	$(DOM对象)//DOM对象转换为JQuery对象
	$(DOM对象)[index]//JQuery转换为DOM对象(两种)
	$(DOM对象)get[index]

# JQuery常用API

## JQuery选择器

	$('选择器')

**选择器**与css中的选择器一样；比如：id选择器```$('#id')```;全选选择器```$('*')```;类选择器```$('.class')```;标签选择器```$('div')```;并集选择器```$('div,p,li')```;交集选择器```$('li.current')```;

**层级选择器**

	$('ul li')//后代选择器
	$('ul>li')//子代选择器

**隐式迭代**

	$('div').css('backgroud','pink');//会将所有的div添加背景颜色

隐式迭代就是讲所有的元素内部进行遍历循环，使每个元素都能执行方法；

**筛选选择器**

	$('element:first')//获取第一个元素
	$('element:last')//获取最后一个元素
	$('element:eq(2)')//获取索引为2的元素（第三个）
	$('element:odd')//获取奇数行的元素
	$('element:even')//获取偶数行的元素

**筛选的方法**

	$('element').parent()//查找父级元素
	$('element').parents('element')//查找祖先级元素,加上element就选择相应的祖先元素
	$('element').children('element')//查找子代,加上element就选择相应的子代元素
	$('element').find('element')//查找后代，加上element选择指定的后代元素
	$('element').siblings('element')//查找除了自身以外所有的兄弟元素,加上element选择指定的兄弟元素
	$('element').nextAll()//查找当前元素之后的所有同辈元素
	$('elemetn').prevAll()//查找当前元素之前的所有同辈元素
	$('element').hasClass('protected')//查找是否含有某个特定类元素
	$('element').eq(2)//同$('elemetn:eq(2)')

**链式编程**

	$('element').eq(index).show().sibling().hide();

[例子1：下拉菜单](./demo/下拉菜单.html)

[例子2：排他思想](./demo/排他思想.html)

[例子3：左右table栏切换](./demo/左右table栏切换案例.html)

## JQuery样式操作

JQuery可以使用css方法修改样式；也可以操作类，修改多个样式；

**操作css方法**

	$('element').css('属性名');//返回属性值
	$('element').css('属性名','属性值');//修改属性值
	$('element').css({//修改多个样式，以对象的形式修改
		'属性名':'属性值',
		……
	})

**设置类改变样式**

1.添加类

	$('element').addClass('类名');

2.删除类

	$('element').removeClass('类名');

3.切换类

	$('element').toggleClass('类名');

**类操作与className区别**

原生JS中的className会覆盖以前的类名；

JQuery中的addClass是追加类名，不会影响以前的类名；

[例子3：tab栏切换](./demo/tab栏切换案例.html)

## JQuery效果

**动画效果**

1.显示隐藏

	show([speed,[easing],[fn]]);//显示
	hide([speed,[easing],[fn]]);//隐藏
	toggle([speed,[easing],[fn]]);//切换

参数可以省略

speed:三种预设速度字符串：show、normal、fast；或者使用毫秒数值；

easing:指定切换的效果，默认‘swing’，或者‘linear’；

fn:回调函数，动画完成后的函数；

2.滑动

	slideDown([speed,[easing],[fn]]);//向下滑动
	slideUp([speed,[easing],[fn]]);//向上滑动
	slideToggle([speed,[easing],[fn]]);//切换滑动

3.淡入淡出

	fadeIn([speed,[easing],[fn]]);//淡入效果
	fadeOut([speed,[easing],[fn]]);//淡出效果
	fadeToggle([speed,[easing],[fn]]);//切换效果
	fadeTo([[speed],opacity,[easing],[fn]]);//改变透明度

opacity:透明度，取值：0-1之间；

4.自定义动画

	animate(params,[speed],[easing],[fn]);

params:参数，想要修改的样式属性，以对象的形式传递，必须写。属性名可以不用带引号，如果是复合属性要求使用驼峰命名法，其他参数可以省略；

**hover([over function,]out function)**

over:鼠标移到元素上触发的函数（相当于mouseover）

out:鼠标离开时触发（相当于mouseleave）

**动画队列**

	stop();//停止上一次动画,所以写在动画的前面

[例子1：下拉菜单](./demo/下拉菜单.html)

[例子2：折叠卡片](./demo/折叠卡片.html)

[例子3：图片高亮](./demo/图片高亮.html)

## JQuery属性操作

**获取属性值**

	$('element').prop('属性名');

**设置属性值**

	$('element').prop('属性名','属性值');

**自定义属性**

	$('element').attr("属性名");//类似于原生中的getAttribute
	$('element').attr("属性名","属性值");//类似于原生中的setAttribute

**数据缓存**

	$("element").data("key","value");//设置数据
	$("element").data("key")//获取属性（以data-开头的属性值也可以这样获取，key为去掉data-的属性名称）


## JQuery文本属性操作

**普通元素内容html()**

	$("element").html();//相当于原生innerHTML

**设置元素文本内容text()**

	$("element").text();//

**设置表单val()**

	$("element").val();//

## jQuery元素操作

主要是对元素进行遍历、创建、添加、删除；

JQuery中隐式迭代是对同类元素进行相同的操作，如果想要做不同的操作就要进行遍历；

**遍历元素**

	$("element").each(function(index,domEle){
		……
	})
	$.each($("element")/array/object,function(i,ele){
		……
	})

区别：上面主要用于遍历元素，下面主要用于遍历数组和对象；

each()方法匹配每一个元素，主要是DOM处理。

里面的回调函数有2个参数：index是每个元素的索引号，domEle是每个DOM元素的对象，不是jQuery对象；

所以要使用JQuery对象需要将DOM元素转换为jQuery对象```$(domEle)```;

**创建元素**

	var span=$("<span>添加span</span>");

**添加元素**

	element.append("内容");//内部添加,将元素放到原来内容的最后面
	element.prepend("内容");//内部添加,将元素放到原来内容的最前面
	element.after("内容");//外部添加，把内容放在目标元素的后面
	element.before("内容");//外部添加，把内容放在目标元素的前面

内部添加生成的是父子关系的元素；

外部添加生成的是兄弟关系的元素。

**删除元素**

	$("element").remove();//删除匹配的元素（自身）
	$("element").empty();//清空匹配的元素的子元素
	$("element").html("");//用空的字符串替换匹配的元素的子元素

[例子：购物车](./demo/购物车.html)

## jQuery尺寸、位置操作

**尺寸**

	$("element").width()/height()//取得元素的宽度和高度;修改尺寸直接写到()里面
	$("element").innerWidth()/innerHeight()//取得元素的宽度和高度包含padding
	$("element").outerWidth()/outerHeight()//取得元素的宽度和高度包含padding、border
	$("element").outerWidth(true)/outerHeight(true)//取得元素的宽度和高度包含padding、border、margin

**位置**

	$("element").offset().top//元素与页面顶端的距离
	$("element").offset().left//元素与页面左端的距离
	$("element").offset({//修改元素在页面(文档)中的距离
		top: 0;
		left: 0;
	})
	$("element").position()//元素与带有定位的父元素的距离(只能获取不能设置)
	$(document).scrollTop()//文档上部卷去的距离，可以设置文档的位置
	$(document).scrollLeft()//文档左部卷去的距离，可以设置文档的位置

[例子1：返回顶部](./demo/返回顶部.html)

[例子2：电梯导航](./demo/电梯导航.html)

# JQuery事件

## JQuery事件注册

与原生基本一致:click、mouseover……

单个事件处理：

	$("element").event(function(){
		……
	})

## JQuery事件处理

**多个事件处理on()**：

	element.on({
		events1:function(){},
		events2:function(){},
		……
	},[selector],fn)
	element.on('event1 event2',function(){
		$(this).toggleClass("classname");
	},[selector],fn)

events:一个或多个用空格分隔事件类型，如'click'或'keydown'

selector:元素子元素选择器

fn:回调函数

**on实现事件委托（委派）**

	$("ul").on("click","li",function(e){
		console.log(this);
		console.log(e.target);
	})

**on可以为未来创建的元素绑定事件**

	$("ol").on("click","li",function(e){
		console.log(this);
		console.log(e.target);
	})
	var li=$("<li>……</li>");
	$("ol").append(li);

## JQuery事件对象