import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';

import { Layout } from 'antd';

import Home from './pages/home/home';

import './index.scss';

const store = configureStore({
	/*initial reducer*/
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
      		<>
				<Layout className="container-layout">
					<Switch>
						<Route path="/" exact render={props => <Home match={props.match} />} />
						<Route render={props => (<div>404</div>)} />
					</Switch>
				</Layout>
      		</>
    	</ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);