const arrayItems = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function switchCheckbox(item) {
    if (!this.checked) {
        lastChecked = null;
        return;
    }
    if (lastChecked) {
        let inBetween = false;
        if (item.shiftKey && this.checked) {
            arrayItems.forEach(checkbox => {
                if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                }
                if (inBetween) {
                checkbox.checked = true;
                }
            });
        }
    }
    lastChecked = this;
}




arrayItems.forEach( item => item.addEventListener('click',switchCheckbox));
console.log(arrayItems);