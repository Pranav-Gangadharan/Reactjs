const Card = (props) => {
	return (
		<div className='col-lg-4'>
			<div className='card mb-5 mb-lg-0'>
				<div className='card-body'>
					<h5 className='card-title text-muted text-uppercase text-center'>
						{props.data.type}
					</h5>
					<h6 className='card-price text-center'>
						${props.data.price}
						<span className='period'>/month</span>
					</h6>
					<hr />
					<ul className='fa-ul'>
						<li className={props.data.userHighlighter ? 'fw-bold' : ''}>
							<span className='fa-li'>
								<i className='fas fa-check'></i>
							</span>
							{props.data.user}
						</li>
						<li>
							<span className='fa-li'>
								<i className='fas fa-check'></i>
							</span>
							{props.data.storage}
						</li>
						<li
							className={props.data.publicProjectsEnabler ? '' : 'text-muted'}
						>
							<span className='fa-li'>
								<i
									className={
										props.data.publicProjectsEnabler
											? 'fas fa-check'
											: 'fas fa-times'
									}
								></i>
							</span>
							{props.data.publicProjects}
						</li>
						<li
							className={props.data.communityAccessEnabler ? '' : 'text-muted'}
						>
							<span className='fa-li'>
								<i
									className={
										props.data.communityAccessEnabler
											? 'fas fa-check'
											: 'fas fa-times'
									}
								></i>
							</span>
							{props.data.communityAccess}
						</li>
						<li
							className={props.data.privateProjectsEnabler ? '' : 'text-muted'}
						>
							<span className='fa-li'>
								<i
									className={
										props.data.privateProjectsEnabler
											? 'fas fa-check'
											: 'fas fa-times'
									}
								></i>
							</span>
							{props.data.privateProjects}
						</li>
						<li className={props.data.supportEnabler ? '' : 'text-muted'}>
							<span className='fa-li'>
								<i
									className={
										props.data.supportEnabler ? 'fas fa-check' : 'fas fa-times'
									}
								></i>
							</span>
							{props.data.support}
						</li>
						<li
							className={`${props.data.subdomainEnabler ? '' : 'text-muted'} ${
								props.data.subdomainHighlighter ? 'fw-bold' : ''
							}`}
						>
							<span className='fa-li'>
								<i
									className={
										props.data.subdomainEnabler
											? 'fas fa-check'
											: 'fas fa-times'
									}
								></i>
							</span>
							{props.data.subdomain}
						</li>
						<li className={props.data.statusEnabler ? '' : 'text-muted'}>
							<span className='fa-li'>
								<i
									className={
										props.data.statusEnabler ? 'fas fa-check' : 'fas fa-times'
									}
								></i>
							</span>
							{props.data.status}
						</li>
					</ul>
					<div className='d-grid'>
						<a href='#' className='btn btn-primary text-uppercase'>
							Button
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
