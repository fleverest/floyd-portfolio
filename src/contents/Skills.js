import React, { Component } from 'react'
import SkillCard from '../components/SkillCard.js';

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'programming':['R', 'Python', 'C/C++', 'Java', 'JavaScript', 'PHP'],
            'stats': ['PANDAS', 'SciKit-Learn', 'TensorFlow']
        };
    }

    render() {
        return (
            <div className="condiv skills blur">
            <h1 className="subtopic">My Skills</h1>
            <SkillCard title ='Programming' skills={['R', 'Python', 'C/C++', 'Java', 'JavaScript', 'PHP']} />
            <SkillCard title ='Statistics' skills={['PANDAS', 'SciKit-Learn', 'TensorFlow', 'Feature Selection', 'Dimensionality Reduction']} />
            <SkillCard title ='Web Development' skills={['GraphQL API', 'RESTful API', 'NodeJS', 'React JS', 'Apache2', 'Nginx', 'Ruby on Rails', 'Docker', 'PHP', 'Magento', 'Zammad']} />
            <SkillCard title ='Databases' skills={['SQL', 'noSQL', 'Cypher Query Language', 'PostgreSQL', 'MariaDB', 'Neo4j', 'MongoDB']} />
            </div>
            )
        }
    }
    
    export default Skills
    