import React from 'react';
const p5 = require('node-p5');
 
function Sketch(p) {
    p.setup = () => {
        p.createCanvas(200, 200);
    }
    p.draw = () => {
        p.background(50);
        p.text('hello world!', 50, 100);
    }
}
 
let p5Instance = p5.createSketch(Sketch);

export default function App(){

    return (
        <center>
        <h2>Q</h2>
        {p5Instance}
        </center>
    )
}