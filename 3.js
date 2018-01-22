function createField(player) {
    dim1 = document.getElementById("dim1").value;
	dim2 = document.getElementById("dim2").value;
	field = []

	for (i=0;i<dim1;i++) {
		field[i] = []
		for (j=0;j<dim2;j++) {
            field[i][j] = null;
		}
	}
	if (field) {
		drawField(field);
	}
}

function drawField(field) {
	body = document.getElementsByTagName('body')[0];
	table = document.createElement("table");

	for (i=0;i<field.length;i++) {
		tr = document.createElement('tr');
		tr.setAttribute('id','tr'+i);

		for (j=0;j<field[0].length;j++) {
			td = document.createElement('td');
			td.setAttribute('id','cell'+i+j);
			td.setAttribute('onclick','Move(i,j)');
			td.innerHTML = '-';
            tr.appendChild(td);
		}
		table.appendChild(tr);
	}
    body.appendChild(table);
}

function startGame(player) {
	

	row = document.getElementsByClassName('row')[0];
	bigdiv = document.createElement("div");
	bigdiv.setAttribute("class","col-md-12");
	bigdiv.setAttribute("style","margin-top:1%")
	table = document.createElement('table');
	bigdiv.appendChild(table);
	row.appendChild(bigdiv);

	
	for (i=0;i<dim1;i++) {
        
        
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
		
	}
	row.removeChild(document.getElementById("init"));
}

function Move(i,j,plr) {
	group = document.getElementById("g"+i);
	b = document.getElementById("cell"+i+j);
		h1 = document.createElement("h3");
	    h1.innerHTML = plr;
	    parent = b.parentNode;
	    parent.replaceChild(h1,b);
		for (var k=0;k<dim1;k++) {                             // Замена оставшихся кнопок на противоположные по символу
	        for (var z=0;z<dim2;z++) {  
	            try {                       // Не уверен, что стоит оставлять это внутри функции move
	                btn = document.getElementById("cell"+k+z); // Как, впрочем, и не уверен, что это вообще работает
	                if (btn.innerHTML == "X"){
	                    btn.innerHTML = "0";
	                } else {
	                    btn.innerHTML = "X";
	                }
	            }
	            catch(e) {}
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
                return true;
            }   else {
                return false;
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
                return true;
            }   else {
                return false;
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
                return true;
            }   else {
                return false;
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
                return true;
            }   else {
                return false;
            }
        }
    }
}
