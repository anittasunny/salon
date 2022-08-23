import './Styles.css'
import './Responsivereadmore.css'
import genPic from '../../../assets/image8.svg'

export const ReadMore = () => {
    return (
        <section className="Readmore">
            <div className="moreWrapper">
                <div className="leftmore">
                    <img src={genPic} alt='txt' />

                </div>

                <div className="rightmore">
                  
                 <div>
                  
                    <h5>hair style</h5>
                    </div>
                    <div className='para1'>
                    <h1 style={{width:"81%" , }}>Everthing is possible with our salon!</h1>
                 </div>
                 <div className='bottom-cont'>
                    <div className='para2'>
                        <h3 style={{width:"80%"}}>We make the best hairdressing in 515 West Ave Norwalk</h3>
                    </div>
                    <div className='bottom-but1'>
                    <button type="button" class="btn btn-outline-primary" style={{ align:"center"}} >Read more</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}