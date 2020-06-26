const pixabayBaseURL= "https://pixabay.com/api/?"
const pixabayAPIKey = "17156512-d3b9b7fb79bb45c20f4b5b9e6"


const getImage = async (city) => {
    const URL = pixabayBaseURL + 'key=' + pixabayAPIKey + '&q=' + city + '&image_type=photo';
    const response = await fetch(URL);
    try {
        const imageData = await response.json()
            console.log(imageData)
            return imageData
        }
    catch (error) {
        console.log('error:', error);
    };
    return imageData;
}

module.exports = {getImage}
