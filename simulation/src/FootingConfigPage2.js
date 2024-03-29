

var PVal;
var fck;
var bVal;
var dValue;
var effectiveCover;
var Lf ;
var Bf;
var wuVal2;

var fyValForDxDyCal;
var MuxVal;
var convertMux_corr;
var MuyVal;
var convertMuy_corr;
var dxCorr;
var dyCorr;
var totalDepthvalue;
var EffectiveDepth;


	function Page2(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_value2,LfValue,BfValue,wuCorr){
		$("#centerText1").html('DEPTH OF FOOTING FROM BENDING MOMENT CONSIDERATION');
	    $("#centerText2").html('FOOTING TOP VIEW'); 
	    
	  	PVal = parseFloat(pre);
		console.log("PVal =  "+PVal);
	   
	   	fck =parseFloat(conVal);
	   	console.log("fck =  "+fck);
	   	
	   	fy =parseFloat(steelVal);
	   	console.log("fy =  "+fy);
	   	
	   	
	   	if(fy==250){
			fyValForDxDyCal=0.148;
		
		}else if(fy==415){
			fyValForDxDyCal=0.138;
			
		}else if(fy==500){
			fyValForDxDyCal=0.133;
			
		}else{
			console.log("Take Grade of steel..");
		}
		console.log("Fy Value = "+fyValForDxDyCal);
	  	
	  	var bValpg3 =parseFloat(colSize);
	  	console.log("bValpg3 =  "+bValpg3);
	  	
	  	var mmTOm = Math.pow(10,3);
	  	 bVal= bValpg3*mmTOm;
	  	console.log("bVal = "+bVal);
	  	
	  	var dValuepg3 =parseFloat(d_val);
	  	console.log("dValuepg3 =  "+dValuepg3);
	  	dValue= dValuepg3*mmTOm;
	  	console.log("dValue= "+dValue);
	  	
	  	effectiveCover=parseFloat(eCover_value2);
	  	console.log("effectiveCover =  "+effectiveCover);
	  	
	  	var LfANSS =parseFloat(LfValue);
	  	console.log("Lf =  "+LfANSS);
	  	 Lf= LfANSS*mmTOm;
	  	
	  	
		var BfANSS =parseFloat(BfValue);
	  	console.log("Bf =  "+BfANSS);
	  	Bf= BfANSS*mmTOm;
	  	
	  	wuVal2 =parseFloat(wuCorr);
	  	console.log("wuVal2 =  "+wuVal2);
	    
	   
	    
	    var selection3 = '<div class="row">'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
   	   +' <strong class="labelstyleInfo "><center>f<sub>ck</sub>= '+fck+' N/mm<sup>2</sup> &nbsp; &nbsp; f<sub>y</sub>= '+fy+' N/mm<sup>2</sup> </center></strong> '
  	   +' </div>'
  	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
   	   +' <strong class="labelstyleInfo "><center>b= '+bValpg3+' mm &nbsp; &nbsp; D= '+dValuepg3+' mm </center></strong> '
  	   +' </div>'
  	   +'</div>'
	   +'</div>'
	   
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
   	   +' <strong class="labelstyleInfo "><center>W<sub>u</sub>= '+wuVal2+' kN/m<sup>2</sup> &nbsp; &nbsp; P='+PVal+' kN </center></strong> '
  	   +' </div>'
  	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
   	   +' <strong class="labelstyleInfo "><center>L<sub>f</sub>= '+LfANSS+' m &nbsp; &nbsp; B<sub>f</sub>= '+BfANSS+' m</center></strong> '
  	   +' </div>'
  	   +'</div>'
	   +'</div>'
	   
	  
	  +'<div class="row">'
	   +' <div class="col-sm-12">'
	   +'  <div class="alert alert-info">'
   	   +"  <strong class='labelstyleInfo '><center>Effective Cover d'= "+effectiveCover+" mm</center></strong>"
  	   +'  </div>'
  	   +' </div>'
	   +'</div>'
	    
	   +'<div class="row calRowBorder" id="rw1">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate M<sub>ux</sub> (kN/m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="muxValue"   class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subMux" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'
	   +'</div>'
	   
//	   +'<div class="row calRowBorder" id="rw2" hidden>'
//	   +'<div class="col-sm-5">'
//	   +'<label class="labelstyle ">Convert M<sub>ux</sub> (N mm) : </label>'
//	   +'</div>'
//	   +'<div class="col-sm-4">'
//	   +'<input type="number" id="convertMux"   class=" form-control "  >'
//	   +'</div>'	    
//	   +'<div class="col-sm-3" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subConvertMux" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
//	   +'</div>'
//	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="rw2" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate M<sub>uy</sub> (kN/m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="muyValue"   class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subMuy" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'
	   +'</div>'
	  
//	   +'<div class="row calRowBorder" id="rw4" hidden>'
//	   +'<div class="col-sm-5">'
//	   +'<label class="labelstyle ">Convert M<sub>uy</sub> (N mm) : </label>'
//	   +'</div>'
//	   +'<div class="col-sm-4">'
//	   +'<input type="number" id="convertMuy"   class=" form-control "  >'
//	   +'</div>'	    
//	   +'<div class="col-sm-3" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subConvertMuy" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
//	   +'</div>'
//	   +'</div>'
	   
	   
	   +'<div class="row calRowBorder" id="rw3" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate d<sub>x</sub> (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="dxValue"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="dxValueSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="rw4" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Calculate d<sub>y</sub> (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="dyValue"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="dyValueSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'
	   +'</div>'
	   
	   
	   
	   +'<div class="row calRowBorder" id="rw5" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Effective Depth d (mm)  : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="effectiveD"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="SubeffectiveD" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'
	   +'</div>'
	   
	   
	   +'<div class="row calRowBorder" id="rw6" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Total Depth (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="totalDepth"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="totalDepthSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'
	   +'</div>'
	   
	  
	   +'<div class="row" id="rw7" hidden>'
	   +'<div class="col-sm-12">'
	   +'<button type="button" style="padding: 10px;"  class="btn btn-danger btnStyle" id="nextLevelPg3"  data-toggle="modal" data-target="#myModal"  disabled ><b>NEXT LEVEL</b></button>'
	   +'</div>'
	   +'</div>'
	 
	   $("#page3Div2").html(selection3); 
	    
	    
	    //calculate mux and convert it 
	    var mmTOmConvert = Math.pow(10,-3);
	    var Dconverted=dValuepg3*mmTOmConvert;
	    var cal1Mux=LfANSS-Dconverted;
	     console.log("cal1Mux="+cal1Mux);
	    var cal2Mux=cal1Mux/2;
	    //var cal1=cal2Mux.toFixed(2);
	    var cal3Mux=cal2Mux*cal2Mux;
	    var cal4=wuVal2*BfANSS*cal3Mux;
	   // var cal4Mux=cal4.toFixed(2);
	    	console.log("cal4Mux = "+cal4);
	   var MuxVal111=cal4/2;	
//	    var MuxCal1=cal4/2;
//	      console.log("MuxCal1 final MUX = "+MuxCal1+" kN m");
	     MuxVal=MuxVal111.toFixed(2);
//	    MuxVal=parseFloat(MuxVal111);
	    console.log("MuxVAl = "+MuxVal);
	    
	    var TenPower6=Math.pow(10,6);
	    convertMux_corr=MuxVal*TenPower6;
//	    var  cal5=MuxVal*TenPower6;
//	    var convertMux_corr111=cal5.toFixed(2);
//	    convertMux_corr=parseFloat(convertMux_corr111);
	     console.log("convertMux_corr final  = "+convertMux_corr+" N mm");
	     
	    var id=0;
	   	
	   	
	  footingAnim2(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val,totalDepthvalue);
	   
	   
	   var Mux_IO;
	 	$("#subMux").click(function(){	
	 	$("body").css("padding","0px 0px 0px 0px");
		Mux_IO =$("#muxValue").val();	
		if(Mux_IO==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (Mux_IO == MuxVal) {
					//addToMasterJSON();
					$("#rw2").prop("hidden",false);
					//$("#convertMux").prop("disabled",false);
					//$("#subConvertMux").prop("disabled",false);	
					$("#muyValue").prop("disabled",false);
					$("#subMuy").prop("disabled",false);		
					$("#muxValue").prop("disabled",true);
					$("#subMux").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else if (Mux_IO != MuxVal) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id == 3){
				$("#ModelTitle1").html("Formula");
				MuxFormulaImg= '<img src="images/MuxFormula.png"   class="img-responsive" alt="Cinque Terre" width="50%" height="40%" >'
				//modelImg = '<img src="images/typesOfSupports.png" class="img-responsive" alt="Cinque Terre"  alt=" " width="150" height="50">'
				$("#modelMsg").html(MuxFormulaImg);
			} else {
				$("#ModelTitle1").html("Message box");	
				Mux_IO =parseFloat($("#muxValue").val());
//				flow = flowAns.toFixed(2);
				if (Mux_IO == MuxVal) {	
						
					//addToMasterJSON();		
					$("#rw2").prop("hidden",false);
					//$("#convertMux").prop("disabled",false);
					//$("#subConvertMux").prop("disabled",false);	
					$("#muyValue").prop("disabled",false);
					$("#subMuy").prop("disabled",false);		
					$("#muxValue").prop("disabled",true);
					$("#subMux").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else {
						
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +MuxVal+'</b>');
				}
			}
			id++;
		}

	 
	});
	  
	  
//	  var MuxConvertIO;
//	$("#subConvertMux").click(function(){	
//	 	$("body").css("padding","0px 0px 0px 0px");
//		MuxConvertIO =$("#convertMux").val();	
//		if(MuxConvertIO==""){
//			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
//		}else{
//			if (id <= 2) {
//				if (MuxConvertIO == convertMux_corr) {
//					//addToMasterJSON();
//					$("#rw3").prop("hidden",false);
//					$("#muyValue").prop("disabled",false);
//					$("#subMuy").prop("disabled",false);			
//					$("#convertMux").prop("disabled",true);
//					$("#subConvertMux").prop("disabled",true);
//					id=0;
//					toastr.success("Correct Answer");
//				} else if (MuxConvertIO != convertMux_corr) {
//					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
//				}
//			} else if (id == 3){
//				
//				$("#modelMsg").html("<b class='boldTextBlue'>Formula : M<sub>ux</sub> &times; 10<sup>6</sup>  </b> ");
//			} else {
//				MuxConvertIO =parseFloat($("#convertMux").val());
////				flow = flowAns.toFixed(2);
//				if (MuxConvertIO == convertMux_corr) {			
//					//addToMasterJSON();		
//					$("#rw3").prop("hidden",false);
//					$("#muyValue").prop("disabled",false);
//					$("#subMuy").prop("disabled",false);			
//					$("#convertMux").prop("disabled",true);
//					$("#subConvertMux").prop("disabled",true);
//					id=0;
//					toastr.success("Correct Answer");
//				} else {
//					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +convertMux_corr+'</b>');
//				}
//			}
//			id++;
//		}	 
//	});  
	  
	 // calculate Muy and convert it  	
	//var mmTOmConvert = Math.pow(10,-3);
	    var b_converted=bValpg3*mmTOmConvert;
	 var cal1Muy=BfANSS-b_converted;
	     console.log("cal1Muy="+cal1Muy);
	    var cal2Muy=cal1Muy/2;
	    //var muyCAL1=cal2Muy.toFixed(2);
	    var cal3Muy=cal2Muy*cal2Muy;
	    
	    var cal4Muy=wuVal2*LfANSS*cal3Muy;
	    //var cal5Muy=cal4Muy.toFixed(2);
	    	console.log("cal4Muy = "+cal4Muy);
	    var MuyCalAns11=cal4Muy/2;
	   // var MuyCalAns=cal4Muy/2;
	      console.log("MuyVal = "+MuyVal+" kN m");
	MuyVal=MuyCalAns11.toFixed(2);
	   // MuyVal=parseFloat(MuyCalAns11);
	    
	    convertMuy_corr=MuyVal*TenPower6;
//	    var  calMuy5=MuyVal*TenPower6;
//	    var convertMuy_corr11=calMuy5.toFixed(2);
//	    convertMuy_corr=parseFloat(convertMuy_corr11);
	     console.log("convertMuy_corr = "+convertMuy_corr+" N mm");
	     
		var MuyIO;
		$("#subMuy").click(function(){	
		 	$("body").css("padding","0px 0px 0px 0px");
			MuyIO =$("#muyValue").val();	
			if(MuyIO==""){
				$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id <= 2) {
					if (MuyIO == MuyVal) {
						//addToMasterJSON();
						$("#rw3").prop("hidden",false);
//						$("#convertMuy").prop("disabled",false);
//						$("#subConvertMuy").prop("disabled",false);	
						$("#dxValue").prop("disabled",false);
						$("#dxValueSub").prop("disabled",false);
						$("#muyValue").prop("disabled",true);
						$("#subMuy").prop("disabled",true);			
						id=0;
						toastr.success("Correct Answer");
					} else if (MuyIO != MuyVal) {
						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
					}
				} else if (id == 3){
					$("#ModelTitle1").html("Formula");
					var  MuyFormulaImg= '<img src="images/MuyFormula.png"class="img-responsive" alt="Cinque Terre" width="50%" height="40%" >'
					//modelImg = '<img src="images/typesOfSupports.png" class="img-responsive" alt="Cinque Terre"  alt=" " width="150" height="50">'
					$("#modelMsg").html(MuyFormulaImg);
				} else {
					$("#ModelTitle1").html("Message box");	
					MuyIO =parseFloat($("#muyValue").val());
	//				flow = flowAns.toFixed(2);
					if (MuyIO == MuyVal) {			
						//addToMasterJSON();		
						$("#rw3").prop("hidden",false);
//						$("#convertMuy").prop("disabled",false);
//						$("#subConvertMuy").prop("disabled",false);	
						$("#dxValue").prop("disabled",false);
						$("#dxValueSub").prop("disabled",false);
						$("#muyValue").prop("disabled",true);
						$("#subMuy").prop("disabled",true);	
						id=0;
						toastr.success("Correct Answer");
					} else {
						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +MuyVal+'</b>');
					}
				}
				id++;
			}	 
		});  
		
//		var convertMuyIO;
//			$("#subConvertMuy").click(function(){	
//		 	$("body").css("padding","0px 0px 0px 0px");
//			convertMuyIO =$("#convertMuy").val();	
//			if(convertMuyIO==""){
//				$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
//			}else{
//				if (id <= 2) {
//					if (convertMuyIO == convertMuy_corr) {
//						//addToMasterJSON();
//						$("#rw5").prop("hidden",false);
//						$("#dxValue").prop("disabled",false);
//						$("#dxValueSub").prop("disabled",false);	
//						$("#convertMuy").prop("disabled",true);
//						$("#subConvertMuy").prop("disabled",true);			
//						id=0;
//						toastr.success("Correct Answer");
//					} else if (convertMuyIO != convertMuy_corr) {
//						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
//					}
//				} else if (id == 3){
//					$("#modelMsg").html("<b class='boldTextBlue'>Formula : M<sub>uy</sub> &times; 10<sup>6</sup>  </b> ");
//				} else {
//					convertMuyIO =parseFloat($("#convertMuy").val());
//	//				flow = flowAns.toFixed(2);
//					if (convertMuyIO == convertMuy_corr) {			
//						//addToMasterJSON();		
//						$("#rw5").prop("hidden",false);
//						$("#dxValue").prop("disabled",false);
//						$("#dxValueSub").prop("disabled",false);	
//						$("#convertMuy").prop("disabled",true);
//						$("#subConvertMuy").prop("disabled",true);		
//						id=0;
//						toastr.success("Correct Answer");
//					} else {
//						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +convertMuy_corr+'</b>');
//					}
//				}
//				id++;
//			}	 
//		});  
		
		
		  
		//calculate dx
		
		var dxCal1=fyValForDxDyCal*fck*Bf;
		console.log("fy= "+fyValForDxDyCal+" * fck = "+fck+" *  Bf = "+Bf);
		var dxCal2=convertMux_corr/dxCal1;
		console.log("dxCal2= "+dxCal2);
	var dxCal4=Math.sqrt(dxCal2);
			dxCorr=dxCal4.toFixed(2);
//		dxCorr=parseFloat(dxCal4);
		console.log("dxCorr = "+dxCorr);
		 
		 
		 //calculate dy
		 var dyCal1=fyValForDxDyCal*fck*Lf;
		var dyCal2=convertMuy_corr/dyCal1;
	var dyCal4=Math.sqrt(dyCal2);
		dyCorr =dyCal4.toFixed(2);
//		dyCorr=parseFloat(dyCal4);
		console.log("dyCorr = "+dyCorr);
		
	
	
		//calculate Total depth		
		if(dxCorr>dyCorr){
			EffectiveDepth	=dxCorr;
			//console.log("dxCorr>dyCorr IF =  "+EffectiveDepth);
			
		}else{
			EffectiveDepth	=dyCorr;
			//console.log("dxCorr>dyCorr ELSE =  "+EffectiveDepth);
		}
		console.log("EffectiveDepth =  "+EffectiveDepth);
		
		//calculate total Depth
		var EffectiveD_Ans=parseFloat(EffectiveDepth);   
		var totD1=EffectiveD_Ans + effectiveCover;
		console.log("totD1 = "+totD1+" , EffectiveDepth = "+EffectiveDepth+" , effectiveCover = "+effectiveCover);
		var totD2=parseFloat(totD1);
		console.log("totD1 = "+totD1+"...");
		
		totalDepthvalue=totD2.toFixed(2);
		console.log("EffectiveDepth = "+totalDepthvalue );
		
		
		 	
	   
		var dxIO;
		$("#dxValueSub").click(function(){	
		 	$("body").css("padding","0px 0px 0px 0px");
			dxIO =$("#dxValue").val();	
			if(dxIO==""){
				$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id <= 2) {
					if (dxIO == dxCorr) {
						//addToMasterJSON();
						$("#rw4").prop("hidden",false);
						$("#dyValue").prop("disabled",false);
						$("#dyValueSub").prop("disabled",false);	  
						$("#dxValue").prop("disabled",true);
						$("#dxValueSub").prop("disabled",true);			
						id=0;
						toastr.success("Correct Answer");
					} else if (dxIO != dxCorr) {
						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
					}
				} else if (id == 3){
					$("#ModelTitle1").html("Formula");
					var  dxFormulaImg= '<img src="images/dxFormula.png" class="img-responsive" alt="Cinque Terre" width="45%" height="40%" ><br><p>Here, R<sub>u</sub> = '+fyValForDxDyCal+'</p>'
					//modelImg = '<img src="images/typesOfSupports.png" class="img-responsive" alt="Cinque Terre"  alt=" " width="150" height="50">'
					$("#modelMsg").html(dxFormulaImg);
					
				} else {
					$("#ModelTitle1").html("Message box");
					dxIO =parseFloat($("#dxValue").val());
	//				flow = flowAns.toFixed(2);
					if (dxIO == dxCorr) {			
						//addToMasterJSON();		
						$("#rw4").prop("hidden",false);
						$("#dyValue").prop("disabled",false);
						$("#dyValueSub").prop("disabled",false);	  
						$("#dxValue").prop("disabled",true);
						$("#dxValueSub").prop("disabled",true);			
						id=0;
						toastr.success("Correct Answer");
					} else {
						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +dxCorr+'</b>');
					}
				}
				id++;
			}	 
		}); 
 

 		$("#dyValueSub").click(function(){	
		 	$("body").css("padding","0px 0px 0px 0px");
			dyIO =$("#dyValue").val();	
			if(dyIO==""){
				$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id <= 2) {
					if (dyIO == dyCorr) {
						//addToMasterJSON();
						$("#rw5").prop("hidden",false);
						$("#effectiveD").prop("disabled",false);
						$("#SubeffectiveD").prop("disabled",false);
						  
						$("#dyValue").prop("disabled",true);
						$("#dyValueSub").prop("disabled",true);			
						id=0;
						toastr.success("Correct Answer");
					} else if (dyIO != dyCorr) {
						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
					}
				} else if (id == 3){
					$("#ModelTitle1").html("Formula");
						var  dyFormulaImg= '<img src="images/dyFormula.png" class="img-responsive" alt="Cinque Terre" width="45%" height="40%" ><br><p>Here, R<sub>u</sub> = '+fyValForDxDyCal+'</p>'
					//modelImg = '<img src="images/typesOfSupports.png" class="img-responsive" alt="Cinque Terre"  alt=" " width="150" height="50">'
					$("#modelMsg").html(dyFormulaImg);
					
				} else {
					$("#ModelTitle1").html("Message box");
					dyIO =parseFloat($("#dyValue").val());
	//				flow = flowAns.toFixed(2);
					if (dyIO == dyCorr) {			
						//addToMasterJSON();		
						$("#rw5").prop("hidden",false);
						$("#effectiveD").prop("disabled",false);
						$("#SubeffectiveD").prop("disabled",false);
						  
						$("#dyValue").prop("disabled",true);
						$("#dyValueSub").prop("disabled",true);			
						id=0;
						toastr.success("Correct Answer");
					} else {
						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +dyCorr+'</b>');
					}
				}
				id++;
			}	 
		}); 
		
		
		
	
	
		var eDepthIO;
			$("#SubeffectiveD").click(function(){	
		 	$("body").css("padding","0px 0px 0px 0px");
			 eDepthIO =$("#effectiveD").val();	
			if(eDepthIO==""){
				$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id <= 2) {
					if (eDepthIO == EffectiveDepth) {
						//addToMasterJSON();
						$("#rw6").prop("hidden",false);
						$("#totalDepth").prop("disabled",false);
						$("#totalDepthSub").prop("disabled",false);  
						$("#effectiveD").prop("disabled",true);
						$("#SubeffectiveD").prop("disabled",true);			
						id=0;
						effectiveDepth(EffectiveDepth);
						toastr.success("Correct Answer");
					} else if (eDepthIO != EffectiveDepth) {
						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
					}
				} else if (id == 3){
					
						$("#modelMsg").html("<b class='boldTextBlue'>Note : The Effective Depth is The Maximum Value of dx or dy </b> ");
					
				} else {
			
					eDepthIO =parseFloat($("#effectiveD").val());
	
					if (eDepthIO == EffectiveDepth) {			
						//addToMasterJSON();		
						$("#rw6").prop("hidden",false);
						$("#totalDepth").prop("disabled",false);
						$("#totalDepthSub").prop("disabled",false);  
						$("#effectiveD").prop("disabled",true);
						$("#SubeffectiveD").prop("disabled",true);			
						id=0;
						effectiveDepth(EffectiveDepth);
						toastr.success("Correct Answer");
					} else {
						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +EffectiveDepth+'</b>');
					}
				}
				id++;
			}	 
		});
		
	 	   var totDepthIO;    	
			$("#totalDepthSub").click(function(){	
		 	$("body").css("padding","0px 0px 0px 0px");
			 totDepthIO =$("#totalDepth").val();	
			if(totDepthIO==""){
				$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id <= 2) {
					if (totDepthIO == totalDepthvalue) {
						//addToMasterJSON();
						$("#rw7").prop("hidden",false);
						$("#nextLevelPg3").prop("disabled",false);	  
						$("#totalDepth").prop("disabled",true);
						$("#totalDepthSub").prop("disabled",true);			
						id=0;
						totaldepth(totalDepthvalue);
						toastr.success("Correct Answer");
						
					} else if (totDepthIO != totalDepthvalue) {
						$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");					
					}
				} else if (id == 3){
					
						$("#modelMsg").html("<b class='boldTextBlue'> Formula : Total Depth = Effective Depth + Effective Cover</b> ");
					
				} else {
			
					totDepthIO =parseFloat($("#totalDepth").val());
	
					if (totDepthIO == totalDepthvalue) {			
						//addToMasterJSON();		
						$("#rw7").prop("hidden",false);
						$("#nextLevelPg3").prop("disabled",false);	  
						$("#totalDepth").prop("disabled",true);
						$("#totalDepthSub").prop("disabled",true);			
						id=0;
						totaldepth(totalDepthvalue);
						toastr.success("Correct Answer");
						
					} else {
						$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +totalDepthvalue+'</b>');
					}
				}
				id++;
			}	 
		});
		
			
		
		
		$("#nextLevelPg3").click(function(){
			$("body").css("padding","0px 0px 0px 0px");	
			$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>")
			//$("#main-div-conf").html('');
			//$("#centerText2").html('');
			
				//$("#checkConfigPg2").prop("disabled",true);
			//Page3Configurations(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_value2,LfValue,BfValue,wuCorr);
			;	
	});
		
	    
	}


	