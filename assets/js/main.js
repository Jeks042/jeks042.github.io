// Example JavaScript for main.js
document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "Carehome Residents Wellbeing Dashboard",
            description: "This Power BI dashboard tracks residents' key wellbeing metrics, including food and fluid intake, oral care, weight trends, and repositioning targets. It compares actual intake with targets and highlights adherence to care routines, helping caregivers make data-driven adjustments to enhance resident health and wellbeing.",
            image: "images/Residents' Wellbeing.png",
            link: "https://app.powerbi.com/groups/me/reports/80b2aabb-eb55-450a-89ee-608b6d14a400/ReportSection2af2e3af2c5b518cc235?experience=power-bi",
            date: "Power BI Project"
        },
        {
            title: "Tuberculosis Cascade across States",
            description: "This dashboard tracks the TB care cascade across intervention states, displaying key metrics from screening to treatment enrollment. It highlights diagnostic methods used (GeneXpert, AFB, chest X-ray) and shows TB yield rates, evaluation, and enrollment percentages, along with state-wise case distribution. The tool aids in monitoring and optimizing TB control efforts.",
            image: "images/TB Cascade.png",
            link: "https://app.powerbi.com/groups/me/reports/2fbccaf5-134e-4203-b195-372e207089ff/714229c59255e3eea877?experience=power-bi",
            date: "Power BI Project"
        },
        {
            title: "New Tools Functionality Dashboard",
            description: "This dashboard provides a comprehensive analysis of Truenat testing sites' performance across various locations, showing key metrics like machine functionality, utilization rates, testing gaps, and MTB positive cases. It compares expected vs. actual MTB tests conducted, highlights testing success rates, and measures site utilization to ensure efficient resource allocation.",
            image: "images/NewTools.png",
            link: "https://app.powerbi.com/groups/me/reports/9c67e374-c187-47c7-ae53-47b2def17fde/8585685a9ac6a7055e1d?experience=power-bi",
            date: "Power BI Project"
        },
        {
            title: "Data Exploration using SQL",
            description: "A SQL-based project analyzing COVID-19 data to uncover key insights on infection rates, mortality, and vaccination progress. Utilized advanced SQL techniques like joins, CTEs, window functions, and temp tables to explore global and regional trends.",
            image: "images/SQL.jpeg",
            link: "https://github.com/francisokonkwo/covidporoject/blob/main/Covid%20Project.sql",
            date: "SQL Projects"
        },
        {
            title: "Great British Care Award",
            description: "In recognition of my contribution to integrating health and data analytics into social care.",
            image: "images/Great British Care Award 1.jpg",
            link: "https://drive.google.com/drive/folders/1KVsCQVZ6heyiArVHlfbOOvPQEpey_-_P?usp=drive_link",
            date: "Awards and Recognition"
        },
        {
            title: "USAID Service Award",
            description: "In recognition of my contribution to community tuberculosis case finding among private health sector providers in Lagos, Nigeria.",
            image: "images/TB Award.jpg",
            link: "https://drive.google.com/drive/folders/1_48rC60BunZBkNwJWHX0hbiYMNhgE3MF?usp=drive_link",
            date: "Awards and Recognition"
        }
    ];

    const projectsSection = document.getElementById('projects-section');

    projects.forEach(project => {
        const article = document.createElement('article');

        article.innerHTML = `
            <header>
                <span class="date">${project.date}</span>
                <h2><a href="${project.link}" target="_blank">${project.title}</a></h2>
            </header>
            <a href="${project.link}" target="_blank" class="image fit"><img src="${project.image}" alt="${project.title}"></a>
            <p>${project.description}</p>
            <ul class="actions special">
                <li><a href="${project.link}" target="_blank" class="button">VIEW PROJECT</a></li>
            </ul>
        `;

        projectsSection.appendChild(article);
    });
});
