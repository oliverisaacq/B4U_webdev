window.addEventListener('load', () => {
    const loaderArea = document.querySelector('.loader-area');
    const logoBlack = document.querySelector('.loader-logo-black');
    const container = document.querySelector('.loader-container');
    const body = document.querySelector('body');

    // Desactivar el scroll durante la carga
    body.classList.add('no-scroll');

    // Mostrar el logo durante 3 segundos y luego iniciar la animación de los divs negros
    setTimeout(() => {
        logoBlack.classList.add('reveal');
    }, 1000);

    // Ocultar el loader después de la animación del logo
    setTimeout(() => {
        container.classList.add('open');
        
        setTimeout(() => {
            container.querySelector('.loader-left').style.display = 'none';
            container.querySelector('.loader-right').style.display = 'none';
            loaderArea.style.display = 'none'; // Ocultar completamente el loader
            
            // Reactivar el scroll después de cargar la página
            body.classList.remove('no-scroll');
            body.classList.add('page-loaded'); // Activar la animación de la página principal
        }, 1000);
    }, 4000);
});
