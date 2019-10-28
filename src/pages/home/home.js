import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';

import Header from '../../components/header/header';

import './home.scss';

const Home = ({ replace }) => {
	return (
		<div className="home">
			<Header />
			<div className="content-page">
				<div className="content-box">Content</div>
			</div>
		</div>
	);
}

const mapDispatchToProps = dispatch => bindActionCreators({ replace }, dispatch);

export default connect(null, mapDispatchToProps)(Home);