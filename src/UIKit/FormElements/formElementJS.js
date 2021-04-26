import * as $ from 'jquery'
let isExpanded = false
$('.expandableCheckboxListContainer_expend_more_icon').on('click', function (){
    if (!isExpanded) {
        $('.expandableCheckboxListItemsContainer').addClass('expandableCheckboxListItemsContainer_expanded')
        $('.expandableCheckboxListContainer_expend_more_icon').addClass('expandableCheckboxListContainer_expend_more_icon_expanded')
        isExpanded = true
    } else {
        $('.expandableCheckboxListItemsContainer').removeClass('expandableCheckboxListItemsContainer_expanded')
        $('.expandableCheckboxListContainer_expend_more_icon').removeClass('expandableCheckboxListContainer_expend_more_icon_expanded')
        isExpanded = false
    }
    console.log('Expend is clicked')

})