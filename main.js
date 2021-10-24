const LinksSocialMedia = {
  github: 'JClaudzur',
  youtube: '--',
  facebook: ' -- ',
  instagram: 'KaysenBee',
  twitter: 'BeeKaysen'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    //Template String
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  //Template String
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  //Promise / ArrowFunction => função contraida / response.json - porque ele não sabe que é um json

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userBio.textContent = data.bio
      userPropic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
