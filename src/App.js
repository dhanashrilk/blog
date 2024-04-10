import "./App.css";
import BlogsComponent from "../src/components/blogs.component";

function App() {
  const Banner1 = process.env.PUBLIC_URL + '/img/Image1.png';
  const Banner2 = process.env.PUBLIC_URL + '/img/Image2.png';
  const Banner3 = process.env.PUBLIC_URL + '/img/Image4.png';
  const Banner4 = process.env.PUBLIC_URL + '/img/Image3.png';
  const Banner5 = process.env.PUBLIC_URL + '/img/Image5.png';
  const Banner6 = process.env.PUBLIC_URL + '/img/Image6.png';
  const Banner7 = process.env.PUBLIC_URL + '/img/Image7.png';
  const Banner8 = process.env.PUBLIC_URL + '/img/Image8.png';
  const Banner9 = process.env.PUBLIC_URL + '/img/Image9.png';

  const ProfileImage1 = process.env.PUBLIC_URL + '/img/Avatar.png';
  const ProfileImage2 = process.env.PUBLIC_URL + '/img/Avatar2.png';
  const ProfileImage3 = process.env.PUBLIC_URL + '/img/Avatar3.png';
  const ProfileImage4 = process.env.PUBLIC_URL + '/img/Avatar4.png';
  const ProfileImage5 = process.env.PUBLIC_URL + '/img/Avatar5.png';
  const ProfileImage6 = process.env.PUBLIC_URL + '/img/Avatar6.png';
  const ProfileImage7 = process.env.PUBLIC_URL + '/img/Avatar7.png';
  const ProfileImage8 = process.env.PUBLIC_URL + '/img/Avatar8.png';
  const ProfileImage9 = process.env.PUBLIC_URL + '/img/Avatar9.png';

  const blogs = [
    {
      id: "001",
      banner: Banner1,
      category: "Design",
      postTitle: "UX review presentations",
      postContent:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      profilePic: ProfileImage1,
      userName: "Olivia Rhye",
      date: "20 Jan 2024",
      quotes: `"In the realm of UX design, the ability to create compelling
      presentations is a transformative skill. We've navigated through
      key stages, from setting the stage and crafting a compelling UX
      story to addressing challenges and engaging your audience.."`,
      description:
        "A UX portfolio presentation is about showing your future employer and team that you can articulate your ideas, process, and concepts in a clear and concise style. You will give similar presentations to stakeholders when you get hired, so this is a crucial part of the hiring process.  The thought of presenting in a high-pressure situation could be scary. But remember that you have been preparing for this since you started working on your UX portfolio. With a little practice, you will nail the presentation and land the job!",
    },

    {
      id: "002",
      banner: Banner2,
      category: "Product",
      postTitle: "Migrating to Linear 101",
      postContent:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      profilePic: ProfileImage2,
      userName: "Phoenix Baker",
      date: "19 Mar 2023",
      quotes: `"Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes."`,
      description:
        "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
    },

    {
      id: "003",
      banner: Banner3,
      category: "Management",
      postTitle: "Bill Walsh leadership lessons",
      postContent:
        " Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      profilePic: ProfileImage3,
      userName: "Alec Whitten",
      date: "20 Mar 2024",
      quotes: `“Consequently, the score wasn’t the crushing issue that overrode everything else; the record didn’t mean as much as the season progressed, because we were immersed in building the inventory of skills, both attitudinal and physical, that would lead to improved execution. That was the key.”`,
      description:
        "These lessons, though derived from sports, have application in business as well. In business, you will inevitably face defeats and setbacks. You will be tempted to focus on outcomes, but instead you should focus your team on the improvement of their knowledge and skills. And finally, you should understand the drivers of business performance at a detailed level. These drivers could be writing exceptional code, doing exceptional analysis, or making exceptional sales presentations.",
    },
    {
      id: "004",
      banner: Banner4,
      category: "Software Engineering",
      postTitle: "Building your API Stack",
      postContent:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      profilePic: ProfileImage4,
      userName: "Lana Steiner",
      date: "17 Feb 2024",
      quotes: `“Today, more than 30 million developers use the Postman API Platform. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster. View all posts by The Postman Team.”`,
      description:
        "An API, or an application programming interface, is a set of code-based instructions that enable different software components to communicate and transfer data. APIs have been around for decades, but they now function as the primary building blocks of all modern applications. Whether you’re placing an order through an e-commerce store, requesting a car from a rideshare app, or ordering delivery from your favorite restaurant, you’re using APIs. API development is therefore a crucial skill for anyone who wants to break into the tech industry.",
    },
    {
      id: "005",
      banner: Banner5,
      category: "Product",
      postTitle: "PM mental models",
      postContent:
        "Mental models are simple expressions of complex processes or relationships.",
      profilePic: ProfileImage5,
      userName: "Demi Wilkinson",
      date: "08 Feb 2024",
      quotes: `“The best technique which I have deployed to remove the mental block is to force myself to speak slowly. When that happens, I have more time to think and that in turns trigger the conscious to not jump on the first thought which comes to my mind.”`,
      description:
        "This takes time to bed into the head. Initially it is like learning a new language. As I said before in one of the other question, I learnt to do it by teaching myself to speak slowly, which helps me going through the rolodex of mental models in my mind. As time goes by, it starts coming back to you associatively.",
    },

    {
      id: "006",
      banner: Banner6,
      category: "Design",
      postTitle: "What is Wireframing?",
      postContent:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      profilePic: ProfileImage6,
      userName: "Candice Wu",
      date: "12 Jan 2024",
      quotes: `“A website wireframe is used to map out the main features and navigation of a new website design. It gives an idea of the site's functionality before considering visual design elements, like content and color schemes.”`,
      description:
        "It is quicker and cheaper to review and amend the structure of the key pages in a wireframe format. Iterating the development of the wireframes to a final version will provide the client and the design team confidence that the page is catering to user needs whilst fulfilling the key business and project objectives.",
    },
    {
      id: "007",
      banner: Banner7,
      category: "Design",
      postTitle: "How collaboration makes us better designers?",
      postContent:
        "Collaboration can make our teams stronger, and our individual designs better.",
      profilePic: ProfileImage7,
      userName: "Natali Craig",
      date: "15 Dec 2021",
      quotes: `“Making ideation a part of design collaboration opens your mind to new possibilities. Instead of having a conversation with yourself, you open your mind to ideas from other people. Suddenly, you have more approaches that could lead to a solution. Just as suddenly, your go-to ideas might not seem so great anymore.”`,
      description:
        "You don’t include them in every step of the collaboration, but you can get a lot of insight into your designs by requesting feedback from developers, sales reps, and customer service reps. Cross-team collaboration lets you see your product from multiple perspectives. If you can think about designing projects from a sales perspective, you might discover ways to make products more appealing to consumers. If you can see your design from the perspective of people who work in customer services, you could find that it makes sense for you to include features that answer questions for puzzled users.",
    },
    {
      id: "008",
      banner: Banner8,
      category: "Product",
      postTitle: "Our top 10 Javascript frameworks to use",
      postContent:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      profilePic: ProfileImage8,
      userName: "Drew Cano",
      date: "08 Aug 2022",
      quotes: `“A JavaScript framework is a collection of JavaScript code libraries, using which web developers can save time by utilizing the pre-written codes in their programming. In this blog, we’ll learn about the basics of JavaScript frameworks, and most importantly, we’ll go through some of the best and most popular JavaScript frameworks. Enjoy!”`,
      description:"In Development, you have to interact with JavaScript, and knowing its JavaScript framework makes your work easy and productive as well. Since you already know that JavaScript Frameworks allow you to create web frameworks efficiently, the question arises which JavaScript Framework to learn? So, here is the Top 10 JavaScript frameworks to learn and become an expert Web Developer- Angular, React.js, Veu.js, etc. ",
    },
    {
      id: "009",
      banner: Banner9,
      category: "Customer Success",
      postTitle: "Podcast: Creating a better CX Community",
      postContent:
        "Starting a community doesn’t need to be complicated, but how do you get started?",
      profilePic: ProfileImage9,
      userName: "Orlando Diggs",
      date: "10 April 2023",
      quotes: `“The customer experience (CX) is one of the most important aspects of any business. In order to be successful, a company needs to provide its customers with an excellent experience.”`,
      description:
        "Crack the Customer Code is a podcast produced by Jeannie Walters and Adam Toporek that aims to teach business professionals, small company owners, and customer-facing professionals the ins and outs of generating outstanding customer experiences. This podcast addresses both contemporary and timeless subjects, such as how to enhance customer loyalty via social media and why consumers are more likely to lose control with firms today, with interviews and insights from a diverse spectrum of professionals in the industry. ",
    },
  ];

  return (
    <>
      <div className="App">
      <BlogsComponent blogs={blogs} />
      </div>
    </>
  );
}

export default App;
