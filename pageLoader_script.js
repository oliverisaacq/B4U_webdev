// Forzar el scroll al inicio de la página al recargar
window.history.scrollRestoration = 'manual'; // Evitar que el navegador mantenga la posición de scroll
window.scrollTo(0, 0); // Asegurarse de que la página empiece en la parte superior

window.addEventListener('load', () => {
    // Forzar el scroll a la parte superior y omitir cualquier ancla en la URL
    window.scrollTo(0, 0);  // Volver a la parte superior de la página
    const loaderArea = document.querySelector('.loader-area');
    const logoBlack = document.querySelector('.loader-logo-black');
    const container = document.querySelector('.loader-container');
    const body = document.querySelector('body');
    const mainContent = document.querySelector('.main-content'); 

    loaderArea.style.display = 'flex';

    // Desactivar el scroll durante la carga
    body.classList.add('no-scroll');

    // Ocultar el contenido principal inicialmente
    mainContent.style.opacity = '0';
    mainContent.style.transition = 'opacity 1.5s ease'; // Animación suave de entrada

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
            
            mainContent.style.opacity = '1';

            // Reactivar el scroll después de cargar la página
            body.classList.remove('no-scroll');
            body.classList.add('page-loaded'); // Activar la animación de la página principal            
        }, 1000);
    }, 4000);
});
