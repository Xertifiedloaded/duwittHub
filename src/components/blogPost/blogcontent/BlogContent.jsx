import React, { useEffect, useState } from 'react'
import classes from './blogContent.module.css'
import { BlogPageData } from '../../constants/BlogPost'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function BlogContent() {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    useEffect(() => {
        let blog = BlogPageData.find(blog => blog.id === parseInt(id))
        console.log(blog)
        if(blog){
            setBlog(blog)
        }
        console.log(blog)
    })
    return (
        <>
            <div className={classes.blog}>
                <div className={classes.main}>
                    {

                        BlogPageData.slice(1, 3).map((items, idx) => {
                            return (
                                <BlogCard   {...items} key={idx} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export const BlogCard = ({ blogTitle, headline, id, readMore, blogIcon, publishedDate, key }) => {
    return (
        <>
            <div className={classes.mainCard}>
                <div className={classes.blogCardContainer}>
                    <img src={blogIcon} alt="" />
                </div>
                <div className={classes.CardContent}>
                    <p>{publishedDate}</p>
                    <h1>{blogTitle}</h1>
                    <p>{headline}</p>
                    <Link to={`/single`}>
                        {readMore}
                    </Link>
                </div>
            </div>
        </>
    )
}