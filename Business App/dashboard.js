let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
let editingPlanIndex = null;

let users = JSON.parse(localStorage.getItem('users')) || [];

function saveToLocalStorage() {
  localStorage.setItem('businesses', JSON.stringify(businesses));
}

/* Data creation */

function submitFunction() {
  const name = document.getElementById('BizName').value;
  const type = document.getElementById('Biztype').value;
  const description = document.getElementById('descr').value;
  const visibility = document.querySelector('input[name="visibility"]:checked').value;
  const username = localStorage.getItem('loggedInUser');
  
  if (name && description && type) {
    const business = { name, type, description, visibility, username };
    if (editingPlanIndex !== null) {
      businesses[editingPlanIndex] = business;
      editingPlanIndex = null;
      document.getElementById('submitFunction').innerText = 'Create Business';
      alert('Business updated successfully!');
    } else {
      businesses.push(business);
      alert('Business created successfully!');
    }
    saveToLocalStorage();
    // cancelCreateBusiness();
    loadBusinesses();
  } else {
    alert('Please fill in all fields.');
  }
}

/*Data Display */

function loadBusinesses() {
  const username = localStorage.getItem('loggedInUser');
  const businessCards = document.getElementById('business-cards');
  const businessList = document.getElementById('business-list');
  businessCards.innerHTML = '';
  businessList.innerHTML = '';
  businesses.forEach((b, index) => {
    if (b.visibility === 'public' || b.username === username) {
      businessCards.innerHTML += `
         <div class="cardEdit">
              <div class="cardContTitle">
                  <h3 class="">${b.name}</h3>
                  <div class="dropdown cardEdit1">
                   <div class="cardDotCont cardDotCont1">
                      <div class="threeDot dropbtn" onclick="toggleMenu(${index})">
                      </div>
                  </div>
                    <div id="dropdown-content-${index}" class="dropdown-content">     
                      <button onclick="editBusiness(${index})">Edit Business</button>
                      <button onclick="deleteBusiness(${index})">Delete</button>
                    </div>
                  </div>
              </div>
          <p class="dashPar">${b.description}</p>
        </div>
      `;
      businessList.innerHTML += `
        <tr>
          <div id="dropdown-content-${index}" class="dropdown-content">
              <td class="dataEntry1">${b.name}</td>
              <td class="dataEntry">${b.description}</td>
              <td class="dataEntry">${b.type}</td>
              <td class="dataEntry">${b.visibility}</td>
              <td> 
                <div class="cardEdit2">
                  <div class="cardDotCont cardDotCont2 " onclick="cardViewBtnContainers(${index})">
                      <div class="threeDot">
                      </div>
                  </div>
              </td>
              <div class="cardTableBtnCont" id="cardTableBtnCont${index}">
                <div class="cardTableBtn dropdowncardTableBtn">      
                  <button onclick="editBusiness(${index})" class="eDit">Edit</button>
                  <button onclick="deleteBusiness(${index})" class="dElete">Delete</button>
                </div>
              </div>
          </div>
           </div> 
        </tr>
      `;
    }
  });
}

loadBusinesses();

function editBusiness(index) {
  const business = businesses[index];
  document.getElementById('BizName').value = business.name;
  document.getElementById('Biztype').value = business.type;
  document.getElementById('descr').value = business.description;
  // document.querySelector(input[name="visibility"][value="${business.visibility}"]).checked = true;
  editingPlanIndex = index; 
  document.getElementById("newFormcontainer").style.display ='block'; 
  document.getElementById("tableContainer").style.display ='none';
  document.getElementById('submitFunction').innerText = 'Update Business';
  document.getElementById('newBiztitle').innerText = 'Edit Business Created';

}

// Data destruction or deletion 

function deleteBusiness(index) {
  if (confirm('Are you sure you want to delete this business?')) {
    businesses.splice(index, 1);
    saveToLocalStorage();
    loadBusinesses();
  }
}
function boArd(){
  window.location.href='./dashboard.html';
}
function cancelFunction(){
  window.location.href='./dashboard.html';
}
function loGout(){
  if(confirm('You are about to Logout!'));
  window.location.href='./index.html';
}
function allBiz(){
document.getElementById("tableContainer").style.display ='block';
document.getElementById("newFormcontainer").style.display ='none';
}
function newPlan(){
document.getElementById("newFormcontainer").style.display ='block';
document.getElementById("tableContainer").style.display ='none';

}
function allPlan(){
document.getElementById("viewBiz").style.display ='block';
document.getElementById("newFormcontainer").style.display ='none';
document.getElementById("tableContainer").style.display ='none';
}


