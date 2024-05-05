import Footer from '../../components/Footer';
import HeaderStudent from '../../components/HeaderStudent';


export default function DefaultLayoutStudent({ slot }) {

    return (
        <>
            <HeaderStudent />
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