import './App.css';
import avatar from './avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import data from './resumeData.json'

function App() {
  return (
    <div className="resume">
      <div className="left-side">
        {/* Profile Section */}
        <div className="profile">
          <div className="profile-img">
            <img src={avatar} alt="Profile" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact padding-top-bg">
          <h1 className="heading-primary-white" style={{ margin: 0 }}>Contact</h1>
          <div className="contact-box padding-top-sm">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="contact">
              <a href={`tel:${data.profile.phone}`}>{data.profile.phone}</a>
            </div>
          </div>

          <div className="contact-box padding-top-sm">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="contact">
              <a href={`tel:${data.profile.email}`}>{data.profile.email}</a>
            </div>
          </div>

          <div className="contact-box padding-top-sm">
            <div className="contact-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="contact">
              <a href={`tel:${data.profile.address}`}>{data.profile.address}</a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="education padding-top-bg">
          <h1 className="heading-primary-white">Education</h1>
          <div className="info-box padding-top-sm">
            <div className="info-box-line">
              <div className="info">{data.education.year}</div>
              <div className="info-title">{data.education.degree}</div>
            </div>
            <div className="info">{data.education.institution}</div>
          </div>
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
          <div className="lang-box padding-top-sm">
            <p className="lang-title">{data.languages.name}</p>
            <span className="percent">
              <div style={{ width: data.languages.proficiency + '%' }}></div>
            </span>
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
              {exp.description.map((des, index) => (
                <p key={index} className="description">{des}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Project Section */}
        <div className="experience padding-top-bg">
          <h1 className="heading-primary-black">Project</h1>
          {data.projects.map((exp, index) => (
            <div key={index} className="xp-box padding-top-sm">
              <p className="xp-year">{exp.year}</p>
              <p className="xp-company">{exp.school} | {exp.position}</p>
              <p className="xp-position">{exp.name}</p>
              {exp.description.map((des, index) => (
                <p key={index} className="description">{des}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="project padding-top-bg">
          <h1 className="heading-primary-black">Achievement</h1>
          <div className="achievement padding-top-sm">
            {data.achievement.map((ach, index) => (
              <p className="xp-year">{ach}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
