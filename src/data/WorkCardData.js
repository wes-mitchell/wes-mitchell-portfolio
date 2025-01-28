import PortfolioImg from '../assets/portfolio-image.png';
import MillerTimeImg from '../assets/miller-time-preview-image.png';
import DrumDealsImg from '../assets/drum-deals-preview.png';
import WebLinks from 'data/WebLinks';

const ProjectCardData = [
  {
    id: 1,
    title: 'Portfolio',
    details: `This portfolio, which you're currently viewing, was developed using React and JavaScript. 
      It served as an excellent refresher course in React Router, Vanilla CSS, HTML, and responsive design principles. 
      The site is hosted on GitHub, with continuous integration and deployment (CI/CD) set up via GitHub Actions, 
      ensuring that updates are automatically deployed to the live production environment.`,
    imageSource: PortfolioImg,
    viewUrl: WebLinks.deployedPortfolio,
    sourceUrl: WebLinks.portfolioSourceUrl,
  },
  {
    id: 2,
    title: 'Miller Time',
    details: `Miller Time is a fully deployed full-stack web application utilizing React & TypeScript for the front end and .NET 6 for the back end.
      This project served as an exercise in deploying a web API to Azure and successfully integrating it with the front-end application.
      The back end is designed to manage user-submitted videos and facilitate content approval through an admin account,
      with data stored in an Azure-based SQL Server instance.
      For testing purposes, Docker was used to set up an isolated testing environment, which helped streamline the development process.
      Additionally, a seeding process was implemented to populate the database by reading data from a CSV file, ensuring the environment was adequately populated for testing.
      Future updates will focus on enhancing the front-end to support additional API endpoints and further improve functionality.`,
    imageSource: MillerTimeImg,
    viewUrl: WebLinks.deployedMillerTime,
    sourceUrlFE: WebLinks.millerTimeSourceFE,
    sourceUrlBE: WebLinks.millerTimeSourceBE,
  },
  {
    id: 3,
    title: 'Drum Deals',
    details: `Drum Deals is a full-stack web application designed specifically for the drum community, allowing users to buy, sell, trade, and 
      favorite drum-related gear with ease. Built as a capstone project at Nashville Software School, the platform leverages a React frontend and a 
      .NET 5 backend, ensuring a seamless and responsive user experience. By eliminating the need for filtering out non-drum gear—common on general 
      marketplaces like eBay and Reverb—Drum Deals provides a tailored solution for drummers to connect and manage their listings effortlessly. 
      The app follows best practices in software design, employing object-oriented principles and the single responsibility principle for maintainable 
      and scalable code. This project serves as a dedicated marketplace for drum enthusiasts, streamlining their buying and selling process.`,
    imageSource: DrumDealsImg,
    viewUrl: '',
    sourceUrl: 'https://github.com/wes-mitchell/drums-deals',
  },
];

export default ProjectCardData;
