$(function(){
    $('.bg-switcher').bgSwitcher({
        images: ['images/hd-top0.jpg', 'images/hd-top1.jpg', 'images/hd-top2.jpg'],
        interval: 5000,
        loop: true,
        shuffle: false,
        effect: "fade",
        duration: 1000,
        easing: "swing",
    })
});
