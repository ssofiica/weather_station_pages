import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from 'react-bootstrap'
import './detail.css'
import Breadcrumbs, { BreadcrumbLink } from '../components/breadcrumbs/bread';
import { phenomens } from '../mockData'

interface Phenom {
  phenom_name: string;
  phenom_id: number;
  image: string;
  unit: string;
  description: string;
}

const DetailsPage: FC = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [phenom, setPhenom] = useState<Phenom>({phenom_name: '', phenom_id: 0, image: '', unit: '', description: ''});
    
    useEffect(() => {
        fetch(`/api/phenomens/${id}/`)
          .then((response) => response.json())
          .then((jsonData) => {setPhenom(jsonData)
            console.log(jsonData)
            console.log(phenom)})
          .catch((error) => {
            if (typeof id === 'string') {
              console.log(parseInt(id))
              console.log(phenomens[parseInt(id)-1]);
              setPhenom(phenomens[parseInt(id)-1]);
            } else {
              console.log('id is undefined');
            }
            console.error('Error fetching data:', error)
            });;
      }, []);

      const breadcrumbsLinks: BreadcrumbLink[] = [
        { label: 'Природные явления', url: '/phenomens.' },
        { label: phenom.phenom_name || '', url: `/phenomens/${id}` },
      ];
    
    const handleButtonClick = () => {
        navigate('/weather_station_pages/phenomens/');
    }

    return(
    <div className="detail-space">
        <Breadcrumbs links={breadcrumbsLinks} />
        <Button className="back-btn my-2 ms-1" onClick={handleButtonClick}>
          Назад
        </Button>
        <div className="d-card">
            <div className="im"><img className="d-image" src={phenom.image} alt=""/></div>
            <span className="text">
                <p>{phenom.phenom_name}</p>
                <h5>{phenom.description }</h5>
                <h5>Единицы измерения: {phenom.unit}</h5>
            </span>    
        </div>
    </div>    
    )
}
export default DetailsPage