import './Styles.css'
import './ResponsivebeautyService.css'
import beau1Pic from '../../../assets/image6.svg'
import beau2Pic from '../../../assets/image7.svg'

export const BeautyServices = () => {
    return (
        <section className="beautyservices">
            <div className="beautyservicesWrapper">
                <div className='beautyhead'>
                    <h1>We offer a wide range of beauty services</h1>
                </div>
                <div className='beautywrapper'>
                    <div className="beautyleftServices">
                        <img src={beau1Pic} alt='txt' />
                        <div className='leftpara1'>
                            <h2>
                                hjkhkj
                            </h2>
                        </div>
                        <div className='leftpara1'>
                            <h2 >
                                hbjjj
                            </h2>
                        </div>
                    </div>

                    <div className="beautyrigthServices">
                        <img src={beau2Pic} alt='txt' />
                        <div className='leftpara1'>
                            <h2>
                                hjkhkj
                            </h2>
                        </div>
                        <div className='leftpara1'>
                            <h2 >
                                hbjjj
                            </h2>
                        </div>
                        <div>
                        </div>



                    </div>
                    {/* <div className='bottom-cont'>
                    <div>
                        <h3 style={{width:"70%"}}>Lorem Ipsum adalah cont tukang kumpulan teks dan mengacaknya untuk menjadi</h3>
                    </div>
                    <div className='bottom-but'>
                    <button type="button" class="btn btn-primary-sm" style={{ align:"center"}} >Book Now</button>
                    </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}