import anime from "animejs";
import React, { useEffect } from "react";

const Anime = () => {
  useEffect(() => {
    // var elements = document.querySelectorAll('.dom-node-demo .el');
    // anime({
    //     targets: elements,
    //     translateX: 270,
    //     loop: true
    //   });
    // anime({
    //     targets: elements,
    //     keyframes: [
    //         {translateX: 250,scale: 1},
    //         {translateY: 50,scale: 0.5},
    //         {translateX: 250,scale: 2},
    //         {translateY: 250,scale: 1.5},
    //     ],
    //     duration: 3000,
    //     loop: true,

    // })
    // anime({
    //     targets: '.css-prop-demo',
    //     left: '240px',
    //     backgroundColor: '#000',
    //     borderRadius: ['0%', '50%'],
    //     easing: 'easeInOutQuad'
    //   });

    // anime({
    //     targets: '.staggering-grid-demo .el',
    //     scale: [
    //       {value: .1, easing: 'easeOutSine', duration: 500},
    //       {value: 1, easing: 'easeInOutQuad', duration: 800}
    //     ],
    //     delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    //     loop: true
    //   });
    anime({
        targets: '.staggering-grid-demo .el',
        translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
        translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
        rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
        easing: 'easeInOutQuad',
        loop: true
      });
  
  });
  return (
    <div className="staggering-grid-demo mt-36 w-[700px] flex-wrap flex  mx-auto">
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
      <div className="w-8 h-8 bg-red-400 rounded-md el"></div>
    
    </div>
  );
};

export default Anime;
