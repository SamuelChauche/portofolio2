import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import '../styles.css';

const skillsData = [
    {
        category: 'Langages',
        skills: [
            { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
            { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
            { name: 'JavaScript', icon: <FaJs />, level: 90 },
            { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
        ]
    },
    {
        category: 'Frameworks & Bibliothèques',
        skills: [
            { name: 'React', icon: <FaReact />, level: 90 },
            { name: 'Next.js', icon: <SiNextdotjs />, level: 80 },
        ]
    },
    {
        category: 'Backend & Bases de données',
        skills: [
            { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
            { name: 'SQL', icon: <FaDatabase />, level: 65 },
        ]
    },
    {
        category: 'Outils',
        skills: [
            { name: 'Git', icon: <FaGitAlt />, level: 85 },
            { name: 'GitHub', icon: <FaGitAlt />, level: 90 },
        ]
    }
];

const Skills = () => {
    return (
        <div className="skills-page">
            <div className="skills-header">
                <h1>Mes Compétences</h1>
                <p>Voici les technologies avec lesquelles je travaille régulièrement</p>
            </div>

            <div className="skills-content">
                {skillsData.map((category, index) => (
                    <div key={index} className="skills-category">
                        <h2>{category.category}</h2>
                        <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-card">
                                    <div className="skill-icon">{skill.icon}</div>
                                    <h3>{skill.name}</h3>
                                    <div className="skill-level">
                                        <div
                                            className="skill-progress"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;