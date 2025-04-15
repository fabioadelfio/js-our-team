const teamContainer = document.getElementById(`team-container`);

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const generateMemberCardHTML = (name, role, email, img) => {
  return `<div class="col-4">
            <div class="card mb-3" >
              <div class="row g-0 bg-black text-light">
                <div class="col-4">
                  <img src="${img}" class="img-fluid rounded-start" alt="${name}">
                </div>
               <div class="col-8">
                  <div class="card-body">
                    <h5 id="fullname" class="card-title">${name}</h5>
                    <p id="role" class="card-text">${role}</p>
                    <p id="email" class="card-text"><small><a href="#">${email}</a></small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>`
}

let cardsHTML = '';

for(const member of teamMembers) {
  const { name, role, email, img } = member;
  cardsHTML += generateMemberCardHTML(name, role, email, img);
  teamContainer.innerHTML = cardsHTML;
}