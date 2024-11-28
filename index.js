function contact(){
    window.location.href= "./contact.html";
}

function about(){
    window.location.href= "./about.html";
}

function journeys(){
    window.location.href= "./journeys.html";
}

function goToHomePage() {
    window.location.href= "./homepage.html";
}

function dogPage(){
   window.location.href= "./dogs.html";
}

function catPage() {
    window.location.href= "./cats.html";
}

function goToHome(){
    window.location.href= "./";
}

function TeamMembers() {
    window.location.href= "./team_members.html"
}
function FindCompanion() {
    window.location.href= "./Findyourpetcompanion.html"
}

function CustomerReviews() {
    window.location.href= "./customer reviews.html";
}

function golden() {
    window.location.href= "./goldenretriever.html"
}
function german() {
    window.location.href= "./germanshepard.html"
}
function pitbull() {
    window.location.href = "./pitbull.html"
}
function lab() {
    window.location.href= "./lab.html"
}
function ragdoll() {
    window.location.href= "./ragdoll.html"
}
function ginger() {
    window.location.href= "./ginger.html"
}
function graytabby() {
    window.location.href = "./graytabby.html"
}
function british() {
    window.location.href= "./british.html"
}

function adopt(){
    window.location.href= "./login.html"
}

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Show the thank you message
    alert("Thank you for the payment!");

    // You can optionally reset the form after the alert if needed
    document.getElementById('paymentForm').reset();
});
