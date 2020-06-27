import { getWeatherBitData } from './js/weatherbit'
import { getCoordinates} from './js/coordinates'
import { getImage} from './js/pixabay'
import { submit} from './js/app'

import './styles/style.scss'

import loading from './assets/loading.gif'
import notFound from './assets/notFound.gif'
import missed from './assets/missed.gif'




export {
    getWeatherBitData,
    getCoordinates,
    getImage,
    submit,
    loading,
    notFound,
    missed
}