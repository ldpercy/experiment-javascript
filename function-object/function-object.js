console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('function-object: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('document DOMContentLoaded');

	log('------------');

	log(foobar());
}





function foobar() {
	return 'This is foobar';
}


foobar.sub1 = function(x) {
	return `sub1 called with: ${x}`;
}

foobar.sub2 = (y)=>{return `sub2 called with: ${y}`;}






