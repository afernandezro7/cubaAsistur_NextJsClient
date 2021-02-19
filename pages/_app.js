import {Provider} from 'react-redux';
import store from '../redux/store/store';
import { createWrapper } from 'next-redux-wrapper';

import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import '../styles/now-ui-kit.css';
import 'antd/dist/antd.css';
import '../styles/main.css';


function MyApp({Component, pageProps}) {
    return (
        <Provider store={ store }>
            <Component {...pageProps}/>
        </Provider>
    )
};

const makeStore = ()=> store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);

