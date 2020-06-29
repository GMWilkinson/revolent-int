import React from 'react';
import { Carousel, IconSettings } from '@salesforce/design-system-react';
import './App.css';

const items = [
	{
		id: 1,
    heading: <h1 style={{fontSize: 50, padding: '3rem'}}>What do I know about Salesforce and Revolent?</h1>,
		imageAssistiveText: 'Appy',
		src: '/phone-man.png'
	},
  {
		id: 2,
		heading: <h2 style={{fontSize: 30, paddingTop: '5rem'}}>What is Salesforce?</h2>,
		description:
      <div style={{fontSize: 20, padding: '1rem'}}>
        <p>Salesforce is a customer relationship management (CRM) solution that brings companies and customers together.</p>
        <p>Salesforce's services allow businesses to use cloud technology to better connect with customers, partners and potential customers.</p>
      </div>,
		imageAssistiveText: 'Salesforce Apps',
		src: '/sf-img.jpeg'
	},
  {
		id: 3,
		heading: <h2 style={{fontSize: 30, paddingTop: '7rem'}}>What is Revolent?</h2>,
		description:
      <p style={{fontSize: 20, padding: '1rem'}}>Revolent is a talent creation company that trains, places and develops talent for the very much in demand cloud computing world</p>,
		imageAssistiveText: 'Salesforce Apps',
		src: '/revolent.jpeg'
	},
  {
		id: 4,
		heading: <h2 style={{fontSize: 30}}>What is Apex?</h2>,
		description:
      <div style={{fontSize: 20, padding: '1rem'}}>
        <p>Apex is a strongly typed, object-oriented programming language that allows developers to execute flow and transaction control statements on the Lightning platform server in conjunction with calls to the Lightning Platform​ API.</p>
        <p>Apex allows developers to access Salesforce.com's back-end database and client-server interfaces to create third-party Software as a service (SaaS) applications.</p>
      </div>,
		imageAssistiveText: 'Salesforce Apps',
		src: '/apex-img.jpg'
	},
  {
		id: 5,
		heading: <h2 style={{fontSize: 30, paddingTop: '7rem'}}>What is Lightning?</h2>,
		description: <p style={{fontSize: 20, padding: '1rem'}}>Lightning (Salesforce Lightning) is a component-based framework for app development from Salesforce.com that is designed to simplify processes for business users.</p>,
		imageAssistiveText: 'Salesforce Apps',
		src: '/Lightning-Features.png'
	},
	{
		id: 6,
		heading: <h1 style={{fontSize: 30}}>How would the opportunity with Revolent allow me to achieve my future career goals?</h1>,
		imageAssistiveText: 'Salesforce Apps',
		src: '/comp-man.png'
	},
	{
		id: 7,
		description:
      <div>
        <div>
          <h2 style={{fontSize: 30, paddingTop: '2rem'}}>What are my career goals?</h2>
        </div>
        <div>
          <h2 style={{fontSize: 20, paddingTop: '2rem'}}>To learn valuable skills</h2>
        </div>
        <div>
          <h2 style={{fontSize: 20, paddingTop: '2rem'}}>To be part of interesting and varied projects</h2>
        </div>
        <div>
          <h2 style={{fontSize: 20, paddingTop: '2rem'}}>To have the knowledge and proven ability to teach others</h2>
        </div>
        <div>
          <h2 style={{fontSize: 20, paddingTop: '2rem'}}>To be part of something that genuinely helps people</h2>
        </div>
      </div>
	},
	{
		id: 8,
		heading: <h1 style={{fontSize: 50, paddingTop: '2rem'}}>Why should Revolent hire me?</h1>,
		imageAssistiveText: 'Appy',
		src: '/sf-man.png'
	},
	{
		id: 9,
		description:
      <div>
        <div>
          <h2 style={{fontSize: 30, paddingTop: '2rem'}}>Why hire me?</h2>
        </div>
        <div>
          <h2 style={{fontSize: 20, paddingTop: '2rem'}}>Fast learner</h2>
        </div>
        <div>
          <h2 style={{fontSize: 20, paddingTop: '2rem'}}>Passion for technology and learning new languages</h2>
        </div>
        <div>
          <h2 style={{fontSize: 20, paddingTop: '2rem'}}>Comfortable with public speaking</h2>
        </div>
        <div>
          <h2 style={{fontSize: 20, paddingTop: '2rem'}}>Happy to work alone or in groups</h2>
        </div>
      </div>
	},
	{
		id: 10,
		heading: <h1 style={{fontSize: 50, paddingTop: '2rem'}}>Thank you for your time</h1>,
		imageAssistiveText: 'Apps',
		src: '/punch-man.png',
		href: 'https://www.salesforce.com',
	},
];

class App extends React.Component {
	static displayName = 'DefaultExample';

	render() {
		return (
      <main style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh'
      }}>
			<IconSettings iconPath="/assets/icons">
				<div
					style={{
						margin: '0 auto',
						maxWidth: '774px',
					}}
				>
					<Carousel
						id="carousel-default-example"
						items={items}
            className="item-style"
						onItemClick={(event, data) => {
							event.preventDefault();
						}}
					/>
				</div>
			</IconSettings>
      </main>
		);
	}
}

export default App;
