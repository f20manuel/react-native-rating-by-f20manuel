# React Native Rating by f20manuel

## Installation

Install the package using yarn or npm:

```bash
yarn add f20manuel-react-native-ratings

// OR

npm install --save f20manuel-react-native-ratings
```

## Usage

```jsx
import Rating from 'f20manuel-react-native-ratings';

export default function App() {
  const [rating, setRating] = useState(0);

  return (
    <Rating
      rating={rating}
      onFinishRating={setRating}
    />
  );
}
```

## API

|prop|default|type|description|
|--|:--:|--|--|
|rating|0|number|Total number of ratings to display|
|ratingCount|5|number|Total amount of icons to display|
|onFinishRating|none|function(value: number)|Callback method when the user finishes| rating. Gives you the final rating value as a whole number|
|icon|star|string|icon displayed when selected (icon name in fontawesome)|
|emptyIcon|star-o|string|icon displayed when not selected (icon name in fontawesome)|
|color|#F9BB01|CSS Color|Hexadecimal code of the selected icon|
|emptyColor|#F9BB01|CSS Color|Hexadecimal code of the not selected icon|
|size|32|number|Icon size in pixels|