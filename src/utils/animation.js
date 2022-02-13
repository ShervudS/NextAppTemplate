module.exports = {
    moveImage: (e) => {
        const minWindowWidth = 768;
        const x = 50;
        const image = document.querySelector('.main__left-hand');
        if (window.innerWidth > minWindowWidth) {
            if (e.type === 'mouseenter') {
                leftHand.style.transform = `translateX(${x}px) translateY(0px)`;
                rightHand.style.transform = `translateX(-${x}px) translateY(0px)`;
            } else {
                leftHand.style.transform = ``;
                rightHand.style.transform = ``;
            }
        }
    },
};
