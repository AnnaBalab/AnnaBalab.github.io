var headerSliderBlock = document.getElementById('headerSliderBlock');
var headerBlock = document.getElementById('headerBlock');
var headerMenuBlock = document.getElementById('header__menuBlock');
var headerAboutProductsContainer = document.getElementById('headerAboutProductsContainer');
var headerBakeryHeading = document.getElementById('headerBakeryHeading');
var headerBakeryPartTitle = document.getElementById('headerBakeryPartTitle');
var headerContent = document.getElementById('headerContent');

var headerOpenMenuBtn = document.querySelector('.header__openMenuBtn');
console.log(headerOpenMenuBtn);
headerOpenMenuBtn.addEventListener('click', function () {
    headerOpenMenuBtn.classList.toggle("active");
    document.querySelector('.header__verticalMenuNavOpen').classList.toggle("active");
});

var headerVerticalMenuDropDownLinkArr = document.getElementsByClassName('header__verticalMenuDropDownLink');
var headerVerticalMenuListItemArr = document.getElementsByClassName('header__verticalMenuListItem');

var parentArr = [];
for (var i = 0; i < headerVerticalMenuDropDownLinkArr.length; i++) {
    headerVerticalMenuDropDownLinkArr[i].addEventListener('click', function () {
        /*for(var j=0; j<headerVerticalMenuDropDownLinkArr.length;j++){
            headerVerticalMenuDropDownLinkArr[j].classList.add("inactive");
            headerVerticalMenuDropDownLinkArr[j].classList.remove('active');
        }*/
        //parentArr.push(this);
        var menuNavArrSiblings = getSiblings(this);
        //todo отрефакторить надо!
        if (!this.classList.contains("active")) {
            for (var c = 0; c < menuNavArrSiblings.length; c++) {
                menuNavArrSiblings[c].style.display='inline-block';
                //console.log(listItemArrSiblings[c].nextSibling);
            }
            var el;
            if(parentArr.length-1 > -1){
                el = parentArr[parentArr.length-1];
            }

            if (el !== null&&el!==undefined) {
                el.style.display='none';
            }

            parentArr.push(this);
        }
        else {
            for (var c = 0; c < menuNavArrSiblings.length; c++) {
                menuNavArrSiblings[c].style.display='none';
                //console.log(listItemArrSiblings[c].nextSibling);
            }
            parentArr.pop();

            var el;
            if(parentArr.length-1 > -1){
                el = parentArr[parentArr.length-1];
            }

            if (el !== null&&el!==undefined) {
                el.style.display='inline-block';
            }

            //li->active->ul = inline blok

            /*if(el===this){
                parentArr.pop().style.background='green';
            }*/
        }

        console.log(parentArr);

        this.classList.toggle("active");
        var listItemArrSiblings = getSiblings(this.parentNode);


        for (var c = 0; c < listItemArrSiblings.length; c++) {
            listItemArrSiblings[c].classList.toggle("inactive");
            //console.log(listItemArrSiblings[c].nextSibling);
        }


        //console.log(listItemArrSiblings[1]);
    });
}
var doc = document.getElementById("fgfgfg");
var notes = null;
for (var i = 0; i < doc.childNodes.length; i++) {
    if (doc.childNodes[i].className == "header__verticalMenuLink") {
        notes = doc.childNodes[i];
        break;
    }
}
console.log(notes);

function getSiblings(elem) {
    var siblings = [];
    var sibling = elem;
    while (sibling.previousSibling) {
        sibling = sibling.previousSibling;
        sibling.nodeType == 1 && siblings.push(sibling);
    }

    sibling = elem;
    while (sibling.nextSibling) {
        sibling = sibling.nextSibling;
        sibling.nodeType == 1 && siblings.push(sibling);
    }

    return siblings;
}

/*var matches = document.querySelectorAll("div.header, div.header__aboutProductsContainer");
console.log(matches[0].className + "+" + matches[1].className);*/

headerBlock.addEventListener("mousemove", changeWidthSlider);


function getMouseCoordinates(e) {
    var mousePosX = 0;
    var mousePosY = 0;
    var elementPosX = 0;
    var elementPosY = 0;

    obj = this;
    //get mouse position on document crossbrowser
    if (!e) {
        e = window.event;
    }
    if (e.pageX || e.pageY) {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }
    else if (e.clientX || e.clientY) {
        mousePosX = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        mousePosY = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    }
    //get parent element position in document
    if (obj.offsetParent) {
        do {
            elementPosX += obj.offsetLeft;
            elementPosY += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }

    var positionX = mousePosX - elementPosX;
    var positionY = mousePosY - elementPosY;
    // mouse position minus elm position is mouseposition relative to element:


    var mouseCoordinates = {};
    mouseCoordinates.X = positionX;
    mouseCoordinates.Y = positionY;

    return mouseCoordinates;
}

//var elem = document.getElementById('headerBlock');
//elem.addEventListener('mousemove', mouseCoordinates, false);


/*var mouseCoordinates = getMouseCoordinates();

    var x = mouseCoordinates.X;
    var y = mouseCoordinates.Y;*/


function changeWidthSlider(e) {
    var mouseCoordinates = getMouseCoordinates();

    var x = mouseCoordinates.X;
    var y = mouseCoordinates.Y;
    //var x = e.offsetX==undefined?e.layerX:e.offsetX;
    //var y = e.offsetY==undefined?e.layerY:e.offsetY;


    /*console.log( ' X Position: ' + x
         + ' Y Position: ' + y);*/
    //console.log(x+'+'+y);
    //console.log("e"+e);
    //console.log("headerBlock"+headerBlock);
    var browserWindowWidth = window.innerWidth / 2;

    var boundRightPart = browserWindowWidth + 100;
    var boundLeftPart = browserWindowWidth - 100;

    var strlog = "" + e.clientWidth + " " + e.clientWidth / 2;
    //console.log(window.getBoundingClientRect());
    //console.log(strlog);

    //alert(browserWindowWidth);
    if (x > boundRightPart && y > 80) {
        headerSliderBlock.classList.add("header_changeSliderWidthLess");
        //headerSliderBlock.style.width("header_changeSliderWidthLess");
        headerSliderBlock.classList.remove("header_changeSliderWidthLarger");
        //headerSliderBlock.classList.add("header_changeSliderWidthLarger");
        //alert( browserWindowWidth + 'l' + choiceLeftPart + 'r' + choiceRightPart);
    }
    else if (x < boundLeftPart && y > 80) {
        headerSliderBlock.classList.add("header_changeSliderWidthLarger");
        headerSliderBlock.classList.remove("header_changeSliderWidthLess");
    }
    else {
        headerSliderBlock.classList.remove("header_changeSliderWidthLess");
        headerSliderBlock.classList.remove("header_changeSliderWidthLarger");

    }
}

window.onscroll = function () {
    var scrolled = window.pageYOffset;
    if (scrolled > 0) {
        headerMenuBlock.classList.add("header_changeBgHeaderMenuBlock");
        //headerMenuBlock.classList.add("header_changeBgHeaderMenuBlock", "header_fixedPosition");
    }
    else {
        headerMenuBlock.classList.remove("header_changeBgHeaderMenuBlock");
        headerMenuBlock.classList.remove("header_changeBgHeaderMenuBlock", "header_fixedPosition");
    }
}


//alert( headerBlock.clientWidth ); // ширина минус прокрутка

//e.offsetY==undefined?e.layerY:e.offsetY;
window.onresize = function (event) {
    initBgPosition();
};
initBgPosition();

function initBgPosition() {
    var heightHeader = headerBlock.offsetHeight;
    //todo 2.11-универсально рассчитывать
    var widthBg = heightHeader * 2.11;
    var bgPositionX = (headerBlock.clientWidth - widthBg) / 2;
    headerSliderBlock.style.backgroundPosition = bgPositionX + "px";
    headerBlock.style.backgroundPosition = bgPositionX + "px";
    //alert(bgPositionX);
}

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}