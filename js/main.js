let stickyBlock = document.querySelector('.header-trucking')
let origOffsetY = stickyBlock.offsetTop
let stickyBlockHeight = stickyBlock.clientHeight
let headerUp = document.querySelector('.header-up')

function onScroll() {
    if (window.scrollY >= origOffsetY) {
        stickyBlock.classList.add('sticky-header')
        headerUp.style.marginBottom = stickyBlockHeight + 'px'
    } else {
        stickyBlock.classList.remove('sticky-header')
        headerUp.style.marginBottom = 0
    }
}

document.addEventListener('scroll', onScroll)