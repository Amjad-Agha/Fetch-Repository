// handle html elements
let userName = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-repos .get-button");
let showData = document.querySelector(".show-data");

// focus on input field
userName.focus();
// add click event on get button
getButton.onclick = ()=>{
  // check the username
  if(userName.value == false){
    data.innerHTML = "Please Enter Valid Username";
  } else {
    // get respons from api
    fetch(`https://api.github.com/users/${userName.value}/repos`)
      // 
      .then((result) =>{
        // get data from response
        return result.json();
      })

      .then((repos) =>{
        // reset show data field
        showData.innerHTML = ""
        // loop on repositries
        repos.forEach(repo => {
          // initialize html elements and append repositries in it
          let span = document.createElement("span");
          let div =document.createElement("div");
          let stars = document.createElement("span");
          let visit = document.createElement("a");
          stars.append(repo.stargazers_count + " stars");
          visit.append("Visit");
          visit.setAttribute("href",repo.clone_url);
          div.className = "repo-box";
          div.append(stars);
          div.append(visit);
          span.append(repo.name);
          span.append(div);
          // append final span in show-data field
          showData.append(span);
        });
      })
  }
}
// click get-button when press Enter key
document.addEventListener("keyup",(e)=>{
  if(e.key == "Enter") {
    getButton.click();
  }
})
