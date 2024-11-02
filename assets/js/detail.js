import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: true,
	size: 'fullscreen',
	interval: 5000 // 設置為 5 秒

};

// document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	const lightbox = new Lightbox(el, options);
// 	lightbox.show();
// }));

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => {
	// Initialize Lightbox only if it hasn't been initialized yet
	if (!el.dataset.lightboxInitialized) {
		el.dataset.lightboxInitialized = true; // Mark as initialized
		el.addEventListener('click', (e) => {
			e.preventDefault();
			const lightbox = new Lightbox(el, options);
			lightbox.show();
	});
	}
});