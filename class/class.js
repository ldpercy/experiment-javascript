console.clear();
log = createPageLog(document.getElementById('pageLog'));
log('---- class: run');

document.addEventListener('DOMContentLoaded', documentDOMContentLoaded);

function documentDOMContentLoaded() {
	log('---- document DOMContentLoaded');
}