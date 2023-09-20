import Card from './Card';

function App() {
	const data = [
		{
			type: 'Free',
			price: '0',
			user: 'single user',
			userHighlighter: false,
			storage: '5GB Storage',
			publicProjects: 'Unlimited Public Projects',
			publicProjectsEnabler: true,
			communityAccess: 'Community Access',
			communityAccessEnabler: true,
			privateProjects: 'Unlimited Private Projects',
			privateProjectsEnabler: false,
			support: 'Dedicated Phone Support',
			supportEnabler: false,
			subdomain: 'Free Subdomain',
			subdomainHighlighter:false,
			subdomainEnabler: false,
			status: 'Monthly Status Reports',
			statusEnabler: false,
		},
		{
			type: 'Pro',
			price: '9',
			user: '5 users',
			userHighlighter: true,
			storage: '50GB Storage',
			publicProjects: 'Unlimited Public Projects',
			publicProjectsEnabler: true,
			communityAccess: 'Community Access',
			communityAccessEnabler: true,
			privateProjects: 'Unlimited Private Projects',
			privateProjectsEnabler: true,
			support: 'Dedicated Phone Support',
			supportEnabler: true,
			subdomain: 'Free Subdomain',
			subdomainHighlighter:false,
			subdomainEnabler: false,
			status: 'Monthly Status Reports',
			statusEnabler: false,
		},
		{
			type: 'plus',
			price: '49',
			user: 'Unlimited users',
			userHighlighter: true,
			storage: '150GB Storage',
			publicProjects: 'Unlimited Public Projects',
			publicProjectsEnabler: true,
			communityAccess: 'Community Access',
			communityAccessEnabler: true,
			privateProjects: 'Unlimited Private Projects',
			privateProjectsEnabler: true,
			support: 'Dedicated Phone Support',
			supportEnabler: true,
			subdomain: 'Unlimited Free Subdomain',
			subdomainHighlighter:true,
			subdomainEnabler: true,
			status: 'Monthly Status Reports',
			statusEnabler: true,
		},
	];

	return (
		<>
			<section className='pricing py-5'>
				<div className='container'>
					<div className='row'>
						{data.map((e, i) => {
							return (
								<>
									<Card data={e} key={i} />
								</>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
