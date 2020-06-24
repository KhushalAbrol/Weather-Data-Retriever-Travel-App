pixabayBaseURL= "https://pixabay.com/api/?"
pixabayAPIKey = "17156512-d3b9b7fb79bb45c20f4b5b9e6"


const getImage = async (city) => {
    const URL = pixabayBaseURL + 'key=' + pixabayAPIKey + '&q=' + city + '&image_type=photo';
    const response = await fetch(URL);
    let imageData = {};
    try {
        imageData = await response.json()
        /* .then((imageData) => 
            postData('/addImagerData', {
                    imageURL:imageData.hits.largeImageURL
            })) */
            console.log(imageData)
        }
    catch (error) {
        console.log('error:', error);
    };
    return imageData;
}

module.exports = {getImage}
