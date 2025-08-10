document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const container = document.querySelector('.container');
    
    toggleBtn.addEventListener('click', function() {
        container.style.backgroundColor = container.style.backgroundColor === 'rgba(255, 255, 255, 0.5)' 
            ? 'rgba(255, 255, 255, 0.9)' 
            : 'rgba(255, 255, 255, 0.5)';
        
        this.textContent = this.textContent === 'Click Me!' ? 'Clicked!' : 'Click Me!';
    });
});
