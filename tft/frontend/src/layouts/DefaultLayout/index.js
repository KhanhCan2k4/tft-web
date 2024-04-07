import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NavSide from '../../components/NavSide';


export default function DefaultLayout({ slot }) {

    return (
        <>
            <Header />
            <div className='content row'>
                <div className='main-content'>
                    <div className="container">
                        {slot}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}