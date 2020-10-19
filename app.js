const canvas = document.querySelector('#draw'); //selects html canvas

const ctx = canvas.getContext('2d'); // asks for 2d context

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // sets canvas as big as the width and height of the window

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round';
ctx.lineCap = 'round';