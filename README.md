# react-jsbox-tab

Tab component of react-jsbox, layout inspired by Ryan's Mtime Movie

## Install

```bash
npm i react-jsbox-tab -S
```

## Example

### Basic

```jsx
import { Tab } from 'react-jsbox-tab'

const TAB_HEIGHT = 50

function App({ width, height }) {
    const tabFrame = $rect(0, height - TAB_HEIGHT, width, TAB_HEIGHT)
    const contentFrame = $rect(0, 0, width, height - TAB_HEIGHT)
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <>
            // Place the screen component to be displayed and set its hidden property according to the selectedIndex.
            <Home frame={contentFrame} hidden={selectedIndex !== 0} />
            <Recent frame={contentFrame} hidden={selectedIndex !== 1} />
            <Settings frame={contentFrame} hidden={selectedIndex !== 2} />
            <Tab
                frame={tabFrame}
                tabItems={tabItems}
                selectedIndex={selectedIndex}
                onSelectedIndexChange={idx => setSelectedIndex(() => idx)}
            />
        </>
    )
}

const tabItems = [
    { name: 'Home', icon: '102' },
    { name: 'Recent', icon: '099' },
    { name: 'Settings', icon: '002' }
]
```
