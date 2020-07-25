import React from 'react'
import { defaultTabTemplate } from '../constants'

export default function Tab({
    tabItems,
    tabTemplate = defaultTabTemplate,
    selectedIndex,
    onSelectedIndexChange = () => {},
    ...rest
}) {
    const tabData = tabItems.map(({ name, icon }, index) => {
        const tintColor = $color(selectedIndex === index ? 'tint' : 'lightGray')
        return {
            item_icon: {
                icon: $icon(icon, $color('clear'), $size(72, 72)),
                tintColor
            },
            item_name: {
                text: name,
                textColor: tintColor
            }
        }
    })

    return (
        <matrix
            id="tab"
            itemHeight={40}
            columns={tabItems.length}
            spacing={0}
            scrollEnabled={false}
            selectable={true}
            template={tabTemplate}
            data={tabData}
            events={{
                didSelect(_, { row }) {
                    onSelectedIndexChange(row)
                }
            }}
            {...rest}
        />
    )
}
