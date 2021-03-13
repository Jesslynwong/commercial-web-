window.addEventListener('load',function(){
    // 获取元素
    var bannerLeftArrow = document.querySelector('.bannerLeftArrow');
    var bannerRightArrow = document.querySelector('.bannerRightArrow');
    var navPic = document.querySelector('.navPic');
    var navPic = document.querySelector('.navPic');
    var ul = navPic.querySelector('ul');
    var slideList = document.querySelector('.slideList')
    var ol = slideList.querySelector('ol')
    
    // 鼠标经过出来
    navPic.addEventListener('mouseenter',function(){
        bannerLeftArrow.style.display = 'block';
        bannerRightArrow.style.display = 'block';
    })
    // 鼠标经过隐藏
    navPic.addEventListener('mouseleave',function(){
        bannerLeftArrow.style.display = 'none';
        bannerRightArrow.style.display = 'none';
    })
    
    // 自动生成li
    // console.log(ul.children.length)check
    for(var i = 0; i < ul.children.length; i++){
        // 创建li
        var li = document.createElement('li');
        li.setAttribute('index',i);
        // li加入ol里
        ol.appendChild(li);
        ol.children[0].className = 'current';
        // 点击右，往右走
        var navPicWidth = navPic.offsetWidth;
        var index = li.getAttribute('index');
        // console.log(index)
        
    
        // 小圆圈排他思想
        li.addEventListener('click',function(){
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = '';  
            }
              // 留下我自己
            this.className = 'current';

         })
         
    }
    // 点击右箭头播放下一张图
    var num = 0;
    bannerRightArrow.addEventListener('click',function(){
        // if (num == ul.children.length - 1){
        //      ul.style.left = 0;
        //      num = 0
        //  }
        num++;
        // 执行动画函数，ul往右移一张图片的宽度
        animate(ul,-num * 1227) 
        })
    
})
