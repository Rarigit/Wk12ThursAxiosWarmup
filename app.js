function getDog(){
    axios.request({
        url: "https://dog.ceo/api/breeds/image/random",
    }).then(dogSuccess).catch(dogFailure);
}

function dogSuccess(response){
    let dogData = response.data;
    apiResult.insertAdjacentHTML(`beforeend`,
                                        `<img src="${dogData.message}">`);
}


//Stock Photo api FUNCTIONS
function getStockPhotos(){
    apiResult.innerHTML = "Pictures are laoding...."
    axios.request({
        url: "https://picsum.photos/v2/list",
    }).then(stockSuccess).catch(stockFailure);
}

function stockSuccess(response){
    clearResults();
    let photos = response.data;
    for (let photo of photos){
        let src = photo.download_url;
        insertResult(src);
    }
}


function stockFailure(error){
    insertResult(null);
}

//Result container manipulation

function insertResult(src){
    if (src != null){
        apiResult.insertAdjacentHTML(`beforeend`,
                                `<img src="${src}">`);
    } else{
        apiResult.innerHTML = "Error fetching images";
    }     
}

function clearResults(){
    apiResult.innerHTML = "";
}

function dogFailure(error){
    insertResult(null);
}
//Execute on load
const apiResult = document.getElementById(`apiResult`);

//Event listeners
document.getElementById(`getDog`).addEventListener(`click`, getDog);
document.getElementById(`clearResults`).addEventListener(`click`, clearResults);
document.getElementById(`getPhotos`).addEventListener(`click`, getStockPhotos);
