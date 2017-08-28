$(document).ready(function(){
	var keli = "Zhao Feng";
	
	var isim_listesi = ["Qin","Zhao"];
	
	isim_listesi.forEach(function(isim,i){
		
		alert(isim + " " + i + " bitti");
		var ss = dene(isim,i);
		alert(ss);
	})
	
	function dene(isi,sai){
		$("#icerik > div").each(function(i){
			if(sai === 0){
				var t = $(this).text(),
				ara = t.indexOf(isi);
				if(ara != -1){
					var qe = $(this).html(e_k(t,isi));
					var ge = qe.text();
					return ge;
				}
			}
			if(sai === 1){
				alert(qe.html())
			}
			
	            
		});
	}
	/*
	$("#icerik > div").each(function(i){
		var t = $(this).text(),
			ara = t.indexOf(keli);
			if(ara != -1){
				
				$(this).html(e_k(t,keli))
			}
            
	});
	*/
	function e_k(kelime,isim) {
        var t = kelime
          , k = isim
          , bas =t.substring(0,t.indexOf(k))
          , orta =t.substring(t.indexOf(k),t.indexOf(k) + k.length)
          , o = t.substring(t.indexOf(k) + k.length, t.length)
          , i = bas + "<span class='farkli'>" + orta + "</span>" + o;
        //alert(t.indexOf(k));
        return i;
        
    }
})
