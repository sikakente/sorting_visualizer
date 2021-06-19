// import styles from "../styles/Home.module.css";
import { useState } from "react";
import BarArea from "../components/BarArea";
import ButtonBar from "../components/ButtonBar";
import { generateRandomBars } from "../utils/generateRandomBars";
import mergeSort from "../sorting_algorithms/merge-sort";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 200;

// This is the main color of the array bars.
const PRIMARY_COLOR = "rgb(106, 90, 205)";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "rgb(238, 130, 238)";

export default function Home() {
  const [bars, setBars] = useState(() => generateRandomBars());

  const handleGenerateBars = () => {
    const newBars = generateRandomBars();
    setBars(newBars);
  };

  const handleMergeSort = () => {
    const { sortedArray: newBars, animations } = mergeSort(bars);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      console.log(arrayBars);
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight * 10}px`;
          arrayBars[barOneIdx].innerHTML = `${newHeight}`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    //setBars(newBars);
  };

  const handleQuickSort = () => {};

  const handleInsertionSort = () => {};

  const handleSelectionSort = () => {};

  const handleStop = () => {
    let id = window.setTimeout(function () {}, 0);

    while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
    }

    handleGenerateBars();
  };

  return (
    <div>
      <ButtonBar
        onGenerateBars={handleGenerateBars}
        onMergeSort={handleMergeSort}
        onQuickSort={handleQuickSort}
        onInsertionSort={handleInsertionSort}
        onSelectionSort={handleSelectionSort}
        onStop={handleStop}
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
