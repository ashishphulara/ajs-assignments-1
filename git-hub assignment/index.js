const issueList = document.getElementById("issueList");
const pageNo = document.getElementById("pageNo");

let currPage = 1

async function getValue(page){
    const res = await fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
    const data = await res.json();
    console.log(data);
    return data
}


async function loadPage(page){
    const issues = await getValue(page);
    display(issues);
    pageNo.innerHTML = `pageNo : ${page}`
    currPage = page;
}

loadPage(1);


function display(issues){
    issueList.innerHTML = "";
    for (let i of issues) {
        const items = document.createElement("li");
        items.textContent = i.title
        issueList.appendChild(items);
    }
} 

 async function next(){
    if(currPage>=1 ){
        await loadPage(currPage+1)
    }
}

 async function previous(){
    if(currPage>=1 ){
        await loadPage(currPage-1)
    }
}




