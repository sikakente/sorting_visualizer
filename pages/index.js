// import styles from "../styles/Home.module.css";
import { useState } from "react";
import BarArea from "../components/BarArea";
import ButtonBar from "../components/ButtonBar";
import { generateRandomBars } from "../utils/generateRandomBars";
import mergeSort from "../sorting_algorithms/merge-sort";

const DEFAULT_BARS = [5, 6, 9, 2, 10, 11, 9, 4, 5, 11, 45, 2];

export default function Home() {
  const [bars, setBars] = useState(DEFAULT_BARS);

  const handleGenerateBars = () => {
    const newBars = generateRandomBars();
    setBars(newBars);
  };

  const handleMergeSort = () => {
    const newBars = mergeSort(bars);
    setBars(newBars);
  };
  
  return (
    <div>
      <ButtonBar
        onGenerateBars={handleGenerateBars}
        onMergeSort={handleMergeSort}
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
