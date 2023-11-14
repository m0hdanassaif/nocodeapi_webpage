import React from 'react'
import ThumbnailVideo from '../asset/video_thumbnail.png'
import CompanyTrust from '../asset/companytrust.png'

const SectionOne = () => {
    return (
        <div className='section_one'>

            <div className='nocodeapi-detail'>

                <div className='about_nocodeapi'>

                    <h2>The easiest way <br />to connect with APIs</h2>
                    <h4>Save time & money to set up your Google Sheet, Airtable, Google Analytics, Twitter, Telegram, Open Graph API, MailChimp, 50 + apps without any backend.
                    </h4>

                    <button>Connect apis without code — It's free</button>
                </div>

                <div className='video-one-section'>
                    <img src={ThumbnailVideo} alt='thumbnail-of-Nocodeapi-video' />
                </div>

            </div>

            <div className='trust-with-us'>

                <h5>— Trusted by over 10,000 developers all over the world</h5>
                <img src={CompanyTrust} alt='trust with us ' />
            </div>

        </div>
    )
}

export default SectionOne
