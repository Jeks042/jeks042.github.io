document.addEventListener('DOMContentLoaded', () => {
    const username = 'Jeks042'; // Replaced with my GitHub username
    const repoList = document.getElementById('repo-list');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoItem = document.createElement('div');
                repoItem.classList.add('repo-item');
                repoItem.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description || 'No description provided'}</p>
                `;
                repoList.appendChild(repoItem);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});
