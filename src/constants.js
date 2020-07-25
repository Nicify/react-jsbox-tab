export const defaultTabTemplate = {
    views: [
        {
            type: 'image',
            props: {
                id: 'item_icon',
                bgcolor: $color('clear')
            },
            layout(make, view) {
                make.centerX.equalTo(view.super)
                make.width.height.equalTo(25)
                make.top.inset(5)
            }
        },
        {
            type: 'label',
            props: {
                id: 'item_name',
                font: $font(10),
                textColor: $color('lightGray')
            },
            layout(make, view) {
                const preView = view.prev
                make.centerX.equalTo(preView)
                make.top.equalTo(preView.bottom).offset(3)
            }
        }
    ]
}
