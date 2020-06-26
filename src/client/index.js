import { getWeatherBitData } from './js/weatherbit'
import { getCoordinates} from './js/coordinates'
import { getImage} from './js/pixabay'
import { submit} from './js/app'

import './styles/style.scss'

import Loading from './assets/loading.gif'
import notFound from './assets/notFound.gif'




export {
    getWeatherBitData,
    getCoordinates,
    getImage,
    submit,
    Loading,
    notFound
}