alert('Selamat Datang di Game Suit Jawa');
//Mau Coba Lagi?
var cobaLagi = true
while(cobaLagi == true) {
	var skorP = 0;
		skorC = 0;

	alert('kamu akan bertanding dengan Komputer sebanyak 7 putaran')

	//Ulang 7x
	for(var ulang = 1; ulang <= 7; ulang++) {
		
		alert('Pertandingan ke ' + ulang);

		//Menangkap pilihan Player
		var player = prompt('Silahkan pilih.. SEMUT, ORANG, atau GAJAH');

		//Menangkap pilihan Computer
		var comp = Math.random();
		if(comp < 0.34) {
			comp = 'SEMUT';
		} else if (comp >= 0.34 && comp < 0.67) {
			comp = 'ORANG';
		} else {
			comp = 'GAJAH';
		}

		//Menentukan rules permainan
		var hasil = '';
		if(player == comp) {
			hasil = 'SERI';
		} else if(player == 'SEMUT') {
			hasil = (comp == 'GAJAH') ? 'MENANG' : 'KALAH';
		} else if(player == 'ORANG') {
			hasil = (comp == 'SEMUT') ? 'MENANG' : 'KALAH';
		} else if(player == 'GAJAH') {
			hasil = (comp == 'ORANG') ? 'MENANG' : 'KALAH';
		} else {
			hasil = 'Input salah';
		}

		//Menampilkan Hasil
		if(hasil == 'SERI') {
			alert('Kamu memilih ' + player + ' dan Komputer memilih ' + comp + '\nJadi hasilnya adalah ' + hasil);
		} else if(hasil == 'Input salah') {
			alert('Maaf Input yang Kamu masukkan salah, Silahkan periksa lagi (Semua huruf harus kapital)');
		} else {
			alert('Kamu memilih ' + player + ' dan Komputer memilih ' + comp + '\nJadi hasilnya adalah kamu ' + hasil);
		}

		//Menghitung Skor
		
		if(hasil == 'MENANG') {
			skorP = skorP + 1;
		} else if(hasil == 'KALAH') {
			skorC = skorC + 1;
		} else {
			
		}

		//Pemberitahuan pengulangan pertandingan
		if(hasil == 'Input salah') {
			alert('Pertandingan salah, pertandingan ke ' + ulang + ' akan diulang');
		} else {
			alert('Skor Kamu adalah ' + skorP + ' dan skor Komputer adalah ' + skorC);
		}

		//Rumus ulang pertandingan gagal
		if(hasil == 'Input salah') {
			ulang = ulang - 1;
		} else {
			ulang = ulang;
		}

	}

	//Hasil Akhir
	if(skorP > skorC) {
		alert('Hasil akhir adalah kamu MENANG, dengan torehan skor\n' + 'KAMU: ' + skorP + '\nKOMPUTER: ' + skorC);
	} else if(skorP < skorC) {
		alert('Hasil akhir adalah kamu KALAH, dengan torehan skor\n' + 'KAMU: ' + skorP + '\nKOMPUTER: ' + skorC);
	} else {
		alert('Hasil akhir adalah SERI, dengan torehan skor\n' + 'KAMU: ' + skorP + '\nKOMPUTER: ' + skorC);
	}	

cobaLagi = confirm('Mau Main Lagi?');
}

alert('Terimakasih telah mencoba Permainan ini :)');