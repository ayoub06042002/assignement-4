var names= new Array()
names[0]="ayoub";
names[1]="john";
names[2]="july";
names[3]="ilyass";
names[4]="achraf";
names[5]="jiji";
names[6]="Jojo";
names[7]="yakoov";
;
for (var i = 0; i <names.length; i++) {
	if (names[i].charAt(0)==="j"||names[i].charAt(0)==="J") 
	{
    console.log("goodbye "+ names[i]);
	}
	else{
		 console.log("hello "+ names[i]);
	}
}