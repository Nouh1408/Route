var bookmarkName = document.getElementById("bookmarkname")
var bookmarkURL = document.getElementById("bookmarkurl")
var sitelist = []
function addsite() {
    let book = {
        siteName: bookmarkName.value,
        siteURL: bookmarkURL.value
    }
    sitelist.push(book)
    displaySites()

    bookmarkName.value = ''
    bookmarkURL.value = ''
}
function displaySites() {
    var cartona = ''
    for (var i = 0; i < sitelist.length; i++) {
        cartona += `
    <tr class="mt-3">
        <td>${i + 1}</td>
        <td>${sitelist[i].siteName}</td>
        <td><button class="btn btn-visit" onclick="visit('${sitelist[i].siteURL}')"><i class="fa-solid fa-eye"></i> Visit</button></td>
        <td><button class="btn btn-del" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
</tr>`
    }

    document.getElementById("content").innerHTML=cartona
}
function visit(url){
    if (!/^https?:\/\//i.test(url)) {
        url = 'http://' + url;
    }
    window.open(url,"_blamk")
}
function deleteSite(index){
    sitelist.splice(index,1)
    displaySites()
}