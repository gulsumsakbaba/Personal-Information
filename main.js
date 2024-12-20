
    // API'den veri çekme
 const  fetchUsers=async()=> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await response.json();
      console.log(userData);
      userData.forEach((user) => {
        const modal=document.getElementById("user-list")
        modal.innerHTML+=
           `<div class="container col-lg-3 mt-5 px-3">
              <div class="card h-100">
                <div class="card-body">
                 <h5 class="card-title"><i class="fas fa-user"></i> ${user.name}</h5>
                  <p class="card-text"><strong>ID:</strong> ${user.id}</p>
                  <p class="card-text"><strong>Username:</strong> ${user.username}</p>
                  <p class="card-text"><i class="bi bi-envelope"></i> ${user.email}</p>
                  <p class="card-text"><i class="bi bi-telephone"></i> ${user.phone}</p>
                  <p class="card-text"><i class="bi bi-globe"></i> ${user.website}</p>    
                  <p class="card-text"><i class="bi bi-geo-alt"></i> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                  <p class="card-text"><i class="bi bi-building-fill"></i> ${user.company.name}</p>
                </div>
                <a href="#" class="btn-btn primary">View Profile</a>
              </div>
            </div>`;
        
      });

    }
    catch (err)
    {
      console.error("bir hata olustu"+ err);
    }
    
 };


 window.onload=()=>{
  fetchUsers();
 }












 
  

  
   
  






  

   