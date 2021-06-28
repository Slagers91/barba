import barba from '@barba/core';
import gsap from 'gsap';

const animationEnter = (container) => {
    return gsap.from(container, { autoAlpha: 0, duration: 2});
}

const animationLeave = (container) => {
    return gsap.to(container, { autoAlpha: 0, duration: 2});
}

barba.init({
    transitions: [
        {
            once(){
                animationEnter(next.container);
            }
        }
    ]
})