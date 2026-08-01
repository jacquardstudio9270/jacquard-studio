document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const lightboxCounter = document.getElementById("lightbox-counter");
    
    let currentIndex = 0;
    let currentItems = [];

    // Variables
    const portfolioGrid = document.getElementById("portfolio-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxCategory = document.getElementById("lightbox-category");
    const closeLightbox = document.querySelector(".close-lightbox");

    // Display function
    function displayPortfolio(items){

        portfolioGrid.innerHTML = "";

        items.forEach(item => {

            const card = document.createElement("div");

            card.className = "portfolio-card";

            card.innerHTML = `
                <div class="portfolio-image">
                    <img src="${item.image}" alt="${item.id}">
                    <div class="portfolio-overlay">
                        <span>View Design</span>
                    </div>
                </div>

                <div class="portfolio-info">
                    <h3>${item.id}</h3>
                    <p>${item.category}</p>
                </div>
            `;

            // Open Lightbox
           card.addEventListener("click", () => {

                currentItems = items;
                currentIndex = items.indexOf(item);
                openLightbox();

            });

            portfolioGrid.appendChild(card);

        });

    }

    // Initial Gallery
    displayPortfolio(portfolioData);

    function openLightbox(){
        lightbox.classList.add("active");
        lightboxImage.classList.add("fade");

setTimeout(() => {

    lightboxImage.src = currentItems[currentIndex].image;

    lightboxTitle.textContent = currentItems[currentIndex].id;

    lightboxCounter.textContent =
        `${currentIndex + 1} / ${currentItems.length}`;
       
    lightboxImage.classList.remove("fade");

},200);

    }
    prevBtn.addEventListener("click", () => {

        currentIndex--;
        if(currentIndex < 0){
            currentIndex = currentItems.length - 1;
        }

        openLightbox();

    });

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= currentItems.length){

        currentIndex = 0;

    }

    openLightbox();

});

document.addEventListener("keydown", (e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

    // Filter Buttons
    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const filter = button.dataset.filter;

            if(filter === "all"){

                displayPortfolio(portfolioData);

            }else{

                const filtered = portfolioData.filter(item => item.category === filter);

                displayPortfolio(filtered);

            }

        });

    });

    // Close Lightbox
    closeLightbox.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

    // Close when clicking background
    lightbox.addEventListener("click", (e) => {

        if(e.target === lightbox){

            lightbox.classList.remove("active");

        }

    });

});