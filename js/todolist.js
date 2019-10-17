$(function(){
//	alert("todolist");
	//本地存储是能存储字符串的数据格式:localStorage.set();
	//所以把我们的数组对象转换成字符串格式:JSON.stringify();
	//获取本地存储的数据，我们把里面的数据转换为对象格式:JSON.parse();
	load();
	//输入数据，回车保存到localStorage中
	$("#title").on("keydown",function(e){
		if(event.keyCode===13){
			var local=getData();
			//存入数据
			local.push({title: $(this).val(),done: false});
			saveData(local);
			//将本地存储的数据渲染到页面中
			load();
			$(this).val("");
		}
	})
	//删除数据
	$("ol,ul").on("click","a",function(){
		var data=getData();
		var index=$(this).attr("index");
		data.splice(index,1);
		saveData(data);
		load();
	})
	//完成事件
	$("ol,ul").on("click","input",function(){
		var data=getData();
		var index=$(this).siblings("a").attr("index");
//		console.log(data[index].done);
		data[index].done=$(this).prop("checked");
		saveData(data);
		load();
	})
	//读取本地存储的数据
	function getData(){
		var data=localStorage.getItem("todolist");
		if(data!==null){
			return JSON.parse(data);
		}else{
			return [];
		}
	}
	function saveData(data){
		var data=localStorage.setItem("todolist",JSON.stringify(data));
	}
	//将本地存储渲染到页面中
	function load(){
		var data=getData();
		//清除原来的数据
		/*$("ol>li").remove();*/
		$("ol").empty();
		$("ul").empty();
		var todoCount=0;
		var todoneCount=0;
		$.each(data,function(i,n){
			if(!n.done){
				todoCount++;
				$("ol").prepend("<li><input type='checkbox' /><p>"+n.title+"</p><a href='javascript:;' index='"+i+"'>⚪</a></li>")
			}else{
				todoneCount++;
				$("ul").prepend("<li><input type='checkbox' checked/><p>"+n.title+"</p><a href='javascript:;' index='"+i+"'>⚪</a></li>")
			}
		})
		//统计数量
		$("#todocount").text(todoCount);
		$("#donecount").text(todoneCount);
	}
})