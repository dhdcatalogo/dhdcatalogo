import { Link } from 'react-router-dom';
import './app.css';

export default function Home() {
    const cn = 'col-12 col-md-6 col-lg-6'
    return (
        <div className="container mt-3 ">
            <div className="row">
                <div className={cn}>
                    <Link className='link-home' to="/ropa">
                        <div className='title'>👚 👕 Ropa 👕 👚</div>
                        <div className='row ms-3 mb-3'>
                            <div className='col-4 title-s'>SHEIN</div>
                            <div className='col-4 title-s'>JUSTICE</div>
                            <div className='col-4 title-s'>ESMARA</div>
                            <div className='col-4 title-s'>...</div>
                        </div>
                    </Link>
                </div>
                <div className={cn}>
                    <Link className='link-home' to="/electronicos">
                        <div className='title'>📱 💻 Electrónicos 💻 📱</div>
                        <div className='row ms-3 mb-3'>
                            <div className='col-4 title-s'>APPLE</div>
                            <div className='col-4 title-s'>LENOVO</div>
                            <div className='col-4 title-s'>ASUS</div>
                            <div className='col-4 title-s'>...</div>
                        </div>
                    </Link>
                </div>
                <div className={cn}>
                    <Link className='link-home' to="/otros">
                        <div className='title'>👟 📦 Otros 📦 👟</div>
                        <div className='row ms-3'>
                            <div className='col-4 title-s'>ALPINE START</div>
                            <div className='col-4 title-s'>ADIDAS</div>
                            <div className='col-4 title-s'>FOX</div>
                            <div className='col-4 title-s'>...</div>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}