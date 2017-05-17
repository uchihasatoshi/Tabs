/*tabs 组件封装*/

window.tabs = function (element) {

    var $tabs = $(element);

    let selector = 'ol[data-role="nav"]>li';

    $tabs.on('click', selector, e => {
        let $li = $(e.currentTarget);
        let index = $li.index();
        $li.addClass('active').siblings().removeClass('active');

        $li.closest('ol[data-role="nav"]')
            .siblings('ol[data-role="panes"]')
            .find('li').eq(index)
            .addClass('active')
            .siblings().removeClass('active');
    })

}

/*别人的代码使用*/

tabs($('.tabs')[0]);