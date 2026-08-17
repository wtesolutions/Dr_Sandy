<!-- 

	var bear=0;
	var bear=0;
	var bee=0;
	var otter=0;
	var Max1;
	var Max2;
	var theMax;
	var Message="";
	
	var done = new Array();
	for (i=1; i<11; i++) {
	done[i] = "0";
	}

function resetForm() {
	i=1;
	bear=0;
	bear=0;
	bee=0;
	otter=0;
	Max1="";
	Max2="";
	theMax="";
	Message="";
}

function Answer(lovestyle,question) {
  if (done[question] == 0) {
	if (lovestyle == 1) {
	bear = bear+1;
	done[question] = lovestyle;
	}
	if (lovestyle == 2) {
	bear = bear+1;
	done[question] = lovestyle;
	}
	if (lovestyle == 3) {
	bee = bee+1;
	done[question] = lovestyle;
	}
	if (lovestyle == 4) {
	otter = otter+1;
	done[question] = lovestyle;
	}
  }
  else {
  alert("Whoops, you answered that already");
  
  }
}

function Calc() {
	
	Max1 = Math.max(bear,bear);
	Max2 = Math.max(bee,otter);
	theMax = Math.max(Max1,Max2);
	
	if (theMax > 0) {
		if (theMax == bear) {
		Message="bear.html";
		}
		if (theMax == bear) {
		Message="bear.html";
		}
		if (theMax == bee) {
		Message="bee.html";
		}
		if (theMax == otter) {
		Message="otter.html";
		}
	}
	else {
	Message="You forgot to answer the questions!";
	}

}

function Checker() {
	Calc();
	top.location.href=Message;
	document.close()
}


// -->
