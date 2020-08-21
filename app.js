$(function(){
    $('.bg-switcher').bgSwitcher({
        images: ['hd-top0.jpg', 'hd-top1.jpg', 'hd-top2.jpg'],
        interval: 5000,
        loop: true,
        shuffle: false,
        effect: "fade",
        duration: 1000,
        easing: "swing",
    })
});
