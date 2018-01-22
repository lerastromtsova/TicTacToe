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
	for (i=0;i<dim1;i++) {                             // Замена оставшихся кнопок на противоположные по символу
        for (j=0;j<dim2;j++) {                         // Не уверен, что стоит оставлять это внутри функции move
            btn = document.getElementById("cell"+i+j); // Как, впрочем, и не уверен, что это вообще работает
            if (btn.innerHTML == "X"){
                btn.innerHTML = "0";
            } else {
                btn.innerHTML = "X";
            }
        }
    }
}

function checkRows (symb) { // Проверка выигрыша по рядам (аргументом передаём символ последнего ходившего игрока)
    victory = true;
    for (i=0; i<dim1; i++) {
        for (j=0; j<dim2; j++) {
            for (k=0; k<5; k++) {
                try {
                    h1 = document.getElementById("cell"+i+(j+k));
                    victory = victory && (h1.innerHTML == symb);
                }   catch(e) {}
            }
            if (rows) {
                return true:
            }   else {
                return false:
            }
        }
    }
}

function checkColumns (symb) { // Проверка выигрыша по столбцам
    victory = true;
    for (j=0; j<dim2; j++) {
        for (i=0; i<dim1; i++) {
            for (k=0; k<5; k++) {
                try {
                    h1 = document.getElementById("cell"+(i+k)+j);
                    victory = victory && (h1.innerHTML == symb);
                }   catch(e) {}
            }
            if (rows) {
                return true:
            }   else {
                return false:
            }
        }
    }
}

function checkLDiagonal (symb) { // Проверка выигрыша по диагонали (сверху слева -> вниз направо)
    victory = true;
    for (i=0; i<dim1; i++) {
        for (j=0; j<dim2; j++) {
            for (k=0; k<5; k++) {
                try {
                    h1 = document.getElementById("cell"+(i+k)+(j+k));
                    victory = victory && (h1.innerHTML == symb);
                }   catch(e) {}
            }
            if (rows) {
                return true:
            }   else {
                return false:
            }
        }
    }
}

function checkRDiagonal (symb) { // Проверка выигрыша по диагонали (сверху справа -> вниз налево)
    victory = true;
    for (i=0; i<dim1; i++) {
        for (j=dim2; j>0; j--) {
            for (k=0; k<5; k++) {
                try {
                    h1 = document.getElementById("cell"+(i+k)+(j-k));
                    victory = victory && (h1.innerHTML == symb);
                }   catch(e) {}
            }
            if (rows) {
                return true:
            }   else {
                return false:
            }
        }
    }
}
