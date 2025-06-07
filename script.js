async function getProfile() {
  const username = document.getElementById("usernameInput").value.trim();
  const profileDiv = document.getElementById("profile");

  if (!username) {
    profileDiv.innerHTML = "<p>Please Enter a Github Username</p>";
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();
    console.log(data);

    profileDiv.innerHTML = `
      <div class="profile-card">
      <img src="${data.avatar_url}" alt="${data.name}'s avatar">
        <h2>${data.name || "Name Not available"}</h2>
        <p>${data.bio || "No bio provided"}</p>
        <p>${data.location || "No location provided"}</p>
        <p>${data.followers || "No active followers"}</p>
        <p>${data.following || "No active following"}</p>
        <p>${data.public_repos} Public Repositories</p>
        <p>${data.company || "No Company Provided"}</p>
      </div>
    `;
  } catch (err) {
    console.log("error happened", err);
  }
}