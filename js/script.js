const searchPhone = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data));
    
}

 const displayPhone = data => {
     const phoneSearch = document.getElementById('phone-search');
     data.forEach(brand => {
        const div = document.createElement('div');
        div.classList.add('col');
       div.innerHTML= `
        <div onclick="displayDetails('${data.brand}')" class="card">
         <img src="${brand.image}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${brand.phone_name}</h5>
         <p class="card-text">${brand.slug}</p>
       </div>`;
           
            phoneSearch.appendChild(div);
    })
}

const displayDetails = phone => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showPhoneDetails(data.mainFeature));

}
    const showPhoneDetails = mainFeatures => {
        console.log(mainFeatures);
     const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card mx-auto " style="width: 32rem;">
      <img src="${mainFeatures.storage}" class="card-img-top" alt="...">
      <div class="card-body ">
      <h5 class="card-title"> this is card </h5>
      <p class="card-text"></p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  phoneDetails.appendChild(div);
}
       
    
