function toast({ title = '', message = '', type = 'info', duration = 1000 }) {
    const main = document.getElementById('toast');

    if (main)
    {
        const toast = document.createElement('div');
        const autoRemove = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function (e) {
            if (e.target.closest('.toast__close'))
            {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const icons = {
            success: '<i class="fas fa-check-circle"></i>',
            info: '<i class="fas fa-info-circle"></i>',
            warning: '<i class="fas fa-exclamation-circle"></i>'
        }
        const icon = icons[type];
        const delay = (duration / 1000);

        toast.classList.add('toast', `-${type}`);
        toast.style.animation = `slideInLeft 0.4s ease-in-out, fadeOut 1s ${delay}s linear forwards`;
        toast.innerHTML = `
        <div class="toast__icon">${icon}</div>
            <div class="toast__body">
                <h3 class="toast__body_title">${title}</h3>
                <p class="toast__body_message">
                    ${message}
                </p>
            </div>
        <div class="toast__close"><i class="fas fa-times"></i></div>`;

        main.appendChild(toast);
    }
}

//Button events
const btnSuccess = document.getElementById('btnSuccess');
const btnInfo = document.getElementById('btnInfo');
const btnWarning = document.getElementById('btnWarning');

btnSuccess.addEventListener('click', function () {
    toast({
        title: 'Success',
        message: 'Anyone with access can view your invited visitors.',
        type: 'success',
        duration: 5000
    });
});

btnWarning.addEventListener('click', function () {
    toast({
        title: 'Warning',
        message: 'Anyone with access can view your invited visitors.',
        type: 'warning',
        duration: 5000
    });
});

btnInfo.addEventListener('click', function () {
    toast({
        title: 'Info',
        message: 'Anyone with access can view your invited visitors.',
        type: 'info',
        duration: 5000
    });
});