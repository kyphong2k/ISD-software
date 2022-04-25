const Blogs = [
    {
        id: 1,
        title: 'Reshaping Logistics Operating Models with Automation',
        date: 'March 30, 2022',
        author: 'Elizaveta Bazilevici, Content Manager',
        img: './assets/blogs/blog-1.jpg',
        desc: 'For the past 2 years, digitization and sustainability have had a tremendous impact on the workflow in the logistics industry. Logistics information systems help companies improve operational efficiency. These systems allow tracking of resources throughout the entire production cycle.',
        link:'#'
    },
    {
        id: 2,
        title: 'Implementation of Asset Tracking Technologies to Simplify and Optimize the Sorting Process',
        date: 'March 25, 2022',
        author: 'Victor Osipov, Team Lead',
        img: './assets/blogs/blog-2.jpg',
        desc: 'In the last decade, distributors in parcel sortation have been facing a variety of challenges associated with the increased volumes, regular occurrences of peak periods, and growing demand for physical labor.',
        link:'#'
    },
    {
        id: 3,
        title: 'Sensors – the way machines perceive the world',
        date: 'February 02, 2022',
        author: 'Ivan Vilcu, PLC Engineer',
        img: './assets/blogs/blog-3.jpg',
        desc: 'Even if you don’t always notice it, sensors are part of our everyday life. It’s them who tell you to make a stop at the filling station, it’s them who open the doors at the grocery stores and take a guess, who warns you when you’re out of coffee beans in the coffee machine?…attaboy, it’s them again. So, in this article, we’ll dive a bit deeper and discuss what a sensor is, what it can do and find out its various industrial applications.',
        link:'#'
    },
    {
        id: 4,
        title: 'CSS: Is It That Scary?',
        date: 'December 01, 2021',
        author: 'Ivan Ceban, Front-End Developer',
        img: './assets/blogs/blog-4.jpg',
        desc: 'When I started learning Web Development I was thinking that it is going to be hard. I wondered how all the UI is done. I was expecting that there exists a special styling programming language, which requires a lot of skills and experience to make things look beautiful.  I started with an important programming language - HTML.',
        link:'#'
    },
    {
        id: 5,
        title: 'PostgreSQL – Explaining the EXPLAIN command part 2',
        date: 'November 03, 2021',
        author: 'Mihail Curchi, Java Developer',
        img: './assets/blogs/blog-5.jpg',
        desc: 'The previous article described the PostgreSQL planner, the EXPLAIN command, and how to read its output. In this article, we will discuss various \“nodes\” that you can stumble upon when working with the EXPLAIN command.',
        link:'#'
    },
    {
        id: 6,
        title: 'HTML: Is It a Big Deal?',
        date: 'October 02, 2021',
        author: 'Ivan Ceban, Front-End Developer',
        img: './assets/blogs/blog-6.jpg',
        desc: 'HTML is the alphabet of web development. How many web developers have HTML skills in their CVs? I’d say 90%. How many of them really know how to use it properly? I’d say 40%. The other 50% just don’t care about it. The most common case that I encounter during the projects I work in - is using any HTML tag, just to make the layout look similar to the design. If something doesn’t function as expected, it is wrapped into divs, tables, spans and so on, until it fits the design.',
        link:'#'
    },
    {
        id: 7,
        title: 'Boost Your Tech Career with Teaching',
        date: 'August 19, 2021',
        author: 'Radu Corlateanu, Director of ISD Moldova',
        img: './assets/blogs/blog-7.jpg',
        desc: 'Considering that many companies have to approach digital transformation as a key element for long-term survival, the fast expansion of the IT industry doesn’t come as a surprise. More and more people shift their careers towards IT, some know right from the start which path to take and go for tech-related university programs, while others leave other industries and opt for non-formal learning to get into the field.',
        link:'#'
    },
    {
        id: 8,
        title: 'Agile in the Real World: Going Above and Beyond the Guide',
        date: 'August 04, 2021',
        author: 'Vitalii Stepovenco, Senior IT Project Manager',
        img: './assets/blogs/blog-8.jpg',
        desc: 'During one of the internal training sessions that I was giving on Scrum - a member from the creative team said that he didn’t care about the values and philosophy: “Just tell me what to do in Jira and how”. That was a huge input for me. For some professionals and clients, Agile remains just a buzzword.',
        link:'#'
    },
    {
        id: 9,
        title: 'An Embedded Systems Approach to the Health Management',
        date: 'July 16, 2021',
        author: 'Victor Osipov & Alexandru Halmagea, ',
        img: './assets/blogs/blog-9.jpg',
        desc: 'The client approached us with the idea to develop special medical equipment and a cloud-based software solution invented to facilitate the monitoring of farm animals.',
        link:'#'
    },
    {
        id: 10,
        title: 'Overcoming Some Pitfalls of the Google Maps API',
        date: 'June 29, 2021',
        author: 'Ion Pascari, Java Developer',
        img: './assets/blogs/blog-10.jpg',
        desc: 'We’re going to discuss the issues that can occur during the integration of a Spring Boot + Thymeleaf web application with the Google Maps API in order to achieve an employee location tracking system.',
        link:'#'
    },

]

const renderBlogs = (function() {
    let htmls = Blogs.map(function(blog) {
        return `
                <li class="blog-list__item">
                    <div class="item-img">
                        <a href="#">
                            <img src="${blog.img}" alt="">
                        </a>
                    </div>
                    <div class="item-content">
                        <div class="item-content__header">
                           <a href="#" class="item-content__header-title">
                                <h2>${blog.title}</h2>
                           </a>
                           <div class="item-content__header-infos">
                                <span class="blog-post-on">Published:${blog.date}</span>
                                <span class="blog-author">${blog.author}</span>
                            </div> 
                        </div>
                        <div class="item-content__desc">
                            ${blog.desc}
                        </div>
                        <a href="${blog.link}" class="item-content__read-more">Read more →</a>
                    </div>
                </li>
            
            `

    })
    let html = htmls.join(' ');
    document.querySelector('.blog-list').innerHTML = html;
})();