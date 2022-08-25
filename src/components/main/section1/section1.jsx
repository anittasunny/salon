import './Styles2.css'
import './ResponsiveSection1.css'
import hairImg from '../../../assets/blog2pic.svg'
import makeupImg from '../../../assets/blog3pic.svg'
import spaImg from '../../../assets/blog4pic.svg'

export const Section1 = () => {
    return (
        <section className="service-section">
            
            <div className="service-sectionWrapper">
            <div className='heading'>
                our services
            </div>

                <div className='imageswrap1'>
                    <div className='blog2'>

                        <div className='blog2img'>

                            <img className='' src={hairImg} alt="hair and others" />
                        </div>
                        <div className='blog2img'>

                            <img className='' src={makeupImg} alt="hair and others" />
                        </div>
                        <div className='blog2img'>

                            <img className='' src={spaImg} alt="hair and others" />
                        </div>


                    </div>
                    <div className='bottom-cont'>
                    <div className='bot-cont'>
                        <h3 style={{width:"70%"}}>Lorem Ipsum adalah cont tukang kumpulan teks dan mengacaknya untuk menjadi</h3>
                    </div>
                    <div className='bottom-but'>
                    <button type="button" class="btn btn-primary-sm" style={{ align:"center"}} >View Servuce Menu</button>
                    </div>
                    </div>
                   

                </div>

            </div>
        </section>
    )
}