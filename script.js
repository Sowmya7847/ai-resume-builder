function previewPhoto() {
    const file = document.getElementById("photo").files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("photoPreview").src = e.target.result;
            document.getElementById("photoPreview").classList.remove("hidden");
        };
        reader.readAsDataURL(file);
    }
}

function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const photo = document.getElementById("photoPreview").src;

    document.getElementById("resumePreview").innerHTML = `
        <div class="resume">
            <img src="${photo}" class="resume-photo">
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
        </div>
    `;
}

function optimizeResume() {
    document.getElementById("suggestions").innerHTML = `
        <p>AI Analysis: Improve work experience section with quantified achievements.</p>`;
}

function applyTheme() {
    document.body.className = document.getElementById("theme").value;
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resumeContent = document.getElementById("resumePreview").innerHTML;
    doc.text(resumeContent.replace(/<[^>]+>/g, ''), 10, 10);
    doc.save("Resume.pdf");
}

function shareByEmail() {
    const email = prompt("Enter recipient email:");
    if (email) {
        window.location.href = `mailto:${email}?subject=My Resume&body=Check out my resume!`;
    }
}

function shareOnWhatsApp() {
    window.open(`https://api.whatsapp.com/send?text=Check out my resume!`, "_blank");
}

function copyLink() {
    const dummy = document.createElement("textarea");
    dummy.value = window.location.href;
    document.body.appendChild(dummy);
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Resume link copied!");
}
