// Function to form submission
function formSubmit(evt) {
    var _a;
    evt.preventDefault();
    var fNameElem = document.getElementById("fname");
    var contactElem = document.getElementById("contact");
    var emailElem = document.getElementById("email");
    var addressElem = document.getElementById("address");
    var yearElem = document.getElementById("year");
    var fieldElem = document.getElementById("field");
    var instituteElem = document.getElementById("institute");
    var jobElem = document.getElementById("job");
    var compElem = document.getElementById("comp");
    var sdateElem = document.getElementById("sdate");
    var edateElem = document.getElementById("edate");
    var skillElem = document.getElementById("skill");
    var objectiveElem = document.getElementById("objective");
    var picElem = document.getElementById("profile-pic");
    if (!fNameElem ||
        !contactElem ||
        !emailElem ||
        !addressElem ||
        !yearElem ||
        !fieldElem ||
        !instituteElem ||
        !jobElem ||
        !compElem ||
        !sdateElem ||
        !edateElem ||
        !skillElem ||
        !objectiveElem ||
        !picElem) {
        console.error("Elements are missing");
        return;
    }
    var fName = fNameElem.value;
    var contact = contactElem.value;
    var email = emailElem.value;
    var address = addressElem.value;
    var year = yearElem.value;
    var field = fieldElem.value;
    var institute = instituteElem.value;
    var job = jobElem.value;
    var comp = compElem.value;
    var sdate = sdateElem.value;
    var edate = edateElem.value;
    var skill = skillElem.value;
    var objective = objectiveElem.value;
    var profPic = (_a = picElem.files) === null || _a === void 0 ? void 0 : _a[0];
    var profPicURL = profPic ? URL.createObjectURL(profPic) : "";
    var resumeOutput = "\n<div class=\"left\">\n        <h1>Dynamic Resume</h1>\n         ".concat(profPicURL ? "<img src=\"".concat(profPicURL, "\" class=\"pic\" alt=\"\">") : " ", "\n        <div class=\"objective\">\n          <h3>Objective</h3>\n          <p class=\"editable\">").concat(objective, "</p>\n        </div>\n        <div class=\"social\">\n          <div class=\"l-email\">\n            <i class=\"fa-solid fa-envelope\"></i>\n            <p class=\"editable\">").concat(email, "</p>\n          </div>\n          <div class=\"l-contact\">\n            <i class=\"fa-solid fa-phone\"></i>\n            <p class=\"editable\">").concat(contact, "</p>\n          </div>\n          <div class=\"l-address\">\n            <i class=\"fa-solid fa-location-dot\"></i>\n            <p class=\"editable\">").concat(address, "</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"right\">\n        <h1 class=\"name editable\">").concat(fName, "</h1>\n        <div class=\"email\">\n          <i class=\"fa-solid fa-envelope\"></i>\n          <p class=\"editable\">").concat(email, "</p>\n        </div>\n        <div class=\"contact\">\n          <i class=\"fa-solid fa-phone\"></i>\n          <p class=\"editable\">").concat(contact, "</p>\n        </div>\n        <div class=\"address\">\n          <i class=\"fa-solid fa-location-dot\"></i>\n          <p class=\"editable\">").concat(address, "</p>\n        </div>\n\n        <hr />\n\n        <div class=\"edu\">\n          <h3>Education</h3>\n          <p class=\"editable\">").concat(year, "</p>\n          <p class=\"editable\">").concat(field, "</p>\n          <p class=\"editable\">").concat(institute, "</p>\n        </div>\n        <div class=\"exp\">\n          <h3>Experience</h3>\n          <p class=\"editable\">").concat(job, "</p>\n          <p class=\"editable\">").concat(comp, "</p>\n          <p>Start:<span id=\"edit-sdate\" class=\"editable\"> ").concat(sdate, "</span></p>\n          <p>End: <span id=\"edit-edate\" class=\"editable\">").concat(edate, " </span></p>\n        </div>\n        <div class=\"skill\">\n          <h3>Skill</h3>\n          <p class=\"skill editable\">").concat(skill, "</p>\n        </div>\n      </div>\n");
    var resumeOutputElem = document.getElementById("resume");
    if (resumeOutputElem) {
        resumeOutputElem.innerHTML = resumeOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
    var editBtn1 = document.getElementById("edit-btn");
    editBtn1.classList.add("display");
}
// Changing  Edit to Save mde  and Save to edit mode modes
function editBtn() {
    var editbtn = document.getElementById("edit-btn");
    if (!editbtn)
        return;
    var editableElem = document.querySelectorAll(".editable");
    if (editbtn.textContent === "Edit") {
        // change into edit
        editableElem.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "true";
                element.classList.add("editing");
            }
        });
        editbtn.textContent = "Save";
    }
    else {
        // change again  into save
        editableElem.forEach(function (element) {
            if (element instanceof HTMLElement) {
                element.contentEditable = "false";
                element.classList.remove("editing");
            }
        });
        editbtn.textContent = "Edit";
    }
}
// applying event listeners
function formSubmitDone() {
    var form = document.getElementById("resume-form");
    var editbtn = document.getElementById("edit-btn");
    if (form) {
        form.addEventListener("submit", formSubmit);
    }
    if (editbtn) {
        editbtn.addEventListener("click", editBtn);
    }
}
formSubmitDone();
