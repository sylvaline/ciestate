import React, {useEffect, useState} from 'react'
import Layout from './Layout'
import Property from './Property'
import Search from './Search'
import {useSelector} from 'react-redux'
import {filterForSearch} from '../helper/constants'


function Properties() {
    let {projects, searchedValue} = useSelector((state)=>state.project)
    const[visible, setVisible] = useState(6)

    console.log(searchedValue)

    const loadProject = ()=>{
        setVisible(visible + 5)
    }

    useEffect(()=>{
        window.scrollTo({top:0, behavior:"smooth"})
      }, [])

      projects = searchedValue ? filterForSearch(searchedValue, projects) : projects

    return (
        <>
        <Layout>
        <div className="service">
        <div className="page_search">
            <Search />
            <div className="service_location ">
             
            </div>
            </div>
            
            <div className="service_content">
            <div className="service_filter">
                <ul>
                    
                </ul>
                <div className="sort_type">
                    <p>Sort by <span>Recent Service <i className="fas fa-chevron-down"></i></span></p>
                </div>
                </div>
                <div className="service_item">
                    <div className="service_item_inner">
                  
                    
                   {
                       projects.slice(0, visible).map(project=><Property key={project._id} project={project}/>)
                   }

                    </div>
                    <div className="load_more">
                <div className="load_more_inner">
                   {
                       projects.length > visible ?  <button onClick={()=>loadProject()}>Load More <span><i className="fas fa-long-arrow-alt-right"></i></span></button> : ""
                   }
                </div>
            </div>
                </div>

            <div className="faq">
                <h1>CIP Services FAQS</h1>
                <div className="faq_inner">
                <div className="faq_left">
                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>

                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>

                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>

                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>

                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>
                </div>
                <div className="faq_right">
                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>

                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>

                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>

                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>

                    <div className="faq_question">
                        <h5>What if the services i want is more expensive than what the servicer priced?</h5>
                        <p>Simply stated, a good edit will take your ordinary video and make it extraordinary! Editing can either make or break a video, and good editing should control the video's structure, pace, and tone. The images and audio should be improved, and it should match what the client envisions - and then some</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Layout>
        </>
    )
}

export default Properties
