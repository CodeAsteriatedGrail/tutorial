// var request= new XMLHttpRequest();
// var data = JSON.parse(request.reponseText);
	// request.open('GET','pre_json.json',true);
	
	// request.send();


// var UVa ={
   // "que":[
      // {
         // "name":"name",
         // "number":"number",
         // "ifsolve":"ifsolve",
         // "link":"link",
         // "how":"how"
      // },
      // {
         // "name":"Vito's family",
         // "number":"(CPE10406,?UVA10041)",
         // "ifsolve":"True",
         // "link":"無文章",
         // "how":"求中位數"
      // },
      // {
         // "name":"Hashmat the brave warrior",
         // "number":"(CPE10407,?UVA10055)",
         // "ifsolve":"True",
         // "link":"無文章",
         // "how":"測資有二數字，相減即可。"
      // },
      // {
         // "name":"Primary Arithmetic",
         // "number":"(CPE10404,?UVA10035)",
         // "ifsolve":"False",
         // "link":"https://ithelp.ithome.com.tw/articles/10199710",
         // "how":"大數進位，每筆測資有二文數資料。取二數差值再加一，即為可能最大進位數。"
      // },
      // {
         // "name":"The 3n + 1 problem",
         // "number":"(CPE10400,?UVA100)",
         // "ifsolve":"False",
         // "link":"https://ithelp.ithome.com.tw/articles/10200199",
         // "how":"奇數乘三倍加一，偶數除以二，最後會變成一。透過動態規劃法，可以減少運算時間。"
      // },
      // {
         // "name":"You can say 11",
         // "number":"(CPE10460,?UVA10929)",
         // "ifsolve":"False",
         // "link":"無文章",
         // "how":"求11倍數，與Problem J: Summing Digits"
      // },
      // {
         // "name":"Bangla Numbers",
         // "number":"(CPE10414,?UVA10101)",
         // "ifsolve":"False",
         // "link":"https://ithelp.ithome.com.tw/articles/10199820",
         // "how":"學藝不精，不便獻醜。"
      // },
      // {
         // "name":"List of Conquests",
         // "number":"(CPE21924,?UVA10420)",
         // "ifsolve":"True",
         // "link":"無文章",
         // "how":"字串統計"
      // }
   // ]
// }
var UVa={
   "name":{
      "name":"name",
      "number":"number",
      "ifsolve":"ifsolve",
      "link":"link",
      "how":"how"
   },
   "Vito's family":{
      "name":"Vito's family",
      "number":"(CPE10406,?UVA10041)",
      "ifsolve":"True",
      "link":"無文章",
      "how":"求中位數"
   },
   "Hashmat the brave warrior":{
      "name":"Hashmat the brave warrior",
      "number":"(CPE10407,?UVA10055)",
      "ifsolve":"True",
      "link":"無文章",
      "how":"測資有二數字，相減即可。"
   },
   "Primary Arithmetic":{
      "name":"Primary Arithmetic",
      "number":"(CPE10404,?UVA10035)",
      "ifsolve":"False",
      "link":"https://ithelp.ithome.com.tw/articles/10199710",
      "how":"大數進位，每筆測資有二文數資料。取二數差值再加一，即為可能最大進位數。"
   },
   "The 3n + 1 problem":{
      "name":"The 3n + 1 problem",
      "number":"(CPE10400,?UVA100)",
      "ifsolve":"False",
      "link":"https://ithelp.ithome.com.tw/articles/10200199",
      "how":"奇數乘三倍加一，偶數除以二，最後會變成一。透過動態規劃法，可以減少運算時間。"
   },
   "You can say 11":{
      "name":"You can say 11",
      "number":"(CPE10460,?UVA10929)",
      "ifsolve":"False",
      "link":"無文章",
      "how":"求11倍數，與Problem J: Summing Digits"
   },
   "Bangla Numbers":{
      "name":"Bangla Numbers",
      "number":"(CPE10414,?UVA10101)",
      "ifsolve":"False",
      "link":"https://ithelp.ithome.com.tw/articles/10199820",
      "how":"學藝不精，不便獻醜。"
   },
   "List of Conquests":{
      "name":"List of Conquests",
      "number":"(CPE21924,?UVA10420)",
      "ifsolve":"True",
      "link":"無文章",
      "how":"字串統計"
   }
}

load();
function load(){

	var ques={"Vito's family":"abs"};
	
		 /*序列化*/
		var jsonStr=JSON.stringify(UVa);
		console.log(jsonStr.length);
		
		// <!--反序列化-->
		var planObj=JSON.parse(jsonStr);
		console.log(planObj.length);
		
		// <!-- 創立題目表格-->
		var quearr=[];
		for(qui in UVa){
			quearr +="<p >"+qui+"</p><p>"+UVa[qui].number +"</p><p>"+UVa[qui].ifsolve+"</p>";
			
			};
			// 加入題目
			console.log(quearr);
			var que= document.getElementById('que');
			que.innerHTML =quearr;
	add();
}
// 顯示視窗()
	
// for(ali in UVa.que){
	// document.getElementsByTagName("p")[ali*3+1].addEventListener("click", 
			// function(){var view = document.getElementById("queview");
						// view.innerHTML="<p>"+this.innerHTML+"s</p><p>"+ques[this.innerHTML]+"</p>";
						
						// });	
		// }
		
//顯示視窗()
function add(){	
	intali=0;
	for(ali in UVa){
		console.log(ali);
		document.getElementsByTagName("p")[intali*3+1].addEventListener("click", 
				function(){var view = document.getElementById("queview");
							view.innerHTML="<p>"+this.innerHTML+"s</p><p>"+UVa[this.innerHTML].how+"</p>";
							
							});	
							intali+=1;
			}
	}
