const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show",entry.isIntersecting)
        console.log("hello")
        })
},
{
    threshold: 1
}
)
cards.forEach( card => {
    observer.observe(card)
    console.log("hello")
})