import React from 'react';
import classes from './latestblog.module.css';
import { BlogPageData } from '../../constants/BlogPost';
import { Link } from 'react-router-dom';

export default function LatestBlog() {
    return (
        <>
           <div className={classes.main}>
           <h1>Latest Blog</h1>
            {BlogPageData.slice(2, 4).map((item, idx) => {
                return (
                    <div className={classes.card}>
                        <div className={classes.blogImg}>
                            <img src={item.blogIcon} alt="" />
                        </div>
                        <div className={classes.content}>
                            <p>{item.publishedDate}</p>
                            <h1>
                                Go from a blank mind to brilliant ideas
                            </h1>
                            <p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own from scratch, with an immersive library at your disposal.</p>

                            <Link key={item.id.toString()} to={`/latest/${item.id}`}  >
                                <button>
                                    Read more
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            })}
           </div>

        </>
    )
}