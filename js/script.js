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
        <div class="card">
         <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>`;
           
            phoneSearch.appendChild(div);
    })
}
       
    
