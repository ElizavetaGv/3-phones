var xhr=new XMLHttpRequest();
xhr.addEventListener('readystatechange', onReady);
xhr.open('GET','http://js2018.kosheev.com/02-phones.json',true);
xhr.send();
document.getElementById('loader').setAttribute('style', 'display:block;');

function onReady() {
	if (xhr.readyState==4 && xhr.status==200) {
		var phones=JSON.parse(xhr.responseText);
				
		var phonesSorted=_.sortBy(phones, [getManufacturer]);
		var phonesSortedRating=_.sortBy(phones, [getMaxRating]);
		for (var i=0; i<phonesSorted.length; i++) {
			var el=document.createElement('div');
			el.innerText=phonesSorted[i].name+' '+phonesSorted[i].rating + '*';
			document.getElementById('list').appendChild(el);	
			
		}
		var max=document.createElement('div');
		max.innerText=phonesSortedRating[0].name+' '+phonesSortedRating[0].rating + '*';
		document.getElementById('max').appendChild(max);
		document.getElementById('loader').setAttribute('style', 'display:none;');
		
	}
}
		
function getManufacturer(phones) {
	return phones.name;
}

function getMaxRating(phones) {
	return -phones.rating;
}