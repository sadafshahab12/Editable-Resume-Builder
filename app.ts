// Function to form submission
function formSubmit(evt) {
  evt.preventDefault();
  let fNameElem = document.getElementById("fname");
  let contactElem = document.getElementById("contact");
  let emailElem = document.getElementById("email");
  let addressElem = document.getElementById("address");
  let yearElem = document.getElementById("year");
  let fieldElem = document.getElementById("field");
  let instituteElem = document.getElementById("institute");
  let jobElem = document.getElementById("job");
  let compElem = document.getElementById("comp");
  let sdateElem = document.getElementById("sdate");
  let edateElem = document.getElementById("edate");
  let skillElem = document.getElementById("skill");
  let objectiveElem = document.getElementById("objective");
  let picElem = document.getElementById("profile-pic");
  if (
    !fNameElem ||
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
    !picElem
  ) {
    console.error("Elements are missing");
    return;
  }
  const fName = fNameElem.value;
  const contact = contactElem.value;
  const email = emailElem.value;
  const address = addressElem.value;
  const year = yearElem.value;
  const field = fieldElem.value;
  const institute = instituteElem.value;
  const job = jobElem.value;
  const comp = compElem.value;
  const sdate = sdateElem.value;
  const edate = edateElem.value;
  const skill = skillElem.value;
  const objective = objectiveElem.value;

  const profPic = picElem.files?.[0];
  const profPicURL = profPic ? URL.createObjectURL(profPic) : "";
  let resumeOutput = `
<div class="left">
        <h1>Dynamic Resume</h1>
         ${profPicURL ? `<img src="${profPicURL}" class="pic" alt="">` : " "}
        <div class="objective">
          <h3>Objective</h3>
          <p class="editable">${objective}</p>
        </div>
        <div class="social">
          <div class="l-email">
            <i class="fa-solid fa-envelope"></i>
            <p class="editable">${email}</p>
          </div>
          <div class="l-contact">
            <i class="fa-solid fa-phone"></i>
            <p class="editable">${contact}</p>
          </div>
          <div class="l-address">
            <i class="fa-solid fa-location-dot"></i>
            <p class="editable">${address}</p>
          </div>
        </div>
      </div>
      <div class="right">
        <h1 class="name editable">${fName}</h1>
        <div class="email">
          <i class="fa-solid fa-envelope"></i>
          <p class="editable">${email}</p>
        </div>
        <div class="contact">
          <i class="fa-solid fa-phone"></i>
          <p class="editable">${contact}</p>
        </div>
        <div class="address">
          <i class="fa-solid fa-location-dot"></i>
          <p class="editable">${address}</p>
        </div>

        <hr />

        <div class="edu">
          <h3>Education</h3>
          <p class="editable">${year}</p>
          <p class="editable">${field}</p>
          <p class="editable">${institute}</p>
        </div>
        <div class="exp">
          <h3>Experience</h3>
          <p class="editable">${job}</p>
          <p class="editable">${comp}</p>
          <p>Start:<span id="edit-sdate" class="editable"> ${sdate}</span></p>
          <p>End: <span id="edit-edate" class="editable">${edate} </span></p>
        </div>
        <div class="skill">
          <h3>Skill</h3>
          <p class="skill editable">${skill}</p>
        </div>
      </div>
`;
  let resumeOutputElem = document.getElementById("resume");
  if (resumeOutputElem) {
    resumeOutputElem.innerHTML = resumeOutput;
  } else {
    console.error("The resume output element is missing");
  }
  let editBtn1 = document.getElementById("edit-btn");
  editBtn1.classList.add("display");
}
// Changing  Edit to Save mde  and Save to edit mode modes
function editBtn() {
  let editbtn = document.getElementById("edit-btn");
  if (!editbtn) return;
  let editableElem = document.querySelectorAll(".editable");
  if (editbtn.textContent === "Edit") {
    // change into edit
    editableElem.forEach(function (element) {
      if (element instanceof HTMLElement) {
        element.contentEditable = "true";
        element.classList.add("editing");
      }
    });
    editbtn.textContent = "Save";
  } else {
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
  let form = document.getElementById("resume-form");
  let editbtn = document.getElementById("edit-btn");
  if (form) {
    form.addEventListener("submit", formSubmit);
  }
  if (editbtn) {
    editbtn.addEventListener("click", editBtn);
  }
}

formSubmitDone();
