/*for banner content */
function MainContent() {
    return (
        <h1 class="homepageh1">Hello, everyone!</h1>
    )
}
function MainSubContent() {
    return (
        <h2 class="homepageh2">Welcom to my portfolio</h2>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
        <MainSubContent />
    </div>,
    document.getElementById("Hi")
)

/*for Name content*/
ReactDOM.render(
    <div>
        <h1 class="Nameh1">I'M HEMANTH KUMAR </h1>
        <p class="Namep">UR WEB DEVELOPER</p>
    </div>,
    document.getElementById("Profile-name")
)

/*for pop-up */
function showPopup(id) {
    var popup = document.getElementById(id);
    popup.classList.add('active');
}

function closePopup(id) {
    var popup = document.getElementById(id);
    popup.classList.remove('active');
}

function ThankYouContent() {
    return (
        <h2 class="Thank_You_h2">THANK YOU! &#128522;</h2>
    )
}
function ThankYouSubContent() {
    return (
        <h3 class="Thank_You_h3">FOR MORE DETAILS <a class="Homepage_contact_us" href="/Profile/contactus">CONTACT US</a></h3>
    )
}


ReactDOM.render(
    <div>
        <ThankYouContent />
        <ThankYouSubContent />
    </div>,
    document.getElementById("Thankyou")
)
