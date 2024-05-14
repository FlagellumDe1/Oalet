let features = document.querySelectorAll('.features__inner');

console.log(typeof features)

document.addEventListener('scroll', showFeaturesAnimation)

function showFeaturesAnimation(){
    for (let feature of features){
        let featureLeft = feature.firstElementChild;
        let featureRight = feature.lastElementChild;
        
        if (document.documentElement.clientHeight > featureLeft.getBoundingClientRect().top){
            featureLeft.classList.add('feature__animated');
            featureRight.classList.add('feature__animated-reverse')
        }
    
    }
    

}


