// Recupero il container dentro il quale andranno le cards dei vari membri
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

// Dichiaro la funzione mediante la quale genero la card di un membro
const generateMemberCardHTML = (name, role, email, img) => {
  return `<div class="col-xl-4 col-md-6 col-12 fs-5 mb-2">
            <div class="card" >
              <div class="row g-0 bg-black text-light">
                <div class="col-4">
                  <img src="${img}" class="img-fluid h-100" alt="${name}">
                </div>
               <div class="col-8">
                  <div class="card-body d-flex flex-column justify-content-evenly">
                    <h5 id="fullname" class="card-title">${name}</h5>
                    <p id="role" class="card-text">${role}</p>
                    <p id="email" class="card-text"><small><a href="#">${email}</a></small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>`
}

// Per ogni membro all'interno dell'array genero una card 
// e la inserisco all'interno della section teamContainer nell'HTML
let cardsHTML = '';

for(const member of teamMembers) {
  const { name, role, email, img } = member;
  cardsHTML += generateMemberCardHTML(name, role, email, img);
  teamContainer.innerHTML = cardsHTML;
}
// # BONUS
// Recupero il form e i vari input
const newMemberForm = document.getElementById(`new-member-form`);

const nameInput = document.getElementById(`name-input`);
const roleInput = document.getElementById(`role-input`);
const emailInput = document.getElementById(`email-input`);
const imgInput = document.getElementById(`img-input`);

// All'invio dei dati creo una card per il nuovo membro
newMemberForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const role = roleInput.value;
  const email = emailInput.value;
  const img = imgInput.value;

  const newMember = { name, role, email, img };
  teamMembers.push(newMember);
  console.table(teamMembers);

  teamContainer.innerHTML += generateMemberCardHTML(name, role, email, img);

});