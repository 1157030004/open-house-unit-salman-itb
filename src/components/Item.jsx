import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const Item = (props) => {
    const {data} = props
    const location = useLocation();
    const slugParam = location.pathname.substr(6);
    const slug = data.map(s => s.slug)

    const handler = () =>{
        for(let i = 0; i<slug.length; i++){
            if(slugParam === slug[i]){
                console.log(slug[i])
            }
        }
    }   
    handler();
    
    return (
        <>
            {data.map(u =>
                u.slug == slugParam ? 
                <section className="container mx-auto px-5">
                    <div className="flex flex-col items-center py-8">
                        <div className="flex flex-col w-full mb-12 text-left">
                            <div className="w-full mx-auto lg:w-1/2">
                                <h1 className="mx-auto  text-2xl font-semibold  lg:text-3xl">{u.title}</h1>
                                <img className="rounded-md" src="https://picsum.photos/id/500/800/400" />
                                
                                {/* <div className="w-full carousel">
                                    <div id="item1" className="w-full pt-20 carousel-item">
                                        <img src="https://picsum.photos/id/500/800/400" className="w-full"/>
                                    </div> 
                                    <div id="item2" className="w-full pt-20 carousel-item">
                                        <img src="https://picsum.photos/id/501/800/400" className="w-full"/>
                                    </div> 
                                    <div id="item3" className="w-full pt-20 carousel-item">
                                        <img src="https://picsum.photos/id/502/800/400" className="w-full"/>
                                    </div> 
                                    <div id="item4" className="w-full pt-20 carousel-item">
                                        <img src="https://picsum.photos/id/503/800/400" className="w-full"/>
                                    </div>
                                    </div> 
                                    <div className="flex justify-center w-full py-4 space-x-2">
                                        <Link to={`/unit/${u.slug}/carousel#item1`} className="btn btn-xs btn-circle">1</Link> 
                                        <Link to={`/unit/${u.slug}/carousel#item2`} className="btn btn-xs btn-circle">2</Link> 
                                        <Link to={`/unit/${u.slug}/carousel#item3`} className="btn btn-xs btn-circle">3</Link> 
                                        <Link to={`/unit/${u.slug}/carousel#item4`} className="btn btn-xs btn-circle">4</Link>
                                </div> */}
                                
                                <h2 className="mx-auto mt-4 mb-4 text-xl font-semibold ">Are you ready for a new experience and challenge ?</h2>
                                <p className="mx-auto text-base font-medium leading-relaxed ">{u.desc}</p>
                                <div className="aspect-w-7 aspect-h-4 mt-5">
                                    <iframe src="https://www.youtube.com/embed/r9jwGansp1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold ">Make challenges</h3>
                                <p className="mx-auto text-base font-medium leading-relaxed ">{u.desc2}</p>
                                <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold ">Make challenges</h3>
                                <p className="mx-auto text-base font-medium leading-relaxed ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                    </div>
                </section>
                : null
                )}
        </>

    
    )
}

export default Item


