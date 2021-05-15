import * as $ from 'jquery'
let isExpanded = false
let expandedFirst = false
if (!$('.expandableCheckboxList').hasClass('clicked')) {
    let checkeble = true
    $('.expandableCheckboxList').on('click', function () {

        if (!$('.expandableCheckboxList').hasClass('expandableCheckboxList_expanded')) {

            $('.expandableCheckboxList').addClass('expandableCheckboxList_expanded')
            $('.expandableCheckboxListItemsContainer').addClass('expandableCheckboxListItemsContainer_extended')
            let isChecked = false
            if (!$('.expandableCheckboxList').hasClass('checkeble')) {
                $('.expandableCheckboxList').addClass('checkeble')
                var items = $('.expandableCheckboxListItemContainer').children()
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
            // $('.expandableCheckboxList').removeClass('expandableCheckboxListItemsContainer_expanded')
            $('.expandableCheckboxList_expanded').removeClass('expandableCheckboxList_expanded')
            $('.expandableCheckboxListItemsContainer').removeClass('expandableCheckboxListItemsContainer_extended')
            isExpanded = false
        }
        console.log('Expend is clicked')

    })
    $('.expandableCheckboxList').addClass('clicked')
}