document.addEventListener('DOMContentLoaded', () => {
    const username = 'Jeks042'; // Replace with your GitHub username
    const repoList = document.getElementById('repo-list');

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                const repoItem = document.createElement('div');
                repoItem.classList.add('repo-item');

                // Replace the placeholder with your project image URLs if available
                const imageURL = `https://raw.githubusercontent.com/${username}/${repo.name}/main/snapshot.png`;

                repoItem.innerHTML = `
                    <img src="${imageURL}" alt="${repo.name}" class="repo-image" onerror="this.onerror=null;this.src='https://via.placeholder.com/300';">
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description || 'No description provided'}</p>
                `;
                repoList.appendChild(repoItem);
            });
        })
        .catch(error => console.error('Error fetching repositories:', error));
});
