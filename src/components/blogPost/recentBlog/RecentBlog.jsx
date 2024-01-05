import React, { useContext, useState, useEffect } from 'react'
import classes from './recentblog.module.css'
import { BlogPageData } from '../../constants/BlogPost'
import { UserContentApi } from '../../contextApi/ContextApi'
import Pagination from '../../pagination/Pagination'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function RecentBlog() {

    const [currentPage, setCurrentPage] = useState(1)
    const [activePage, setActivePage] = useState(1)
    const [count] = useState(6)
    const last = currentPage * count
    const first = last - count
    const buttonNumber = []
    const values = BlogPageData.slice(first, last)
    for (let i = 1; i <= Math.ceil(BlogPageData.length / count); i++) {
        buttonNumber.push(i)
    }
    const handleClick = (i) => {
        setCurrentPage(i)
        setActivePage(i)
    }


    return (
        <>
            <div className={classes.main}>
                <h1>Recent Blog</h1>
                <div className={classes.recentCard}>
                    {
                        values.map((items, idx) => {
                            return (
                                <div className={classes.recent}>
                                    <div className={classes.recentImg}>
                                        <img src={items.blogIcon} alt="" />
                                    </div>
                                    <div className={classes.content}>
                                        <p>{items.publishedDate}</p>
                                        <p>{items.blogTitle}</p>
                                        <p>{items.headline}</p>
                                        <Link to={`/latest/${items.id}`}  >
                                            {items.readMore}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    };
                </div>
                <div className={classes.pagination}>
                    <Pagination activePage={activePage} buttonNumber={buttonNumber} handleClick={handleClick} />
                </div>
            </div>
        </>
    )
}
