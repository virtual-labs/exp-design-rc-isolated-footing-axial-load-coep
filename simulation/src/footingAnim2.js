
  var x=100;
   var y=100;


function footingAnim2(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val,totalDepthvalue){
	$('#page1Div1').html("");
	$('#page1Div1').removeAttr('width');
	$('#page1Div1').removeAttr('height');
	$('#page2Div1').html("");
	$('#page2Div1').removeAttr('width');
	$('#page2Div1').removeAttr('height');
	var w =670;
	var h = 620;

	if ($(window).width() < 500) {
		paper = new Raphael(document.getElementById('page3Div1'), '100%', '100%');
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('page3Div1'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
   
   var eCover_val1=parseInt(eCover_val);
   	console.log("eCover_val =  "+eCover_val1);
 
   footingDepth=paper.image("images/page3DigFooting.png", (x-80), (y -35), 515, 360);
//   totalD=paper.image("images/D_imgPreview.png", (x +400), (y+124), 35, 90);
//   var effectiveCover=paper.text((x+340), (y+145),"d = "+d_val).attr({'font-size':14,'stroke':'#0099ff'});
//   var D_val_text=paper.text((x+420), (y+160),"D = "+totalDepthVal).attr({'font-size':14,'stroke':'#0099ff'});
   var d_val_text=paper.text((x+315), (y+300),"d' = "+eCover_val1).attr({'font-size':16,'stroke':'#0099ff'});
   
   
}

function effectiveDepth(EffectiveDepth){
	
	var EffectiveDepth11=parseFloat(EffectiveDepth);
	console.log("totalDepthvalue11"+EffectiveDepth11);
	var EffectiveDepthTXT=paper.text((x+290), (y+220),"d = "+EffectiveDepth11).attr({'font-size':16,'stroke':'#0099ff'});
	
}


function totaldepth(totalDepthvalue){
	var totalDepthvalue11=parseFloat(totalDepthvalue);
	console.log("totalDepthvalue11"+totalDepthvalue11);
	var Dval_text=paper.text((x+450), (y+240),"D = "+totalDepthvalue11).attr({'font-size':16,'stroke':'#0099ff'});
   
}