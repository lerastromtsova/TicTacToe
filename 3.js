function startGame(player) {
	dim1 = document.getElementById("dim1").value;
	dim2 = document.getElementById("dim2").value;

	row = document.getElementsByClassName('row')[0];
	bigdiv = document.createElement("div");
	bigdiv.setAttribute("class","col-md-12");
	bigdiv.setAttribute("style","margin-top:1%")
	row.appendChild(bigdiv);

	for (i=0;i<dim1;i++) {
		div = document.createElement('div');
        div.setAttribute("class","btn-group btn-group-lg");
        div.setAttribute("role","group");
        div.setAttribute("id",i);
		for (j=0;j<dim2;j++) {
			btn = document.createElement("button");
			br = document.createElement("br");
			btn.setAttribute("class","btn btn-default");
			btn.setAttribute("id","cell"+i+j);
			
			btn.innerHTML = player;
			btn.setAttribute("onclick","Move(i,j,btn.innerHTML)");

			div.appendChild(btn);
			div.appendChild(br);


		}
		bigdiv.appendChild(div);
	}
	row.removeChild(document.getElementById("init"));
}

function Move(row,col,plr) {
	btn = document.getElementById("cell"+row+col);
	div = document.getElementById(row)[0];
	h1 = document.createElement("h1");
    h1.innerHTML = plr;
    div.replaceChild(btn,h1);
}