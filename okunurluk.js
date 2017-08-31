$(document).ready(function(){
	function sese(k_list, t) {
		var icerik_cek = t;
		var sur = "";
		var renk_ka = "</span>";
		k_list.forEach(function (x, y) {
			var isi = x[0];
			var renk = x[1];
			var r_isi = new RegExp(isi, 'g');
			var renkli =
				"<span class='farkli' style='color:" + renk +
				";'>";
			if (y === 0) {
				sur = icerik_cek.replace(r_isi,
					renkli + isi + renk_ka);
			}
			else {
				sur = sur.replace(r_isi, renkli +
					isi + renk_ka);
			}
		});
		return sur;
	}
})
