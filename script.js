document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const resetButton = document.getElementById('resetButton');
    const originalColors = ['#FF6347', '#1E90FF', '#32CD32', '#FFD700'];

    circles.forEach((circle, index) => {
        createArrow(circle, index);
    });

    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            moveArrowToCircle(circle, index);
        });
    });

    resetButton.addEventListener('click', resetCircles);

    function createArrow(circle, index) {
        const arrowLine = document.createElement('div');
        arrowLine.classList.add('arrow', `arrow-${index}`);
        arrowLine.style.width = '40px';
        arrowLine.style.left = '500px'; // Initial position
        arrowLine.style.top = `${circle.offsetTop + circle.offsetHeight / 2 - 3}px`; // Align center
        document.querySelector('.canvas').appendChild(arrowLine);


        const arrowHead = document.createElement('div');
        arrowHead.classList.add('arrow-head', `arrow-head-${index}`);
        arrowHead.style.left = '480px'; // Initial position
        arrowHead.style.top = `${circle.offsetTop + circle.offsetHeight / 2 - 10}px`; // Align center with arrow line
        document.querySelector('.canvas').appendChild(arrowHead);
    }

    function moveArrowToCircle(circle, index) {
        const arrowLine = document.querySelector(`.arrow-${index}`);
        const arrowHead = document.querySelector(`.arrow-head-${index}`);
        
        const targetPosition = circle.offsetLeft + 60;
        let position = 500;
        const interval = setInterval(() => {
            if (position > targetPosition) {
                position -= 5;
                arrowLine.style.left = `${position}px`;
                arrowHead.style.left = `${position - 20}px`;
            } else {
                clearInterval(interval);
                circle.style.backgroundColor = '#999999';
            }
        }, 20);
    }


    function resetCircles() {
        circles.forEach((circle, index) => {
            circle.style.backgroundColor = originalColors[index];
            resetArrowPosition(index);
        });
    }

    function resetArrowPosition(index) {
        const arrowLine = document.querySelector(`.arrow-${index}`);
        const arrowHead = document.querySelector(`.arrow-head-${index}`);
        
        arrowLine.style.left = '500px';
        arrowHead.style.left = '480px'; 
    }
});