function set_theme(){

    if (document.getElementsByClassName("layerContainer-yqaFcK").length == 3) {
        console.log("mutation appended");
        var mutationObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (document.getElementsByClassName("layerContainer-yqaFcK")[1].firstElementChild.getAttribute("class") == "backdrop-1wrmKB withLayer-RoELSG" &&
                document.getElementsByClassName("layerContainer-yqaFcK")[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.firstElementChild.getAttribute("class") == "imageWrapper-2p5ogY image-1tIMwV" &&
                document.getElementsByClassName("layerContainer-yqaFcK")[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerText == "Open original"
                ){
                    let image_element = document.getElementsByClassName("layerContainer-yqaFcK")[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild;
                    let image_name = image_element.lastElementChild.href.split("/").pop();
                    let image_dimentions = [image_element.firstElementChild.style.width.replace("px",""),image_element.firstElementChild.style.height.replace("px","")]
                    
                    document.getElementsByClassName("layerContainer-yqaFcK")[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerText = "Open Original";
                    //document.getElementsByClassName("layerContainer-yqaFcK")[1].lastElementChild.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerText = 

                    let rev_search = document.createElement("a");
                    rev_search.style = "position: absolute; right: 0px;";
                    rev_search.innerText = "Reverse Search";
                    rev_search.rel = "noreferrer noopener"
                    rev_search.target = "_blank"
                    rev_search.tabIndex = "0"
                    rev_search.href = "https://www.bing.com/images/search?view=detailv2&iss=sbi&sbisrc=UrlPaste&q=imgurl:" + 
                        image_element.lastElementChild.href + 
                        "&idpbck=1&selectedindex=0&id=" + 
                        image_element.lastElementChild.href + 
                        "&ccid=%2Fc4dhE1m&mediaurl=" + 
                        image_element.lastElementChild.href + 
                        "&exph=" + 
                        image_dimentions[0] + 
                        "&expw=" + 
                        image_dimentions[1] + 
                        "&vt=2&sim=11";
                    rev_search.className = "downloadLink-1ywL9o";
                    
                    let img_name = document.createElement("h1");
                    img_name.innerText = image_name;
                    img_name.style = "position: absolute; left: 0px; top: -25px; color: rgb(255,255,255); font-size: 20px;";

                    let img_dims = document.createElement("h1");
                    img_dims.innerText = `${image_dimentions[0]} x ${image_dimentions[1]}`;
                    img_dims.style = "position: absolute; right: 0px; top: -25px; color: rgb(255,255,255); font-size: 20px;";

                    console.log(img_dims);
                    console.log(img_name);

                    image_element.appendChild(rev_search);
                    image_element.appendChild(img_name);
                    image_element.appendChild(img_dims);
                }
            });
        });

        mutationObserver.observe(document.getElementsByClassName("layerContainer-yqaFcK")[1], {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
          });
    } else {
        console.log("failed");
        setTimeout(set_theme, 2000);
    }
}

set_theme();