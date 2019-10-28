import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import './header.scss';

const Header = ({ push }) => {
	return (
		<header className="header">
			<span className="title">EAD React</span>
		</header>
	)
}

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(null, mapDispatchToProps)(Header);
