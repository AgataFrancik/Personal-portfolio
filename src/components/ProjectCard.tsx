import React from 'react'
import { Col } from 'react-bootstrap';

interface ProjectCardProps {
    title: string;
    description: React.ReactNode;
    imgUrl: string;
  }

export const ProjectCard:React.FC<ProjectCardProps> = ({title, description,imgUrl}) => {
  return (
    <Col sm={6} md={4}>
        <div className='imgBox'>
            <img src={imgUrl} alt="imgCard"/>
            <div className='card-text'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}
