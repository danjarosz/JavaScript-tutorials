window.addEventListener("DOMContentLoaded", () => {

    // get canvas and context store in variables
    const canvas = document.querySelector("#sky");
    const ctx = canvas.getContext("2d");

    // set canvas dims to window width & height
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    //generate snowflakes & app attributes
    const mf = 100; // max flakes
    const flakes = [];

    // loop through and apply attributes
    for (let i = 0; i < mf; i++) {
        flakes.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 5 + 2, // min of 2px and max of 7px
            d: Math.random() + 1, // density of the flake
        })
    }

    // animate the flakes
    let angle = 0;
    const moveFlakes = () => {
        angle += 0.01;
        for (let i = 0; i < mf; i++) {
            // store current flake
            const f = flakes[i];

            // update x and y of the snowflake
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            // if the snowflake reach the bottom send the new ones to the top
            if (f.y > h) {
                flakes[i] = {
                    x: Math.random() * w,
                    y: 0,
                    r: f.r,
                    d: f.d
                }
            }
        }
    };

    // draw flakes onto canvas
    const drawFlakes = () => {
        ctx.clearRect(0,0,w,h);
        ctx.fillStyle = "#FFF";
        ctx.beginPath();
        for (let i = 0; i < mf; i++) {
            const f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x,f.y,f.r, 0, Math.PI * 2, true);

        }
        ctx.fill();
        moveFlakes();
    }

    // run animation
    setInterval(drawFlakes, 25);

});