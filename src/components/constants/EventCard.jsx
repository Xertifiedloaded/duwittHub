import EventCard from '../assets/images/eventcard.svg'
import coin from '../assets/images/coin.svg'
import EventPost from '../eventPost/EventPost'
import eventone from  '../assets/images/eventone.svg'
import eventtwo from  '../assets/images/event2.svg'
import eventthreee from  '../assets/images/event3.svg'
//event slider
export const CardEvent = [
    {
        card: EventCard
    },
    {
        card: coin
    },
    {
        card: EventCard
    },
]
// card
export const EventBtn = [
  
    {
        id: 1,
        content:<EventPost/>,
        button: 'All Events'
    },
    {
        id: 2,
        button: 'Physical Events',
        content:<EventPost/>,
    },
    {
        id: 3,
        content:<EventPost/>,
        button: 'Virtual Events'
    },
    {
        id: 4,
        content:<EventPost/>,
        button: 'Past Events',
        // content: 'hello'
    }
]

export const Event = [
    {
        id:1,
        eventTitle: 'Workshop on Client Satisfaction & Time Management',
        eventImg: eventone,
        mode: 'Virtual',
        title: '',
        date: 'October 16, 2022',
        timestamp: '22:30',
        content:`
        Introducing our inaugural Frontlines virtual event! Join us as we launch exciting new features, unveil our product roadmap, and answer some big questions about what's next in customer operations.
Agenda
Keynote 9:30am - 10:00am PT
A new age of customer operations
When creating exceptional customer experiences, communication is just the start. Join us for new feature launches and a product roadmap reveal that brings teams, systems, and AI together — driving efficiency for your business and delight for your customers.
Live customer breakout sessions 10:00am - 10:45am PT
How do I build a support team that consistently delivers over 95% CSAT?
How do you get customers to give rave reviews — completely unsolicited? What's behind a stellar CSAT score? Hear from two support leaders on how they've made customer service their primary differentiator, showing how delightful customer exchanges drive growth for their business.
How to scale a delightful customer experience despite high-volume inquiries
How support leaders should be planning for AI
Where are support teams investing next and how they’re measuring success
How do I build smarter automation without a single line of code?
Workflows run smoothest when the data they need aren't siloed in their respective systems. Join us to learn how we're making it
easier than ever to connect and automate third party systems into Front workflows — no coding required.
How Context Links work and how will they transform your business
What types of rules and end-to-end workflows provide the most value
Where AI can play a role in automated workflows
How do I get started with AI in customer communication?
Advancements in AI will be uprooting the way we work as we know it. From reducing manual work to reallocating time spent on mundane tasks to more complex ones, we'll take a closer look into potential use cases of AI in Front and the revolutionary impact it can have on your customer operations.
What types of communication and activity can AI help me with today
How will AI actually save me time
What is coming next with AI and how can I best plan for it
        `

    },
    {
        id:2,
        eventTitle: 'Workshop on Client Satisfaction & Time Management',
        eventImg: eventtwo,
        mode: 'virtual',
        title: '',
        date: 'October 16, 2022',
        timestamp: '22:30'
    },
    {
        id:3,
        eventTitle: 'Workshop on Client Satisfaction & Time Management',
        eventImg: eventthreee,
        mode: 'virtual',
        title: '',
        timestamp: '22:30',
        date:'October 16, 2022'
    },
    {
        id:4,
        eventTitle: 'Workshop on Client Satisfaction & Time Management',
        eventImg: eventtwo,
        mode: 'virtual',
        title: '',
        timestamp: '22:30',
        date:'October 16, 2022'
    },
    {
        id:5,
        eventTitle: 'Workshop on Client Satisfaction & Time Management',
        eventImg: eventone,
        mode: 'Virtual',
        title: '',
        timestamp: '22:30',
        date:'October 16, 2022'

    },
    {
        id:5,
        eventTitle: 'Workshop on Client Satisfaction & Time Management',
        eventImg: eventtwo,
        mode: 'virtual',
        title: '',
        timestamp: '22:30',
        date:'October 16, 2022'
    },
    {
        id:6,
        eventTitle: 'Workshop on Client Satisfaction & Time Management',
        eventImg: eventthreee,
        mode: 'virtual',
        title: '',
        date:'October 16, 2022',
        timestamp: '22:30'
    },
    {
        id:7,
        eventTitle: 'Workshop on Client Satisfaction & Time Management',
        eventImg: eventtwo,
        mode: 'virtual',
        title: '',
        date:'October 16, 2022',
        timestamp: '00:00'
    },
]