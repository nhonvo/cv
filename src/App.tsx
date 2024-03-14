import React from 'react';
import './App.css';
import avatar from './avatar.jpg'

function App() {
  // Define your data object
  const data = {
    profile: {
      name: "Võ Thương Trường Nhơn",
      title: "Software Developer",
      phone: "+84 xxx-xxx-xxx",
      email: "vothuongtruongnhon2002@gmail.com",
      address: "Ho Chi Minh City, Vietnam"
    },
    education: [
      {
        year: "2019",
        degree: "Ho Chi Minh City University of Technology - HUTECH",
        institution: "Collectorate School & College"
      }
    ],
    expertise: [
      "C#, .NET Core",
      "SQL Server, PostgreSQL, MongoDB",
      "ReactJS, JavaScript",
      "Agile/Scrum",
      "AWS"
    ],
    languages: [
      { name: "English", proficiency: 90 },
    ],
    aboutMe: "I love making cool apps for myself and others. I m also a big fan of football, especially Manchester United, and I enjoy watching anime like One Piece. I m a creative person who enjoys both tech and fun hobbies.",
    experiences: [
      {
        year: "August 2023 - Now",
        company: "FPT Software ",
        location: "Ho Chi Minh",
        position: "Software .eveloper",
        description: "- Developed a logistics system featuring a specialized quoting app for a US client. Collaborated with customers and analysts to plan and implement new features6 <br/>- Built a microservices architecture using C#, .NET Core, PostgreSQL, DynamoDB, SNS, SQS, GraphQL, Hangfire, Splunk, and New Relic. Followed Gitflow for code management and hosted the system on AWS. <br/>- Implemented Agile methodology and utilized Rally for effective project management."
      }
    ],
    references: [
      {
        name: "Nobita app - Fast Money Transfer App",
        position: "Back end developer",
        phone: "- Fast money transfer app that integrates online lucky money service and increases security by block chain. The app implement all api provided by HDBank - Nobita use flutter to build app, back-end is .net core and sql server, this project won first prize HDBank hackthon competition",
        email: "n/a"
      }
    ]
  };

  return (
    <div className="resume">
      <div className="left-side">
        {/* Profile Section */}
        <div className="profile">
          <div className="profile-img">
            <img src={avatar} alt="Profile Photo" />
          </div>

        </div>

        {/* Contact Section */}
        <div className="contact padding-top-bg">
          <h1 className="heading-primary-white">Contact</h1>
          <div className="info-box padding-top-sm">
            <div className="info-title">Phone</div>
            <div className="info">
              <a href={`tel:${data.profile.phone}`}>{data.profile.phone}</a>
            </div>
          </div>
          <div className="info-box padding-top-sm">
            <div className="info-title">Email</div>
            <div className="info">
              <a href={`mailto:${data.profile.email}`}>{data.profile.email}</a>
            </div>
          </div>
          <div className="info-box padding-top-sm">
            <div className="info-title">Address</div>
            <div className="info">{data.profile.address}</div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education padding-top-bg">
          <h1 className="heading-primary-white">Education</h1>
          {data.education.map((edu, index) => (
            <div key={index} className="info-box padding-top-sm">
              <div className="info">{edu.year}</div>
              <div className="info-title">{edu.degree}</div>
              <div className="info">{edu.institution}</div>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <div className="expertise padding-top-bg">
          <h1 className="heading-primary-white">Expertise</h1>
          {data.expertise.map((skill, index) => (
            <div key={index} className="skill padding-top-sm">
              <span></span>
              <div className="skill-name">{skill}</div>
            </div>
          ))}
        </div>

        {/* Language Section */}
        <div className="language padding-top-bg">
          <h1 className="heading-primary-white">Language</h1>
          <div className="info-box padding-top-sm">
            {data.languages.map((lang, index) => (
              <div key={index} className="lang-box">
                <p className="info-title">{lang.name}</p>
                <span className="percent">
                  <div style={{ width: lang.proficiency + '%' }}></div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side Section */}
      <div className="right-side">
        <div className="profile">
          <h1 className="name">{data.profile.name}</h1>
          <p className="title">{data.profile.title}</p>
        </div>
        <div className="about-me padding-top-bg">
          {/* About Me Section */}
          <h1 className="heading-primary-black">About Me</h1>
          <p className="discription">{data.aboutMe}</p>
        </div>

        {/* Experience Section */}
        <div className="experience padding-top-bg">
          <h1 className="heading-primary-black">Experience</h1>
          {data.experiences.map((exp, index) => (
            <div key={index} className="xp-box padding-top-sm">
              <p className="xp-year">{exp.year}</p>
              <p className="xp-company">{exp.company} | {exp.location}</p>
              <p className="xp-position">{exp.position}</p>
              <p className="discription">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Reference Section */}
        <div className="reference padding-top-bg">
          <h1 className="heading-primary-black">Project</h1>
          <div className="refer-box padding-top-sm">
            {data.references.map((ref, index) => (
              <div key={index} className="refer">
                <h2 className="refer-name">{ref.name}</h2>
                <p className="job-position">{ref.position}</p>
                <div className="contact">
                  <span>Phone:</span>
                  <p>{ref.phone}</p>
                </div>
                <div className="contact">
                  <span>Email:</span>
                  <p>{ref.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
