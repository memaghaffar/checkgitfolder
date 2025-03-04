let products =[

{
image:"images/7.jpg",
proname:"product 1",
prodes:"shirt cool",
proprice:500,
modall:"modal1"

}
,
{
    image:"images/7.jpg",
    proname:"product 2",
    prodes:"shirt cool",
    proprice:500,
    modall:"modal2"
    
    }
    ,
    {
        image:"images/7.jpg",
        proname:"product 3",
        prodes:"shirt cool",
        proprice:500,
        modall:"modal3"
        
        }

]

for (let i = 0; i < products.length; i++) {
    document.getElementById("data").innerHTML +=
`
<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card" style="width: 18rem;">
  <img src="${products[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${products[i].proname}</h5>
    <h5 class="card-title">${products[i].prodes}</h5>
    <h5 class="card-title">${products[i].proprice}</h5>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
     data-bs-target="#${products[i].modall}">
 Read More
</button>
  </div>
</div>
</div>

`


    
}