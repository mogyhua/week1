const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isWizard = confirm("Are you a wizard?");


/*= - vaartuse salvestamine
 == võrdlemine
 === võrdlemine + tyybi konroll */

if(isWizard === true) {
    console.log("Welcome, Harry!")
}
else {
    profileImage.src = "images/image2.jpg"
    firstNameSpan.innerHTML = "Dudley Dursley"
    ageSpan.innerHTML = 12;
    statusSpan.innerHTML = "Muggle"
}

btnUpdateProfile.addEventListener("click", () => {
    profileImage.src = "images/image3.jpg"
    firstNameSpan.innerHTML = "Lara Croft"
    ageSpan.innerHTML = "25"
    statusSpan.innerHTML = "Tomb Raider"
});