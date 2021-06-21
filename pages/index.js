// import styles from "../styles/Home.module.css";
import { useState } from "react";
import BarArea from "../components/BarArea";
import ButtonBar from "../components/ButtonBar";
import Header from "../components/Header";
import { generateRandomBars } from "../utils/generateRandomBars";
import mergeSort from "../sorting_algorithms/merge-sort";
import quickSort, {
  IS_BACKWARD_COMPARING,
  IS_FORWARD_COMPARING,
  IS_REVERSING,
  IS_SWAPPING,
} from "../sorting_algorithms/quick-sort";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 100;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#003566";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "#f77f00";

const FORWARD_COLOR = "#ff0054";

const BACKWARD_COLOR = "#ff6700";

export default function Home() {
  const [bars, setBars] = useState(() => generateRandomBars());
  const [animationSpeed, setAnimationSpeed] = useState(ANIMATION_SPEED_MS);

  const handleGenerateBars = () => {
    const newBars = generateRandomBars();
    setBars(newBars);
  };

  const handleMergeSort = () => {
    const { animations } = mergeSort(bars);
    // source: https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial/blob/master/src/SortingVisualizer/SortingVisualizer.jsx
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * 5}px`;
          arrayBars[barOneIdx].innerHTML = `${newHeight}`;
        }, i * animationSpeed);
      }
    }
  };

  const handleQuickSort = () => {
    const { animations } = quickSort(bars);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const [barOneIdx, barTwoIdx, operation] = animations[i];

      if (operation === IS_FORWARD_COMPARING) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = FORWARD_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else if (operation === IS_BACKWARD_COMPARING) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = BACKWARD_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else if (operation === IS_REVERSING) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else if (operation === IS_SWAPPING) {
        setTimeout(() => {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const barOneHeight = parseInt(arrayBars[barOneIdx].innerHTML);
          const barTwoHeight = parseInt(arrayBars[barTwoIdx].innerHTML);

          barOneStyle.height = `${barTwoHeight * 5}px`;
          barTwoStyle.height = `${barOneHeight * 5}px`;
          arrayBars[barOneIdx].innerHTML = `${barTwoHeight}`;
          arrayBars[barTwoIdx].innerHTML = `${barOneHeight}`;
        }, i * animationSpeed);
      }
    }
  };

  const handleInsertionSort = () => {};

  const handleSelectionSort = () => {};

  const handleStop = () => {
    let id = window.setTimeout(function () {}, 0);

    while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

    handleGenerateBars();
  };

  const handleSpeedChange = (e) => {
    e.preventDefault();
    setAnimationSpeed(parseInt(e.target.value));
  };

  return (
    <div>
      <Header />
      <ButtonBar
        onGenerateBars={handleGenerateBars}
        onMergeSort={handleMergeSort}
        onQuickSort={handleQuickSort}
        onInsertionSort={handleInsertionSort}
        onSelectionSort={handleSelectionSort}
        onStop={handleStop}
        onSpeedChange={handleSpeedChange}
      />
      <BarArea bars={bars} />
    </div>
  );
}

/**
 * TODO:
 * 1. initialize array
 * 2. Display bars in vertical
 * 3. Create buttons to generate bars or array, buttons for algorithms, buttons to sort
 * 4. Implement sorting algorithms
 * 5. Animate sorting
 *
 */
