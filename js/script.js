const searchPhone = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    searchInput.value = '';

    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data));
    
}
searchPhone();

 const displayPhone = data => {
     const phoneSearch = document.getElementById('phone-search');
     data.forEach(brand => {
        const div = document.createElement('div');
        div.classList.add('col');
       div.innerHTML= `
        <div onclick="displayDetails(${data.mainFeatures})" class="card">
         <img src="${brand.image}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${brand.phone_name}</h5>
         <p class="card-text">${brand.slug}</p>
       </div>`;
           
            phoneSearch.appendChild(div);
    })
} 
const displayDetails = feature => {
    const url = ` https://openapi.programming-hero.com/api/phone/${feature}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>console.log(data));

}

       
    
