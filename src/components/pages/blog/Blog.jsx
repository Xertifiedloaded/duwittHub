import React, { useState, useEffect } from 'react'
import BlogHero from '../../blogPost/bloghero/BlogHero'
import BlogContent from '../../blogPost/blogcontent/BlogContent'
import LatestBlog from '../../blogPost/latestBlog/LatestBlog'
import RecentBlog from '../../blogPost/recentBlog/RecentBlog'
export default function Blog() {

    return (
        <>
            <BlogHero />
            <BlogContent />
            <LatestBlog />
            <RecentBlog />
        </>
    )
}
