import projectOne from "../assets/p-2.png";
import projectTwo from "../assets/p-3.png";
import projectThree from "../assets/mba.png";
import projectFour from "../assets/osn.png";

const projects = {
  1: {
    title: "Business Intelligence For Creative Economy Development",
    image: projectOne,
    description: (
      <>
        <p>
        Implemented K-Means clustering for segmentation, SQL Server BI for ETL, Power BI visualization, and achieving high user acceptance rates through strategic decision-making and effective project management methodologies in collaboration with stakeholder.
 
        </p>
      </>
    ),
    github: "https://repository.dinamika.ac.id/id/eprint/7267/",
    demo: "https://www.novypro.com/project/business-intelligence-in-the-strategy-for-developing-the-creative-economic-potential-of-bojonegoro-district",
  },
  2: {
    title: "Business Intelligence For Hospital Management",
    image: projectTwo,
    description: (
      <>
        <p>
          Implemented hospital management BI utilizing SQL Server to construct a snowflake-schema data warehouse, employing SSIS for seamless data integration, implementing KPIs with Balanced Scorecard, and creating a user-friendly interface dashboard using Power BI for dynamic visualization of key performance indicators.
        </p>
      </>
    ),
    github: "https://github.com/hildanutama/",
    demo: "https://www.novypro.com/project/business-management-indicator-for-hospital",
  },
  3: {
    title: "Market Basket Analysis Using Apriori",
    image: projectThree,
    description: (
      <>
        <p>
        Implemented the Apriori algorithm using the MLxtend library to extract association rules based on user-defined thresholds for support, confidence, and lift.
        
        </p>
      </>
    ),
    github: "https://github.com/hildanutama/",
    demo: "https://www.novypro.com/profile_about/hildanutama",
  },
  4: {
    title: "Sentiment Analysis",
    image: projectFour,
    description: (
      <>
        <p>
        Utilizing Python to conducted sentiment analysis on 500 Amazon Fine Food Reviews using multiple approaches, including NLTK's VADER and RoBERTa from the transformers library. 
        </p>
      </>
    ),
    github: "https://github.com/hildanutama/",
    demo: "https://www.novypro.com/profile_about/hildanutama",
  },
};

export default projects;
