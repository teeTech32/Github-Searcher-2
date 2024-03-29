class UI{
  constructor(){
    this.profile = document.querySelector('#profile');
  }

  showProfile(user){
    this.profile.innerHTML = `
    <div class="card card-body">
      <div class="row">
        <div class="col-md-3 mb-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-block btn-primary mb-2">Veiw Profile</a>
          <div class="btn btn-block btn-warning" mb-2 >User's Name: ${user.name}</div>
        </div>
        <div class="col-md-9">
          <span class = "badge badge-primary">Public Repos:${user.public_repos}</span>
          <span class = "badge badge-secondary">Public Gists:${user.public_gists}</span>
          <span class = "badge badge-primary">Followers:${user.followers}</span>
          <span class = "badge badge-primary">Following:${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
            <li class="list-group-item">Email: ${user.email}</li>
          </ul>
        </div>
      <div>
    </div>
    <h3 class="page-heading mt-3 mb-3">Latest Repos</h3>
    <div id="repos"></div>`
  }

  showRepos(repos){
    let output = ''
    repos.forEach((repo)=>{
      output +=`
      <div class="card card-body">
        <div class="row">
          <div class="col-md-4">
            <a href="${repo.html_url}">${repo.name}</a>
          </div>
          <div class="col-md-8">
            <span class="badge badge-primary">Stars:${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers:${repo.watchers_count}</span>
            <span class="badge badge-success">Forks:${repo.forms_count}</span>
          </div>
        </div>
      </div>
      `
    })
    document.querySelector('#repos').innerHTML= output;
  }

  showAlert(message, className){
    this.clearAler()
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    container.insertBefore(div, search)

    setTimeout(()=>{
      this.clearAler()
    },3000)

  }

  clearAler(){
    const currentAlert = document.querySelector('.alert')
    if(currentAlert){
      currentAlert.remove()
    }
  }
}