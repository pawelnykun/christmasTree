//deklaracja i inicjalizacja zmiennej przez uzytkownika
var wysokość = prompt('Podaj wysokość choinki:');
//funkcja rysujaca choinkę
function rysujChoinkę(wysokość) {
	for ( var rząd = 0; rząd < wysokość; rząd++ ) {
		var star = '';
		//petla rysująca spacje
		for ( var ile = 1; ile < wysokość - rząd; ile++ ) {
			star += ' ';
		}
		//pętla rysująca gwiazdki
		for ( var gwiazdek = 0; gwiazdek < ( 2 * rząd + 1 ); gwiazdek++ ) {
			star += '*';
		}
		console.log(star);
	}
}
//wywołanie funkcji
rysujChoinkę(wysokość);