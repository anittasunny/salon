import './Styles.css'
import './ResponsiveService.css'
import genPic from '../../../assets/services.svg'

export const BestServices = () => {
    return (
        <section className="services">
            <div className="servicesWrapper">
                <div className="leftServices">
                    <img src={genPic} alt='txt' />

                </div>

                <div className="rigthServices">
                  
                 <div>

                    <h1>Amazing Styles</h1>
                    <h1>Amazing Stylists</h1>
                 </div>
                 <div className='bottom-cont'>
                    <div>
                        <h3 style={{width:"70%"}}>Lorem Ipsum adalah cont tukang kumpulan teks dan mengacaknya untuk menjadi</h3>
                    </div>
                    <div className='bottom-but'>
                    <button type="button" class="btn btn-primary-sm" style={{ align:"center"}} >Book Now</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}