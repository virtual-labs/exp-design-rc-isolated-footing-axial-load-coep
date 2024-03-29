
function FootingAnim(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val){
	$('#page1Div1').html("");
	$('#page1Div1').removeAttr('width');
	$('#page1Div1').removeAttr('height');
	var w =670;
	var h = 620;

	if ($(window).width() < 500) {
		paper = new Raphael(document.getElementById('page2Div1'), '100%', '100%');
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('page2Div1'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}

   var workingLoadValue = parseInt(pre);
	console.log("workingLoadValue =  "+pre);
   
   var concreteValue =parseInt(conVal);
   	console.log("concreteValue =  "+conVal);
   
   var steelValue =parseInt(steelVal);
   	console.log("steelValue =  "+steelVal);
  
   var colSizeValue = parseInt(colSize);
   	console.log("colSizeValue =  "+colSize);
   
   var dValue = parseInt(d_val);
   	console.log("dValue =  "+d_val);
  
   var SBCValue =parseInt(sbc_val);
   		console.log("SBCValue =  "+sbc_val);
   		
   var eCover_val=parseInt(eCover_val);
   	console.log("eCover_val =  "+eCover_val);
   
   var x=100;
   var y=100;
  // footingDig1=paper.image("images/F_topView1preview.png", (x -30), (y - 100), 500, 300);
  
   
   soil=paper.image("images/soil2.png", (x +30), (y +162),393, 60);
   footingDig1=paper.image("images/F_topView1234.png", (x -20), (y -85), 495, 260);
   footingDig1=paper.image("images/arrowFooting_preview.png", (x +30), (y +162),393, 60);
   footingDig1=paper.image("images/F_topView2preview.png", (x -50), (y + 230), 570, 300);
   
   var P_val_text=paper.text((x+235), (y-90),"P = "+workingLoadValue).attr({'font-size':20,'stroke':'#0099ff'});
   var D_val_text=paper.text((x+230), (y+320),"D = "+dValue).attr({'font-size':20,'stroke':'#0099ff'});
   var b_val_text=paper.text((x+310), (y+360),"b = "+colSizeValue).attr({'font-size':20,'stroke':'#0099ff'});
   
   
}

function LfBfValue(LfValue,BfValue){
	 var x=100;
   var y=100;
	var lVal = parseFloat(LfValue);
	
	var bVal1 = parseFloat(BfValue);
	var bVal=bVal1.toFixed(2);
	console.log("lVal = "+lVal+" ,  bVal = "+bVal);
	var BfRect=paper.rect((x+450), (y+355),30,20).attr({'stroke':'#fff','fill':'#fff'});
    var BfTxt=paper.text((x+470), (y+360),"Bf = "+bVal).attr({'font-size':17,'stroke':'#0099ff'});
    
    var LfRect=paper.rect((x+210), (y+472),30,20).attr({'stroke':'#fff','fill':'#fff'});
   	var LfTxt=paper.text((x+220), (y+482),"Lf = "+lVal).attr({'font-size':17,'stroke':'#0099ff'});
}

function soilPressure(WuValue){
	 var x=100;
   var y=100;
	var WuVal = parseFloat(WuValue);
    var b_val_text=paper.text((x+210), (y+230),"Wu = "+WuVal).attr({'font-size':20,'stroke':'#0099ff'});
   
   
}











