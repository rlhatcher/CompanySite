//	HYPE.documents["SignasolMainSite"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "SignasolMainSite.resources";
	var documentName = "SignasolMainSite";
	var documentLoaderFilename = "signasolmainsite_hype_generated_script.js";
	var mainContainerID = "signasolmainsite_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_150 == "undefined") {
		if(typeof window.HYPE_150_DocumentsToLoad == "undefined") {
			window.HYPE_150_DocumentsToLoad = new Array();
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=150';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_150();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",aJ:"i",m:"c",bI:"f",T:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"SigLog.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{aV:8,w:"Architecture",x:"visible",a:272,Z:"break-word",b:246,j:"absolute",r:"inline",y:"preserve",k:"div",z:"6",aT:8,aS:8,t:16,e:"0.000000",G:"#000000",aU:8},"4":{aV:8,w:"Technology",x:"visible",a:164,Z:"break-word",b:246,j:"absolute",r:"inline",y:"preserve",k:"div",z:"7",aT:8,aS:8,t:16,e:"0.000000",G:"#000000",aU:8},"AB115F73-6CE6-4996-B927-A8CF43BC18F0-2882-000017EEFC03B4C6":{aU:8,G:"#611427",c:312,d:77,r:"inline",aV:8,e:"0.000000",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:64,Z:"break-word",v:"normal",i:"AB115F73-6CE6-4996-B927-A8CF43BC18F0-2882-000017EEFC03B4C6",w:"Signature",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:195,b:81},"5":{aV:8,w:"Integrated",x:"visible",a:381,Z:"break-word",b:246,j:"absolute",r:"inline",y:"preserve",k:"div",z:"8",aT:8,aS:8,t:16,e:"0.000000",G:"#000000",aU:8},"1":{o:"content-box",w:"",h:"0",x:"visible",a:474,q:"100% 100%",b:122,j:"absolute",r:"inline",c:162,k:"div",z:"5",d:162,e:"0.000000",u:"italic"},"5BE10845-68C6-44A5-9D4F-9D9F78562991-2882-0000182886D2679E":{aV:8,w:"<font class=\"Apple-style-span\" color=\"#252F33\">interactive</font>",x:"visible",i:"5BE10845-68C6-44A5-9D4F-9D9F78562991-2882-0000182886D2679E",a:224,b:143,j:"absolute",r:"inline",Z:"break-word",k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",aT:8,y:"preserve",t:64,e:"0.000000",z:"3",aU:8,G:"#000000",aS:8},"6":{aU:8,G:"#611427",c:312,d:77,r:"inline",aV:8,e:"0.000000",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:64,Z:"break-word",v:"normal",w:"SignaSol",j:"absolute",x:"visible",k:"div",y:"preserve",z:"9",aS:8,aT:8,a:164,b:156},"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61":{aU:8,G:"#000000",c:298,d:77,r:"inline",aV:8,e:"0.000000",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:64,Z:"break-word",i:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61",w:"<font class=\"Apple-style-span\" color=\"#7D0B33\">Solutions</font>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"1",aS:8,aT:8,a:209,b:209}},n:"Introduction",T:{kTimelineDefaultIdentifier:{d:5.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:2.01,i:"a",e:328,r:1,s:209,o:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61"},{f:"2",t:0,d:2,i:"b",e:206,r:1,s:209,o:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61"},{f:"2",t:0,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61"},{f:"2",t:0,d:2,i:"a",e:265,r:1,s:224,o:"5BE10845-68C6-44A5-9D4F-9D9F78562991-2882-0000182886D2679E"},{f:"2",t:0,d:3,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5BE10845-68C6-44A5-9D4F-9D9F78562991-2882-0000182886D2679E"},{f:"2",t:0,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"AB115F73-6CE6-4996-B927-A8CF43BC18F0-2882-000017EEFC03B4C6"},{f:"2",t:0,d:4,i:"a",e:164,r:1,s:195,o:"AB115F73-6CE6-4996-B927-A8CF43BC18F0-2882-000017EEFC03B4C6"},{f:"2",t:2,d:3,i:"e",e:"0.000000",s:"1.000000",o:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61"},{f:"2",t:2,d:2,i:"b",e:156,s:206,o:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61"},{f:"2",t:2,d:3,i:"e",e:"0.000000",s:"1.000000",o:"AB115F73-6CE6-4996-B927-A8CF43BC18F0-2882-000017EEFC03B4C6"},{f:"2",t:2,d:2,i:"b",e:156,r:1,s:81,o:"AB115F73-6CE6-4996-B927-A8CF43BC18F0-2882-000017EEFC03B4C6"},{f:"2",t:2.01,d:1.29,i:"a",e:351,s:328,o:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61"},{f:"2",t:3,d:1,i:"e",e:"0.000000",s:"1.000000",o:"5BE10845-68C6-44A5-9D4F-9D9F78562991-2882-0000182886D2679E"},{f:"2",t:4,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"6"},{f:"2",t:4,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"1"},{f:"2",t:4,d:1,i:"a",e:349,s:351,o:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61"},{f:"2",t:4,d:0.1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:4.1,d:0.1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"3"},{f:"2",t:4.2,d:0.1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:5,d:0.01,i:"a",e:331,s:349,o:"E14CF661-3AA2-43EE-A1E2-4D237285C337-2882-00001837A8529F61"}],f:30}},o:"C2B514F7-43B7-4E1D-9F80-8C5797477906-2882-000017BE1BA99207"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

