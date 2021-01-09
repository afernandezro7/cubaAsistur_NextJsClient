
export const scrollToItem = ( itemClass = '.map--ItemInfo' ) => {
   
    let element = document.querySelector(itemClass);
    let elementPosition = element.getBoundingClientRect().top;
    let pantalla = screen.width;
    let headerOffset = (pantalla < 992) ? headerOffset = 80 : headerOffset = 150;
    let offsetPosition = elementPosition - headerOffset;  
    window.scrollBy({
        top: offsetPosition,
        left: 0,
        behavior: 'smooth'
    });
}
