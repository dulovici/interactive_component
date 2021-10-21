
const slider = document.querySelector('.slide-bar-input');
const togle = document.querySelector('.apl-dis-wr');

const views = document.querySelector('.views p');
const dpm = document.querySelector('.dpm h1');
const progres = document.querySelector('.fill')

let discount = false;


// FUNCTIONS
function handleUpdate() {
    if(slider.value === '1') {
        views.textContent = `10K PAGEVIEWS`;
        dpm.textContent = !discount ? `$8.00` : `$6.00`;
        progres.style.width = '0%'
    }
    if(slider.value === '2') {
        views.textContent = `50K PAGEVIEWS`;
        dpm.textContent = !discount ? `$12.00` : `$9.00`;
        progres.style.width = '25%'
    }
    if(slider.value === '3') {
        views.textContent = `100K PAGEVIEWS`;
        dpm.textContent = !discount ? `$16.00` : `$12.00`;
        progres.style.width = '50%'
    }
    if(slider.value === '4') {
        views.textContent = `500K PAGEVIEWS`;
        dpm.textContent = !discount ? `$24.00` : `$18.00`;
        progres.style.width = '75%'
    }
    if(slider.value === '5') {
        views.textContent = `1M PAGEVIEWS`;
        dpm.textContent = !discount ? `$36.00` : `$27.00`;
        progres.style.width = '100%'
    }
}


function activeDiscount() {
    togle.classList.toggle('active');
    discount = !discount
    handleUpdate()
}

// LISTENERS
togle.addEventListener('click', activeDiscount);
slider.addEventListener('change', handleUpdate);
slider.addEventListener('mousemove', handleUpdate);



