import "../styles.css";
import { useEffect, useState } from "react";


export default function ProjectCard() {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
    const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setRepos(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [GITHUB_USERNAME, GITHUB_TOKEN]); // Ajoutez les dépendances ici

    if (loading) return <p>Chargement des projets...</p>;
    if (!repos.length) return <p>Aucun projet trouvé.</p>;

    return (
        <div>
            <h2>Mes projets GitHub publics</h2>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <span> ⭐ {repo.stargazers_count}</span>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
