const cube = document.querySelector('.cube');
const container = document.querySelector('.cube_container');

//turn cube on mousemove
container.addEventListener('mousemouve', (e) => {
    //console.log(e);
    rotY = e.clientX /1.8;
    rotZ = e.clientY /1.8;

    cube.style.animation = 'none';
    cube.style.transform = "rotateY(' + rotY + 'deg) rotateZ(' + rotZ + 'deg)";
    cube.style.transition = '0.5s ease-out';

    container.addEventListener('mouseleave', () => {
        cube.style.animation = 'cube 1500s infinite linear';
    })
});

//turning cube using arrow
document.body.addEventListener('click', function(e) {

    //pick a random face
    const classes = ['front', 'back', 'top', 'bottom', 'right', 'left']
    classToUse = classes[Math.floor(Math.random() * classes.length)];

    console.log(classToUse);

    //insure to pick a new class each time
    if (cube.classList.contains(classToUse)) {
        classToUse = classes[Math.floor(Math.random() * classes.length)];
    };

    //add class to show random face
    if (e.target.classList.contains('arrow')){
        cube.classList.remove('front', 'back', 'top', 'bottom', 'right', 'left');
        cube.classList.add(classToUse);
        cube.style.animation = 'none';
        cube.style.transition = '1.2s ease';
    };
});

//restart animation when leaving arrow
document.querySelectorAll('.arrow').forEach(item => {
    item.addEventListener('mouseleave', () => {
        cube.style.animation = 'cube 1500s infinite linear';
        cube.classList.remove('front', 'back', 'top', 'bottom', 'right', 'left');
    });
});

