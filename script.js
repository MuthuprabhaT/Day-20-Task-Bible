async function api(){
    const res = await fetch("https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10");
    const data = await res.json();
   bible(data);
}

async function bible(data){

    const arr=data.verses;

    arr.map((tex) => {
        const bibletext =tex.text;

        const mainPage = document.getElementById("mainCon");
        const main = document.createElement("div");
        main.setAttribute("class", "col-lg-8 col-sm-12");
        mainPage.appendChild(main);
 
        main.innerHTML = `
        <div class="card m-3 c-card p-3 c-card bg-info text-white" id="card">
        <div class="card-body">
        <p class="card-text text-center text-dark h5">${bibletext}</p>
        </div>
        </div>`
        ;
    });        
 }

api();