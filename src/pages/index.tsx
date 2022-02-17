import useTranslation from 'next-translate/useTranslation';
import MainLayout from '@components/MainLayout';

const Home = () => {
    const { t } = useTranslation();
    return <MainLayout> {t('titleH1')} 
        <div>sfsdg</div>
    </MainLayout>;
};

export default Home;
