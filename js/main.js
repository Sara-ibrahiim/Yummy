

  let submitBtn;
    $(document).ready(function () {
        $("#loading").fadeOut(500, function () {
          $("body,html").css("overflow", "visible");
        });
    });

    let inner = $('.inner-bar').innerWidth();
    $('#sideBar').animate({left: `-${inner}`},500)
    $('#sideBar .open-close-icon').click(function(){


        let inner = $('.inner-bar').innerWidth();
        if ($('#sideBar').css('left')== '0px'){
            $('#sideBar').animate({left: `-${inner}`},500)
            $("#links").animate({top:"20%"},100);
    

            $(".open-close-icon").removeClass("fa-x");
            $(".open-close-icon").addClass("fa-align-justify");

        }else{
            $('#sideBar').animate({left: `0px`},500)
            $("#links").animate({top: "1%"},500);


            $(".open-close-icon").removeClass("fa-align-justify");
            $(".open-close-icon").addClass("fa-x");


        }

    })


//categorie
document.getElementById("search-item").innerHTML
  let c = document.getElementById("Categories");
    c.addEventListener("click", getcategorie);




 async function getcategorie(){
    $("#loading").fadeIn(300)
    $(".del").remove();
    let myResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let next = await myResponse.json()
    let itemsG = next.categories
    console.log(next.categories)
    let box =``
    for (let i = 0; i < itemsG.length; i++) {
    box += `<div class="col-md-3">
    <div class="boxing text-black position-relative overflow-hidden cursor-pointer delet" id="Categ" onclick="fliterstrCategory('${itemsG[i].strCategory}')">
        <img src="${itemsG[i].strCategoryThumb}" alt="" class="w-100 rounded-2">
        <div class="layer text-center rounded-2 p-2 w-100 h-100 ">
           <h3 >${itemsG[i].strCategory}</h3>
            <p>${itemsG[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>

        </div>

    </div>
 </div>`

    }

    document.getElementById('row').innerHTML= box
    $("#loading").fadeOut(300)

 }
 async function fliterstrCategory(meal_ca){
    $("#loading").fadeIn(300)
    $("#Categ").remove();
    $(".del").remove();
    let myResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal_ca}`)
    let next = await myResponse.json()
    let itemsAF = next.meals
    console.log(next.meals)
    let box =``
    for (let i = 0; i < 20; i++) {
        box += `<div class="col-md-3">
        <div class="boxing text-black position-relative overflow-hidden cursor-pointer delet" id="fliterarea" onclick="displayinner('${itemsAF[i].idMeal}')">
            <img src="${itemsAF[i].strMealThumb}" alt="" class="w-100 rounded-2">
            <div class="layer rounded-2 p-2 w-100 h-100 d-flex align-items-center ">
               <h3 class=" ">${itemsAF[i].strMeal}</h3>
            </div>

        </div>
     </div>`

     document.getElementById('row').innerHTML= box
     $("#loading").fadeOut(300)
    }

 }


// Area
let a = document.getElementById("Area");

 a.addEventListener("click",getarea);


async function getarea(){
    $("#loading").fadeIn(300)
    $(".del").remove();
    let myResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let next = await myResponse.json()
    let itemsA = next.meals
    console.log(next.meals)

    let box =``
    for (let i = 0; i < itemsA.length; i++) {
    box += `<div class="col-md-3 cursor-pointer areadelet">
    <div class="boxing  cursor-pointer text-center delet"  id="areadelet" onclick="fliterarea('${itemsA[i].strArea}')" >
    <i class="fa-solid fa-house-laptop fa-4x"></i>
    <h3 >${itemsA[i].strArea}</h3>
    </div>
 </div>`

    }

    document.getElementById('row').innerHTML= box
    $("#loading").fadeOut(300)

 }


 async function fliterarea(Area){
    $("#loading").fadeIn(300)
    $("#areadelet").remove();
    $(".del").remove();
    let myResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)
    let next = await myResponse.json()
    let itemsAF = next.meals
    console.log(next.meals)
    let box =``
    for (let i = 0; i < 20; i++) {
        box += `<div class="col-md-3">
        <div class="boxing text-black position-relative overflow-hidden cursor-pointer delet" id="fliterarea" onclick="displayinner('${itemsAF[i].idMeal}')">
            <img src="${itemsAF[i].strMealThumb}" alt="" class="w-100 rounded-2" >
            <div class="layer rounded-2 p-2 w-100 h-100 d-flex align-items-center ">
               <h3 class=" ">${itemsAF[i].strMeal}</h3>
            </div>

        </div>
     </div>`

     document.getElementById('row').innerHTML= box
     $("#loading").fadeOut(300)
    }



 }



 //Ingredients

  let i = document.getElementById("Ingredients");
  i.addEventListener("click",getIngredients);



 async function getIngredients(){
    $("#loading").fadeIn(300)
    $(".del").remove();

    let myResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let next = await myResponse.json()
    items = next.meals.slice(0, 20)
    console.log(next.meals.slice(0, 20))

    let box =``
    for (let i = 0; i < items.length; i++) {
    box += `<div  class="col-md-3 getIn" id="Ingredients">
    <div class="boxing cursor-pointer text-center delet" onclick="fliterIngredients('${items[i].strIngredient}')">
    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
    <h3 >${items[i].strIngredient}</h3>
    <p>${items[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
    </div>
 </div>`

    }

    document.getElementById('row').innerHTML= box
    $("#loading").fadeOut(300)

 }

async function fliterIngredients(mealin){
    $("#loading").fadeIn(300)
    $(".getIn").remove();
    $(".del").remove();
    let myResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealin}`)
    let next = await myResponse.json()
    let items = next.meals.slice(0, 20)
    console.log(next.meals.slice(0, 20))

    let box =``
    for (let i = 0; i < items.length; i++) {
    box += `<div class="col-md-3" id="fliterIngredients">
    <div class=" boxing text-black position-relative overflow-hidden cursor-pointer delet" onclick="displayinner('${items[i].idMeal}')">
        <img src="${items[i].strMealThumb}" alt="" class="w-100 rounded-2">
        <div class="layer rounded-2 p-2 w-100 h-100 d-flex align-items-center ">
           <h3 class=" ">${items[i].strMeal}</h3>
        </div>

    </div>
    </div>`

    }

    document.getElementById('row').innerHTML= box

    $("#loading").fadeOut(300)

}

 // Home page
async function getFood(){
    
    let myResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    let next = await myResponse.json()
    let items = next.meals


    let box =``
    for (let i = 0; i < items.length; i++) {
    box += `<div class="col-md-3" >
    <div class="boxing text-black position-relative overflow-hidden cursor-pointer delet" id="goodfood" onclick="displayinner('${items[i].idMeal}')">
        <img src="${items[i].strMealThumb}" alt="" class="w-100 rounded-2">
        <div class="layer rounded-2 p-2 w-100 h-100 d-flex align-items-center">
           <h3 class=" ">${items[i].strMeal}</h3>
        </div>

    </div>
 </div>`

    }

    document.getElementById('row').innerHTML= box
    $("#loading").fadeOut(300)


}

getFood()

 async function displayinner(mealS){
    $("#loading").fadeIn(300)
    $("#goodfood").remove();
    $(".del").remove();
    let myResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealS}`)
    let next = await myResponse.json()
    let items  = next.meals

    // const arr = items;
    // const noEmptyStrings = arr.filter((str) => str !== '');
    // console.log(noEmptyStrings); 

    // let tags = items.strTags?.split(",")
    // // let tags = meal.strTags.split(",")
    // if (!tags) tags = []

    // let y = ''
    // for (let i = 0; i < tags.length; i++) {
    //    y+= `
    //     <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    //     console.log(y)
    // }

    let box =``
   
    for (let i = 0; i < items.length; i++) {


    box +=`

    <div class="col-md-4 delet">
    <div>
    <img src="${items[i].strMealThumb}" alt="" class="w-100 rounded-2 mb-2">
        <h3>${items[i].strMeal}</h3>
    </div>

 </div>
<div class="col-md-8 delet">
<div>
<h2>Instructions</h2>
<p>${items[i].strInstructions}</p>
<h3>Area : <span>${items[i].strArea}</span></h3>
<h3>Category : <span>${items[i].strCategory}</span></h3>
<h3>Recipes : </h3>
<div class=" mt-3">
<span class="bord">  ${items[i].strMeasure1} ${items[i].strIngredient1}</span>
<span class="bord">  ${items[i].strMeasure2} ${items[i].strIngredient2}</span>
<span class="bord">  ${items[i].strMeasure3} ${items[i].strIngredient3}</span>





</div>

<div class=" my-3">
<span class="bord">  ${items[i].strMeasure4} ${items[i].strIngredient4 == [] ? "Yummy": items[i].strIngredient54}</span>
<span class="bord"> ${items[i].strMeasure5}  ${items[i].strIngredient5 == [] ? "Yummy": items[i].strIngredient5}</span>
<span class="bord " id="sp6">  ${items[i].strMeasure6} ${items[i].strIngredient6 == [] ? "Yummy": items[i].strIngredient6}</span>



</div>

<div class=" mb-3">
<span class="bord">  ${items[i].strMeasure7} ${items[i].strIngredient7 == [] ? "Yummy": items[i].strIngredient7}</span>
<span class="bord">  ${items[i].strMeasure8} ${items[i].strIngredient8 == [] ? "Yummy": items[i].strIngredient8}</span>
<span class="bord">  ${items[i].strMeasure9} ${items[i].strIngredient9 == [] ? "Yummy": items[i].strIngredient9}</span>


</div>

<div class="mb-3">
<span class="bord ">  ${items[i].strMeasure10} ${items[i].strIngredient10 == [] ? "Yummy": items[i].strIngredient10}</span>
<span class="bord ">  ${items[i].strMeasure11} ${items[i].strIngredient11 == [] ? "Yummy": items[i].strIngredient11}</span>
</div>




<div>
<h3 class="mb-3">Tages : </h3>
<span  class =" aler btn-sm">${items[i].strTags  == null? '#' : items[i].strTags}</span> <br>


</div>


<a target="_blank" href="${items[i].strSource}" class="btn btn-success mt-3">Source</a>
<a target="_blank" href="${items[i].strYoutube}" class="btn btn-danger mt-3">Youtube</a>


</div>

</div>
    `

    }


    document.getElementById('row').innerHTML= box
    $("#loading").fadeOut(300)

}

//
// CONTACT US

let viwe = document.getElementById('row')
let cu = document.getElementById("Contact");
cu.addEventListener("click",contact);

// cu.addEventListener("click", function () {
//     contact ()
//     $("#search-item,#search-item1,#search-item2").remove();
// });

function contact () {
    $(".del").remove();
    viwe.innerHTML = `
   
<div class="container w-75 m-auto cons" id="contain">
    <div class="row gy-4 id="Contact">
        <div class="col-md-6">

            <input type="text" placeholder="Enter Your Name"  onkeyup="inputsValidation()" id="name" class="form-control bg-transparent text-black bg-white">
            <p id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
            Special characters and numbers not allowed
           </p>

        </div>

        <div class="col-md-6">

            <input type="text" placeholder="Enter Your Email"  onkeyup="inputsValidation()" id="email" class="form-control bg-transparent text-black bg-white">
            <p id="usernameAlert" class="d-none text-danger"></p>
            <p id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
            Email not valid *exemple@yyy.zzz
           </p>


        </div>
        <div class="col-md-6">

            <input type="text" placeholder="Enter Your Phone" onkeyup="inputsValidation()"  id="number" class="form-control bg-transparent text-black bg-white">
            <p id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid Phone Number
           </p>


        </div>
        <div class="col-md-6">

            <input type="text" placeholder="Enter Your Age"  onkeyup="inputsValidation()" id="age" class="form-control bg-transparent text-black bg-white">
            <p id="userEmailAlert" class="d-none text-danger">name@example.com</p>
            <p id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </p>



        </div>
        <div class="col-md-6">
            <input type="text" placeholder="Enter Your Password" onkeyup="inputsValidation()" id="password" class="form-control bg-transparent text-black bg-white">
            <p id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid password *Minimum eight characters, at least one letter and one number:*
            </p>


        </div>
        <div class="col-md-6">

            <input type="text" placeholder="Repassword" onkeyup="inputsValidation()" id="repassword" class="form-control bg-transparent text-black bg-white">
            <p id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
            Enter valid repassword
            </p>


        </div>
    </div>
    <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
   
</div>`

    submitBtn = document.getElementById("submitBtn")

    document.getElementById("name").addEventListener("focus", function() {
        nameInput = true
    })

    document.getElementById("email").addEventListener("focus", function() {
        emailInput= true
    })

    document.getElementById("number").addEventListener("focus", function() {
        phoneInput= true
    })

    document.getElementById("age").addEventListener("focus", function () {
        ageInput = true
    })

    document.getElementById("password").addEventListener("focus", function()  {
        passwordInput = true
    })

    document.getElementById("repassword").addEventListener("focus", function()  {
        repasswordInput = true
    })

  }


  let ageInput = false;
  let passwordInput = false;
  let repasswordInput = false;
  let nameInput = false;
  let emailInput = false;
  let phoneInput = false;




  function inputsValidation() {
    if (nameInput) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInput) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInput) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInput) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInput) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInput) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


if (nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()) {
    submitBtn.removeAttribute("disabled")
} else {
    submitBtn.setAttribute("disabled", true)
}

}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("name").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("email").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("number").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("age").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("password").value))
}

function repasswordValidation() {
    return document.getElementById("repassword").value == document.getElementById("password").value
}

let namesrch = document.getElementById('ByName')
let nameletter = document.getElementById('byletter')
// s.addEventListener("click", function () {
//      searchl()
// $("#searcheBar").removeClass("d-none");

//   });


// serach
let s = document.getElementById("Search")
s.addEventListener('click',searchcontact)

function searchcontact() {
    $("#goodfood").remove();
    box= ` <div class="col-md-6" id="inp1">
    <input onkeyup="searchl(this.value)" id="ByName"  class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
</div>
<div class="col-md-6" id="inp2">
    <input onkeyup="searchl(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
</div>`

document.getElementById('row').innerHTML= box
searchl()
    
}
async function searchl(l , v) {
    $("#goodfood").remove();
    $("#serachbar").removeClass("d-none");
    if (v == 0) {
        var myResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${l}`
        );
      } else {
        var myResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`
        );
      }
    let next = await myResponse.json()
    let items = next.meals

    let box =``
    for (let i = 0; i < items.length; i++) {
    box += `<div class="col-md-3  del">
    <div class="boxing text-black position-relative overflow-hidden cursor-pointer" id="sec" onclick="displayinner('${items[i].idMeal}')">
        <img src="${items[i].strMealThumb}" alt="" class="w-100 rounded-2">
        <div class="layer rounded-2 p-2 w-100 h-100 d-flex align-items-center">
           <h3 class=" ">${items[i].strMeal}</h3>
        </div>

    </div>
 </div>`
}

document.getElementById('row2').innerHTML= box
}


