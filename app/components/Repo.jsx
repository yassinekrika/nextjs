import React from 'react'
import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'


async function fechRepo(name) {
    const response = await fetch(`https://api.github.com/repos/yassinekrika/${name}`, {
        next: {
            revalidate: 60
        }
    })
    return await response.json()
}

const Repo = async ({ name }) => {
  const repo = await fechRepo(name)

  return (
    <>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <div className="card-stats">
            <div className="card-stat">
                <FaStar />
                <span>{repo.stargazers_count}</span>
            </div>
            <div className="card-start">
                <FaCodeBranch />
                <span>{repo.forks_count}</span>
            </div>
            <div className="card-start">
                <FaEye />
                <span>{repo.wathers_count}</span>
            </div>
        </div>
    </>
  )
}

export default Repo