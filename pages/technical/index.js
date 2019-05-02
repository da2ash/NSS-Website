import React from 'react';
import BasicNavLayout from '../../layouts/BasicNavLayout';
import { Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

import { withBaseDir } from '../../util/helpers';

const cardContent = [
	{
		src: withBaseDir`/static/images/technical/pulley.jpg`,
		title: 'Pulley Installation' ,
		text: 'Pulley systems were installed on two most frequented village wells, one of which required laying of the foundation which was notably designed by the volunteers themselves. The pulley systems facilitated in lowering the villagers’ efforts by a great deal.',
	},
	{
		src: withBaseDir`/static/images/technical/solar/solar-banner.jpeg`,
		title: 'Project Solar',
		text: 'During our special camp, we came across a school in Ambewadi village, which lacked many amenities needed for the growth of the students. One of the reasons for that was the unaffordable electric supply. We then planned and implemented our technical project "SOLAR PANELS INSTALLATION". Understanding the need and the requirement we installed a 720-watt solar power off-grid setup. We further plan to work on its security system and longevity . ',
		route: withBaseDir`/technical/solar`,
	}
];

export default () => (
	<React.Fragment>
		<div className="Main">
			<BasicNavLayout title="Technical" >
			    <br/><br/>
			    <div className="container">
			    	<h3 className="Heading">Technical Events</h3>
			    </div>
			    <br/><br/>			    
			    <center>
		    		{
		    			cardContent.map((content,i) => (
				      		<Card className="Card wow fadeInUp" key={i}>
						        <CardImg className="CardImg" top src={content.src} alt="Card image" />
						        <CardBody>
							        <CardTitle className="CardTitle">
										{content.title}
									</CardTitle>
							   	    <CardText className="CardText">{content.text}</CardText>
									{content.route && 
										<Button href={content.route}>More Info</Button>
									}
				        		</CardBody>
								
				      		</Card>	
				      	))
		      		}  
		      	</center>
		      	<br/><br/>
		    </BasicNavLayout>
	    </div>
	</React.Fragment>    
)
