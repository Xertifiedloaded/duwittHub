import React, { useEffect, useState } from 'react'
import classes from './singleblog.module.css'
import BackArrow from '../../assets/images/backarrow.svg'
import { Link, useParams } from 'react-router-dom'
import clock from '../../assets/images/clock.svg'
import Histogram from '../../assets/images/histograph.svg'
import BlogImg from '../../assets/images/singleblog.svg'
import { SocialIcon } from '../../constants/SocialIcon'
import RecentBlog from '../recentBlog/RecentBlog'
import { BlogPageData } from '../../constants/BlogPost'
export default function SingleBlog() {
  const [blog, setBlog] = useState(null)
  let { id } = useParams()
  useEffect(() => {
    let blog = BlogPageData.find((blog) => blog.id === parseInt(id))
    if (blog) {
      setBlog(blog)
    }
  })
  console.log(blog)
  return (
    <>
      <div className={classes.main}>
        <Link to={'/blog'} className={classes.navigateBack}>
          <img src={BackArrow} alt="" />
          <p>Go Back</p>
        </Link>

        <div className={classes.headline}>
          <h1>How to get Started in Trading  cryptocurrency</h1>
          <div className={classes.authorDetails}>
            <p>by Joanna Wellick</p>
            -
            <div className={classes.timeOfRead}>
              <img src={clock} alt="" />
              <span>2 minute read</span>

            </div>
            -
            <div className={classes.chart}>
              <img src={Histogram} alt="" />
              <span>
                1.6K views
              </span>
            </div>
          </div>

        </div>
        <div className={classes.blogImage}>
        </div>
        <div className={classes.tags}>
          <span>Tags:</span>
          <div className={classes.tagBtn}>
            <button>Crypto</button>
            <button>Blockchain</button>
            <button>Digital Currency</button>
          </div>
        </div>

        <article className={classes.blogArticle}>

          <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.
          </p>
          <p>
            Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.
          </p>
          <p>
            Ut eu sem aenean imperdiet. Hendrerit penatibus sem adipiscing aliquet consequat nec orci nascetur.
            Etiam massa quam dolor aenean maecenas sociis tellus consectetuer. In sit donec massa integer nisi mus viverra odio ultricies ridiculus. Sapien sem lorem. Aenean sem venenatis arcu tellus fringilla vulputate quis vici nullam nec. Cum quam veni lorem elit aliquet pede in enim. Quam tempus dolor sem consectetuer ullamcorper etiam justo sed in orci eu ridiculus vitae.

            Mollis lorem vitae varius.
            Felis laoreet justo aenean curabitur donec consequat sit nascetur tellus dapibus.
            Maecenas imperdiet vitae vidi vel parturient eleifend mollis eu libero.
            Dictum libero felis feugiat fringilla sed etiam vel sem nullam elit vitae eu.
            Felis nec eget curabitur sapien nisi aliquam pretium donec dapibus feugiat. Faucibus enim venenatis mus semper.

            Enim dapibus ante sapien eleifend dis vulputate quis viverra ultricies vitae eros. Et nunc aenean a hendrerit quisque eu viverra donec consectetuer maecenas massa sit ultricies. Tellus ante quis vici elementum etiam.

          </p>
          <p>Faucibus nullam luctus felis pretium donec</p>

          <p>Amet tempus viverra ut libero nascetur id veni ridiculus rhoncus. Dis donec cras ultricies. Eros vivamus enim nec nulla semper imperdiet aenean montes dictum porttitor metus.</p>

          <p>Amet tempus viverra ut libero nascetur id veni ridiculus rhoncus. Dis donec cras ultricies. Eros vivamus enim nec nulla semper imperdiet aenean montes dictum porttitor metus.</p>
          <p>Amet tempus viverra ut libero nascetur id veni ridiculus rhoncus. Dis donec cras ultricies. Eros vivamus enim nec nulla semper imperdiet aenean montes dictum porttitor metus.</p>
        </article>
        <div className={classes.socialhandle}>
          <p>Share this with your friends</p>
          <div className={classes.sociallogo}>
            {
              SocialIcon.map((icon) => {
                return (
                  <img src={icon.socialIcon} alt="" />

                )
              })
            }
          </div>
        </div>
        <div className={classes.mainRecent}>
          <h1>Recent Blogs</h1>
          <div className={classes.recentCard}>

            {
              BlogPageData.slice(1, 4).map((recent, idx) => {
                return (
                  <div className={classes.recent}>
                    <div className={classes.recentImg}>
                      <img src={recent.blogIcon} alt="" />
                    </div>
                    <div className={classes.content}>
                      <p>{recent.publishedDate}</p>
                      <p>{recent.blogTitle}</p>
                      <p>{recent.headline}</p>
                      <Link to={`/single`}  >
                        {recent.readMore}
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </>
  )
}
