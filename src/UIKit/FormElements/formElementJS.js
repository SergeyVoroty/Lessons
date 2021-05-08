import * as $ from 'jquery'
let isExpanded = false
let expandedFirst = false
if (!$('.expandableCheckboxListContainer').hasClass('clicked')) {
    let checkeble = true
    $('.expandableCheckboxListContainer').on('click', function () {

        if (!$('.expandableCheckboxListItemsContainer').hasClass('expandableCheckboxListItemsContainer_expanded')) {

            $('.expandableCheckboxListItemsContainer').addClass('expandableCheckboxListItemsContainer_expanded')
            $('.expandableCheckboxListContainer_expend_more_icon').addClass('expandableCheckboxListContainer_expend_more_icon_expanded')
            let isChecked = false
            if (!$('.expandableCheckboxListItemsContainer_expanded').hasClass('checkeble')) {
                $('.expandableCheckboxListItemsContainer_expanded').addClass('checkeble')
                var items = $('.expandableCheckboxListItemsContainer_expanded').children()
                console.log('checked', items)
                $.each(items, function (index, element) {
                    // let isChecked = false
                    $(element).on('click', function () {
                        if (!$(element).hasClass('expandableCheckboxList_item_checked')) {
                            $(element).addClass('expandableCheckboxList_item_checked')
                            // isChecked = true
                            // console.log('Checked')
                        } else {
                            $(element).removeClass('expandableCheckboxList_item_checked')
                            // isChecked = false
                            // console.log('Unchecked')
                        }
                    })
                })
            }
            // isExpanded = true
        } else {
            $('.expandableCheckboxListItemsContainer').removeClass('expandableCheckboxListItemsContainer_expanded')
            $('.expandableCheckboxListContainer_expend_more_icon').removeClass('expandableCheckboxListContainer_expend_more_icon_expanded')
            isExpanded = false
        }
        console.log('Expend is clicked')

    })
    $('.expandableCheckboxListContainer').addClass('clicked')
}