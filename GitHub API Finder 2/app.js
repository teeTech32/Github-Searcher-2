const github = new Github;

const ui = new UI;

const search = document.querySelector('#searchUsers');
search.addEventListener('keyup', (e)=>{
  const userText = e.target.value;
  if(userText!==''){
    github.getUser(userText)
       .then(data => {
        if(data.profile.message==='Not Found'){
          //showAlert 
          ui.showAlert('User Not Found !', 'alert alert-danger')

        }else{
          //showProfile
          ui.showProfile(data.profile)
          ui.showRepos(data.repos)
        }
       })

  }else{
    //ui.clearProfile()
  }
})