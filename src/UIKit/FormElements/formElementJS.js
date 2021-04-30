import * as $ from 'jquery'
let isExpanded = false
let expandedFirst = false
if (!expandedFirst) {
    $('.expandableCheckboxListContainer').on('click', function () {
        if (!isExpanded) {
            $('.expandableCheckboxListItemsContainer').addClass('expandableCheckboxListItemsContainer_expanded')
            $('.expandableCheckboxListContainer_expend_more_icon').addClass('expandableCheckboxListContainer_expend_more_icon_expanded')
            let isChecked = false
            var items = $('.expandableCheckboxListItemsContainer_expanded').children()
            console.log('checked', items)
            $.each(items, function (index, element) {
                let isChecked = false
                $(element).on('click', function () {
                    if (!isChecked) {
                        $(element).addClass('expandableCheckboxList_item_checked')
                        isChecked = true
                    } else {
                        $(element).removeClass('expandableCheckboxList_item_checked')
                        isChecked = false
                    }
                })
            })
            isExpanded = true
        } else {
            $('.expandableCheckboxListItemsContainer').removeClass('expandableCheckboxListItemsContainer_expanded')
            $('.expandableCheckboxListContainer_expend_more_icon').removeClass('expandableCheckboxListContainer_expend_more_icon_expanded')
            isExpanded = false
        }
        console.log('Expend is clicked')

    })

}