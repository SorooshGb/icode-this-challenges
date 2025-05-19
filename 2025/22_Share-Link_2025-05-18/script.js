const copyBtn = document.querySelector('button');
const shareAddress = document.querySelector('.share-address').innerText;

let timeoutId;

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(shareAddress).then(() => {
        if (timeoutId) clearTimeout(timeoutId);
        
        copyBtn.classList.add('copied');
        copyBtn.querySelector('span').innerText = 'Copied!'

        timeoutId = setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.querySelector('span').innerText = 'Copy to clipboard'
        }, 1500)

    }).catch(err => {
        alert('Failed to copy text');
    });
});


document.querySelectorAll('a[href="#"]').forEach(el => el.addEventListener('click', e => e.preventDefault()))