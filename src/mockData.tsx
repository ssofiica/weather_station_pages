import image1 from './components/card/1.png'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'

interface Phenom{
    phenom_name: string;
    phenom_id: number;
    image: string;
    unit: string;
    description: string;
}
export const phenomens: Phenom[] = [
    {phenom_name: 'Дождь', phenom_id: 1, image: image1, unit: 'мм', description: 'Атмосферные осадки, выпадающие из облаков в виде капель жидкости со средним диаметром от 0,5 до 6-7 мм'},
    {phenom_name: 'Снег', phenom_id: 2, image: image2, unit: 'мм', description: 'Форма атмосферных осадков, состоящая из мелких кристаллов льда'},
    {phenom_name: 'Град', phenom_id: 3, image: image3, unit: 'мм', description: 'Вид ливневых осадков в виде частиц льда округлой формы размером от миллиметра до нескольких сантиметров'},
    {phenom_name: 'Ветер', phenom_id: 4, image: image4, unit: 'м/с', description: 'Поток воздуха, который движется около земной поверхности'},
    {phenom_name: 'Туман', phenom_id: 5, image: image5, unit: 'видимость в метрах', description: 'Скопление воды в воздухе, образованное мельчайшими частичками воды'},
];