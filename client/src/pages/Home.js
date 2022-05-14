import React from 'react'
import NewCourses from '../components/NewCourses';
import post from '../require'
const Home = () => {
    
    return (
        <>
            <div>
                <img src='https://www.saylaniwelfare.com/uploads/2019-26-021551177590.jpeg' className='headerImg' />
            </div>
            <div className='container my-5 '>
                {/* <post /> */}
                <iframe title='m' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4687916564643652&show_text=true&width=500"  className='iframe' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe title='m' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4687916564643652&show_text=true&width=500"  className='iframe' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe title='m' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4687916564643652&show_text=true&width=500"  className='iframe' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                
                <iframe title='m' src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSaylaniMassTraining%2Fposts%2F4687916564643652&show_text=true&width=500"  className='iframe' scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            <div className='container mt-5 text-center'>
                <NewCourses />
            </div>
        </>
    )
}

export default Home;