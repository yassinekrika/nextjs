import Link from 'next/link'
import React from 'react'
import { FaStar, FaCodeBranch, FaEye, FaCode } from 'react-icons/fa'

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/yassinekrika/repos', {
        next: {
            revalidate: 60
        }
    })
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    })

    return await response.json()
}


const ReposPage = async () => {
    const repos = await fetchRepos()

    return (
        <div className='repos-container'>
            {/* { repos[0].name } */}
            <h2>Repositories</h2>
            <ul className="repo-list">
                {
                    repos.map((repo) => (
                        <li key={repo.id}>
                            <Link href={`/code/repos/${repo.name}`}>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <div className="repo-details">
                                    <span>
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                    <span>
                                        <FaCodeBranch /> {repos.forks_count}
                                    </span>
                                    <span>
                                        <FaEye /> {repo.watchers_count}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ReposPage