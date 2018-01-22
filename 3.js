var player;

function createField() {
    dim1 = document.getElementById("dim1").value;
	dim2 = document.getElementById("dim2").value;
	field = []


	for (i=0;i<dim1;i++) {
		field[i] = []
		for (j=0;j<dim2;j++) {
            field[i][j] = null;
		}
	}
	document.body.removeChild(document.getElementById('init'));
	return field;
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
			td.setAttribute('onclick','Move(field,'+i+','+j+')');
			if (field[i][j]) {
				td.innerHTML = field[i][j];
			}
			else td.innerHTML = '-';
            tr.appendChild(td);
		}
		table.appendChild(tr);
	}
    body.appendChild(table);
}

function drawMove(field,i,j) {
	cell = document.getElementById("cell"+i+j);
	cell.innerHTML = field[i][j];
    
}


function Move(field,i,j) {
	if (field[i][j] == null) {
		field[i][j] = player;

		drawMove(field,i,j);

	    if (checkVictory(field)) {
	    	alert(player+" wins!");
	    }
	    
	    if (player=='0') {
	    	player = 'X';
	    }
	    else player = '0';
	}
}


function checkRows () { // Проверка выигрыша по рядам (аргументом передаём символ последнего ходившего игрока)
    victory = true;
    for (i=0; i<dim1; i++) {
        for (j=0; j<dim2; j++) {
            for (k=0; k<5; k++) {
                try {
                    cell = field[i][j+k];
                    victory = victory && (cell == player);
                }   catch(e) {}
            }
            if (victory) {
                return player;
            }   else {
                return false;
            }
        }
    }
}

function checkColumns () { // Проверка выигрыша по столбцам
    victory = true;
    for (j=0; j<dim2; j++) {
        for (i=0; i<dim1; i++) {
            for (k=0; k<5; k++) {
                try {
                    cell = field[i+k][j];
                    victory = victory && (cell == player);
                }   catch(e) {}
            }
            if (victory) {
                return player;
            }   else {
                return false;
            }
        }
    }
}

function checkLDiagonal () { // Проверка выигрыша по диагонали (сверху слева -> вниз направо)
    victory = true;
    for (i=0; i<dim1; i++) {
        for (j=0; j<dim2; j++) {
            for (k=0; k<5; k++) {
                try {
                    cell = field[i+k][j+k];

                    victory = victory && (cell == player);
                }   catch(e) {}
            }
            if (victory) {
                return player;
            }   else {
                return false;
            }
        }
    }
}

function checkRDiagonal () { // Проверка выигрыша по диагонали (сверху справа -> вниз налево)
    victory = true;
    for (i=0; i<dim1; i++) {
        for (j=dim2; j>0; j--) {
            for (k=0; k<5; k++) {
                try {
                    cell = field[i+k][j-k];
                    console.log(cell)
                    victory = victory && (cell == player);
                }   catch(e) {}
            }
            if (victory) {
                return player;
            }   else {
                return false;
            }
        }
    }
}

function checkVictory(field) {
	win = (checkRows(player)) || (checkColumns(player)) || (checkRDiagonal(player)) || (checkLDiagonal(player))
	if (win) {
		return win;
	}
	else {
		return false;
	}
}

function Game(player_id) {
	player = player_id;
    field = createField();
    drawField(field);
}
