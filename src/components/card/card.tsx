import { FC } from "react";
import { useEffect } from "react";
import { Button, Card } from 'react-bootstrap'
import './PhenomCard.css'
import image1 from './1.png'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
import image5 from '../../assets/5.jpg'

const images = [image1, image2, image3, image4, image5]

interface Props {
    data: {
        phenom_name: string;
        phenom_id: number;
        image: string;
        unit: string;
        description: string;
      };
}

const PhenomCard: FC<Props> = (props) => {
    useEffect(() => {
        console.log(props)
        console.log(props.data)
      }, []);
    
    return(
    <div className="col">
    <Card className="phenom-card px-3 py-1 mb-2">
        {props.data.image ? <Card.Img className="phenom-image" src={props.data.image} height={120} width={198}/>
        : <Card.Img className="phenom-image" src={images[props.data.phenom_id - 1]} height={120} width={198}/>
        }
        <Card.Body className="py-1 px-0">                
            <div className="phenom-title ps-1">
                <Card.Title>{props.data.phenom_name}</Card.Title>
            </div>
            <Button className="card-button me-4 align-self-center" href={"phenomens/" + props.data.phenom_id} target="_blank" variant="primary">Подробнее</Button>
            <button className="btn btn-outline-danger align-self-center">Удалить</button>
        </Card.Body>
    </Card>
    </div>
    )
}

export default PhenomCard;

