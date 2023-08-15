# Sliding Window

- A sliding window is a common technique used to solve a wide range of problems that involve arrays, strings, or other data structures. It is typically used to solve problems that require finding a subarray or substring of a certain length that satisfies a certain condition.

- The basic idea of a sliding window algorithm is to maintain a "window" of fixed size that slides over the input data structure. At each step, the algorithm updates the window by removing one or more elements from the left side and adding one or more elements from the right side.

## Analyzing Algorithm/Problem for Improvement
    - Check if the problem has repitive work.
    * The problem will be of array or string mostly.
    * The question will ask something about subarray or substring because as sliding window is always continuous.
    * The will ask about either largest, minimum, maximum etc.
    * And we will be given a k(window size).
    + Sometimes window size will not be given which we will have to find out.
    + Sometimes we are asked to find the largest or smallest window size subjected to a condition i.e, 
        find the largest window size whose sum is 5

## Types of Sliding Window
    
    * Fixed Size sliding window
    * Dynamic/Variable size sliding window (Map || List could be used for these question)