import "../styles.css";
import { useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaCode } from "react-icons/fa";

export default function ProjectCard() {
    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
    const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
            headers: {
                Authorization: GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : undefined,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Erreur HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const filteredRepos = data
                    .filter(repo => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);
                setRepos(filteredRepos);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [GITHUB_USERNAME, GITHUB_TOKEN]);

    if (loading) return <div className="loading-message">Chargement des projets...</div>;
    if (error) return <div className="error-message">Erreur: {error}</div>;
    if (!repos.length) return <div className="no-projects">Aucun projet trouvé.</div>;

    return (
        <div className="projects-container">
            <h2 className="projects-title">Mes projets GitHub</h2>
            <div className="projects-grid">
                {repos.map((repo) => (
                    <div className="project-card" key={repo.id}>
                        <div className="project-header">
                            <h3 className="project-name">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </h3>
                            {repo.language && (
                                <span className="project-lang">{repo.language}</span>
                            )}
                        </div>
                        <p className="project-description">
                            {repo.description || "Aucune description disponible"}
                        </p>
                        <div className="project-stats">
                            <div className="stat-item">
                                <FaStar className="stat-icon" />
                                <span>{repo.stargazers_count}</span>
                            </div>
                            <div className="stat-item">
                                <FaCodeBranch className="stat-icon" />
                                <span>{repo.forks_count}</span>
                            </div>
                            <div className="stat-item">
                                <FaCode className="stat-icon" />
                                <span>{repo.size} KB</span>
                            </div>
                        </div>
                        <div className="project-updated">
                            Mis à jour le: {new Date(repo.updated_at).toLocaleDateString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
