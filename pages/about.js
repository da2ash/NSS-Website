import React from 'react';
import BasicNavLayout from '../layouts/BasicNavLayout';

export default () => (
	<React.Fragment>
		<div>
		<div id="fb-root" />
		<script async defer src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2" />
			<BasicNavLayout title="About" >
				<br/><br/>
{/*				<div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3770.011578349503!2d72.8348627649017!3d19.10714798707006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas+Jivanlal+Sanghvi+College+of+Engineering!5e0!3m2!1sen!2sin!4v1551063748177" />
				</div> */}		
{/*				<div>
								<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdjsce.nss&tabs=timeline&width=200&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="200" height="200" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
							</div>	*/}			
		    </BasicNavLayout>
	    </div>
	</React.Fragment>  
);
