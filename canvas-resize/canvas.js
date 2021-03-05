const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(225, 0, 0, 0.5)';
c.fillRect(200, 400, 100, 100);
c.fillStyle = 'rgba(225, 35, 100, 1)';
c.fillRect(300, 300, 100, 100);

// line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 100);
c.strokeStyle = '#fa34a3';
c.stroke();

// Arc
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

for(let i=0;i<30;i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    
}