interface Phenom{
    phenom_name: string;
    phenom_id: number;
    image: string;
    unit: string;
    description: string;
}
export const phenomens: Phenom[] = [
    {phenom_name: 'Дождь', phenom_id: 1, image: '', unit: 'мм', description: 'Атмосферные осадки, выпадающие из облаков в виде капель жидкости со средним диаметром от 0,5 до 6-7 мм'},
    {phenom_name: 'Снег', phenom_id: 2, image: '', unit: 'мм', description: 'Форма атмосферных осадков, состоящая из мелких кристаллов льда'},
    {phenom_name: 'Град', phenom_id: 3, image: '', unit: 'мм', description: 'Вид ливневых осадков в виде частиц льда округлой формы размером от миллиметра до нескольких сантиметров'},
    {phenom_name: 'Ветер', phenom_id: 4, image: '', unit: 'м/с', description: 'Поток воздуха, который движется около земной поверхности'},
    {phenom_name: 'Туман', phenom_id: 5, image: '', unit: 'видимость в метрах', description: 'Скопление воды в воздухе, образованное мельчайшими частичками воды'},
];