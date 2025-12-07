import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import useApps from '../../Hook/CustomHook';
import Loader from '../../components/Loader/Loader';

const LandingPage = () => {
    const { loading } = useApps();

    if (loading) {
        return (
            <Loader></Loader>
        )
    }

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LandingPage;