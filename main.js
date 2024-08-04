 document.getElementById("about_me_link").addEventListener("click", about_meOnCLick);

function about_meOnCLick() {
    document.getElementById("about_meSec").style.display = "inline-block";
    document.getElementById("projectsSec").style.display = "none";
    document.getElementById("skillsSec").style.display   = "none";
    document.getElementById("contactSec").style.display  = "none";

    document.getElementById("about_meTab").style.padding  = "15px";
    document.getElementById("projectsTab").style.padding  = "10px";
    document.getElementById("skillsTab").style.padding    = "10px";
    document.getElementById("contactTab").style.padding   = "10px";
} 

document.getElementById("projects_link").addEventListener("click", projectsOnClick);

function projectsOnClick() {


    document.getElementById("about_meSec").style.display = "none";
    document.getElementById("projectsSec").style.display = "inline-block";
    document.getElementById("skillsSec").style.display   = "none";
    document.getElementById("contactSec").style.display  = "none";

    document.getElementById("about_meTab").style.padding  = "10px";
    document.getElementById("projectsTab").style.padding  = "15px";
    document.getElementById("skillsTab").style.padding    = "10px";
    document.getElementById("contactTab").style.padding   = "10px";
}

document.getElementById("skills_link").addEventListener("click", skillsOnClick);

function skillsOnClick() {
    document.getElementById("about_meSec").style.display = "none";
    document.getElementById("projectsSec").style.display = "none";
    document.getElementById("skillsSec").style.display   = "inline-block";
    document.getElementById("contactSec").style.display  = "none";

    document.getElementById("about_meTab").style.padding  = "10px";
    document.getElementById("projectsTab").style.padding  = "10px";
    document.getElementById("skillsTab").style.padding    = "15px";
    document.getElementById("contactTab").style.padding   = "10px";
}

document.getElementById("contact_link").addEventListener("click", contactOnClick);

function contactOnClick() {
    document.getElementById("about_meSec").style.display = "none";
    document.getElementById("projectsSec").style.display = "none";
    document.getElementById("skillsSec").style.display   = "none";
    document.getElementById("contactSec").style.display  = "inline-block";

    document.getElementById("about_meTab").style.padding  = "10px";
    document.getElementById("projectsTab").style.padding  = "10px";
    document.getElementById("skillsTab").style.padding    = "10px";
    document.getElementById("contactTab").style.padding   = "15px";
}