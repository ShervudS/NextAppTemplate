import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
            </Head>

            <Component {...pageProps} />
        </Provider>
    );
}
