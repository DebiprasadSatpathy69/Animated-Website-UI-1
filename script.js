
function cursor(){
    
    const cursor = document.querySelector(".cursor")
const backCursor = document.querySelector(".back-cursor")

document.addEventListener('mousemove', function(dets){

    cursor.style.left = dets.x + 30 + 'px',
    cursor.style.top = dets.y + 'px',

    backCursor.style.left = dets.x - 250 + 'px',
    backCursor.style.top = dets.y - 250 + 'px'
})

}

cursor()


function CursorAnimation(){
    const h4all = document.querySelectorAll('#nav h4')

h4all.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        cursor.style.scale = 3
        cursor.style.border = '1px solid #fff'
        cursor.style.backgroundColor = 'transparent'
        cursor.style.transition = 'all ease 0.2s'
    })


    elem.addEventListener('mouseleave', function(){
        cursor.style.scale = 1
        cursor.style.border = '0px solid #95c11e'
        cursor.style.backgroundColor = '#95c11e'
        cursor.style.transition = 'none'
    })
    
})
}

CursorAnimation()


function navAnimation(){
    gsap.to('#nav', {
        backgroundColor: 'black',
        height: '120px',
        duration: 0.5,
    
        scrollTrigger:{
            trigger: '#nav',
            scroller: 'body',
            // markers: true,
            start: 'top -5%',
            end: 'top -10%',
            scrub: 1
        }
    })
}

navAnimation()


function page2Back(){
    gsap.to('.main',{
        backgroundColor: 'black',
        scrollTrigger: {
            trigger: '.main',
            scroller: 'body',
            // markers: true,
            start: 'top -30%',
            end: 'top -80%',
            scrub: 2
        }
    })
}

page2Back()



function page2CardAnimation(){
    gsap.from('.aboutUs img, .AboutUs-In',{
        y:50,
        opacity: 0,
        duration:1,
    
        scrollTrigger:{
            trigger:'.aboutUs',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end:'top 58%',
            scrub:2
        }
    })
    
    
    gsap.from('.card',{
        scale:0.8,
        opacity: 0,
        duration:1,
    
        scrollTrigger:{
            trigger:'.card',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end:'top 65%',
            scrub:2
        }
    })
}

page2CardAnimation()


function page3Animation(){
    gsap.from('#colon1',{
        y: -70,
        x: -70,
    
        scrollTrigger:{
            trigger: '#colon1',
            scroller: 'body',
            // markers: true,
            start: 'top 55%',
            end: 'top 45%',
            scrub: 3
        }
    })
    
    gsap.from('#colon2',{
        y: 70,
        x: 70,
    
        scrollTrigger:{
            trigger: '#colon2',
            scroller: 'body',
            // markers: true,
            start: 'top 120%',
            end: 'top 150%',
            scrub: 3
        }
    })
}

page3Animation()


function page4Animation(){
    
gsap.from('.page4 h1',{
    y:50,

    scrollTrigger:{
        trigger: '.page4 h1',
        scroller: 'body',
        // markers: true,
        start: 'top 75%',
        end: 'top 70%',
        scrub: 3
    }
})
}

page4Animation()