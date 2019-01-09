alert(window.innerWidth);
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
window.onresize = function () {
    if (window.innerWidth<992 && window.innerWidth>768) {
        setValueCircleNav();
    }
};
setValueCircleNav();
function setValueCircleNav() {
    var circle = document.getElementById('circle');
    /*document.getElementById('three').addEventListener('click', function () {
        circle.style.transform='rotate(-180deg)';
    });*/

//todo при изменении размера экрана с большого, на размер где работает этот круг, не проставляются вкладки, только при обновлении страницы!
    var advantageItemArr = document.getElementsByClassName('advantagesNavBlock__circleNavItem');

    var jointAngle = 360/advantageItemArr.length;
//var advantageItemInitialPosition=0;
    var betweenValue=0;
    var spinAroundValue=0;

    for (var i=0; i< advantageItemArr.length;i++){
        (function(){

            setTransformValue(advantageItemArr[i], betweenValue, spinAroundValue);

            var betweenValueThisEl=betweenValue;

            var circleTransformValue = 'rotate('+spinAroundValue+'deg)';

            advantageItemArr[i].addEventListener('click', function () {
                setAttributeWithBrowserPrefixes(circle, 'transform', circleTransformValue);
                var betweenValue1=0;
                var spinAroundValue1=0;

                for (var c=0; c< advantageItemArr.length;c++){
                    advantageItemArr[c].style.cssText+=' transition: all 0.5s ease;';
                    console.log(spinAroundValue1+betweenValueThisEl);
                    var secondSpinAroundValue= spinAroundValue1+betweenValueThisEl;
                    setTransformValue(advantageItemArr[c], betweenValue1, secondSpinAroundValue);
                    betweenValue1+=jointAngle;
                    spinAroundValue1=-betweenValue1;
                }
            });


            betweenValue+=jointAngle;
            spinAroundValue=-betweenValue;
        })();
    }
    console.log(circle.clientWidth/2);
    function setTransformValue(element, betweenValue, spinAroundValue) {
        var circleWidth= circle.offsetWidth/2;
        var itemTransformValue = 'rotate('+betweenValue+'deg) '+'translate('+circleWidth+'px) '+ 'rotate('+spinAroundValue+'deg)';
        setAttributeWithBrowserPrefixes(element, 'transform', itemTransformValue);

    }
}



function setAttributeWithBrowserPrefixes(element, attribute, value) {
    var elementStyle= element.style.cssText;
    elementStyle += "-webkit-"+attribute+":"+value+"; "+
        "-moz-"+attribute+":"+value+"; "+
        "-ms-"+attribute+":"+value+"; "+
        "-ms-"+attribute+":"+value+"; "+
        attribute+":"+value+"; "
    ;
    element.style.cssText=elementStyle;
}
$(document).ready(function () {
    $('.advantagesBlockSlider__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.advantagesBlockSlider__tabsList'
    });
    $('.advantagesBlockSlider__tabsList').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: '.advantagesBlockSlider__content',
        arrows: false,
        focusOnSelect: true
    });
});

//todo доработать стрелки, чтобы если нельзя пролистнуть вправо или влево , то это было как то изображено
//todo хрен знает почему не работает перелистывание вперед!
var prev=document.getElementById('advantagesBlockSlider__tabsSwitchPrev');
var next=document.getElementById('advantagesBlockSlider__tabsSwitchNext');
next.addEventListener('click', switchNext);
prev.addEventListener('click', switchPrev);

function switchPrev(){
    var item=document.querySelector('.advantagesBlockSlider__tabItem.slick-current');
    var itemNearestPrevSibling=getPrevSiblings(item)[0];
    if (itemNearestPrevSibling!==undefined){
        eventFire(itemNearestPrevSibling, 'click');
    }
}
function switchNext(){
    var item=document.querySelector('.advantagesBlockSlider__tabItem.slick-current');
    var itemNearestNextSibling=getNextSiblings(item)[0];
    if (itemNearestNextSibling!==undefined){
        eventFire(itemNearestNextSibling, 'click');
    }
}

function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
function getNextSiblings(elem) {
    var siblings = [];
    var sibling = elem;
    while (sibling.nextSibling) {
        sibling = sibling.nextSibling;
        sibling.nodeType == 1 && siblings.push(sibling);
    }

    return siblings;

}
function getPrevSiblings(elem) {
    var siblings = [];
    var sibling = elem;
    while (sibling.previousSibling) {
        sibling = sibling.previousSibling;
        sibling.nodeType == 1 && siblings.push(sibling);
    }
    return siblings;
}
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


var advantages_decorSlider = document.getElementById('advantagesBlockDecorationSlider');
var advantages_slider_slideBlock = document.getElementById('advantagesBlockDecorSliderSlideBlock');
var advantages_sliderResize = document.getElementById('advantages_decorSliderResizePart');
var advantages_advantageDescription = document.getElementsByClassName('advantagesBlock__advantageDescription');

//todo не забудь здесь написать работающий код, который вычисляет макс. высоту описания преимущества
console.log(advantages_advantageDescription[0].clientHeight);
var maxAdvantageDescriptionHeight=0;
for (var i=0; i<advantages_advantageDescription.length;i++){
    var advantageDescriptionHeight=advantages_advantageDescription[i].clientHeight;
    console.log(advantageDescriptionHeight+' advantageDescriptionHeight');

    if(maxAdvantageDescriptionHeight<advantageDescriptionHeight){
        maxAdvantageDescriptionHeight=advantageDescriptionHeight;
    }
}
console.log('maxAdvantageDescriptionHeight: '+maxAdvantageDescriptionHeight);
for (var i=0; i<advantages_advantageDescription.length;i++) {
    //advantages_advantageDescription[i].style.height=maxAdvantageDescriptionHeight+"px";
}
advantages_slider_slideBlock.onmousedown = function (e) {
    var slideBlockCoords = getCoords(advantages_slider_slideBlock);
    var shiftX = e.pageX - slideBlockCoords.left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    var sliderCoords = getCoords(advantages_decorSlider);

    document.onmousemove = function (e) {
        //  вычесть координату родителя, т.к. position: relative
        var newLeft = e.pageX - shiftX - sliderCoords.left;

        // курсор ушёл вне слайдера
        if (newLeft < 0) {
            newLeft = 0;
        }
        var rightEdge = advantages_decorSlider.offsetWidth - advantages_slider_slideBlock.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        advantages_slider_slideBlock.style.left = newLeft + 'px';
        var advantages_sliderResizeWidth = newLeft + advantages_slider_slideBlock.offsetWidth / 2;
        advantages_sliderResize.style.width = advantages_sliderResizeWidth + 'px';

        if (newLeft === 0) {
            //advantages_slider_slideBlock.style.background = 'url(img/icons/advantagesSlideBlockInLeftPart.png) center';

            //advantages_slider_slideBlock.style.backgroundSize = 90 + 'px';
            //advantages_slider_slideBlock.style.backgroundPosition = -45 + 'px';
            //background-position: -45px;
        }
        console.log(newLeft);
    };


    document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
    };

    return false; // disable selection start (cursor change)
};

advantages_slider_slideBlock.ondragstart = function () {
    return false;
};

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();//возвращает координаты элемента, под которыми понимаются размеры прямоугольника, который охватывает весь элемент.
    //console.log('top '+box.top + 'left ' + box.left);
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}


/*var partnerHeadingArr = document.getElementsByClassName('partnershipBlock__partnerHeading');
setPartnerHeadingHeight();

function setPartnerHeadingHeight() {
    var partnerHeadingMaxHeight = 0;
    for (var i = 0; i < partnerHeadingArr.length; i++) {
        var partnerHeadingElHeight = partnerHeadingArr[i].clientHeight;
        if (partnerHeadingElHeight > partnerHeadingMaxHeight) {
            partnerHeadingMaxHeight = partnerHeadingElHeight;
        }
    }
    console.log(partnerHeadingMaxHeight);
    for (var i = 0; i < partnerHeadingArr.length; i++) {
        partnerHeadingArr[i].style.height = partnerHeadingMaxHeight + "px";
    }
}

var partnershipBlockPartnerTextArr = document.getElementsByClassName('partnershipBlock__partnerText');
setPartnerText();

function setPartnerText() {
    for (var i = 0; i < partnershipBlockPartnerTextArr.length; i++) {
        partnershipBlockPartnerTextArr[i].innerHTML = limitQuantityWords(i) + '\&#8230';
    }
}

function limitQuantityWords(i) {
    var maxLengthString = 55;

    var partnerTextValue = partnershipBlockPartnerTextArr[i].innerHTML;

    var partnerTextResult = '';

    if (partnerTextValue.length <= maxLengthString) {
        partnerTextResult = partnerTextValue;
    }
    else {
        var partnerTextElWordArr = partnerTextValue.split(' ');

        var lengthString = 0;

        for (var c = 0; c < partnerTextElWordArr.length; c++) {
            var lengthWord = partnerTextElWordArr[c].length;
            lengthString += lengthWord;

            if (lengthString > maxLengthString) {
                continue;
            }
            partnerTextResult += partnerTextElWordArr[c] + " ";
        }
    }
    return partnerTextResult;
}


var tabDefaultOpen = document.getElementById("recipesBlock__tabDefaultOpen");
document.querySelector(tabDefaultOpen.getAttribute('href')).style.display = "inline-block";
tabDefaultOpen.className += " recipesBlock__tabLinkActive";

var recipesBlockTabLinkArr = document.getElementsByClassName('recipesBlock__tabLink');

for (var i = 0; i < recipesBlockTabLinkArr.length; i++) {
    recipesBlockTabLinkArr[i].addEventListener("click", recipesTabOpen);
}

function recipesTabOpen() {
    var recipesBlockTabContentArr = document.getElementsByClassName("recipesBlock__tabContent");
    for (var i = 0; i < recipesBlockTabContentArr.length; i++) {
        recipesBlockTabContentArr[i].style.display = "none";
    }
    var recipesBlockTabLinkArr = document.getElementsByClassName("recipesBlock__tabLink");
    for (i = 0; i < recipesBlockTabLinkArr.length; i++) {
        recipesBlockTabLinkArr[i].className = recipesBlockTabLinkArr[i].className.replace(" recipesBlock__tabLinkActive", "");
    }
    document.querySelector(this.getAttribute('href')).style.display = "inline-block";
    event.currentTarget.className += " recipesBlock__tabLinkActive";
}


/* конфигурация */


/*var academyBlockCarousel = document.getElementById('academyBlockCarousel');
var academyBlockCarouselList = document.getElementById('academyBlockCarouselList');
var academyBlockCarouselItemArr = document.getElementsByClassName('academyBlock__carouselItem');

var academyBlockCarouselArrowPrev = document.getElementById('academyBlockCarouselArrowPrev');
var academyBlockCarouselArrowNext = document.getElementById('academyBlockCarouselArrowNext');

var carouselWindowWidth = academyBlockCarousel.clientWidth; // ширина изображения
console.log(carouselWindowWidth);
var carouselLeftShift = 0;

academyBlockCarouselArrowPrev.addEventListener('click',showCarouselPrevSlide);
academyBlockCarouselArrowNext.addEventListener('click',showCarouselNextSlide);
function showCarouselPrevSlide(){
    carouselLeftShift = Math.min(carouselLeftShift + carouselWindowWidth, 0);
    academyBlockCarouselList.style.marginLeft = carouselLeftShift + 'px';
}
function showCarouselNextSlide(){
    carouselLeftShift = Math.max(carouselLeftShift - carouselWindowWidth, -carouselWindowWidth * (academyBlockCarouselItemArr.length - 1));
    academyBlockCarouselList.style.marginLeft = carouselLeftShift + 'px';
}
/*carousel.querySelector('.academyBlock__carouselArrowPrev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.academyBlock__carouselArrowNext').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width, -width * (listElems.length - 1));
    list.style.marginLeft = position + 'px';
};*/





