const http = require('http');
const PORT = 9000;

const server = http.createServer((req, res) => {
    if (req.url === "/json") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write("RESUME")
        res.write(JSON.stringify({}))
        res.end(JSON.stringify({
            "personal_info": {
              "name": "Jeeru Praveen",
              "contact": {
                "phone": "+91 8897985030",
                "email": "praveenjeeru68@gmail.com",
                "github": "https://github.com/jeerupraveen/"
              }
            },
            "career_objective": "Looking for a position as an engineer in a company that enables state-of-the-art software and hardware products and components with an innovative, creative association in a working domain that prompts critical thinking, innovation, and proper career development.",
            "education": [
              {
                "degree": "B.Tech in Artificial Intelligence and Data Science",
                "institution": "Sagi Rama Krishnam Raju Engineering College, Bhimavarm, India",
                "cgpa": "8.13",
                "duration": "2021 -- 2025"
              },
              {
                "degree": "Board of Intermediate Education",
                "institution": "Narayana Junior College, Vishakapatnam, India",
                "percentage": "96.3 %",
                "duration": "2019 -- 2021"
              },
              {
                "degree": "Board of Secondary Education",
                "institution": "R.K School, Srikakulam, India",
                "gpa": "9.8",
                "duration": "2018 -- 2019"
              }
            ],
            "projects": [
              {
                "title": "Student Management Portal",
                "description": "Developed a comprehensive Student Management Portal designed to enhance the administration of student data.",
                "details": [
                  "Implemented a system for tracking and managing student attendance with an Attendance Page.",
                  "Developed a comprehensive Student Detail Page that displays student information class-wise, including student details and contact information.",
                  "Designed an intuitive Registration Page to facilitate the seamless enrollment of new students, ensuring accurate and efficient data entry.",
                  "Built with Node.js, Express.js, and MongoDB for the backend, and HTML, CSS, JavaScript for the frontend."
                ]
              },
              {
                "title": "Web Scraping",
                "description": "Developed a web scraping tool to extract and manage required data from web pages.",
                "details": [
                  "Built with Python using libraries such as Selenium and Pandas.",
                  "Used Selenium to extract CGPA data from websites.",
                  "Used Pandas to store data in CSV files."
                ]
              }
            ],
            "skills": {
              "programming_languages": ["C", "Python", "JavaScript"],
              "frameworks_and_libraries": ["React.js", "Express.js"],
              "databases": ["MongoDB"],
              "tools": ["Git", "GitHub", "VsCode"]
            },
            "cocurricular_activities": [
              "Currently active as a volunteer in the PAIE CELL, organized by the Department of Chemistry."
            ]
          }
          ));
    } else if (req.url === "/html") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <div style="width: 80%; margin: auto; padding: 20px;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h1 style="margin: 0; font-size: 2em;">Jeeru Praveen</h1>
                    <p style="margin: 5px 0;">+91 8897985030 | <a href="mailto:praveenjeeru68@gmail.com" style="color: #333; text-decoration: none;">praveenjeeru68@gmail.com</a> | <a href="https://www.github.com/jeerupraveen/" style="color: #333; text-decoration: none;">github.com/jeerupraveen/</a></p>
                </div>
                <!-- Career Objective -->
                <div style="margin-bottom: 20px;">
                    <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin: 0;">Career Objective</h2>
                    <p style="margin: 0;">Looking for position as an engineer in a company that enables state-of-the-art software and hardware products and components with an innovative, creative association in a working domain that prompts critical thinking, innovation, proper career development.</p>
                </div>
                <!-- Education -->
                <div style="margin-bottom: 20px;">
                    <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin: 0;">Education</h2>
                    <div style="margin-bottom: 10px;">
                        <h3 style="margin: 0;">B.Tech in Artificial Intelligence and Data Science</h3>
                        <p style="margin: 5px 0;">Sagi Rama Krishnam Raju Engineering College, Bhimavarm, India (8.13 CGPA)</p>
                        <p style="margin: 5px 0;">2021 -- 2025</p>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <h3 style="margin: 0;">Board of Intermediate Education</h3>
                        <p style="margin: 5px 0;">Narayana Junior College, Vishakapatnam, India (96.3 %)</p>
                        <p style="margin: 5px 0;">2019 -- 2021</p>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <h3 style="margin: 0;">Board of Secondary Education</h3>
                        <p style="margin: 5px 0;">R.K School, Srikakulam, India (9.8 GPA)</p>
                        <p style="margin: 5px 0;">2018 -- 2019</p>
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin: 0;">Projects</h2>
                    <div style="margin-bottom: 10px;">
                        <h3 style="margin: 0;">Student Management Portal</h3>
                        <p style="margin: 5px 0;">Developed a comprehensive Student Management Portal designed to enhance the administration of student data.</p>
                        <ul style="margin: 0; padding-left: 20px;">
                            <li>Implemented a system for tracking and managing student attendance with an Attendance Page.</li>
                            <li>Developed a comprehensive Student Detail Page that displays student information class-wise, including student details and contact information.</li>
                            <li>Designed an intuitive Registration Page to facilitate the seamless enrollment of new students, ensuring accurate and efficient data entry.</li>
                            <li>Built with Node.js, Express.js, and MongoDB for the backend, and HTML, CSS, JavaScript for the frontend.</li>
                        </ul>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <h3 style="margin: 0;">Web Scraping</h3>
                        <p style="margin: 5px 0;">Developed a web scraping tool to extract and manage required data from web pages.</p>
                        <ul style="margin: 0; padding-left: 20px;">
                            <li>Built with Python using libraries such as Selenium and Pandas.</li>
                            <li>Used Selenium to extract CGPA data from websites.</li>
                            <li>Used Pandas to store data in CSV files.</li>
                        </ul>
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin: 0;">Skills</h2>
                    <ul style="margin: 0; padding-left: 20px;">
                        <li><strong>Programming Languages:</strong> C, Python, JavaScript</li>
                        <li><strong>Frameworks and Libraries:</strong> React.js, Express.js</li>
                        <li><strong>Databases:</strong> MongoDB</li>
                        <li><strong>Tools:</strong> Git, GitHub, VsCode</li>
                    </ul>
                </div>
                <div style="margin-bottom: 20px;">
                    <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px; margin: 0;">Cocurricular Activities</h2>
                    <ul style="margin: 0; padding-left: 20px;">
                        <li>Currently active as a volunteer in the PAIE CELL, organized by the Department of Chemistry</li>
                    </ul>
                </div>
            </div>
        `);
    } else if (req.url === "/text") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write(`Jeeru Praveen
+91 8897985030 | praveenjeeru68@gmail.com | github.com/jeerupraveen/

Career Objective
Looking for position as an engineer in a company that enables state-of-the-art software and hardware products and components with an innovative, creative association in a working domain that prompts critical thinking, innovation, proper career development.

Education
B.Tech in Artificial Intelligence and Data Science
Sagi Rama Krishnam Raju Engineering College, Bhimavarm, India (8.13 CGPA)

2021 -- 2025

Board of Intermediate Education
Narayana Junior College, Vishakapatnam, India (96.3 %)

2019 -- 2021

Board of Secondary Education
R.K School, Srikakulam, India (9.8 GPA)

2018 -- 2019

Projects
Student Management Portal
Developed a comprehensive Student Management Portal designed to enhance the administration of student data.

Implemented a system for tracking and managing student attendance with an Attendance Page.
Developed a comprehensive Student Detail Page that displays student information class-wise, including student details and contact information.
Designed an intuitive Registration Page to facilitate the seamless enrollment of new students, ensuring accurate and efficient data entry.
Built with Node.js, Express.js, and MongoDB for the backend, and HTML, CSS, JavaScript for the frontend.
Web Scraping
Developed a web scraping tool to extract and manage required data from web pages.

Built with Python using libraries such as Selenium and Pandas.
Used Selenium to extract CGPA data from websites.
Used Pandas to store data in CSV files.
Skills
Programming Languages: C, Python, JavaScript
Frameworks and Libraries: React.js, Express.js
Databases: MongoDB
Tools: Git, GitHub, VsCode
Cocurricular Activities
Currently active as a volunteer in the PAIE CELL, organized by the Department of Chemistry`)
        res.end("hello");
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log("Server running successfully on port " + PORT);
});
