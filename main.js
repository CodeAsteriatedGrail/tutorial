// var request= new XMLHttpRequest();
// var data = JSON.parse(request.reponseText);
	// request.open('GET','pre_json.json',true);
	
	// request.send();

var UVa ={
   "que":[
   {
         "name":"name",
         "number":"number",
         "ifsolve":"ifsolve"
      },
      {
         "name":"Vito's family",
         "number":"(CPE10406,?UVA10041)",
         "ifsolve":"True"
      },
      {
         "name":"Hashmat the brave warrior",
         "number":"(CPE10407,?UVA10055)",
         "ifsolve":"True"
      },
      {
         "name":"Primary Arithmetic",
         "number":"(CPE10404,?UVA10035)",
         "ifsolve":"False"
      },
      {
         "name":"The 3n + 1 problem",
         "number":"(CPE10400,?UVA100)",
         "ifsolve":"False"
      },
      {
         "name":"You can say 11",
         "number":"(CPE10460,?UVA10929)",
         "ifsolve":"False"
      },
      {
         "name":"Bangla Numbers",
         "number":"(CPE10414,?UVA10101)",
         "ifsolve":"False"
      },
      {
         "name":"List of Conquests",
         "number":"(CPE21924,?UVA10420)",
         "ifsolve":"True"
      }
   ]
}


	 /*序列化*/
	var jsonStr=JSON.stringify(UVa);
	console.log(jsonStr.que);
	
	// <!--反序列化-->
	var planObj=JSON.parse(jsonStr);
	console.log(planObj);
	
	// <!-- 創立題目表格-->
	var quearr=[];
	for(qui in UVa.que){
		quearr +="<p >"+UVa.que[qui].name +"</p><p>"+UVa.que[qui].number +"</p><p>"+UVa.que[qui].ifsolve+"</p>";
		
		};
		//加入題目
		console.log(quearr);
		var que= document.getElementById('que');
		que.innerHTML =quearr;
		
//顯示視窗(待刪除)
	// function queview(a){	
		// var view = document.getElementById("queview");
			// view.innerHTML="<p>"+a+"s</p>";
			// console.log(a);
	// }			

for(ali in UVa.que){
	document.getElementsByTagName("p")[ali*3+1].addEventListener("click", 
			function(){var view = document.getElementById("queview");
						view.innerHTML="<p>"+this.innerHTML+"s</p>";});	
		}
		

