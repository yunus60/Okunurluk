Herhangi bir yazının içerisinde belirlediğimiz kelimelerin ön plana çıkmasını sağlayan zımbırtı.

#Örnek Kullanım 
`var kelime = [
		["Da Gouzi", "#e99002"],
		["Chen Zhiguang", "#48c4c2"],
		["Yue Zhong", "#f10b7e"],
		["Yue", "#f10b7e"]
	];
	$("#icerik").each(function () {
		var t = $(this).html();
		var sset = sese(kelime,t);
		$(this).html(sset);
	});`
	
![adsiz](https://user-images.githubusercontent.com/22526767/29937414-1d781090-8e8e-11e7-8956-1e8244d18460.png)
