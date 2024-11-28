var bookmarkName = document.getElementById("bookmarkname")
var bookmarkURL = document.getElementById("bookmarkurl")
var sitelist=[]
function addsite(){
    book={
        siteName:bookmarkName.value,
        siteURL:bookmarkURL.value
    }
    sitelist.push(book)
    
}
function displaySites(){
var cartona=''
for(var i=0;i<sitelist.length;i++){
    cartona +=`
    
    `
}

    document.getElementById("demo")
}