document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('home-video');
    
    video.addEventListener('ended', () => {
        const homeDiv = document.querySelector('.home');
        
        homeDiv.innerHTML = `
            <div style="position: relative;">
                <img src="img/Homeimage.jpg" alt="Home Image" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="overlay-text">
                <h1>Hello World</h1>
                </div>
            </div>
        `;
    });
});
